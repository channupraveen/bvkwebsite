import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server accept the page when opened via the network address
  allowedDevOrigins: ["172.20.192.1"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      // Only the Tailwind entry file goes through the Tailwind loader;
      // site.css uses the normal CSS pipeline, which hot-reloads reliably.
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
