"use client";

import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FullProfileValues } from "@/lib/validations/profile";

interface IndustryExtensionsFormProps {
  control: Control<FullProfileValues>;
}

export function IndustryExtensionsForm({ control }: IndustryExtensionsFormProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Healthcare Extension</CardTitle>
          <CardDescription>Professional details for medical practitioners.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormField
            control={control}
            name="industry_extensions.healthcare.medical_license"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Medical License Number</FormLabel>
                <FormControl>
                  <Input placeholder="ML-12345678" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="industry_extensions.healthcare.board_certified"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Board Certified</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Finance Extension</CardTitle>
          <CardDescription>Industry-specific certifications for finance professionals.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormField
            control={control}
            name="industry_extensions.finance.finra_registered"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>FINRA Registered (Series 7, 63, etc.)</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Transportation & Logistics</CardTitle>
          <CardDescription>Licenses for drivers and logistics personnel.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormField
            control={control}
            name="industry_extensions.transportation.commercial_driver_license"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Commercial Driver License (CDL)</FormLabel>
                <FormControl>
                  <Input placeholder="Type A, B, or C License Number" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}
