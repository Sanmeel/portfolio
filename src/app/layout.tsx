import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanmeel Lagad | Mechanical & Computational Engineer",
  description: "Portfolio and engineering work across robotics, metrology, and mechanics.",
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