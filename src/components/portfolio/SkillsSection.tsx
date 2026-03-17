"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

export function SkillsSection() {
  const { skills } = profileData;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Skills & Tools" id="skills" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {/* Technical Skills */}
        <div className="rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]">
          <h3 className="mb-3 text-sm font-semibold text-foreground">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.technical_skills.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]">
          <h3 className="mb-3 text-sm font-semibold text-foreground">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
            ))}
          </div>
        </div>

        {/* Methodologies */}
        <div className="rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]">
          <h3 className="mb-3 text-sm font-semibold text-foreground">Methodologies</h3>
          <div className="flex flex-wrap gap-2">
            {skills.methodologies.map((m) => (
              <Badge key={m} variant="outline" className="text-xs">{m}</Badge>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]">
          <h3 className="mb-3 text-sm font-semibold text-foreground">Languages</h3>
          <div className="space-y-2">
            {skills.languages.map((l) => (
              <div key={l.language} className="flex items-center justify-between text-sm">
                <span className="text-foreground">{l.language}</span>
                <Badge variant="outline" className="text-xs">{l.proficiency}</Badge>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
