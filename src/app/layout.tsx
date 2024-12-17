import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header/Header";
import ModalBase from "@/components/ui/Modal/Modal";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Romcio Shop",
  description: "description",
};

const montserrat = localFont({
  src: "./../fonts/montserrat.ttf",
  variable: "--font-montserrat",
  weight: "100 500 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${montserrat.variable} bg-[#F7FAFC] text-black tracking-wide`}
      >
        <ModalBase />
        <Header />
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
