"use client";

import { motion } from "framer-motion";

const focuses = [
  {
    label: "Primary",
    title: "Building AIDAL",
    description:
      "Infrastructure for trustworthy AI — making AI systems legible, auditable, and accountable.",
    href: "/projects/aidal",
  },
  {
    label: "Creating",
    title: "Useful resources",
    description:
      "Practical toolkits for founders and AI builders: Founder OS, AI Trust Toolkit, and more.",
    href: "/resources",
  },
  {
    label: "Writing",
    title: "About AI and startups",
    description:
      "Documenting decisions, failures, and lessons from building in public as a young founder.",
    href: "/writing",
  },
];

export function CurrentFocus() {
  return (
    <section className="border-t border-border py-16">
      <div className="container-wide">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
          Current focus
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {focuses.map((focus, i) => (
            <motion.a
              key={focus.title}
              href={focus.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 hover:bg-muted/50 transition-colors group"
            >
              <p className="text-xs font-mono text-muted-foreground mb-3">
                {focus.label}
              </p>
              <h3 className="text-sm font-medium mb-2 group-hover:text-blue transition-colors">
                {focus.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {focus.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
