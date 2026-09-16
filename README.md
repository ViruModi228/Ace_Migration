# ACE Migration website

A one-page marketing site for ACE Migration (Melbourne migration & visa
consultancy), built with Next.js App Router, TypeScript, Tailwind CSS,
shadcn/ui and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build + type check
npm run lint     # ESLint
```

## What's real vs. placeholder

Everything **renders and functions** (forms validate and submit, the
Instagram section calls a real API route with a working fallback, animations
and the carousel all work), but the following content is placeholder and
must be replaced before launch:

- **Logo** — no logo file was available while building this site. A plain
  text "ACE." wordmark stands in at [components/logo.tsx](components/logo.tsx).
  Once you have the real logo file, drop it in `public/` (e.g. `logo.svg`)
  and swap the markup in that one file for an `<Image>` tag.
- **Business details, stats, booking URL** — phone, email, address, hours,
  Instagram handle, MARA number, and the "Book an appointment" link all live
  in [lib/site-config.ts](lib/site-config.ts) as a single `siteConfig` object.
  The trust-strip numbers (500+ visas, 10+ years, etc.) are placeholders too.
- **Team, services copy, testimonials** — also in
  [lib/site-config.ts](lib/site-config.ts), as the `team`, `services`, and
  `testimonials` arrays. Team photos are Unsplash stock portraits.
- **Privacy Policy / Terms** — generic starting drafts at
  [app/privacy/page.tsx](app/privacy/page.tsx) and
  [app/terms/page.tsx](app/terms/page.tsx). Have these reviewed by ACE
  Migration and a qualified advisor before publishing — they are not legal
  advice.
- **Map embed** — `siteConfig.mapEmbedUrl` uses a query-based Google Maps
  embed (no API key needed) centered on the placeholder address. Update the
  address and it updates automatically, or swap in a Maps Embed API URL.

## Updating content

Non-developers can update almost all site text without touching component
code — everything lives in **[lib/site-config.ts](lib/site-config.ts)**:
business details, nav links, stats, services, the "how it works" steps,
team members, and testimonials are all plain arrays/objects there.

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you have. Both
integrations below degrade gracefully if their variables are missing.

```bash
cp .env.example .env.local
```

| Variable | Used for |
|---|---|
| `INSTAGRAM_ACCESS_TOKEN` | Live Instagram feed (falls back to placeholder posts if unset) |
| `RESEND_API_KEY` | Sending contact form emails |
| `CONTACT_INBOX_EMAIL` | The inbox that receives contact form submissions |

### Instagram feed setup

The feed at `#instagram` calls `getInstagramFeed()` ([lib/instagram.ts](lib/instagram.ts)),
also exposed as a JSON API at `/api/instagram`, cached for 1 hour. Without a
token it serves 6 placeholder posts so the section still looks right in dev
and on first deploy.

To go live:

1. Create a Meta app at [developers.facebook.com](https://developers.facebook.com/apps)
   and add the **Instagram Graph API** product.
2. Connect it to an Instagram **Business or Creator** account (personal
   accounts aren't supported by the Graph API).
3. Generate a short-lived user access token via the Graph API Explorer with
   the `instagram_basic` permission, then exchange it for a **long-lived
   token** (valid ~60 days):

   ```bash
   curl -i -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=<APP_SECRET>&access_token=<SHORT_LIVED_TOKEN>"
   ```

4. Put the resulting token in `INSTAGRAM_ACCESS_TOKEN`. Long-lived tokens
   expire after ~60 days and should be refreshed periodically (Meta provides
   a refresh endpoint — see their docs) via a scheduled job; this project
   does not automate that refresh.

### Contact form email (Resend)

The form at `#contact` posts to `app/api/contact/route.ts`, which sends via
[Resend](https://resend.com):

1. Create a Resend account and API key.
2. Verify a sending domain (or use their `onboarding@resend.dev` sender for
   testing only — replace the `from` address in
   [app/api/contact/route.ts](app/api/contact/route.ts) once you have a
   verified domain).
3. Set `RESEND_API_KEY` and `CONTACT_INBOX_EMAIL`.

Without those two variables set, submissions are logged server-side and the
API returns an error to the client rather than silently failing.

The form also has a honeypot field and a simple in-memory per-IP rate limit
(5 submissions / 10 minutes). The rate limit is per server instance and
resets on redeploy — fine as a basic deterrent, not a substitute for a
proper edge/WAF rate limit if abuse becomes a real problem.

## Deployment

Deploys to Vercel with no extra configuration — set the environment
variables above in the Vercel project settings and deploy.

## Project structure

```
app/                 routes: home page, /privacy, /terms, api/instagram, api/contact
components/sections/ one component per homepage section
components/ui/       shadcn/ui components + the two custom animated components
lib/site-config.ts   all editable site content
lib/instagram.ts      Instagram Graph API fetch + cache + fallback
hooks/                scroll-spy and count-up hooks
```
