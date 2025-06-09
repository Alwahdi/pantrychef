import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// Import Manrope font from Google Fonts using @next/font/google
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PantryChef",
  description: "PantryChef helps you manage your pantry and discover recipes.",
  keywords: [
    "PantryChef",
    "pantry",
    "recipes",
    "kitchen",
    "food",
    "cooking",
    "ingredients",
    "meal planning",
  ],
  authors: [{ name: "PantryChef Team" }],
  creator: "PantryChef",
  openGraph: {
    title: "PantryChef",
    description:
      "PantryChef helps you manage your pantry and discover recipes.",
    url: "https://your-domain.com",
    siteName: "PantryChef",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PantryChef",
    description:
      "PantryChef helps you manage your pantry and discover recipes.",
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={manrope.variable}
          style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
