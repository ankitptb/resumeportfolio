"use client";

import { Control, useFieldArray } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FullProfileValues } from "@/lib/validations/profile";
import { Trash2, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ProjectsFormProps {
  control: Control<FullProfileValues>;
}

export function ProjectsForm({ control }: ProjectsFormProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Projects & Showcase</h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({
            project_name: "",
            role: "",
            description: "",
            technologies: [],
            tools: [],
            status: "live",
            featured: false,
          })}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <Accordion type="multiple" className="space-y-4">
        {fields.map((field, index) => (
          <AccordionItem key={field.id} value={field.id} className="border rounded-lg bg-card px-4">
            <div className="flex items-center justify-between py-2">
              <AccordionTrigger className="hover:no-underline py-2">
                 <span className="text-left font-medium">
                   {control._formValues.projects?.[index]?.project_name || "New Project"}
                   {control._formValues.projects?.[index]?.featured && <span className="ml-2 bg-emerald/10 text-emerald text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">Featured</span>}
                 </span>
              </AccordionTrigger>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive hover:bg-destructive/10 -mr-2"
                onClick={() => remove(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <AccordionContent className="pt-4 pb-6 space-y-4 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name={`projects.${index}.project_name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Name</FormLabel>
                      <FormControl>
                        <Input placeholder="E-commerce Platform" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`projects.${index}.role`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Lead Developer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={control}
                name={`projects.${index}.description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="What did you build and why?" className="min-h-[100px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name={`projects.${index}.project_url`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`projects.${index}.status`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="live">Live</SelectItem>
                          <SelectItem value="building">Building</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name={`projects.${index}.iframe_url`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Showcase URL (Embed)</FormLabel>
                      <FormControl>
                        <Input placeholder="Figma, YouTube, or PDF link..." {...field} value={field.value || ""} />
                      </FormControl>
                      <FormDescription>Link to embed (e.g., Figma prototype or YouTube video).</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`projects.${index}.iframe_type`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Showcase Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="figma">Figma</SelectItem>
                          <SelectItem value="youtube">YouTube</SelectItem>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={control}
                name={`projects.${index}.featured`}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Feature this project on your profile</FormLabel>
                      <FormDescription>Featured projects are displayed more prominently.</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
