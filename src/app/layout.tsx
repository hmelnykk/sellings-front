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
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
