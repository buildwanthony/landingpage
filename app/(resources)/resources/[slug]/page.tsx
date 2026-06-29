"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Download, CheckCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Resource data — in production pull from DB
const resourceData: Record<
  string,
  {
    title: string;
    description: string;
    longDescription: string;
    category: string;
    whatsInside: string[];
  }
> = {
  "founder-os": {
    title: "Founder OS",
    category: "Founder OS",
    description:
      "My complete operating system for running a startup solo — tasks, goals, weekly reviews, and focus blocks.",
    longDescription:
      "Built over months of iteration, this Notion-based system is exactly how I run my day as a solo founder building AIDAL. It covers everything from annual goals to daily tasks, weekly reviews, and project tracking.",
    whatsInside: [
      "Daily task system with priority tiers",
      "Weekly review template",
      "OKR tracker",
      "Project pipeline",
      "Focus block scheduler",
      "Decision log",
    ],
  },
  "eu-ai-act-cheatsheet": {
    title: "EU AI Act Cheatsheet",
    category: "AI Trust Toolkit",
    description:
      "One-page reference for AI founders shipping to Europe. Risk tiers, obligations, and key dates.",
    longDescription:
      "The EU AI Act is complex. This cheatsheet distills it into what AI founders actually need to know: which risk tier you're in, what that means for your obligations, and the key compliance dates.",
    whatsInside: [
      "Risk tier classification guide",
      "Obligations per tier",
      "Prohibited AI use cases",
      "Key compliance dates",
      "High-risk AI system checklist",
      "Where to find official resources",
    ],
  },
  "cold-email-crm": {
    title: "Cold Email CRM",
    category: "Enterprise Sales OS",
    description:
      "The exact Notion CRM I use to track cold outreach, follow-ups, and enterprise pipeline.",
    longDescription:
      "After sending 100+ cold emails, I built this CRM to track every conversation, follow-up, and outcome. It's designed for solo founders doing enterprise outreach without a sales team.",
    whatsInside: [
      "Contact database with status tracking",
      "Email sequence planner",
      "Follow-up scheduler",
      "Response rate tracker",
      "Pipeline stages (prospect → signed)",
      "Email templates vault",
    ],
  },
};

export default function ResourcePage() {
  const params = useParams();
  const slug = params.slug as string;
  const resource = resourceData[slug];

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  if (!resource) {
    return (
      <div className="pt-24 container-tight py-16">
        <p className="text-muted-foreground">Resource not found.</p>
        <Link
          href="/resources"
          className="text-sm hover:text-foreground transition-colors mt-4 flex items-center gap-1"
        >
          <ArrowLeft size={14} /> Back to resources
        </Link>
      </div>
    );
  }

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/resources/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, resourceSlug: slug }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-24">
      <div className="container-tight py-16">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Resources
        </Link>

        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
          {resource.category}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          {resource.title}
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8">
          {resource.longDescription}
        </p>

        {/* What's inside */}
        <div className="border border-border rounded-lg p-6 mb-8">
          <h2 className="text-sm font-medium mb-4">What&apos;s inside</h2>
          <ul className="space-y-2">
            {resource.whatsInside.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle
                  size={14}
                  className="text-green-500 shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Email gate form */}
        {status === "success" ? (
          <div className="border border-border rounded-lg p-6 bg-muted/30">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-3">
              <CheckCircle size={16} />
              <span className="font-medium text-sm">
                Check your inbox — it&apos;s on its way!
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              You&apos;re also subscribed to Build With Anthony. Reply to any
              email anytime.
            </p>
          </div>
        ) : (
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-1">
              <Download size={16} />
              <h2 className="text-sm font-medium">
                Get {resource.title} — free
              </h2>
            </div>
            <p className="text-xs text-muted-foreground mb-5">
              Enter your email and I&apos;ll send it straight to you.
            </p>

            <form onSubmit={handleDownload} className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name (optional)"
                className="w-full text-sm bg-muted border border-border rounded-md px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full text-sm bg-muted border border-border rounded-md px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <>
                    <Download size={14} /> Get free resource
                  </>
                )}
              </button>
            </form>

            {status === "error" && (
              <p className="text-xs text-red-500 mt-2">
                Something went wrong. Try again.
              </p>
            )}

            <p className="text-xs text-muted-foreground mt-3 text-center">
              You&apos;ll also join Build With Anthony — unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
