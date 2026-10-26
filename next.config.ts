import type { NextConfig } from "next";

// The Pages workflow sets GITHUB_PAGES=true to publish a static export on the custom domain
// https://teamredesign.com (served from the root, so no basePath); other builds are unaffected.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Both rely on a server, so they are off for the static export.
  cacheComponents: !isGitHubPages,
  partialPrefetching: !isGitHubPages,
  ...(isGitHubPages && {
    output: "export",
    trailingSlash: true,
    // The image optimiser needs a server, which static hosting does not have.
    images: { unoptimized: true },
  }),
  // Vercel builds only: send the old *.vercel.app address to the live site on GitHub Pages.
  // Static exports cannot redirect, and the live domain is not on this Vercel project.
  ...(!isGitHubPages && {
    async redirects() {
      return [
        {
          source: "/:path*",
          has: [{ type: "host" as const, value: "teamredesignx.vercel.app" }],
          destination: "https://teamredesign.com/:path*",
          permanent: true,
        },
      ];
    },
  }),
};

export default nextConfig;
