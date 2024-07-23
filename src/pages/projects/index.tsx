import { useState } from "react";
import { Project } from "../../components/projects/Project";
import { ProjectData } from "../../utils/projects";
import { AnimatePresence } from "framer-motion";

export const Projects = () => {
  const projects = ProjectData;
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const handleClick = (e: any) => {
    const isRight = e.clientX > window.innerWidth / 2;
    if (isRight && currentProject !== projects.length - 1) {
      setDirection("right");
      setCurrentProject((prev) => prev + 1);
    } else if (currentProject > 0 && !isRight) {
      setDirection("left");
      setCurrentProject((prev) => prev - 1);
    }
  };
  return (
    <div
      className="h-full w-full flex items-center justify-center text-white"
      onClick={handleClick}
    >
        <Project project={projects[currentProject]} direction={direction} />
    </div>
  );
};
