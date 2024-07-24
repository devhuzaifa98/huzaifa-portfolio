import { useRef, useState } from "react";
import { Project } from "../../components/projects/Project";
import { ProjectData } from "../../utils/projects";

export const Projects = () => {
  const projects = ProjectData;
  const [currentProject, setCurrentProject] = useState(0);
  const [animationDirection, setAnimationanimationDirection] = useState<
    "left" | "right"
  >("right");
  const preventClickRef = useRef(false);

  const handleClick = (e: any) => {
    if (window.innerWidth < 1024) return; //prevent click navigation on mobile
    if (preventClickRef.current) return (preventClickRef.current = false);
    const isRight = e.clientX > window.innerWidth / 2;
    if (isRight && currentProject !== projects.length - 1) {
      setAnimationanimationDirection("right");
      setCurrentProject((prev) => prev + 1);
    } else if (currentProject > 0 && !isRight) {
      setAnimationanimationDirection("left");
      setCurrentProject((prev) => prev - 1);
    }
  };

  const handleSwipe = (direction: "forward" | "backward") => {
    if (currentProject < projects.length - 1 && direction === "backward") {
      setCurrentProject((prev) => prev + 1);
      setAnimationanimationDirection("right");
    } else if (currentProject > 0 && direction === "forward") {
      setCurrentProject((prev) => prev - 1);
      setAnimationanimationDirection("left");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="h-full overflow-y-auto overflow-x-hidden text-white flex flex-col items-center z-10 p-5"
    >
      <ul className="space-x-3 flex m-5">
        {Array.from({ length: projects.length }).map((_item, index) => (
          <li
            key={index}
            className={`border-2 border-white size-5 rounded-full ${
              currentProject === index ? "bg-white" : ""
            }`}
          ></li>
        ))}
      </ul>
      <Project
        project={projects[currentProject]}
        animationDirection={animationDirection}
        setIsDragging={(isDragging) => (preventClickRef.current = isDragging)}
        onSwipe={handleSwipe}
      />
    </div>
  );
};
