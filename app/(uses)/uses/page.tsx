import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "The hardware, software, and tools Anthony uses to build.",
};

const sections = [
  {
    title: "Hardware",
    items: [
      { name: "MacBook Air M2 13\"", description: "Primary machine. Silent, fast, and never gets hot enough to matter." },
      { name: "iPhone 14", description: "Communication, reading, and mobile testing." },
      { name: "Sony WH-1000XM5", description: "Deep work. ANC is non-negotiable when building." },
    ],
  },
  {
    title: "Software",
    items: [
      { name: "VS Code", description: "Editor of choice. Copilot + GitHub integration." },
      { name: "Notion", description: "Second brain. Founder OS, writing drafts, research." },
      { name: "Linear", description: "Issue tracking for AIDAL. Clean and fast." },
      { name: "Raycast", description: "Launcher, clipboard, snippets. Replaced Spotlight entirely." },
      { name: "Arc Browser", description: "The only browser I've used in a year." },
      { name: "Figma", description: "Design and wireframing." },
    ],
  },
  {
    title: "AI Stack",
    items: [
      { name: "Claude (Anthropic)", description: "Primary reasoning and writing model. Best for long-form thinking." },
      { name: "GPT-4o", description: "Quick tasks, code generation, image analysis." },
      { name: "Perplexity", description: "Research with citations. Better than Google for technical queries." },
      { name: "v0 (Vercel)", description: "UI prototyping from text." },
      { name: "Cursor", description: "AI-native editor for faster shipping." },
    ],
  },
  {
    title: "Workflow",
    items: [
      { name: "Morning block (6–9am)", description: "Deep work only. No meetings, no Slack, no email." },
      { name: "Weekly review (Sunday)", description: "Review goals, clear inbox, set priorities for the week." },
      { name: "Pomodoro (45/15)", description: "45-minute focused sprints, 15-minute breaks." },
      { name: "Build in public", description: "Twitter threads and newsletter after every major milestone." },
    ],
  },
  {
    title: "Books",
    items: [
      { name: "Zero to One — Peter Thiel", description: "Still the best book on startups." },
      { name: "The Mom Test — Rob Fitzpatrick", description: "Required reading before any customer conversation." },
      { name: "Thinking in Systems — Donella Meadows", description: "How to understand complex systems. Applies to AI." },
      { name: "The Innovator's Dilemma — Clayton Christensen", description: "Why incumbents fail. Directly relevant to AI trust." },
    ],
  },
];

export default function UsesPage() {
  return (
    <div className="pt-24">
      <div className="container-tight py-16">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Uses
        </p>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          What I use
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-12">
          Hardware, software, AI tools, and workflow systems I actually use to
          build AIDAL and document the journey.
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                {section.title}
              </h2>
              <div className="divide-y divide-border">
                {section.items.map((item) => (
                  <div key={item.name} className="py-4 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-8">
                    <span className="text-sm font-medium shrink-0 sm:w-48">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
