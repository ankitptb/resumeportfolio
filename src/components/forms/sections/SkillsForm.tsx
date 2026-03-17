"use client";

import { Control, useFieldArray } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FullProfileValues } from "@/lib/validations/profile";
import { Trash2, Plus } from "lucide-react";

interface SkillsFormProps {
  control: Control<FullProfileValues>;
}

export function SkillsForm({ control }: SkillsFormProps) {
  const { fields: languageFields, append: appendLanguage, remove: removeLanguage } = useFieldArray({
    control,
    name: "skills.languages",
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Professional Skills</CardTitle>
          <CardDescription>Enter your skills separated by commas.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormField
            control={control}
            name="skills.technical_skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Technical Skills</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="React, Next.js, TypeScript, Node.js..." 
                    value={field.value.join(", ")}
                    onChange={(e) => field.onChange(e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="skills.tools"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tools</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Figma, Jira, AWS, Docker..." 
                    value={field.value.join(", ")}
                    onChange={(e) => field.onChange(e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="skills.methodologies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Methodologies</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Agile, Scrum, Kanban, Lean Startup..." 
                    value={field.value.join(", ")}
                    onChange={(e) => field.onChange(e.target.value.split(",").map(s => s.trim()).filter(Boolean))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle>Languages</CardTitle>
            <CardDescription>Languages you speak and your proficiency level.</CardDescription>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => appendLanguage({ language: "", proficiency: "Basic" })}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Language
          </Button>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          {languageFields.map((field, index) => (
            <div key={field.id} className="flex gap-4 items-end">
              <FormField
                control={control}
                name={`skills.languages.${index}.language`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Language</FormLabel>
                    <FormControl>
                      <Input placeholder="English" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name={`skills.languages.${index}.proficiency`}
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormLabel>Proficiency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Basic">Basic</SelectItem>
                        <SelectItem value="Conversational">Conversational</SelectItem>
                        <SelectItem value="Fluent">Fluent</SelectItem>
                        <SelectItem value="Native">Native</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-destructive hover:bg-destructive/10"
                onClick={() => removeLanguage(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
