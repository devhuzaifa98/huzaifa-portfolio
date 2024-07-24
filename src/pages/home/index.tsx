import Wave from "../../components/Wave";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col-reverse space-y-2 text-white p-5 lg:flex-row lg:justify-evenly">
      <div
        className="relative text-center lg:text-left max-w-[600px]"
        id="wave-animator"
      >
        <Wave />
        <motion.h1
          initial={{ translateX: "-20%", opacity: 0 }}
          exit={{ translateX: "-20%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-4xl my-5 lg:my-0 lg:text-6xl tracking-widest font-bold relative z-10"
        >
          HUZAIFA JALIL
        </motion.h1>
        <motion.p
          initial={{ translateY: "20%", opacity: 0 }}
          exit={{ translateX: "-20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="tracking-widest text-sm lg:text-lg text-text opacity-0 relative mt-8 lg:mt-14"
        >
          Full Stack Software Engineer with over five years of experience
          specializing in the MERN stack (MongoDB, Express, React.js/Redux,
          Node.js). Expertise in building dynamic web applications using React
          and Next.js for the client side, and Node.js/Express for server-side
          logic. Skills include advanced JavaScript concepts, CSS preprocessors
          (LESS/SASS), MongoDB, SQL, TDD with Jasmine and Karma, and Git.
          Experience with WEB3 advertising, creating 2FA systems with biometric
          verification, and building sports advertisement marketplaces using
          Ruby on Rails and StimulusJS. Proficient in design patterns, OOP, and
          functional programming.
        </motion.p>
      </div>
      <motion.div
        initial={{ translateX: "20%", opacity: 0 }}
        exit={{ translateX: "20%", opacity: 0 }}
        animate={{ translateX: "0%", opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        <img
          src={"/profile.png"}
          alt="profile_pic"
          className="rounded-full size-60 lg:size-80"
        />
      </motion.div>
    </div>
  );
};
