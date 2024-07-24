import { Check, Link } from "react-feather";
import { ProjectData } from "../../utils/projects";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (direction: "left" | "right") => ({
    x: direction === "right" ? "20%" : "-20%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.1, bounce: 0 },
  },
  exit: (direction: "left" | "right") => ({
    x: direction === "right" ? "-20%" : "20%",
    opacity: 0,
    transition: { bounce: 0, duration: 0.1 },
  }),
};

export const Project = ({
  project,
  animationDirection,
  onSwipe,
  setIsDragging,
}: {
  project: ProjectData;
  animationDirection: "left" | "right";
  setIsDragging: (isDragging: boolean) => void;
  onSwipe: (direction: "forward" | "backward") => void;
}) => {
  return (
    <AnimatePresence custom={animationDirection} mode="wait">
      <motion.div
        key={project.name}
        custom={animationDirection}
        variants={variants}
        drag="x"
        dragSnapToOrigin
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(_e, info) => {
          setIsDragging(false);
          const swipe =
            info.offset.x > 100
              ? "forward"
              : info.offset.x < -100
              ? "backward"
              : null;
          if (swipe) {
            onSwipe(swipe);
          }
        }}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex-1 flex flex-col-reverse lg:flex-row items-center justify-center"
      >
        <section className="lg:w-1/2">
          <a
            onClick={(e) => e.stopPropagation()}
            className="text-4xl lg:text-6xl font-bold flex items-center gap-x-2"
            href={project.url}
          >
            {<Link />}
            {project.name}
          </a>
          <div className="flex my-5 gap-3 flex-col lg:flex-row justify-start items-start">
            <div className="gap-3 flex">
              {project.location && (
                <span className="bg-shamrock-400 text-tertiary px-2 py-1 rounded">
                  {project.location}
                </span>
              )}
              <span className="bg-shamrock-400 text-tertiary px-2 py-1 rounded">
                {project.date}
              </span>
            </div>
            <span className="bg-white text-tertiary px-2 py-1 rounded">
              {project.position}
            </span>
          </div>
          <p>{project.description}</p>
          <h1 className="text-2xl font-bold mt-5 mb-2">Responsibilities</h1>
          <ul className="space-y-4">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check className="size-5 lg:size-10" />
                <span className="w-[80%]">{responsibility}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="lg:w-1/2 flex justify-center items-center">
          <img
            alt={project.name}
            src={project.image}
            className="py-5 lg:py-0 lg:w-[80%]"
          />
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
