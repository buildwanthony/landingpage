import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, name, source } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 200 }
      );
    }

    await prisma.newsletterSubscriber.create({
      data: {
        email,
        name: name || null,
        source: source || "website",
      },
    });

    // Send welcome email via Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Anthony <buildwanthony@gmail.com>",
        to: email,
        subject: "Welcome to Build With Anthony 👋",
        html: `
          <p>Hey${name ? ` ${name}` : ""},</p>
          <p>Thanks for joining. I'm Anthony — 18-year-old founder from Bandung building the trust layer for AI.</p>
          <p>Every week I share what I'm learning: product decisions, cold email lessons, AI regulation breakdowns, and honest updates from building AIDAL.</p>
          <p>No fluff. Just the real stuff.</p>
          <p>— Anthony</p>
          <hr />
          <p style="font-size:12px;color:#888">Unsubscribe: <a href="${process.env.NEXT_PUBLIC_URL}/unsubscribe?email=${email}">click here</a></p>
        `,
      });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
