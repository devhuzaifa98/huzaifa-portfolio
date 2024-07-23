"use client";
import Image from "next/image";
import Wave from "./Components/Wave";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-evenly flex-row space-y-2 text-white">
      <div className="relative w-1/3">
        <Wave />
        <motion.h1
          initial={{ translateX: "-100%", opacity: 0 }}
          // exit={{ translateX: "-100vw", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-6xl tracking-widest font-bold relative pointer-events-none z-10"
        >
          HUZAIFA JALIL
        </motion.h1>
        <motion.p
          initial={{ translateY: "100%", opacity: 0 }}
          // exit={{ translateX: "-100vw", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="tracking-widest text-[#a3a3a3] opacity-0 relative pointer-events-none mt-14"
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
      <AnimatePresence>
        <motion.div
          key={"test"}
          initial={{ translateX: "100%", opacity: 0 }}
          exit={{ translateX: "-100vw", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <Image
            src={"/profile.png"}
            alt="profile_pic"
            width={400}
            height={400}
            className="rounded-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
