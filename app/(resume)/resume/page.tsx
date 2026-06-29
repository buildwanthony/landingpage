import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Anthony Widjaja — Founder, Engineer, AI Builder.",
};

export default function ResumePage() {
  return (
    <div className="pt-24">
      <div className="container-tight py-16">
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Resume
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">
              Anthony Widjaja
            </h1>
            <p className="text-muted-foreground mt-1">
              Founder · Engineer · Bandung, Indonesia
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              buildwanthony@gmail.com
            </p>
          </div>
          <a
            href="/anthony-widjaja-resume.pdf"
            className="inline-flex items-center gap-2 border border-border text-sm font-medium px-4 py-2 rounded-md hover:bg-muted transition-colors shrink-0"
          >
            <Download size={14} /> PDF
          </a>
        </div>

        {/* Projects */}
        <section className="mb-10">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Projects
          </p>
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-medium">AIDAL</h3>
                <span className="text-xs font-mono text-muted-foreground">
                  2024–Present
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Founder. Building infrastructure for trustworthy AI — helping
                companies make AI systems legible, auditable, and compliant.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AI"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground border border-border px-1.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-sm font-medium">Build With Anthony</h3>
                <span className="text-xs font-mono text-muted-foreground">
                  2024–Present
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Personal brand and public journal. Weekly newsletter, YouTube
                channel, and resource library for founders and AI builders.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Skills
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              ["Frontend", "Next.js, React, TypeScript, Tailwind CSS"],
              ["Backend", "Node.js, PostgreSQL, Prisma, Railway"],
              ["AI/ML", "LLM integration, prompt engineering, AI governance"],
              ["Design", "Figma, UI/UX, design systems"],
              ["Writing", "Technical writing, newsletters, documentation"],
              ["Sales", "Cold email, enterprise outreach, founder sales"],
            ].map(([category, skills]) => (
              <div key={category}>
                <p className="text-xs font-mono text-muted-foreground mb-1">
                  {category}
                </p>
                <p className="text-sm">{skills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Education
          </p>
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-medium">
                Self-directed study + building
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                2022–Present
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI systems, software engineering, AI regulation, startup building.
              Primarily through books, courses, and shipping real projects.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
