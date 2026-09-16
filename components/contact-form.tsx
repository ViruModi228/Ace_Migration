"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
} from "lucide-react";
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

const fieldsContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const field: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

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
        initial={{ opacity: 0, y: 12, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex flex-col items-center text-center gap-3 rounded-2xl border border-gold/30 bg-card p-10"
      >
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
        >
          <CheckCircle2 className="size-12 text-gold-ink" />
        </motion.div>
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
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      variants={fieldsContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
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
        <motion.div variants={field} className="space-y-1.5">
          <Label htmlFor="name" className="text-white">Full name</Label>
          <div className="relative">
            <User className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input id="name" autoComplete="name" className="pl-8" {...register("name")} />
          </div>
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </motion.div>
        <motion.div variants={field} className="space-y-1.5">
          <Label htmlFor="email" className="text-white">Email</Label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              autoComplete="email"
              className="pl-8"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <motion.div variants={field} className="space-y-1.5">
          <Label htmlFor="phone" className="text-white">Phone</Label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              className="pl-8"
              {...register("phone")}
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </motion.div>
        <motion.div variants={field} className="space-y-1.5">
          <Label htmlFor="service" className="text-white">Service of interest</Label>
          <Controller
            name="service"
            control={control}
            render={({ field: f }) => (
              <Select value={f.value} onValueChange={f.onChange}>
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
        </motion.div>
      </div>

      <motion.div variants={field} className="space-y-1.5">
        <Label htmlFor="message" className="text-white">Message</Label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-2.5 top-3 size-4 text-muted-foreground" />
          <Textarea id="message" rows={5} className="pl-8" {...register("message")} />
        </div>
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </motion.div>

      <motion.div variants={field} className="flex items-start gap-3">
        <Controller
          name="consent"
          control={control}
          render={({ field: f }) => (
            <Checkbox
              id="consent"
              checked={f.value}
              onCheckedChange={(checked) => f.onChange(checked === true)}
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
      </motion.div>
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

      <motion.div variants={field}>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gold text-gold-foreground hover:bg-gold/90 shadow-lg shadow-gold/10 hover:shadow-gold/25 transition-shadow group"
        >
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <Sparkles className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </>
          )}
          Send message
        </Button>
      </motion.div>
    </motion.form>
  );
}
