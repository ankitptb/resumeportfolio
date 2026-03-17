"use client";

import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FullProfileValues } from "@/lib/validations/profile";

interface PreferencesFormProps {
  control: Control<FullProfileValues>;
}

export function PreferencesForm({ control }: PreferencesFormProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Job Search Preferences</CardTitle>
          <CardDescription>Configure your availability and expectations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FormField
            control={control}
            name="preferences.current_employment_status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employment Status</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Employed - Open to new opportunities" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="preferences.notice_period"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notice Period</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 30 days" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="preferences.available_start_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Available From</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-4">
            <FormField
              control={control}
              name="preferences.open_to_remote"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Open to Remote Roles</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="preferences.visa_sponsorship_required"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Visa Sponsorship Required</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Salary Expectations</CardTitle>
          <CardDescription>Help recruiters understand your budget (Keep it confidential if preferred).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={control}
              name="preferences.salary.expected_salary_min"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Expected Salary</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="preferences.salary.expected_salary_max"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Expected Salary</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="0" {...field} onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
