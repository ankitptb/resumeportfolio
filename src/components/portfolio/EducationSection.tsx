"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

export function EducationSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Education" id="education" />

      <div className="space-y-4">
        {profileData.education.map((edu, i) => (
          <motion.div
            key={`${edu.institution_name}-${edu.degree_name}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex gap-4 rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{edu.degree_name}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution_name}</p>
              <p className="text-xs text-muted-foreground">
                {edu.field_of_study} · {edu.start_year}–{edu.end_year || "Present"}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {edu.honors && <Badge variant="outline" className="text-xs">{edu.honors}</Badge>}
                {edu.grade && <Badge variant="secondary" className="text-xs">{edu.grade}</Badge>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
