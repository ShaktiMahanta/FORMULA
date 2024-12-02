/** @type {import('next').NextConfig} */

import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const nextConfig = {
  // Your Next.js configuration options go here
  reactStrictMode: true, // Example option
};

export default withNextra(nextConfig);
