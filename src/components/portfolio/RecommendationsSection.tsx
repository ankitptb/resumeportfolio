"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

function formatDate(d: string) {
  const [y, m] = d.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export function RecommendationsSection() {
  const allRecs = profileData.experience.flatMap((exp) =>
    (exp.recommendations || []).map((rec) => ({
      ...rec,
      fromCompany: exp.company_name,
      fromRole: exp.job_title,
    }))
  );

  if (allRecs.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Recommendations" id="recommendations" />

      <div className="grid gap-6 md:grid-cols-2">
        {allRecs.map((rec, i) => (
          <motion.div
            key={`${rec.name}-${rec.date}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03),0_8px_24px_hsl(var(--foreground)/0.02)]"
          >
            <Quote className="mb-3 h-5 w-5 text-muted-foreground/40" />
            <p className="flex-1 text-sm italic text-muted-foreground leading-relaxed">
              "{rec.text}"
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
                {rec.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{rec.name}</p>
                <p className="text-xs text-muted-foreground">
                  {rec.designation}, {rec.company}
                </p>
                <p className="text-xs text-muted-foreground">
                  {rec.relationship} · {formatDate(rec.date)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
