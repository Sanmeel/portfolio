import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const metadata: Metadata = {
  title: "Sanmeel Vijay Lagad | Mechanical & Computational Engineer",
  description:
    "Portfolio and engineering work across robotics, metrology, and mechanics.",
  icons: {
    icon: `${basePath}/icon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FBFBFA] text-stone-900">
        {children}
      </body>
    </html>
  );
}