import type { Metadata } from "next";
import { Chathura, Lato, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/elements/Navbar/Navbar";
import GridContainer from "@/components/ui/GridContainer/GridContainer";

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
      <body
        className={`${latoSans.className} antialiased`}
      >
      <div className="fixed w-full h-full z-99 top-[0] opacity-25 pr-3 pl-3">
        <GridContainer>
          <div className="w-full h-full h-full border border-l-red-500 border-r-red-500"></div>
          <div className="w-full h-full h-full border border-l-red-500 border-r-red-500"></div>
          <div className="w-full h-full h-full border border-l-red-500 border-r-red-500"></div>
          <div className="w-full h-full h-full border border-l-red-500 border-r-red-500"></div>
          <div className="w-full h-full h-full border border-l-red-500 border-r-red-500"></div>
          <div className="w-full h-full h-full border border-l-red-500 border-r-red-500"></div>
        </GridContainer>
      </div>
        <Navbar/>
          {children}

      </body>
    </html>
  );
};