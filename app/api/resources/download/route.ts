import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { email, name, resourceSlug, source } = await req.json();

    if (!email || !resourceSlug) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const resource = await prisma.resource.findUnique({
      where: { slug: resourceSlug },
    });

    if (!resource || !resource.published) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }

    await prisma.download.create({
      data: {
        email,
        name: name || null,
        resourceId: resource.id,
        source: source || "direct",
      },
    });

    // Also subscribe to newsletter
    await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: {},
      create: {
        email,
        name: name || null,
        source: `resource:${resourceSlug}`,
      },
    });

    return NextResponse.json({
      success: true,
      fileUrl: resource.fileUrl,
      thankYouUrl: `/thank-you/${resourceSlug}`,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
