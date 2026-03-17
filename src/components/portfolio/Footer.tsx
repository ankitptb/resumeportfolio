import { Github, Linkedin, Globe, Mail } from "lucide-react";
import { profileData } from "@/data/profile-data";

export function Footer() {
  const { profile } = profileData;

  const links = [
    { icon: Github, href: profile.github_url },
    { icon: Linkedin, href: profile.linkedin_url },
    { icon: Globe, href: profile.personal_website },
    { icon: Mail, href: `mailto:${profile.email}` },
  ].filter((l) => l.href);

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4">
        <div className="flex items-center gap-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Built with WorkNation · Schema v1.0
        </p>
      </div>
    </footer>
  );
}
