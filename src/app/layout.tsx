import type { Metadata } from "next";
import { Space_Grotesk, Sora,Urbanist } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const urbanist = Urbanist({
    variable: "--font-Urbanist",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });
// In your app/layout.tsx

export const metadata: Metadata = {
  title: "Muhammad Afnan | MERN Stack Developer",
  description:
    "Frontend developer portfolio showcasing Next.js, React, Tailwind, and advanced animations.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}  antialiased`}>
        <div className="" />
        {children}
      </body>
    </html>
  );
}

