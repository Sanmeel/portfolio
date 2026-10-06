import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// If deploying to a project repository (e.g., https://username.github.io/my-portfolio),
// set basePath to your repository name: "/my-portfolio".
// If deploying to a user site (e.g., https://username.github.io), leave it as "".
const repoName = ""; // e.g. "/my-portfolio" if applicable

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd && repoName ? repoName : "",
  assetPrefix: isProd && repoName ? repoName : "",
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;