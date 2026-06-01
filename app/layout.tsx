import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Project Monetizer – Turn Side Projects into Revenue",
  description: "AI-powered monetization analysis for indie developers and makers. Get personalized strategies and step-by-step implementation guides for your projects."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="539481f0-2a27-4199-9316-ef511f89d2cc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen antialiased">{children}</body>
    </html>
  );
}
