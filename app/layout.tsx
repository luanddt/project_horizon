import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon Platform"
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`bg-white min-h-screen ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;