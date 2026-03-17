"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

export function PreferencesSection() {
  const { preferences } = profileData;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Career Preferences" id="preferences" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-2">
            <Briefcase className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <p className="text-sm font-medium text-foreground">{preferences.current_employment_status}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Notice Period</p>
              <p className="text-sm font-medium text-foreground">{preferences.notice_period || "Immediate"}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Preferred Locations</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {preferences.preferred_locations.map((loc) => (
                  <Badge key={loc} variant="secondary" className="text-xs">{loc}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {preferences.open_to_remote && (
            <Badge className="bg-emerald text-emerald-foreground text-xs">Open to Remote</Badge>
          )}
          {preferences.preferred_job_titles.map((t) => (
            <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
