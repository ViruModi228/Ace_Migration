import {
  GraduationCap,
  Briefcase,
  HeartHandshake,
  Building2,
  Plane,
  Award,
  BookOpenCheck,
  Scale,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/site-config";

export const serviceIcons: Record<Service["icon"], LucideIcon> = {
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  "heart-handshake": HeartHandshake,
  "building-2": Building2,
  plane: Plane,
  award: Award,
  "book-open-check": BookOpenCheck,
  scale: Scale,
};
