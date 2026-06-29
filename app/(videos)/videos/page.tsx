import type { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Videos",
  description: "YouTube videos on building AIDAL, AI systems, and founder journey.",
};

const categories = ["All", "Founder Journey", "Building AIDAL", "AI Systems", "Trust & Compliance", "Cold Email Diary"];

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Building AIDAL: Week 1 Update — What I Built and What Broke",
    category: "Founder Journey",
    duration: "12:34",
    date: "2024-11-01",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "How I Structure My AI Compliance Research",
    category: "AI Systems",
    duration: "8:21",
    date: "2024-10-24",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Cold Email Diary Ep.1: Getting My First Enterprise Call",
    category: "Cold Email Diary",
    duration: "15:07",
    date: "2024-10-15",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "EU AI Act in 10 Minutes: What Founders Actually Need to Know",
    category: "Trust & Compliance",
    duration: "10:22",
    date: "2024-10-08",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Building AIDAL: The Architecture Decision That Changed Everything",
    category: "Building AIDAL",
    duration: "18:45",
    date: "2024-09-30",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Why I Chose Railway Over AWS for My Startup Infrastructure",
    category: "Building AIDAL",
    duration: "9:12",
    date: "2024-09-22",
  },
];

export default function VideosPage() {
  return (
    <div className="pt-24">
      <div className="container-wide py-16">
        <div className="mb-8">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            Videos
          </p>
          <h1 className="text-3xl font-semibold tracking-tight mb-4">
            YouTube
          </h1>
          <p className="text-muted-foreground">
            Building in public, on camera.{" "}
            <a
              href="https://youtube.com/@buildwanthony"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue hover:underline"
            >
              Subscribe on YouTube →
            </a>
          </p>
        </div>

        {/* Category filter — client component in production */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                cat === "All"
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video, i) => (
            <a
              key={`${video.id}-${i}`}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
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
                  <Play size={28} className="text-white fill-white" />
                </div>
                <span className="absolute bottom-2 right-2 text-xs font-mono bg-black/75 text-white px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <p className="text-xs font-mono text-muted-foreground mb-1">
                {video.category}
              </p>
              <h3 className="text-sm font-medium group-hover:text-blue transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-xs font-mono text-muted-foreground mt-1">
                {new Date(video.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
