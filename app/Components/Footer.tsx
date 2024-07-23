"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="flex justify-evenly items-center text-shamrock-950 text-sm border-t border-[#222222]">
      <Link
        href={"/"}
        className={`flex-1 py-8 text-center text-white ${
          pathname === "/"
            ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-shamrock-950"
            : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-shamrock-950"
        }`}
      >
        HOME
      </Link>
      <Link
        href={"/contact"}
        className={`flex-1 py-8 text-center text-white ${
          pathname === "/contact"
            ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-shamrock-950"
            : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-shamrock-950"
        }`}
      >
        CONTACT
      </Link>
      <Link
        href={"resume"}
        className={`flex-1 py-8 text-center text-white ${
          pathname === "/resume"
            ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-shamrock-950"
            : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-shamrock-950"
        }`}
      >
        RESUME
      </Link>
      <Link
        href={"/projects"}
        className={`flex-1 py-8 text-center text-white ${
          pathname === "/projects"
            ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-shamrock-950"
            : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-shamrock-950"
        }`}
      >
        ALL WORKS
      </Link>
    </footer>
  );
}
