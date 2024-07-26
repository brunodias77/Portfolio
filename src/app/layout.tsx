import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
const myJetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Portfolio | Bruno Dias",
  description: "Bruno Dias' portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={myJetBrains_Mono.className}>
        <div className="flex flex-col min-h-screen md:min-h-[calc(100vh + 10rem)]">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
