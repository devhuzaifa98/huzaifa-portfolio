// import Wave from "./Components/Wave";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Skills } from "../../utils/skills";

export default function Resume() {
  return (
    <div className="w-full h-full flex items-center justify-evenly lg:flex-row space-y-2 text-white flex-col p-5 gap-x-5">
      <section className="flex flex-col justify-center items-center max-w-[500px]">
        <motion.img
          initial={{ translateY: "-20%", opacity: 0 }}
          exit={{ translateY: "-20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 0.1 }}
          src={"/profile.png"}
          alt="profile_pic"
          className="rounded-full size-60"
        />
        <motion.h1
          initial={{ translateX: "-20%", opacity: 0 }}
          exit={{ translateX: "-20%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.1 }}
          className="text-4xl tracking-widest font-bold mt-5"
        >
          HUZAIFA JALIL
        </motion.h1>
        <motion.h1
          initial={{ translateY: "20%", opacity: 0 }}
          exit={{ translateY: "20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.1 }}
          className="text-2xl font-bold mb-2"
        >
          About me
        </motion.h1>
        <motion.p
          initial={{ translateY: "20%", opacity: 0 }}
          exit={{ translateY: "20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.1 }}
          className="tracking-widest text-sm lg:text-lg text-text text-center"
        >
          Full Stack Software Engineer with over five years of experience
          specializing in the MERN stack (MongoDB, Express, React.js/Redux,
          Node.js). Expertise in building dynamic web applications using React
          and Next.js for the client side, and Node.js/Express for server-side
          logic.
        </motion.p>
      </section>
      <section className=" max-w-[600px] space-y-4">
        <motion.h1
          initial={{ translateY: "-40%", opacity: 0 }}
          exit={{ translateY: "-40%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.4 }}
          className="text-2xl font-bold mt-10"
        >
          Skills
        </motion.h1>
          {Object.keys(Skills).map((category, index) => (
            <motion.div
              initial={{ translateX: "20%", opacity: 0 }}
              exit={{ translateX: "20%", opacity: 0 }}
              animate={{ translateX: "0%", opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.45 + index * 0.05 }}
              key={category}
            >
              <h3 className="text-md font-bold mb-2">{category}</h3>
              <ul className="list-inside flex flex-wrap w-full gap-x-4 gap-y-2">
                {Skills[category].map((skill) => (
                  <li
                    key={skill}
                    className="text-white hover:bg-shamrock-400 hover:text-tertiary text-sm bg-tertiary px-6 py-2 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        <motion.button
          initial={{ translateY: "20%", opacity: 0 }}
          exit={{ translateY: "20%", opacity: 0 }}
          animate={{ translateY: "0%", opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.5 }}
          className="bg-shamrock-400 rounded-full px-4 py-2 text-tertiary font-bold"
        >
          <Link to="/Huzaifa Jalil Full Stack Resume.pdf" target="_blank" download>
            Download Resume
          </Link>
        </motion.button>
      </section>
    </div>
  );
}
