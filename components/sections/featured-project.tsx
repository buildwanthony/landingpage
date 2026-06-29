"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export function FeaturedProject() {
  return (
    <section className="py-16">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Featured project
          </p>
          <Link
            href="/projects"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            All projects <ArrowRight size={12} />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-border rounded-lg p-6 md:p-8 hover:border-muted-foreground/30 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex-1 max-w-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono bg-blue/10 text-blue px-2 py-0.5 rounded">
                  Active
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  2024 — Present
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight mb-3">
                AIDAL
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Infrastructure for trustworthy AI. AIDAL helps companies make
                their AI systems legible, auditable, and compliant—building the
                foundation of trust between AI products and the people who use
                them.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                  "AI",
                  "Compliance",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/projects/aidal"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                >
                  Read case study <ArrowRight size={14} />
                </Link>
                <a
                  href="https://aidal.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Visit site <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="md:w-72 h-40 md:h-48 bg-muted rounded-md flex items-center justify-center border border-border">
              <span className="text-3xl font-bold font-mono text-muted-foreground/30">
                AIDAL
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
