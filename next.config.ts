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
};

export default nextConfig;
