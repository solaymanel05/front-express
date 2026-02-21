import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Express",
  description: "store marketing saling product clothes machine",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html  dir="rtl">

      <body
      
      >
        <CartProvider>
          <Navbar/>
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
