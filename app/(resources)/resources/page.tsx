import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free toolkits, templates, and cheatsheets for founders and AI builders.",
};

const categories = [
  {
    name: "Founder OS",
    description: "Operating systems for building startups alone.",
    resources: [
      {
        slug: "founder-os",
        title: "Founder OS",
        description: "My complete system for running a startup solo — tasks, goals, weekly reviews, and focus blocks.",
        downloads: 412,
        free: true,
      },
    ],
  },
  {
    name: "AI Builder OS",
    description: "Tools and templates for building AI products.",
    resources: [
      {
        slug: "ai-builder-checklist",
        title: "AI Builder Checklist",
        description: "Before you ship: 50 questions to ask about your AI product.",
        downloads: 201,
        free: true,
      },
    ],
  },
  {
    name: "Enterprise Sales OS",
    description: "Cold email, CRM, and outreach systems.",
    resources: [
      {
        slug: "cold-email-crm",
        title: "Cold Email CRM Template",
        description: "The Notion CRM I use to track cold outreach, follow-ups, and pipeline.",
        downloads: 297,
        free: true,
      },
    ],
  },
  {
    name: "AI Trust Toolkit",
    description: "Governance, compliance, and trust resources.",
    resources: [
      {
        slug: "eu-ai-act-cheatsheet",
        title: "EU AI Act Cheatsheet",
        description: "One-page reference for AI founders shipping to Europe.",
        downloads: 388,
        free: true,
      },
    ],
  },
  {
    name: "Prompt Library",
    description: "Tested prompts for founders and builders.",
    resources: [
      {
        slug: "founder-prompt-library",
        title: "Founder Prompt Library",
        description: "50+ prompts I use daily for research, writing, and strategy.",
        downloads: 156,
        free: true,
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-24">
      <div className="container-wide py-16">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Resources
          </p>
          <h1 className="text-3xl font-semibold tracking-tight mb-4">
            Free tools for founders & AI builders
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Templates, toolkits, and cheatsheets I&apos;ve built while building
            AIDAL and documenting the journey. All free.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="mb-4">
                <h2 className="text-sm font-medium">{category.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.resources.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className="border border-border rounded-lg p-5 hover:border-muted-foreground/30 transition-colors group"
                  >
                    <h3 className="text-sm font-medium mb-2 group-hover:text-blue transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Download size={11} /> {resource.downloads}
                      </span>
                      <span className="text-xs font-medium flex items-center gap-1 group-hover:text-blue transition-colors">
                        Get free <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
