import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/buildwanthony", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/buildwanthony",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://x.com/buildwanthony", label: "X", icon: Twitter },
  {
    href: "https://youtube.com/@buildwanthony",
    label: "YouTube",
    icon: Youtube,
  },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/resources", label: "Resources" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/uses", label: "Uses" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-mono text-sm font-medium">anthony.dev</p>
            <p className="text-sm text-muted-foreground mt-2">
              Building the trust layer for AI and sharing everything I learn.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anthony Widjaja. Built in public.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Bandung, Indonesia 🇮🇩
          </p>
        </div>
      </div>
    </footer>
  );
}
