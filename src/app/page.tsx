"use client";

import { NavBar } from "@/components/portfolio/NavBar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { RecommendationsSection } from "@/components/portfolio/RecommendationsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { PublicationsSection } from "@/components/portfolio/PublicationsSection";
import { PreferencesSection } from "@/components/portfolio/PreferencesSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="dot-pattern min-h-screen bg-background">
      <NavBar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <RecommendationsSection />
        <SkillsSection />
        <CertificationsSection />
        <AchievementsSection />
        <PublicationsSection />
        <PreferencesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
