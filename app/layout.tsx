import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: {
    default: "نور — إدارة ذكية لحلقات القرآن والجمعيات التعليمية",
    template: "%s | نور",
  },
  description:
    "منصة رقمية متكاملة تهدف للارتقاء بإدارة مراكز تحفيظ القرآن الكريم والجمعيات التعليمية من خلال تقنيات حديثة وحلول ذكية.",
  keywords: [
    "تحفيظ القرآن",
    "إدارة حلقات",
    "منصة تعليمية",
    "نور",
    "جمعيات خيرية",
    "قرآن كريم",
    "إدارة المساجد",
    "تعليم القرآن",
  ],
  creator: "فريق نور",
  openGraph: {
    type: "website",
    locale: "ar_LY",
    siteName: "نور",
    title: "نور — إدارة ذكية لحلقات القرآن",
    description:
      "المنصة الرقمية الأولى لإدارة حلقات تحفيظ القرآن والجمعيات التعليمية في المنطقة.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "نور — منصة الإدارة الذكية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "نور — إدارة ذكية لحلقات القرآن",
    description: "الارتقاء بإدارة مراكز تحفيظ القرآن من خلال تقنيات حديثة.",
    images: ["/og-image.png"],
    creator: "@AlFalah7Center",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
