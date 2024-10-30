import Navbar from "./components/Common/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Energize fest",
  description: "Energize central website for events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head></head>
      <body className="">
        <Navbar />
        <main className="mt-0">{children}</main>
      </body>
    </html>
  );
}
