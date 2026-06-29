import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and lessons from building startups, AI products, and the trust layer for AI.",
};

// In production: read from MDX files or DB
const posts = [
  {
    slug: "why-ai-needs-a-trust-layer",
    title: "Why AI Needs a Trust Layer",
    excerpt:
      "Trust isn't a feature you bolt on at the end. It has to be the foundation. Here's why I'm building AIDAL.",
    date: "2024-11-01",
    readingTime: 6,
    tags: ["AI", "Trust", "AIDAL"],
  },
  {
    slug: "cold-email-lessons-building-aidal",
    title: "100 Cold Emails Later: What Actually Works",
    excerpt:
      "I sent 100 cold emails to enterprise buyers. Here's what I learned about getting replies from people who actually matter.",
    date: "2024-10-20",
    readingTime: 8,
    tags: ["Sales", "Founder"],
  },
  {
    slug: "eu-ai-act-for-founders",
    title: "The EU AI Act Explained for Founders",
    excerpt:
      "What the EU AI Act actually means if you're building an AI product and shipping to European users.",
    date: "2024-10-05",
    readingTime: 10,
    tags: ["Regulation", "EU AI Act"],
  },
  {
    slug: "build-in-public-year-one",
    title: "Building in Public: Year One",
    excerpt:
      "What I've learned from sharing my work publicly — the good, the uncomfortable, and the unexpected.",
    date: "2024-09-15",
    readingTime: 7,
    tags: ["Build in Public", "Founder"],
  },
];

export default function WritingPage() {
  return (
    <div className="pt-24">
      <div className="container-tight py-16">
        <div className="mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Writing
          </p>
          <h1 className="text-3xl font-semibold tracking-tight mb-4">
            The journal
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Essays from building AIDAL, navigating AI regulation, and learning
            to be a founder in public.
          </p>
        </div>

        <div className="divide-y divide-border">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/writing/${post.slug}`}
                className="flex flex-col py-6 gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {post.readingTime} min read
                  </span>
                </div>

                <div>
                  <h2 className="text-base font-medium group-hover:text-blue transition-colors mb-1.5">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
