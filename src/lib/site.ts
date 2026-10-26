export const site = {
  name: "Team Redesign",
  handle: "@teamredesignx",
  title: "Team Redesign | Website redesign studio",
  description:
    "Team Redesign is a website redesign studio in Sydney. We redesign and architect websites so visitors stay, click, and buy.",
  email: "contact@teamredesign.com",
  locality: "Sydney",
  country: "Australia",
} as const;

/** Production URL on Vercel, an explicit override, or localhost in development. */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/teamredesignx/" },
  { label: "X", href: "https://x.com/teamredesignx" },
  { label: "Instagram", href: "https://www.instagram.com/teamredesignx/" },
  { label: "Facebook", href: "https://www.facebook.com/teamredesignx/" },
  { label: "YouTube", href: "https://www.youtube.com/@teamredesignx" },
  { label: "TikTok", href: "https://www.tiktok.com/@teamredesignx" },
  { label: "GitHub", href: "https://github.com/teamredesignx" },
] as const;

/** A mailto link that opens a new message ready to fill in. */
export function mailto(subject = "Website redesign", body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  // URLSearchParams encodes spaces as "+", which mail clients do not decode.
  return `mailto:${site.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export const sendSiteLink = mailto(
  "Website redesign",
  "Hi Team Redesign, here is my website: ",
);
