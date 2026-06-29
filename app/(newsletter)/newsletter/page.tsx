import type { Metadata } from "next";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Build With Anthony — weekly lessons from building startups, AI products, and trustworthy AI systems.",
};

const archive = [
  {
    issue: 4,
    title: "What I learned from getting ghosted by 40 enterprises",
    date: "2024-11-01",
  },
  {
    issue: 3,
    title: "Breaking down the EU AI Act (for founders, not lawyers)",
    date: "2024-10-18",
  },
  {
    issue: 2,
    title: "How I structured my cold email stack from scratch",
    date: "2024-10-04",
  },
  {
    issue: 1,
    title: "Why I'm building the trust layer for AI",
    date: "2024-09-20",
  },
];

export default function NewsletterPage() {
  return (
    <div className="pt-24">
      <div className="container-tight py-16">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Newsletter
        </p>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          Build With Anthony
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
          Weekly lessons from building startups, AI products, and trustworthy AI
          systems. No fluff — just the real stuff from someone doing it right
          now.
        </p>

        <NewsletterCTA />

        {/* Archive */}
        <section className="mt-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
            Archive
          </p>
          <div className="divide-y divide-border">
            {archive.map((issue) => (
              <div
                key={issue.issue}
                className="flex items-center justify-between py-4"
              >
                <div>
                  <span className="text-xs font-mono text-muted-foreground mr-3">
                    #{issue.issue}
                  </span>
                  <span className="text-sm">{issue.title}</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground shrink-0">
                  {new Date(issue.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
