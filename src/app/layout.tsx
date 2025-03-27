import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/elements/Navbar/Navbar";
import { latoSans } from "@/utils/fonts/fonts";

export const metadata: Metadata = {
  title: "Lucian Photography",
  description: "Studio photography that highlights your best angles. Create a portfolio that turns heads. Own the moment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};