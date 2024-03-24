import { Inter } from "next/font/google";

import "@/components/styles/globals.css";
import "@/components/styles/all.css";
import { Navbar } from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Supersales",
  description: "Supersales Landing Page by Nur Asiah ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
