import { Check } from "react-feather";
import { ProjectData } from "../../utils/projects";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (direction: "left" | "right") => ({
    x: direction === "right" ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, bounce: 0 },
  },
  exit: (direction: "left" | "right") => ({
    x: direction === "right" ? "-100%" : "100%",
    opacity: 0,
    transition: { bounce: 0, duration: .2 },
  }),
};

export const Project = ({
  project,
  direction,
}: {
  project: ProjectData;
  direction: "left" | "right";
}) => {
  return (
    <AnimatePresence custom={direction} mode="wait">
      <motion.div
        key={project.name}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="w-1/2 p-5"
      >
        <h1 className="text-6xl font-bold">{project.name}</h1>
        <div className="my-5 space-x-3">
          {project.location && (
            <span className="bg-shamrock-400 text-gray-900 px-2 py-1 rounded">
              {project.location}
            </span>
          )}
          <span className="bg-shamrock-400 text-gray-900 px-2 py-1 rounded">
            {project.dates}
          </span>
          <span className="bg-white text-gray-900 px-2 py-1 rounded">
            {project.position}
          </span>
        </div>
        <p>{project.description}</p>
        <h1 className="text-2xl font-bold">Responsibilities</h1>
        <ul>
          {project.responsibilities.map((responsibility, index) => (
            <li key={index} className="flex space-x-2">
              <Check />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};
