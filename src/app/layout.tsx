import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header/Header";

export const metadata: Metadata = {
  title: "Romcio Shop",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#F7FAFC] tracking-wide`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
