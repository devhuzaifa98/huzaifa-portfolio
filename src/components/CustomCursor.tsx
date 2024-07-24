import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useLocation } from "react-router-dom";

type IconState = "none" | "left" | "right";

const isTextElement = (element: EventTarget | null): boolean => {
  const textTags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "LABEL", "SPAN", "A"];
  return element instanceof HTMLElement && textTags.includes(element.tagName);
};

export default function CustomCursor() {
  const location = useLocation();
  const [cursorPosition, setCursorPosition] = useState({ x: -50, y: -50 });
  const [iconState, setIconState] = useState<IconState>("left");
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

  const ArrowIcon = iconState === "left" ? ArrowLeft : ArrowRight;

  return (
    <>
      <div
        className="border-2 w-10 h-10 border-white rounded-full fixed z-50  pointer-events-none hidden lg:flex justify-center items-center -translate-x-1/2 -translate-y-1/2"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
          backgroundColor: iconState === "none" ? "white" : "transparent",
          mixBlendMode: iconState === "none" ? "difference" : "normal",
        }}
      >
        {location.pathname !== "/projects" && (
          <span className="w-1 h-1 bg-red-600 rounded-full"></span>
        )}
      </div>
      {location.pathname === "/projects" && (
        <ArrowIcon
          height={40}
          width={40}
          color="white"
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
            opacity: iconState === "none" ? 0 : 1,
          }}
          className="fixed lg:block hidden duration-100 z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </>
  );
}
