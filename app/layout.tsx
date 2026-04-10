import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

// Display font - used for headings and hero text
// 'variable' injects --font-fraunces as a CSS custom property
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

// Monospace font - used for body, labels, and navigation
// 'variable' injects --font-jetbrains-mono as a CSS custom property
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AkariForge",
  description: "Personal portfolio and developer site by Michael Larsen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Applying both font variables to <html> makes them available
    // anywhere in the document via var(--font-fraunces) etc.
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
