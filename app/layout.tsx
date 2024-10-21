import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Space_Grotesk} from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/global/Navbar";

const inter = Inter({subsets: ['latin']})
const spaceGrotesk = Space_Grotesk({subsets: ['latin'], weight: ['300', '400', '500', '600', '700']})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rent - Get what you desire",
  description: "Rent your desired items with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
