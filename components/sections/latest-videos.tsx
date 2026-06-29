"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Building AIDAL: Week 1 Update",
    category: "Founder Journey",
    duration: "12:34",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "How I Structure My AI Compliance Research",
    category: "AI Systems",
    duration: "8:21",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Cold Email Diary: Getting My First Enterprise Call",
    category: "Cold Email Diary",
    duration: "15:07",
  },
];

export function LatestVideos() {
  return (
    <section className="py-16 border-t border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Latest videos
          </p>
          <Link
            href="/videos"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            All videos <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <motion.a
              key={`${video.id}-${i}`}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video bg-muted rounded-md overflow-hidden border border-border mb-3">
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={24} className="text-white fill-white" />
                </div>
                <span className="absolute bottom-2 right-2 text-xs font-mono bg-black/70 text-white px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <p className="text-xs font-mono text-muted-foreground mb-1">
                {video.category}
              </p>
              <h3 className="text-sm font-medium group-hover:text-blue transition-colors line-clamp-2">
                {video.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
