import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProviders } from "./providers/theme-providers";

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "cul-TEE-vay-TOR",
  description: "Cultivator Incremental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviders>
            <Header />
              {children}
            <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}