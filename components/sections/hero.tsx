"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center pt-14">
      <div className="container-wide">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Status pill */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Building AIDAL · Bandung, Indonesia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.1]"
          >
            Anthony Widjaja
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl sm:text-2xl text-muted-foreground font-light"
          >
            18-year-old founder from Bandung.
            <br />
            Building the{" "}
            <span className="text-foreground font-normal">
              trust layer for AI
            </span>{" "}
            in public.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 text-sm text-muted-foreground font-mono"
          >
            Founder · Engineer · Sharing everything I learn.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 text-base text-muted-foreground max-w-lg leading-relaxed"
          >
            I&apos;m documenting the journey of building trustworthy AI
            systems—from coding and product decisions to cold emails and
            regulations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Read the Journal
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 border border-border text-sm font-medium px-4 py-2 rounded-md hover:bg-muted transition-colors"
            >
              Browse Resources
            </Link>
            <a
              href="https://aidal.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Explore AIDAL
              <ExternalLink size={12} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
