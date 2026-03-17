"use client";

import { ThemeToggle } from "./ThemeToggle";
import { profileData } from "@/data/profile-data";
import { Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blogs", href: "#publications" },
];

export function NavBar() {
  const initials = `${profileData.profile.first_name[0]}${profileData.profile.last_name[0]}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-foreground">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            {initials}
          </span>
          <span className="hidden sm:inline">{profileData.profile.preferred_name || profileData.profile.first_name}</span>
        </a>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <Link href="/edit">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
