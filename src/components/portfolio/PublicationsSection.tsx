"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

export function PublicationsSection() {
  if (!profileData.publications.length) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Blogs & Publications" id="publications" />

      <div className="space-y-3">
        {profileData.publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="flex items-start justify-between gap-3 rounded-xl bg-card p-4 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]"
          >
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{pub.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {pub.platform} · {pub.publication_date}
                </p>
              </div>
            </div>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Read <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
