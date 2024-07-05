import "./globals.css";
import { Inter } from "next/font/google";
import CustomCursor from "./Components/CustomCursor";
import { usePathname } from "next/navigation";
import Footer from "./Components/Footer";

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
          <div className="flex-1">
            <div className="h-screen border-[#545454] border-r w-14 flex justify-between flex-col py-20 text-[#545454] text-sm">
              <h1 className="-rotate-90 whitespace-nowrap">LinkedIn</h1>
              <h1 className="-rotate-90 whitespace-nowrap">Facebook</h1>
              <h1 className="-rotate-90 whitespace-nowrap">Instagram</h1>
              <h1 className="-rotate-90 mt-48 whitespace-nowrap tracking-wide">
                Huzaifa Jalil @2024
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full h-full flex items-center justify-center flex-col space-y-2 text-white">
              {children}
            </div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
