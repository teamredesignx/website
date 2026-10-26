export const hero = {
  lite: "Your website has",
  bold: "3 seconds.",
  lead: "We redesign and architect websites so visitors stay, click, and buy.",
  cta: "Send us your site",
  secondary: "See recent redesigns",
} as const;

export const compare = {
  label:
    "Before and after comparison of an example plumbing website. Drag or use the arrow keys to compare.",
  before: "Nine menu items, no clear action.",
  after: "One promise, one next step.",
} as const;

export const checks = [
  {
    question: "Does your hero say what you do in one line?",
    answer:
      "Show it to someone for five seconds. If they can't tell you what the business does, the line needs rewriting.",
  },
  {
    question: "Is the next step obvious?",
    answer:
      "One clear action on every screen. Visitors shouldn't have to hunt for how to contact you or buy.",
  },
  {
    question: "Does it load before patience runs out?",
    answer:
      "A page can look great and still lose the visitor before the hero appears. Speed is part of the design.",
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  summary: string;
  href: string;
  image: string;
  alt: string;
};

export const projects: readonly Project[] = [
  {
    slug: "imperial-law",
    name: "Imperial Law",
    summary: "Bilingual law firm website",
    href: "https://imperial-law-demo.vercel.app",
    image: "/work/imperial-law.jpg",
    alt: "Imperial Law website homepage",
  },
  {
    slug: "murshida",
    name: "Murshida Portfolio",
    summary: "Personal portfolio",
    href: "https://murshida-portfolio-redesign.vercel.app",
    image: "/work/murshida.jpg",
    alt: "Murshida Portfolio homepage",
  },
  {
    slug: "makura",
    name: "Makura Creations",
    summary: "Creative studio website",
    href: "https://makura-site.vercel.app/",
    image: "/work/makura.jpg",
    alt: "Makura Creations homepage",
  },
  {
    slug: "digital-pragati",
    name: "Digital Pragati",
    summary: "Lead generation sites",
    href: "https://digital-pragati.vercel.app",
    image: "/work/digital-pragati.jpg",
    alt: "Digital Pragati homepage",
  },
  {
    slug: "sitebazaar",
    name: "SiteBazaar",
    summary: "Website marketplace",
    href: "https://sitebazaar.vercel.app",
    image: "/work/sitebazaar.jpg",
    alt: "SiteBazaar homepage",
  },
];

export const steps = [
  { name: "Audit", text: "Find what's costing you visitors." },
  { name: "Architect", text: "Plan the structure and the path to action." },
  { name: "Design", text: "Clear layouts and visuals that fit your brand." },
  { name: "Build", text: "Fast code that is easy to maintain." },
  { name: "Launch", text: "Go live, then check it works as planned." },
] as const;

export const stack = {
  label: "What we build with",
  text: "Next.js, React, TypeScript, Tailwind, GSAP, Three.js, Astro, Figma, and Vercel. We redesign sites in various languages, English and Nepali included.",
} as const;

export const cta = {
  lite: "Send us your URL.",
  bold: "We'll tell you the first thing we'd fix.",
  button: "Send us your site",
} as const;
