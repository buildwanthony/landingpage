import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "What Anthony is building — AIDAL and other experiments.",
};

const projects = [
  {
    slug: "aidal",
    name: "AIDAL",
    description:
      "Infrastructure for trustworthy AI. Helping companies make their AI systems legible, auditable, and compliant.",
    status: "Active",
    year: "2024–",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AI"],
    url: "https://aidal.io",
    featured: true,
  },
  {
    slug: "eu-ai-act-tracker",
    name: "EU AI Act Tracker",
    description:
      "Open-source tracker for EU AI Act implementation milestones and compliance dates.",
    status: "Experiment",
    year: "2024",
    stack: ["Next.js", "MDX"],
    featured: false,
  },
  {
    slug: "founder-os",
    name: "Founder OS Template",
    description:
      "Public Notion template for solo founders. Downloaded 400+ times.",
    status: "Live",
    year: "2024",
    stack: ["Notion"],
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <div className="container-wide py-16">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Projects
          </p>
          <h1 className="text-3xl font-semibold tracking-tight mb-4">
            What I&apos;m building
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            AIDAL is the main thing. Everything else is experiments, tools, and
            side projects that come out of the journey.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.slug}
              className={`border rounded-lg p-6 hover:border-muted-foreground/30 transition-colors ${
                project.featured
                  ? "border-border bg-muted/20"
                  : "border-border"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
                        project.status === "Active"
                          ? "bg-blue/10 text-blue"
                          : project.status === "Live"
                          ? "bg-green-500/10 text-green-600 dark:text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Details <ArrowRight size={13} />
                  </Link>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
