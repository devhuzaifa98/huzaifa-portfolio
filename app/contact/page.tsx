"use client";
import { motion } from "framer-motion";
import * as Icon from "react-feather";

type Links = { text: string; link: string; icon: React.FC }[];

export default function Contact() {
  const Links: Links = [
    {
      text: "devhuzaifa98",
      icon: Icon.GitHub,
      link: "https://github.com/devhuzaifa98",
    },
    {
      text: "Huzaifa Jalil",
      icon: Icon.Linkedin,
      link: "https://www.linkedin.com/in/huzaifa-jalil/",
    },
    {
      text: "huzaiffajalil@gmail.com",
      icon: Icon.Mail,
      link: "mailto:huzaiffajalil@gmail.com",
    },
    { text: "+9212345678910", icon: Icon.Phone, link: "tel:9212345678910" },
  ];
  return (
    <div className="z-10 w-full h-full flex items-center justify-center flex-col space-y-2 text-white">
      <motion.h1
        initial={{ translateX: "-100%", opacity: 0 }}
        animate={{ translateX: "0%", opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-5xl tracking-widest font-bold  w-1/2 text-center"
      >
        {"Get in Touch"}
      </motion.h1>
      <motion.h1
        initial={{ translateX: "100%", opacity: 0 }}
        animate={{ translateX: "0%", opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-2xl tracking-widest font-bold  w-1/2 text-center"
      >
        {"Let's Create Something Amazing Together!"}
      </motion.h1>
      <div className="flex flex-row space-x-10 !mt-10">
        {Links.map((contact, i) => (
          <motion.button
            initial={{ translateY: "50%", opacity: 0 }}
            animate={{ translateY: "0%", opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 + i * 0.1 }}
            onClick={() => window.open(contact.link)}
            key={i}
            className="flex-grow bg-[#161616] hover:bg-shamrock-300 hover:text-gray-900 rounded space-x-2 py-3 px-10 flex items-center justify-center"
          >
              <contact.icon />
              <span>{contact.text}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
