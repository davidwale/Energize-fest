import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Event Management app",
  description: "Dashboard for event management",
};

export default function RootLayout({ children }) {
  return (

      <html lang="en" className={`${inter.variable} font-sans`}>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
               document.documentElement.classList.add('dark')
               } else {
              document.documentElement.classList.remove('dark')
              }
              `,
            }}
          />
        </head>
        <body className="">
          <main>
            {children}
          </main>
        </body>
      </html>

  );
}
