import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flexibench — Enterprise Data Annotation Platform",
  description:
    "Modern multimodal annotation platform for AI model training data with quality workflows and integrated tooling.",
  generator: 'v0.app'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <head />
        <body className={`${onest.variable} relative antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
