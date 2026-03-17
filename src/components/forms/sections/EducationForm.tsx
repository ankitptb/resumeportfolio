"use client";

import { Control, useFieldArray } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FullProfileValues } from "@/lib/validations/profile";
import { Trash2, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface EducationFormProps {
  control: Control<FullProfileValues>;
}

export function EducationForm({ control }: EducationFormProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Education</h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({
            degree_level: "Bachelor",
            degree_name: "",
            field_of_study: "",
            institution_name: "",
            institution_location: { country: "", city: "" },
            start_year: new Date().getFullYear() - 4,
            end_year: new Date().getFullYear(),
          })}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Education
        </Button>
      </div>

      <Accordion type="multiple" className="space-y-4">
        {fields.map((field, index) => (
          <AccordionItem key={field.id} value={field.id} className="border rounded-lg bg-card px-4">
            <div className="flex items-center justify-between py-2">
              <AccordionTrigger className="hover:no-underline py-2">
                 <span className="text-left font-medium">
                   {control._formValues.education?.[index]?.degree_name || "New Degree"} 
                   <span className="text-muted-foreground ml-2">
                     at {control._formValues.education?.[index]?.institution_name || "Institution"}
                   </span>
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
                  name={`education.${index}.degree_name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Bachelor of Science" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`education.${index}.field_of_study`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Field of Study</FormLabel>
                      <FormControl>
                        <Input placeholder="Computer Science" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name={`education.${index}.institution_name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institution Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Harvard University" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`education.${index}.degree_level`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="High School">High School</SelectItem>
                          <SelectItem value="Diploma">Diploma</SelectItem>
                          <SelectItem value="Bachelor">Bachelor</SelectItem>
                          <SelectItem value="Master">Master</SelectItem>
                          <SelectItem value="MBA">MBA</SelectItem>
                          <SelectItem value="PhD">PhD</SelectItem>
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
                  name={`education.${index}.start_year`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Year</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`education.${index}.end_year`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Year (or expected)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} value={field.value || ""} onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : null)} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
