import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number.")
    .max(30),
  service: z.string().min(1, "Please select a service."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more (at least 10 characters).")
    .max(2000),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must agree before we can contact you.",
    }),
  // Honeypot — real users never fill this in. Any value here means it's a bot.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
