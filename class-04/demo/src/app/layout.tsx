import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Tim&apos;s Pet Emporium</h1>
          <Link href="/">Home</Link>
          <Link href="/pets">Pets</Link>
        </header>
        {children}
        <footer>&copy; Wolf Cola</footer>
      </body>
    </html>
  );
}
