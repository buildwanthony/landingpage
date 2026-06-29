import type { Metadata } from "next";
import { Timeline } from "@/components/sections/timeline";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Anthony Widjaja — 18-year-old founder from Bandung building the trust layer for AI.",
};

const values = [
  { label: "Build in public", description: "Share the process, not just the outcome." },
  { label: "Learn aggressively", description: "Treat curiosity as a competitive advantage." },
  { label: "Share everything", description: "If I learned it, someone else needs to know it." },
  { label: "Build useful things", description: "Solve real problems for real people." },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="container-tight py-16">
        {/* Who I am */}
        <section className="mb-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Who I am
          </p>
          <h1 className="text-3xl font-semibold tracking-tight mb-6">
            Anthony Widjaja
          </h1>
          <div className="prose prose-neutral dark:prose-invert text-sm leading-relaxed space-y-4">
            <p>
              I&apos;m an 18-year-old founder from Bandung, Indonesia. I started
              programming because I wanted to build things—real things that
              solve real problems for real people.
            </p>
            <p>
              Right now I&apos;m building AIDAL, infrastructure for trustworthy
              AI. I&apos;m also documenting every step of the journey publicly,
              because I believe the best way to learn is to teach, and the best
              way to build credibility is to be transparent.
            </p>
            <p>
              I&apos;m not a corporate brand. I&apos;m a young founder figuring
              it out in public. This website is my journal.
            </p>
          </div>
        </section>

        {/* Why I build */}
        <section className="mb-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Why I build
          </p>
          <div className="prose prose-neutral dark:prose-invert text-sm leading-relaxed space-y-4">
            <p>
              I build because I can&apos;t not. There&apos;s a particular feeling
              when something you made starts working—when real people use it and
              it solves a problem for them. I&apos;m addicted to that feeling.
            </p>
            <p>
              I also build because I&apos;m genuinely scared of the alternative.
              AI is moving fast. If the wrong people shape how AI systems are
              designed and governed, we&apos;ll all pay for it. I&apos;d rather
              be in the room.
            </p>
          </div>
        </section>

        {/* Why trust matters */}
        <section className="mb-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Why trust in AI matters
          </p>
          <div className="prose prose-neutral dark:prose-invert text-sm leading-relaxed space-y-4">
            <p>
              Most AI products today are black boxes. You put something in, you
              get something out, and you have no idea why. For low-stakes
              use-cases, that&apos;s fine. For healthcare, legal, finance,
              hiring—it&apos;s not.
            </p>
            <p>
              Trust is the layer that makes AI usable in high-stakes contexts.
              Without it, regulators will shut the door. With it, AI can
              actually help people. That&apos;s what I&apos;m building toward.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
            Values
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.label} className="border border-border rounded-lg p-4">
                <h3 className="text-sm font-medium mb-1">{v.label}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Timeline />
      <NewsletterCTA />
    </div>
  );
}
