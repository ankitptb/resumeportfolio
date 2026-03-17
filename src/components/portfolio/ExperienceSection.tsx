"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ChevronDown, ChevronUp, Briefcase, Monitor, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

function formatDate(d: string) {
  const [y, m] = d.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

const remoteIcon = {
  Remote: Monitor,
  Hybrid: Building2,
  Onsite: MapPin,
};

const employmentColors: Record<string, string> = {
  "Full-time": "bg-emerald/10 text-emerald",
  "Part-time": "bg-blue/10 text-blue",
  Contract: "bg-amber-500/10 text-amber-500",
  Freelance: "bg-purple-500/10 text-purple-500",
  Internship: "bg-orange-500/10 text-orange-500",
  Apprenticeship: "bg-teal-500/10 text-teal-500",
};

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? profileData.experience : profileData.experience.slice(0, 3);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Experience" id="experience" />

      <div className="space-y-6">
        {items.map((exp, i) => {
          const RemoteIcon = remoteIcon[exp.location.remote_type] || MapPin;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03),0_8px_24px_hsl(var(--foreground)/0.02)]"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground">
                      {exp.company_name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.job_title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company_name}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:mt-0 sm:text-right">
                  <span className="tabular-nums">
                    {formatDate(exp.start_date)} — {exp.currently_working ? "Present" : exp.end_date ? formatDate(exp.end_date) : ""}
                  </span>
                </div>
              </div>

              {/* Employment type & location badges */}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Badge className={`border-0 text-xs font-medium ${employmentColors[exp.employment_type] || "bg-secondary text-secondary-foreground"}`}>
                  <Briefcase className="mr-1 h-3 w-3" />
                  {exp.employment_type}
                </Badge>
                <Badge variant="outline" className="text-xs font-medium">
                  <RemoteIcon className="mr-1 h-3 w-3" />
                  {exp.location.remote_type}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {exp.location.city}
                </span>
                {exp.team_size_managed > 0 && (
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    Team of {exp.team_size_managed}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>

              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                      {a}
                    </li>
                  ))}
                </ul>
              )}

              {exp.linked_skills && exp.linked_skills.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.linked_skills.map((s) => (
                    <Badge key={s} variant="outline" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Recommendations avatars */}
              {exp.recommendations && exp.recommendations.length > 0 && (
                <TooltipProvider>
                  <div className="mt-4 flex items-center gap-1">
                    <span className="mr-1 text-xs text-muted-foreground">Recommended by:</span>
                    <div className="flex -space-x-2">
                      {exp.recommendations.map((rec) => (
                        <Tooltip key={rec.name}>
                          <TooltipTrigger asChild>
                            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-semibold text-muted-foreground transition-transform hover:z-10 hover:scale-110">
                              {rec.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="font-semibold text-foreground">{rec.name}</p>
                            <p className="text-xs text-muted-foreground">{rec.designation}, {rec.company}</p>
                            <p className="text-xs italic text-muted-foreground">{rec.relationship}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </TooltipProvider>
              )}
            </motion.div>
          );
        })}
      </div>

      {profileData.experience.length > 3 && (
        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={() => setShowAll(!showAll)}>
            {showAll ? (
              <>Show Less <ChevronUp className="ml-1 h-4 w-4" /></>
            ) : (
              <>View All ({profileData.experience.length}) <ChevronDown className="ml-1 h-4 w-4" /></>
            )}
          </Button>
        </div>
      )}
    </section>
  );
}
