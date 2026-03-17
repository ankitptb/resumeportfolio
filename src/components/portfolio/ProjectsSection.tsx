"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Maximize2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { profileData } from "@/data/profile-data";

export function ProjectsSection() {
  const [expandedIframe, setExpandedIframe] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <SectionHeader title="Projects & Showcase" id="projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {profileData.projects.map((project, i) => (
          <motion.div
            key={project.project_name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group flex flex-col rounded-xl bg-card p-6 shadow-[0_1px_3px_hsl(var(--foreground)/0.04),0_4px_12px_hsl(var(--foreground)/0.03),0_8px_24px_hsl(var(--foreground)/0.02)] transition-shadow hover:shadow-[0_2px_6px_hsl(var(--foreground)/0.06),0_8px_24px_hsl(var(--foreground)/0.05)]"
          >
            {/* Iframe preview */}
            {project.iframe_url && (
              <div className="relative mb-4 overflow-hidden rounded-lg border border-border bg-muted">
                <iframe
                  src={project.iframe_url}
                  className="h-40 w-full"
                  title={`${project.project_name} prototype`}
                  allowFullScreen
                  loading="lazy"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-7 w-7 bg-background/80 backdrop-blur-sm"
                  onClick={() => setExpandedIframe(project.iframe_url!)}
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            )}

            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">{project.project_name}</h3>
                {project.featured && (
                  <Badge className="bg-emerald text-emerald-foreground text-xs">Featured</Badge>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span
                  className={`h-2 w-2 rounded-full ${
                    project.status === "live" ? "bg-emerald" : "bg-muted-foreground"
                  }`}
                />
                {project.status === "live" ? "Live" : "Building"}
              </div>
            </div>

            <p className="mt-1 text-xs text-muted-foreground">{project.role}</p>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.description}</p>

            {project.outcome && (
              <p className="mt-3 text-xs font-medium text-emerald">↗ {project.outcome}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>

            {project.project_url && (
              <a
                href={project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-blue"
              >
                View Project <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Full-screen iframe modal */}
      {expandedIframe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl rounded-xl border border-border bg-card shadow-xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10"
              onClick={() => setExpandedIframe(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <iframe
              src={expandedIframe}
              className="h-[80vh] w-full rounded-xl"
              title="Prototype preview"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
