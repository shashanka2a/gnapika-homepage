import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Manrope } from "next/font/google";
import "./globals.css";
import "@/index.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gnapika - Personalized Wooden Gifts",
  description: "Create lasting memories with personalized wooden gifts. Handcrafted with love, designed to tell your unique story.",
  keywords: ["wooden gifts", "personalized", "handcrafted", "custom", "memories", "wood engraving"],
  authors: [{ name: "Gnapika" }],
  openGraph: {
    title: "Gnapika - Personalized Wooden Gifts",
    description: "Create lasting memories with personalized wooden gifts. Handcrafted with love, designed to tell your unique story.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gnapika - Personalized Wooden Gifts",
    description: "Create lasting memories with personalized wooden gifts. Handcrafted with love, designed to tell your unique story.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
