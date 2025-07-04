import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  try {
    const pageViews = await redis.get("page_views");

    return NextResponse.json({
      pageViews: pageViews || 0,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { type, sessionId } = await request.json();

    if (type === "page_view") {
      // Check if this session has already been counted
      const sessionKey = `session_${sessionId}`;
      const hasBeenCounted = await redis.get(sessionKey);

      if (!hasBeenCounted) {
        // Mark this session as counted
        await redis.setex(sessionKey, 3600, "true"); // Expires in 1 hour

        // Increment page views
        const currentViews = ((await redis.get("page_views")) as number) || 0;
        await redis.set("page_views", currentViews + 1);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating stats:", error);
    return NextResponse.json(
      { error: "Failed to update stats" },
      { status: 500 }
    );
  }
}
