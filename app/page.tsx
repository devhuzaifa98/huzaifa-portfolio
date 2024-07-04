"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <main className="min-h-screen flex flex-row">
      <div
        className="custom-cursor"
        style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px` }}
      ></div>
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
          <h1 className="text-6xl tracking-widest">HUZAIFA JALIL</h1>
          <h3 className="tracking-widest text-[#a3a3a3]">FRONTEND DEVELOPER</h3>
        </div>
        <footer className="flex justify-evenly items-center text-[#545454] text-sm border-t border-[#545454]">
          <div className="flex-1 py-8 border-[#545454] border-r text-center text-white hover:bg-gradient-to-r from-red-500 to-pink-600">
            CONTACT
          </div>
          <div className="flex-1 py-8 border-[#545454] border-r text-center text-white hover:bg-gradient-to-r from-red-500 to-pink-600">
            SKILLS
          </div>
          <div className="flex-1 py-8 border-[#545454] border-r text-center text-white hover:bg-gradient-to-r from-red-500 to-pink-600">
            RESUME
          </div>
          <div className="flex-1 py-8 text-center text-white bg-gradient-to-r from-red-500 to-pink-600">
            ALL WORKS
          </div>
        </footer>
      </div>
    </main>
  );
}
