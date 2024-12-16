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
        className={`antialiased bg-[#F7FAFC] text-black tracking-wide`}
      >
        <Header />
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
