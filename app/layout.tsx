import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "COMFORT STUDIO",
  description: "Editorial photography portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-neutral-950">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-20 sm:px-8 sm:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
