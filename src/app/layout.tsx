import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const metadata: Metadata = {
  title: "Sanmeel Vijay Lagad | Mechanical & Computational Engineer",
  description:
    "Portfolio and engineering work across robotics, metrology, and mechanics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/icon.svg?v=${Date.now()}`} type="image/svg+xml" />
      </head>
      <body className="antialiased bg-[#FBFBFA] text-stone-900">
        {children}
      </body>
    </html>
  );
}