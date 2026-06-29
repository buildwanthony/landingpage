import type { Metadata } from "next";
import { Github, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Anthony Widjaja.",
};

const links = [
  {
    label: "Email",
    value: "buildwanthony@gmail.com",
    href: "mailto:buildwanthony@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/buildwanthony",
    href: "https://github.com/buildwanthony",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/buildwanthony",
    href: "https://linkedin.com/in/buildwanthony",
    icon: Linkedin,
  },
  {
    label: "X / Twitter",
    value: "@buildwanthony",
    href: "https://x.com/buildwanthony",
    icon: Twitter,
  },
  {
    label: "YouTube",
    value: "@buildwanthony",
    href: "https://youtube.com/@buildwanthony",
    icon: Youtube,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="container-tight py-16">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          Get in touch
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
          I read every email. If you&apos;re a founder, builder, or someone
          interested in AI trust and governance — I want to hear from you.
        </p>

        <div className="divide-y divide-border max-w-sm">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-4 group hover:text-foreground transition-colors"
            >
              <Icon
                size={16}
                className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0"
              />
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-medium">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
