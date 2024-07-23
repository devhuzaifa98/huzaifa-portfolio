// import Wave from "./Components/Wave";
import { motion } from "framer-motion";

export default function Resume() {
  const technicalSkills: { [key: string]: string[] } = {
    Backend: [
      "Nodejs",
      "Express.js",
      "ROR",
      "Python",
      "GraphQL",
      "RuboCop",
      "RSpec",
      "lefthook",
      "Redis",
      "Sidekiq",
      "Heroku",
      "AWS",
      "Lambda",
      "MongoDB",
      "Dynamodb",
    ],
    Frontend: [
      "React.Js",
      "Next.Js",
      "Vue.js",
      "Stimulus.js",
      "Reflex",
      "Hotwire-Turbo",
      "Bootstrap",
      "Tailwind",
      "UIKIT",
    ],
    Others: [
      "Stripe",
      "Twilio",
      "SendGrid",
      "Postmark",
      "Pusher",
      "Auth0",
      "Google Maps",
      "GPT-3",
      "GPT-4",
      "Agile",
      "Scrum",
      "Jira",
      "CircleCI",
    ],
  };

  return (
    <div className="w-full h-full flex items-center justify-evenly lg:flex-row space-y-2 text-white flex-col">
      <motion.section
        initial={{ translateX: "-100%", opacity: 0 }}
        exit={{ translateX: "-100%", opacity: 1 }}
        animate={{ translateX: "0%", opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col justify-center items-center h-full lg:w-1/2"
      >
        <img
          src={"/profile.png"}
          alt="profile_pic"
          className="rounded-full w-60"
        />
        <h1 className="text-5xl tracking-widest font-bold my-5">
          HUZAIFA JALIL
        </h1>
        <h1 className="text-2xl font-bold mb-2">About me</h1>
        <p className="tracking-widest text-[#a3a3a3] w-1/2 text-center">
          Full Stack Software Engineer with over five years of experience
          specializing in the MERN stack (MongoDB, Express, React.js/Redux,
          Node.js). Expertise in building dynamic web applications using React
          and Next.js for the client side, and Node.js/Express for server-side
          logic.
        </p>
      </motion.section>
      <motion.section
        initial={{ translateX: "100%", opacity: 0 }}
        exit={{ translateX: "100%", opacity: 0 }}
        animate={{ translateX: "0%", opacity: 1 }}
        transition={{ duration: 0.2}}
        className="lg:w-1/2 pr-20 pl-5"
      >
        <h1 className="text-2xl font-bold mb-2 mt-10">Skills</h1>
        <div className="">
          {Object.keys(technicalSkills).map((category) => (
            <div key={category} className="w-full mb-4">
              <h3 className="text-lg font-bold mb-2">{category}</h3>
              <ul className="list-inside flex flex-wrap w-full">
                {technicalSkills[category].map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 text-sm bg-white m-2 ml-0 px-4 py-1 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="bg-shamrock-400 rounded-full px-4 py-3 text-black font-bold">
          <span>Download Resume</span>
        </button>
      </motion.section>
    </div>
  );
}
