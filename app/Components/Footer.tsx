"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="flex justify-evenly items-center text-[#222222] text-sm border-t border-[#222222]">
      <Link
        href={"/contact"}
        className={`relative flex-1 py-8 text-center text-white ${
          pathname === "/contact"
            ? "bg-gradient-to-r from-red-500 to-pink-600"
            : "hover:bg-gradient-to-r from-red-500 to-pink-600"
        }`}
      >
        CONTACT
        <div
          className="absolute -z-20 min-h-screen bottom-0 right-0 w-full w-0 border-r border-[#222222] animate-clip slower pointer-events-none"
          style={{ animationDuration: ".5s" }}
        ></div>
      </Link>
      <Link
        href={"/skills"}
        className={`relative flex-1 py-8 text-center text-white ${
          pathname === "/skills"
            ? "bg-gradient-to-r from-red-500 to-pink-600"
            : "hover:bg-gradient-to-r from-red-500 to-pink-600"
        }`}
      >
        SKILLS
        <div
          className="absolute -z-20 min-h-screen bottom-0 right-0 w-full w-0 border-r border-[#222222] animate-clip slower pointer-events-none"
          style={{ animationDuration: ".8s" }}
        ></div>
      </Link>
      <Link
        href={"resume"}
        className={`relative flex-1 py-8 text-center text-white ${
          pathname === "/resume"
            ? "bg-gradient-to-r from-red-500 to-pink-600"
            : "hover:bg-gradient-to-r from-red-500 to-pink-600"
        }`}
      >
        RESUME
        <div
          className="absolute -z-20 min-h-screen bottom-0 right-0 w-full w-0 border-r border-[#222222] animate-clip slower pointer-events-none"
          style={{ animationDuration: "1s" }}
        ></div>
      </Link>
      <Link
        href={"/"}
        className={`relative flex-1 py-8 text-center text-white ${
          pathname === "/"
            ? "bg-gradient-to-r from-red-500 to-pink-600"
            : "hover:bg-gradient-to-r from-red-500 to-pink-600"
        }`}
      >
        ALL WORKS
      </Link>
    </footer>
  );
}
