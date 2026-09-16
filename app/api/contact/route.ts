import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { services, siteConfig } from "@/lib/site-config";

// Simple in-memory rate limiter. Resets on server restart and is per-instance
// only (not shared across serverless invocations) — good enough to blunt
// casual abuse, not a substitute for an edge/WAF rate limit in production.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  // Honeypot field — a filled-in value means this was submitted by a bot.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, service, message } = parsed.data;
  const serviceTitle = services.find((s) => s.slug === service)?.title ?? service;

  const apiKey = process.env.RESEND_API_KEY;
  const inboxEmail = process.env.CONTACT_INBOX_EMAIL;

  if (!apiKey || !inboxEmail) {
    console.error(
      "Contact form submission received but RESEND_API_KEY or CONTACT_INBOX_EMAIL is not set:",
      { name, email, phone, service: serviceTitle, message }
    );
    return NextResponse.json(
      { error: "Email is not configured" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `${siteConfig.name} website <onboarding@resend.dev>`,
      to: inboxEmail,
      replyTo: email,
      subject: `New enquiry: ${serviceTitle} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${serviceTitle}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }
}
