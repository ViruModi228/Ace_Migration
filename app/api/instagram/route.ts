import { NextResponse } from "next/server";
import { getInstagramFeed } from "@/lib/instagram";

export const revalidate = 3600;

export async function GET() {
  const feed = await getInstagramFeed();
  return NextResponse.json(feed);
}
