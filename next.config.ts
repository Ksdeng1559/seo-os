import type { NextConfig } from "next";
import { realpathSync } from "node:fs";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    // Normalize to the real OS path casing so Turbopack's case-sensitive
    // root-containment check resolves node_modules correctly on Windows.
    root: realpathSync.native(process.cwd()),
  },
  async redirects() {
    return [
      { source: "/dashboard", destination: "/office", permanent: false },
    ];
  },
  outputFileTracingExcludes: {
    "/*": [
      "./.env.local",
      "./.env.*.local",
      "./.seo-office/**/*",
      "./AGENTS.md",
      "./CLAUDE.md",
      "./README.md",
      "./docs/**/*",
      "./docs/screenshots/**/*",
      "./eslint.config.*",
      "./next.config.*",
      "./smoke-*.png",
    ],
  },
};

export default nextConfig;
