import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/Container";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landon Trinh",
  description: "Landon Trinh Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <div className="flex flex-col min-h-screen max-w-xl mx-auto">
            <Header />
            <Container>{children}</Container>
            <Separator className="mt-10" />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
