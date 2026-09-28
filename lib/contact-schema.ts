import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9()\-\s]+$/, "Please enter a valid phone number.")
    .refine((val) => (val.match(/\d/g)?.length ?? 0) >= 8, {
      message: "Please enter a valid phone number.",
    })
    .refine((val) => (val.match(/\d/g)?.length ?? 0) <= 15, {
      message: "Please enter a valid phone number.",
    }),
  service: z.string().min(1, "Please select a service."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(2000),
  // Honeypot — real users never fill this in. Any value here means it's a bot.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
