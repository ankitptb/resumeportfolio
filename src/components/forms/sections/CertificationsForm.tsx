"use client";

import { Control, useFieldArray } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FullProfileValues } from "@/lib/validations/profile";
import { Trash2, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface CertificationsFormProps {
  control: Control<FullProfileValues>;
}

export function CertificationsForm({ control }: CertificationsFormProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "certifications",
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Certifications</h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({
            name: "",
            issuing_organization: "",
            issue_date: "",
          })}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Certification
        </Button>
      </div>

      <Accordion type="multiple" className="space-y-4">
        {fields.map((field, index) => (
          <AccordionItem key={field.id} value={field.id} className="border rounded-lg bg-card px-4">
            <div className="flex items-center justify-between py-2">
              <AccordionTrigger className="hover:no-underline py-2">
                 <span className="text-left font-medium">
                   {control._formValues.certifications?.[index]?.name || "New Certification"}
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
                  name={`certifications.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Certification Name</FormLabel>
                      <FormControl>
                        <Input placeholder="AWS Certified Solutions Architect" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`certifications.${index}.issuing_organization`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Issuing Organization</FormLabel>
                      <FormControl>
                        <Input placeholder="Amazon Web Services" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name={`certifications.${index}.issue_date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Issue Date</FormLabel>
                      <FormControl>
                        <Input type="month" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name={`certifications.${index}.expiry_date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expiry Date (Optional)</FormLabel>
                      <FormControl>
                        <Input type="month" {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={control}
                name={`certifications.${index}.credential_url`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Credential URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://..." {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
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
