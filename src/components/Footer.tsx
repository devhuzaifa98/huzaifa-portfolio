import React from "react";
import { BookOpen, Code, Home, Phone } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const links: { url: string; icon: React.FC; name: string }[] = [
    {
      url: "/",
      icon: Home,
      name: "HOME",
    },
    {
      url: "/contact",
      icon: Phone,
      name: "CONTACT",
    },
    {
      url: "/resume",
      icon: BookOpen,
      name: "RESUME",
    },
    {
      url: "/projects",
      icon: Code,
      name: "ALL WORKS",
    },
  ];
  return (
    <footer className="flex justify-evenly items-center text-shamrock-950 text-sm border-b lg:border-t border-border">
      {links.map((link) => (
        <a
          className={`flex-1 py-4 lg:py-8 text-center text-xs lg:text-sm text-white flex items-center justify-center gap-x-2 ${
            pathname === link.url
              ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-tertiary"
              : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-tertiary"
          }`}
          onClick={() => navigate(link.url)}
        >
          {<link.icon />}
          {link.name}
        </a>
      ))}
    </footer>
  );
}
