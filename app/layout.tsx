
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medicorepharmacy.vercel.app"),

  title: {
    default: "Medicore | Hospital & Pharmacy Management System",
    template: "%s | Medicore",
  },

  description:
    "Manage pharmacy stock, medicine sales, purchases, suppliers, customer credit, and hospital operations with Medicore Hospital & Pharmacy Management System.",

  applicationName: "Medicore",

  keywords: [
    "Medicore",
    "pharmacy management software",
    "medical store software",
    "pharmacy stock management",
    "medicine inventory management",
    "hospital management system",
    "pharmacy billing software",
    "supplier and purchase management",
  ],

  openGraph: {
    title: "Medicore | Smarter Pharmacy Management",
    description:
      "Simplify pharmacy operations with stock management, sales, purchases, supplier records, and customer credit tracking.",
    url: "https://medicorepharmacy.vercel.app",
    siteName: "Medicore",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Medicore | Hospital & Pharmacy Management System",
    description:
      "Manage your pharmacy business smarter with Medicore.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
