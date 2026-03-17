import * as z from "zod";

export const careerLevelEnum = z.enum(["Entry", "Mid", "Senior", "Lead", "Manager", "Director", "Executive"]);
export const employmentTypeEnum = z.enum(["Full-time", "Part-time", "Contract", "Freelance", "Internship", "Apprenticeship"]);
export const remoteTypeEnum = z.enum(["Remote", "Hybrid", "Onsite"]);
export const degreeLevelEnum = z.enum(["High School", "Diploma", "Bachelor", "Master", "MBA", "PhD"]);
export const languageProficiencyEnum = z.enum(["Basic", "Conversational", "Fluent", "Native"]);

export const addressSchema = z.object({
  country: z.string().min(1, "Country is required"),
  state: z.string().optional(),
  city: z.string().min(1, "City is required"),
  postal_code: z.string().optional(),
});

export const profileSchema = z.object({
  user_id: z.string().optional(),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  preferred_name: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  about_video_link: z.string().url("Invalid URL").optional().or(z.literal("")),
  headline: z.string().min(1, "Headline is required"),
  summary: z.string().min(10, "Summary should be at least 10 characters"),
  career_level: careerLevelEnum,
  primary_domain: z.string().min(1, "Primary domain is required"),
  linkedin_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  github_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  portfolio_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  personal_website: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const domainSchema = z.object({
  domain_name: z.string().min(1, "Domain name is required"),
  primary: z.boolean().default(false),
});

export const experienceSchema = z.object({
  id: z.string().optional(),
  job_title: z.string().min(1, "Job title is required"),
  company_name: z.string().min(1, "Company name is required"),
  industry: z.string().optional(),
  domain: z.string().optional(),
  employment_type: employmentTypeEnum,
  location: z.object({
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
    remote_type: remoteTypeEnum,
  }),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().nullable().optional(),
  currently_working: z.boolean().default(false),
  description: z.string().min(10, "Description is required"),
  responsibilities: z.array(z.string()).optional(),
  achievements: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  tools: z.array(z.string()).optional(),
  linked_skills: z.array(z.string()).optional(),
  team_size_managed: z.number().min(0).optional(),
});

export const educationSchema = z.object({
  degree_level: degreeLevelEnum,
  degree_name: z.string().min(1, "Degree name is required"),
  field_of_study: z.string().min(1, "Field of study is required"),
  institution_name: z.string().min(1, "Institution name is required"),
  institution_location: z.object({
    country: z.string().min(1, "Country is required"),
    city: z.string().min(1, "City is required"),
  }),
  start_year: z.number().min(1900).max(new Date().getFullYear()),
  end_year: z.number().optional().nullable(),
  achievements: z.array(z.string()).optional(),
  grade: z.string().optional(),
  honors: z.string().optional(),
});

export const skillSchema = z.object({
  technical_skills: z.array(z.string()).default([]),
  tools: z.array(z.string()).default([]),
  methodologies: z.array(z.string()).default([]),
  soft_skills: z.array(z.string()).default([]),
  languages: z.array(z.object({
    language: z.string(),
    proficiency: languageProficiencyEnum,
  })).default([]),
});

export const certificationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  issuing_organization: z.string().min(1, "Issuing organization is required"),
  description: z.string().optional(),
  issue_date: z.string().min(1, "Issue date is required"),
  expiry_date: z.string().optional().nullable(),
  credential_url: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const projectSchema = z.object({
  project_name: z.string().min(1, "Project name is required"),
  role: z.string().min(1, "Role is required"),
  description: z.string().min(10, "Description is required"),
  technologies: z.array(z.string()).default([]),
  tools: z.array(z.string()).default([]),
  project_url: z.string().url("Invalid URL").optional().or(z.literal("")),
  iframe_url: z.string().optional(),
  iframe_type: z.enum(["figma", "youtube", "pdf", "other"]).optional(),
  outcome: z.string().optional(),
  featured: z.boolean().default(false),
  status: z.enum(["live", "building"]).default("live"),
});

export const achievementSchema = z.object({
  title: z.string().min(1, "Title is required"),
  issuer: z.string().min(1, "Issuer is required"),
  date: z.string().min(1, "Date is required"),
  description: z.string().optional(),
});

export const publicationSchema = z.object({
  title: z.string().min(1, "Title is required"),
  platform: z.string().min(1, "Platform is required"),
  publication_date: z.string().min(1, "Publication date is required"),
  link: z.string().url("Invalid URL").optional().or(z.literal("")),
});

export const preferencesSchema = z.object({
  current_employment_status: z.string().min(1, "Status is required"),
  notice_period: z.string().optional(),
  current_location: z.object({
    country: z.string().min(1, "Country is required"),
    state: z.string().optional(),
    city: z.string().min(1, "City is required"),
  }),
  preferred_locations: z.array(z.string()).default([]),
  open_to_remote: z.boolean().default(false),
  visa_sponsorship_required: z.boolean().default(false),
  preferred_job_titles: z.array(z.string()).default([]),
  preferred_industries: z.array(z.string()).default([]),
  salary: z.object({
    current_salary: z.object({
      base: z.number().min(0).optional(),
      bonus: z.number().min(0).optional(),
      esop_value: z.number().min(0).optional(),
      currency: z.string().default("USD"),
    }).optional(),
    expected_salary_min: z.number().min(0).optional(),
    expected_salary_max: z.number().min(0).optional(),
  }).optional(),
  employment_type_preference: z.array(employmentTypeEnum).default([]),
  open_to_contract_roles: z.boolean().default(false),
  available_start_date: z.string().optional(),
});

export const industryExtensionsSchema = z.object({
  healthcare: z.object({
    medical_license: z.string().optional(),
    board_certified: z.boolean().optional(),
    immunization_status: z.string().optional(),
  }).optional(),
  finance: z.object({
    finra_registered: z.boolean().optional(),
  }).optional(),
  transportation: z.object({
    commercial_driver_license: z.string().optional(),
  }).optional(),
});

export const fullProfileSchema = z.object({
  profile: profileSchema,
  address: addressSchema,
  domains: z.array(domainSchema).default([]),
  experience: z.array(experienceSchema).default([]),
  education: z.array(educationSchema).default([]),
  skills: skillSchema,
  certifications: z.array(certificationSchema).default([]),
  projects: z.array(projectSchema).default([]),
  achievements: z.array(achievementSchema).default([]),
  publications: z.array(publicationSchema).default([]),
  preferences: preferencesSchema,
  industry_extensions: industryExtensionsSchema.optional(),
});

export type FullProfileValues = z.infer<typeof fullProfileSchema>;
