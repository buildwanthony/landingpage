"use client";

import { motion } from "framer-motion";

const events = [
  {
    date: "2024 Q4",
    title: "Started building AIDAL",
    description:
      "Began developing the infrastructure layer for trustworthy AI after identifying a gap in the market.",
  },
  {
    date: "2024 Q3",
    title: "First enterprise call",
    description:
      "Cold email outreach led to first conversations with enterprise AI buyers.",
  },
  {
    date: "2024 Q2",
    title: "Launched newsletter",
    description:
      "Started Build With Anthony to document the journey and share what I was learning.",
  },
  {
    date: "2024 Q1",
    title: "Deep-dove into AI regulation",
    description:
      "Spent months studying the EU AI Act, NIST AI RMF, and governance frameworks.",
  },
];

export function Timeline() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container-wide">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
          Timeline
        </p>
        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 relative"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-background border-2 border-muted-foreground shrink-0 mt-0.5 relative z-10" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    {event.date}
                  </p>
                  <h3 className="text-sm font-medium mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
