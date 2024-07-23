import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type IconState = "none" | "left" | "right";

const isTextElement = (element: EventTarget | null): boolean => {
  const textTags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "LABEL"];
  return element instanceof HTMLElement && textTags.includes(element.tagName);
};

export default function CustomCursor() {
  const location = useLocation();
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
        className="border-2 w-10 h-10 border-white rounded-full fixed z-40 cursor-none -translate-x-1/2 -translate-y-1/2 pointer-events-none flex justify-center items-center"
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
        <img
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
          className="fixed duration-100 z-50 pointer-events-none"
        />
      )}
    </>
  );
}
