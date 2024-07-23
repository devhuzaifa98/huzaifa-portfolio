import "./globals.css";
import { Inter } from "next/font/google";
import CustomCursor from "./Components/CustomCursor";
import { usePathname } from "next/navigation";
import Footer from "./Components/Footer";
import Wave from "./Components/Wave";
import SideBar from "./Components/SideBar";
import Background from "./Components/Background";
import { AnimatePresence } from "framer-motion";

export const metadata = {
  metadataBase: new URL("https://postgres-prisma.vercel.app"),
  title: "Vercel Postgres Demo with Prisma",
  description:
    "A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <main className="min-h-screen flex flex-row">
          <CustomCursor />
          <SideBar />
          <div className="flex flex-col w-full relative">
            <Background />
            <AnimatePresence mode="wait" initial={false}>
              {children}
            </AnimatePresence>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
