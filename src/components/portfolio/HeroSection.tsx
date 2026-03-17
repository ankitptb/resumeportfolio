"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Github, Linkedin, Globe, ExternalLink, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { profileData } from "@/data/profile-data";

export function HeroSection() {
  const { profile, domains, address, verifications } = profileData;
  const fullName = `${profile.first_name} ${profile.last_name}`;

  const socialLinks = [
    { icon: Github, href: profile.github_url, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedin_url, label: "LinkedIn" },
    { icon: Globe, href: profile.personal_website, label: "Website" },
  ].filter((l) => l.href);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl px-4 pb-12 pt-16"
    >
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
        {/* Avatar */}
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-muted text-2xl font-bold text-muted-foreground">
          {profile.first_name[0]}{profile.last_name[0]}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{fullName}</h1>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <BadgeCheck className="h-6 w-6 cursor-pointer text-blue" />
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <p className="mb-1 text-xs font-semibold text-foreground">Verified by</p>
                  {verifications.map((v) => (
                    <div key={v.name} className="mb-1 last:mb-0">
                      <p className="text-xs font-medium text-foreground">{v.name}</p>
                      <p className="text-xs text-muted-foreground">{v.designation}, {v.company}</p>
                      <p className="text-xs italic text-muted-foreground">{v.relationship}</p>
                    </div>
                  ))}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <p className="mt-1 text-base text-muted-foreground">{profile.headline}</p>

          <p className="mt-1 text-sm text-muted-foreground">
            {address.city}, {address.state} · {profile.career_level} Level
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {domains.map((d) => (
              <Badge key={d.domain_name} variant={d.primary ? "default" : "secondary"}>
                {d.domain_name}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      {profile.summary && (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground" style={{ textWrap: "balance" } as React.CSSProperties}>
          {profile.summary}
        </p>
      )}

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${profile.email}`}>
            <Mail className="mr-2 h-4 w-4" />
            Send an email
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-2 h-4 w-4" />
            Book an intro call
          </a>
        </Button>
      </div>

      {/* Social Links */}
      <div className="mt-4 flex items-center gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <link.icon className="h-4 w-4" />
            {link.label}
            <ExternalLink className="h-3 w-3" />
          </a>
        ))}
      </div>
    </motion.section>
  );
}
