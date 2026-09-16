"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/site-config";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      consent: false,
      company: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.status === 429) {
        setServerError("Too many requests — please try again in a few minutes.");
        return;
      }

      if (!res.ok) {
        setServerError("Something went wrong sending your message. Please try again or call us directly.");
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setServerError("Something went wrong sending your message. Please try again or call us directly.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border bg-card p-10"
      >
        <CheckCircle2 className="size-12 text-gold-ink" />
        <h3 className="font-heading text-xl font-semibold text-foreground">
          Message sent
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Thank you for reaching out. One of our migration agents will be in
          touch within 1–2 business days.
        </p>
        <Button variant="outline" className="mt-2" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users, bots tend to fill every field */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" autoComplete="name" {...register("name")} />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="service">Service of interest</Label>
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="service" className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.slug} value={service.slug}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && (
            <p className="text-sm text-destructive">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={5} {...register("message")} />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <Controller
          name="consent"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="consent"
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked === true)}
            />
          )}
        />
        <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground leading-relaxed">
          I consent to ACE Migration contacting me about my enquiry and
          agree to the{" "}
          <a href="/privacy" className="text-gold-ink underline underline-offset-2">
            privacy policy
          </a>
          .
        </Label>
      </div>
      {errors.consent && (
        <p className="text-sm text-destructive">{errors.consent.message}</p>
      )}

      <AnimatePresence>
        {serverError && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-destructive"
          >
            {serverError}
          </motion.p>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white"
      >
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Send className="size-4" />
        )}
        Send message
      </Button>
    </form>
  );
}
