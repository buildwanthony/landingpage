"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage-cta" }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <section className="py-16 border-t border-border">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Newsletter
          </p>
          <h2 className="text-2xl font-semibold tracking-tight mb-3">
            Build With Anthony
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Weekly lessons from building startups, AI products, and trustworthy
            AI systems. No fluff—just what I&apos;m learning and building.
          </p>

          {status === "success" ? (
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <CheckCircle size={16} />
              <span>You&apos;re in. Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 text-sm bg-muted border border-border rounded-md px-3 py-2 placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <ArrowRight size={14} />
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-xs text-red-500 mt-2">{error}</p>
          )}

          <p className="text-xs text-muted-foreground mt-3">
            Join the journey. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
