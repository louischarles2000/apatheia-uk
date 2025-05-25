import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { StoreProvider } from "../context/StoreProvider";
import { CurrencyProvider } from "../context/CurrencyContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora"
});

export const metadata: Metadata = {
  title: "Apatheia | Personal Development Resources",
  description: "Professional-grade personal development resources for achievers. Build habits, improve focus, enhance leadership skills, and achieve your goals without overwhelm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans text-text bg-secondary min-h-screen flex flex-col`}>
        <StoreProvider>
          <CurrencyProvider>
            <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            </>
          </CurrencyProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
