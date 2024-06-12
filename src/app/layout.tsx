
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/component/header/Header";
import Footer from "@/app/component/footer/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SWAG MEDIA",
  description: "SWAG MEDIA",
  icons:"./img/favicon-16x16.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Header></Header>
      <div className="main-children">
          {children}
      </div>
      <Footer></Footer>
      </body>
    </html>
  );
}
