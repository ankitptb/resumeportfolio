"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

export function AchievementsSection() {
  if (!profileData.achievements.length) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Achievements & Awards" id="achievements" />

      <div className="space-y-3">
        {profileData.achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]"
          >
            <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-emerald" />
            <div>
              <h3 className="text-sm font-semibold text-foreground">{a.title}</h3>
              <p className="text-xs text-muted-foreground">
                {a.issuer} · {a.date}
              </p>
              {a.description && (
                <p className="mt-1 text-xs text-muted-foreground">{a.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
