// Single source of truth for ACE Migration site content.
// Update the values here — components read from this file, not the other way around.
// Every field marked "PLACEHOLDER" must be replaced with real ACE Migration details before launch.

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  icon:
    | "graduation-cap"
    | "briefcase"
    | "heart-handshake"
    | "building-2"
    | "plane"
    | "award"
    | "book-open-check"
    | "scale";
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  maraNumber: string;
  bio: string;
  photo: string;
  email: string;
  linkedin?: string;
};

export type Testimonial = {
  name: string;
  visaType: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  avatar: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const siteConfig = {
  name: "ACE Migration",
  tagline: "Migration & Visa Solutions",
  description:
    "ACE Migration is a Melbourne-based team of registered migration agents helping students, skilled workers, families and businesses navigate Australian visas with confidence.",
  url: "https://www.acemigration.com.au", // PLACEHOLDER — production domain
  // PLACEHOLDER business details — replace with ACE Migration's real details.
  phone: "+61 3 9000 0000",
  phoneDisplay: "(03) 9000 0000",
  email: "info@acemigration.com.au",
  address: "Level 5, 123 Collins Street, Melbourne VIC 3000, Australia",
  mapEmbedUrl:
    "https://www.google.com/maps?q=123+Collins+Street+Melbourne+VIC+3000&output=embed",
  hours: [
    { days: "Monday – Friday", time: "9:00am – 5:30pm AEST" },
    { days: "Saturday", time: "By appointment only" },
    { days: "Sunday", time: "Closed" },
  ],
  instagramHandle: "@acme.migration",
  instagramUrl: "https://www.instagram.com/acme.migration/?hl=en",
  maraNumber: "MARN 1234567", // PLACEHOLDER — ACE Migration's OMARA registration number
  // PLACEHOLDER — replace with the real booking system URL (Calendly, Acuity, etc).
  bookingUrl: "https://calendly.com/ace-migration/consultation",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#process" },
  { label: "Our team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Instagram", href: "#instagram" },
  { label: "Contact", href: "#contact" },
] as const;

// PLACEHOLDER numbers — replace with ACE Migration's real, verifiable figures.
export const stats: Stat[] = [
  { label: "Visas approved", value: 500, suffix: "+" },
  { label: "Years of experience", value: 10, suffix: "+" },
  { label: "Client success rate", value: 98, suffix: "%" },
  { label: "Countries represented", value: 40, suffix: "+" },
];

export const services: Service[] = [
  {
    slug: "student-visas",
    title: "Student Visas",
    blurb:
      "End-to-end support for study visas, from course selection to enrolment and visa lodgement.",
    icon: "graduation-cap",
  },
  {
    slug: "skilled-migration",
    title: "Skilled Migration",
    blurb:
      "Skills assessments, points tests and nomination strategy for General Skilled Migration visas.",
    icon: "briefcase",
  },
  {
    slug: "partner-visas",
    title: "Partner Visas",
    blurb:
      "Evidence-based applications for partner and de facto visas, handled with care and discretion.",
    icon: "heart-handshake",
  },
  {
    slug: "employer-sponsorship",
    title: "Employer Sponsorship",
    blurb:
      "Sponsorship, nomination and visa applications for employers and the people they sponsor.",
    icon: "building-2",
  },
  {
    slug: "visitor-visas",
    title: "Visitor Visas",
    blurb:
      "Tourist, business and family visitor visas prepared correctly the first time.",
    icon: "plane",
  },
  {
    slug: "citizenship",
    title: "Citizenship",
    blurb:
      "Guidance through residency requirements, testing and the citizenship application process.",
    icon: "award",
  },
  {
    slug: "education-counselling",
    title: "Education Counselling",
    blurb:
      "Course and institution advice matched to your goals, budget and future visa pathway.",
    icon: "book-open-check",
  },
  {
    slug: "appeals-reviews",
    title: "Appeals & Reviews",
    blurb:
      "Merits review and ministerial intervention requests for refused or cancelled visas.",
    icon: "scale",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Free initial consultation",
    description:
      "We learn about your goals and assess your options across every relevant visa pathway.",
  },
  {
    title: "Strategy & documentation",
    description:
      "Your agent builds a tailored strategy and prepares every document to Department standard.",
  },
  {
    title: "Lodgement & monitoring",
    description:
      "We lodge your application and monitor it closely, responding fast to any requests.",
  },
  {
    title: "Decision & next steps",
    description:
      "We help you understand the outcome and plan your next step — from a grant to an appeal.",
  },
];

// PLACEHOLDER agents — swap in real photos, names and MARA numbers before launch.
export const team: TeamMember[] = [
  {
    slug: "agent-one",
    name: "Amelia Clarke",
    role: "Principal Migration Agent",
    maraNumber: "MARN 1000001",
    bio: "Amelia has spent over a decade guiding skilled workers and families through complex migration pathways.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&h=800&auto=format&fit=facearea&facepad=2.8",
    email: "amelia@acemigration.com.au",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    slug: "agent-two",
    name: "Daniel Nguyen",
    role: "Senior Migration Agent",
    maraNumber: "MARN 1000002",
    bio: "Daniel specialises in employer sponsorship and skilled visa nominations across every industry.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&h=800&auto=format&fit=facearea&facepad=2.8",
    email: "daniel@acemigration.com.au",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    slug: "agent-three",
    name: "Priya Shah",
    role: "Migration Agent — Student Visas",
    maraNumber: "MARN 1000003",
    bio: "Priya helps students find the right course and visa pathway, from first enquiry to graduation.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&h=800&auto=format&fit=facearea&facepad=2.8",
    email: "priya@acemigration.com.au",
    linkedin: "https://linkedin.com/in/example",
  },
  {
    slug: "agent-four",
    name: "Marcus Webb",
    role: "Migration Agent — Family & Partner Visas",
    maraNumber: "MARN 1000004",
    bio: "Marcus brings a calm, detail-driven approach to some of the most personal visa applications.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&h=800&auto=format&fit=facearea&facepad=2.8",
    email: "marcus@acemigration.com.au",
    linkedin: "https://linkedin.com/in/example",
  },
];

// PLACEHOLDER testimonials — replace with real, consented client feedback.
export const testimonials: Testimonial[] = [
  {
    name: "Ling W.",
    visaType: "Student Visa (subclass 500)",
    rating: 5,
    quote:
      "ACE Migration made the entire process feel simple. Every question was answered within a day and my visa was approved without a single hiccup.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=facearea&facepad=2.5",
  },
  {
    name: "Rohan P.",
    visaType: "Skilled Independent Visa (subclass 189)",
    rating: 5,
    quote:
      "I tried to do my points test myself and got it wrong twice. Amelia sorted it out in one meeting and we lodged within a fortnight.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=facearea&facepad=2.5",
  },
  {
    name: "Carla & James M.",
    visaType: "Partner Visa (subclass 820/801)",
    rating: 5,
    quote:
      "A sensitive process handled with real care. They knew exactly what evidence we needed and never made us feel like a number.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=facearea&facepad=2.5",
  },
  {
    name: "Def Foods Pty Ltd",
    visaType: "Employer Sponsored Visa (subclass 482)",
    rating: 4,
    quote:
      "As a small business, sponsorship felt daunting. Daniel walked our HR team through every step and got our chef approved fast.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&auto=format&fit=facearea&facepad=2.5",
  },
  {
    name: "Aiko T.",
    visaType: "Visitor Visa (subclass 600)",
    rating: 5,
    quote:
      "Quick, professional, and genuinely kind. I'll be back for my parents' visitor visas next year.",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&h=300&auto=format&fit=facearea&facepad=2.5",
  },
  {
    name: "Yusuf K.",
    visaType: "Citizenship Application",
    rating: 5,
    quote:
      "Ten years after my first visa with ACE, they helped me become a citizen. Full circle, and still the same great service.",
    avatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&h=300&auto=format&fit=facearea&facepad=2.5",
  },
];
