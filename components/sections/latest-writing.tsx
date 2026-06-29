"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Static placeholder posts — replace with DB/MDX fetch
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
];

export function LatestWriting() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Latest writing
          </p>
          <Link
            href="/writing"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            All posts <ArrowRight size={12} />
          </Link>
        </div>

        <div className="divide-y divide-border">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/writing/${post.slug}`}
                className="flex flex-col md:flex-row md:items-center justify-between py-5 gap-3 group"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-medium group-hover:text-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-mono text-muted-foreground">
                    {post.readingTime} min
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all"
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
