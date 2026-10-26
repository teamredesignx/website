import { getSiteUrl, site, socials } from "@/lib/site";

/** Organization structured data, so search engines can tie the site to its profiles. */
export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: site.name,
        url,
        logo: `${url}/android-chrome-512x512.png`,
        email: site.email,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.locality,
          addressCountry: "AU",
        },
        sameAs: socials.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.name,
        inLanguage: "en-AU",
        publisher: { "@id": `${url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
