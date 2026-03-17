"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fullProfileSchema, type FullProfileValues } from "@/lib/validations/profile";
import { profileData } from "@/data/profile-data";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { IdentityForm } from "./sections/IdentityForm";
import { ExperienceForm } from "./sections/ExperienceForm";
import { EducationForm } from "./sections/EducationForm";
import { ProjectsForm } from "./sections/ProjectsForm";
import { SkillsForm } from "./sections/SkillsForm";
import { PreferencesForm } from "./sections/PreferencesForm";
import { CertificationsForm } from "./sections/CertificationsForm";
import { ExtrasForm } from "./sections/ExtrasForm";
import { IndustryExtensionsForm } from "./sections/IndustryExtensionsForm";

export function PortfolioForm() {
  const form = useForm<FullProfileValues>({
    resolver: zodResolver(fullProfileSchema),
    defaultValues: {
      ...(profileData as any),
      // Ensure arrays are initialized if missing
      experience: profileData.experience || [],
      education: profileData.education || [],
      projects: profileData.projects || [],
      certifications: profileData.certifications || [],
      achievements: profileData.achievements || [],
      publications: profileData.publications || [],
      domains: profileData.domains || [],
    },
  });

  const onSubmit = (data: FullProfileValues) => {
    console.log("Form submitted:", data);
    toast.success("Portfolio updated successfully!");
    // In a real app, you would save this to a database or local storage
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Edit Portfolio</h1>
            <p className="text-muted-foreground">Manage your career profile and portfolio sections.</p>
          </div>
          <Button type="submit" size="lg">Save Changes</Button>
        </div>

        <Tabs defaultValue="identity" className="flex flex-col md:flex-row gap-6">
          <TabsList className="flex flex-row md:flex-col h-auto bg-transparent border-r justify-start space-x-2 md:space-x-0 md:space-y-1 p-0 w-full md:w-64 overflow-x-auto">
            <TabsTrigger value="identity" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Identity</TabsTrigger>
            <TabsTrigger value="experience" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Experience</TabsTrigger>
            <TabsTrigger value="education" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Education</TabsTrigger>
            <TabsTrigger value="projects" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Projects</TabsTrigger>
            <TabsTrigger value="skills" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Skills</TabsTrigger>
            <TabsTrigger value="certifications" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Certifications</TabsTrigger>
            <TabsTrigger value="extras" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Achievements & Pubs</TabsTrigger>
            <TabsTrigger value="preferences" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Preferences</TabsTrigger>
            <TabsTrigger value="industry" className="justify-start px-4 py-2 hover:bg-muted data-[state=active]:bg-muted">Industry Extensions</TabsTrigger>
          </TabsList>

          <div className="flex-1">
            <TabsContent value="identity" className="mt-0">
               <IdentityForm control={form.control as any} />
            </TabsContent>
            <TabsContent value="experience" className="mt-0">
               <ExperienceForm control={form.control as any} />
            </TabsContent>
            <TabsContent value="education" className="mt-0">
               <EducationForm control={form.control as any} />
            </TabsContent>
            <TabsContent value="projects" className="mt-0">
               <ProjectsForm control={form.control as any} />
            </TabsContent>
            <TabsContent value="skills" className="mt-0">
               <SkillsForm control={form.control as any} />
            </TabsContent>
            <TabsContent value="certifications" className="mt-0">
               <CertificationsForm control={form.control as any} />
            </TabsContent>
            <TabsContent value="extras" className="mt-0">
               <ExtrasForm control={form.control as any} />
            </TabsContent>
            <TabsContent value="preferences" className="mt-0">
               <PreferencesForm control={form.control as any} />
            </TabsContent>
            <TabsContent value="industry" className="mt-0">
               <IndustryExtensionsForm control={form.control as any} />
            </TabsContent>
          </div>
        </Tabs>
      </form>
    </Form>
  );
}
