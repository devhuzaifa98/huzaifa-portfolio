"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type IconState = "none" | "left" | "right";

const isTextElement = (element: EventTarget | null): boolean => {
  const textTags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "LABEL"];
  return element instanceof HTMLElement && textTags.includes(element.tagName);
};

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [iconState, setIconState] = useState<IconState>("none");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      if (isTextElement(event.target)) {
        setIconState("none");
      } else {
        if (event.clientX > window.innerWidth / 2) {
          setIconState("right");
        } else {
          setIconState("left");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor-border"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          backgroundColor: iconState === "none" ? "white" : "transparent",
          mixBlendMode: iconState === "none" ? "difference" : "normal",
        }}
      ></div>
      <Image
        src={"/arrow-left.svg"}
        height={40}
        width={40}
        alt="cursor"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          transform:
            iconState === "left"
              ? "translate(-50%, -50%)"
              : "scaleX(-1) translate(50%,-50%)",
          opacity: iconState === "none" ? 0 : 1,
        }}
        className="custom-cursor"
      ></Image>
    </>
  );
}
