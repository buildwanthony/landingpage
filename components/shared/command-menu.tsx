"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home,
  User,
  FolderOpen,
  FileText,
  Video,
  BookOpen,
  Mail,
  Cpu,
  FileCode,
  Phone,
} from "lucide-react";

const pages = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Projects", href: "/projects", icon: FolderOpen },
  { label: "Writing", href: "/writing", icon: FileText },
  { label: "Videos", href: "/videos", icon: Video },
  { label: "Resources", href: "/resources", icon: BookOpen },
  { label: "Newsletter", href: "/newsletter", icon: Mail },
  { label: "Uses", href: "/uses", icon: Cpu },
  { label: "Resume", href: "/resume", icon: FileCode },
  { label: "Contact", href: "/contact", icon: Phone },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const custom = () => setOpen(true);
    document.addEventListener("keydown", down);
    window.addEventListener("open-command-menu", custom);
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-command-menu", custom);
    };
  }, []);

  const run = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Go to page, search resources..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map(({ label, href, icon: Icon }) => (
            <CommandItem key={href} onSelect={() => run(href)}>
              <Icon size={14} className="mr-2 text-muted-foreground" />
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Quick links">
          <CommandItem
            onSelect={() => {
              setOpen(false);
              window.open("https://aidal.io", "_blank");
            }}
          >
            <span className="mr-2 text-muted-foreground text-xs">↗</span>
            AIDAL
          </CommandItem>
          <CommandItem
            onSelect={() => {
              setOpen(false);
              window.open("https://github.com/buildwanthony", "_blank");
            }}
          >
            <span className="mr-2 text-muted-foreground text-xs">↗</span>
            GitHub
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
