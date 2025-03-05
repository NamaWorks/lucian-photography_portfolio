import type { Metadata } from "next";
import { Chathura, Lato, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/elements/homeSections/Navbar/Navbar";
// import GridContainer from "@/components/ui/GridContainer/GridContainer";

export const latoSans = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const oswald = Oswald({
  weight: ["200", "300" , "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const chathura = Chathura({
  weight: ["100", "300" , "400", "700", "800"],
  subsets: ["latin"],
});

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