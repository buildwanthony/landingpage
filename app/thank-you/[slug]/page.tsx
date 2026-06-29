import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const resourceTitles: Record<string, string> = {
  "founder-os": "Founder OS",
  "eu-ai-act-cheatsheet": "EU AI Act Cheatsheet",
  "cold-email-crm": "Cold Email CRM",
  "founder-prompt-library": "Founder Prompt Library",
};

export default function ThankYouPage({
  params,
}: {
  params: { slug: string };
}) {
  const title = resourceTitles[params.slug] ?? "your resource";

  return (
    <div className="pt-24 min-h-screen flex items-center">
      <div className="container-tight py-16">
        <div className="flex items-center gap-2 text-green-500 mb-6">
          <CheckCircle size={24} />
          <span className="font-medium">You&apos;re all set!</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          {title} is on its way
        </h1>

        <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
          Check your inbox — I&apos;ve sent it to your email. You&apos;re also
          now subscribed to Build With Anthony, my weekly newsletter on building
          AI startups in public.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 border border-border text-sm font-medium px-4 py-2 rounded-md hover:bg-muted transition-colors"
          >
            Browse more resources
          </Link>
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Read the journal <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
