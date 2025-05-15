import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../context/AuthContext";

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
      <body className={`${inter.variable} ${lora.variable} font-sans text-text bg-secondary min-h-screen flex flex-col`}>
        <AuthProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
