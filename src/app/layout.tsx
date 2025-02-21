import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

const dmSans = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Main - Exnytex",
  description:
    "Empowering traders with instant funding, advanced tools, and seamless access to financial success. Your journey to unlimited potential starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-[#0d1114] text-white`}>
        {children}
      </body>
    </html>
  );
}
