import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandMenu } from "@/components/shared/command-menu";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildwithanthony.com"),
  title: {
    default: "Anthony Widjaja — Build With Anthony",
    template: "%s | Anthony Widjaja",
  },
  description:
    "18-year-old founder from Bandung building the trust layer for AI. Documenting the journey publicly.",
  keywords: ["AI", "founder", "AIDAL", "trust layer", "Bandung", "startup"],
  authors: [{ name: "Anthony Widjaja" }],
  creator: "Anthony Widjaja",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildwithanthony.com",
    siteName: "Build With Anthony",
    title: "Anthony Widjaja — Build With Anthony",
    description:
      "18-year-old founder from Bandung building the trust layer for AI.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Widjaja — Build With Anthony",
    description:
      "18-year-old founder from Bandung building the trust layer for AI.",
    creator: "@buildwanthony",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <CommandMenu />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
