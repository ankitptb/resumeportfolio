"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

function formatMonth(d: string) {
  const [y, m] = d.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export function CertificationsSection() {
  if (!profileData.certifications.length) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Certifications" id="certifications" />

      <div className="space-y-3">
        {profileData.certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03)]"
          >
            <Award className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">
                {cert.issuing_organization} · {formatMonth(cert.issue_date)}
                {cert.expiry_date && ` — Expires ${formatMonth(cert.expiry_date)}`}
              </p>
            </div>
            {cert.credential_url && (
              <a
                href={cert.credential_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
