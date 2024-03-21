import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./providers/theme-providers";
// import { getServerSession } from "next-auth";
// import NextAuthProvider from "./providers/NextAuthProvider";
// import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cul-TEE-vay-TOR",
  description: "Cultivator Incremental",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <NextAuthProvider> */}
          <Providers>
            <main className="dark">
              <Header />
              {children}
              <Footer />
            </main>
          </Providers>
        {/* </NextAuthProvider> */}
      </body>
    </html>
  );
}