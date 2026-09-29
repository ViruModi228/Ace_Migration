// Single source of truth for ACE Migration site content.
// Update the values here — components read from this file, not the other way around.
// Every field marked "PLACEHOLDER" must be replaced with real ACE Migration details before launch.

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
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
  /** Professional registration badges shown on their card (MARN, INZ, QEAC, etc). */
  credentials?: string[];
  /** Two-line punchline shown on their card, e.g. ["Line one.", "Line two."]. */
  tagline: [string, string];
  photo: string;
  email: string;
  linkedin?: string;
};

export type Testimonial = {
  name: string;
  visaType: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
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
    "ACE Migration is an Australia-based team of Registered Migration Agents and Qualified Education Consultants helping students, skilled professionals, families and businesses navigate Australian visas with confidence and expertise over 10+ years.",
  url: "https://www.acemigration.com.au", // PLACEHOLDER — production domain
  phone: "+61494838979",
  phoneDisplay: "0494 838 979",
  email: "contact@acemigration.com.au",
  address: "Level 14, Suite 1409, 530 Little Collins St, Melbourne VIC 3000",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Level+14+Suite+1409+530+Little+Collins+St+Melbourne+VIC+3000&output=embed",
  hours: [{ days: "Monday – Friday", time: "9:00am – 5:00pm" }],
  instagramHandle: "@acme.migration",
  instagramUrl: "https://www.instagram.com/acme.migration/?hl=en",
  maraNumber: "MARN 2117164", // Ravi Shah — registered migration agent
  bookingUrl: "https://app.lodgehq.com.au/book/ace-migration",
  companyLegalName: "ACE MEL Pty Ltd",
  abn: "72 702 050 557",
  omaraRegisterUrl:
    "https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=24e25d2e-7614-eb11-9449-000d3ad152db",
  consumerGuideUrl:
    "https://www.mara.gov.au/get-help-visa-subsite/FIles/consumer_guide_english.pdf",
  codeOfConductUrl:
    "https://www.mara.gov.au/tools-for-agents-subsite/Files/code-of-conduct-march-2022.pdf",
} as const;

// Shown in the About section under the "Who We Are" heading.
export const aboutParagraphs: string[] = [
  "ACE Migration is an Australia-based team of Registered Migration Agents and Qualified Education Consultants helping students, skilled professionals, families and businesses navigate Australian visas with confidence and expertise over 10+ years.",
  "Offshore? We're already there. Our trained India-based team gives offshore clients local support in their own time zone and language. They work directly with our Melbourne agents, so your file moves smoothly without delays.",
];

export const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Agents", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
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
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    icon: "graduation-cap",
  },
  {
    slug: "skilled-migration",
    title: "Skilled Migration",
    blurb:
      "Skills assessments, points tests and nomination strategy for General Skilled Migration visas.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    icon: "briefcase",
  },
  {
    slug: "partner-visas",
    title: "Partner Visas",
    blurb:
      "Evidence-based applications for partner and de facto visas, handled with care and discretion.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop",
    icon: "heart-handshake",
  },
  {
    slug: "employer-sponsorship",
    title: "Employer Sponsorship",
    blurb:
      "Sponsorship, nomination and visa applications for employers and the people they sponsor.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    icon: "building-2",
  },
  {
    slug: "visitor-visas",
    title: "Visitor Visas",
    blurb:
      "Tourist, business and family visitor visas prepared correctly the first time.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    icon: "plane",
  },
  {
    slug: "citizenship",
    title: "Citizenship",
    blurb:
      "Guidance through residency requirements, testing and the citizenship application process.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    icon: "award",
  },
  {
    slug: "education-counselling",
    title: "Education Counselling",
    blurb:
      "Course and institution advice matched to your goals, budget and future visa pathway.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    icon: "book-open-check",
  },
  {
    slug: "appeals-reviews",
    title: "Appeals & Reviews",
    blurb:
      "Merits review and ministerial intervention requests for refused or cancelled visas.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    icon: "scale",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Initial consultation",
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

// Real team members and real photos (public/team/).
export const team: TeamMember[] = [
  {
    slug: "ravi-shah",
    name: "Ravi Shah",
    role: "Migration Agent",
    credentials: ["MARN 2117165", "INZ 202502071"],
    tagline: [
      "The agent you call when it matters most.",
      "Strategy first. Success follows.",
    ],
    photo: "/team/ravi-shah.jpeg",
    email: "ravi@acemigration.com.au",
  },
  {
    slug: "meenal-patel",
    name: "Meenal Patel",
    role: "Education Consultant",
    credentials: ["QEAC T096"],
    tagline: [
      "You bring the ambition. I'll map the pathway.",
      "Your study journey, expertly planned.",
    ],
    photo: "/team/meenal-patel.jpeg",
    email: "meenal@acemigration.com.au",
  },
];

// PLACEHOLDER testimonials — replace with real, consented client feedback.
export const testimonials: Testimonial[] = [
  {
    name: "Sahildeep S.",
    visaType: "Visa Application",
    rating: 5,
    quote:
      "I was extremely satisfied with the entire process. Ravi Shah handled my case with great care, attention to detail, and professionalism. His clear communication made the whole experience much easier.",
  },
  {
    name: "Harmanpreet S.",
    visaType: "Parent Visa",
    rating: 5,
    quote:
      "Ravi Shah handled my parents' visa application professionally from start to finish. He was knowledgeable, responsive, and always kept us updated throughout the process.",
  },
  {
    name: "Jayasri U.",
    visaType: "Temporary Graduate Visa (subclass 485)",
    rating: 5,
    quote:
      "I am sincerely thankful to Ravi Shah for helping us through our 485 visa grant process. His guidance and support made the journey much smoother and gave us confidence throughout.",
  },
  {
    name: "Pooja B.",
    visaType: "Permanent Residency",
    rating: 5,
    quote:
      "I am incredibly grateful to Ravi Shah for his outstanding support throughout my PR application. His guidance, attention to detail, and professionalism made a real difference to our journey.",
  },
  {
    name: "Sukhpreet S.",
    visaType: "Partner Visa",
    rating: 5,
    quote:
      "I was extremely satisfied with the service throughout my partner's spouse visa process. Ravi Shah provided clear guidance, professional support, and made sure we understood every step.",
  },
  {
    name: "Kamalpreet K.",
    visaType: "Migration Consultation",
    rating: 5,
    quote:
      "Ravi Shah provided outstanding support throughout my migration journey. He handled all my enquiries professionally and always guided me in the right direction. I truly appreciate his support.",
  },
  {
    name: "Marion K.",
    visaType: "Visa Application",
    rating: 5,
    quote:
      "I had an amazing experience working with Ravi Shah. His professionalism, efficiency, and clear communication really stood out throughout my visa application process.",
  },
  {
    name: "Umar S.",
    visaType: "Visa Grant",
    rating: 5,
    quote:
      "I recently received my visa grant and am incredibly grateful for Ravi Shah's support. He guided me through every step of my application and was there whenever I needed assistance.",
  },
  {
    name: "Simrandeep K.",
    visaType: "Permanent Residency",
    rating: 5,
    quote:
      "I am thrilled to say that my visa was approved. Ravi Shah's knowledge, support, and hard work helped me through a very difficult stage of my migration journey. I am extremely grateful.",
  },
  {
    name: "Meenal G.",
    visaType: "Partner Visa – Subsequent Temporary Visa",
    rating: 5,
    quote:
      "I was very happy to receive my partner's subsequent temporary visa in just 1.5 months. Ravi Shah thoroughly checked our file and ensured the application was lodged accurately. I really appreciate his efforts.",
  },
];
