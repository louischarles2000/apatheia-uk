import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../context/AuthContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

// Use localFont for Georgia since it's not available in Google Fonts
const georgia = localFont({
  src: [
    {
      path: '../public/fonts/georgia.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/georgia-bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: "--font-georgia"
});

export const metadata: Metadata = {
  title: "Apatheia UK | Therapy & Counseling Resources",
  description: "Professional resources for therapists and counselors to enhance their practice and support their clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${georgia.variable} font-sans text-text bg-secondary min-h-screen flex flex-col`}>
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
