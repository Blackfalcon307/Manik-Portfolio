import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manik Sood | Data Analyst & Cloud Engineer",
  description:
    "B.E. CSE student at Chandigarh University. Specializing in Python, AWS cloud services, and data analytics.",
  keywords: [
    "Manik Sood",
    "Data Analyst",
    "Cloud Engineer",
    "AWS",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Manik Sood" }],
  creator: "Manik Sood",
  openGraph: {
    title: "Manik Sood | Data Analyst & Cloud Engineer",
    description: "Python · AWS · Data Analytics · Computer Vision",
    url: "https://maniksood.vercel.app",
    siteName: "Manik Sood Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manik Sood - Data Analyst & Cloud Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manik Sood | Portfolio",
    description: "Python · AWS · Data Analytics · Computer Vision",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
