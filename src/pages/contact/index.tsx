import { motion } from "framer-motion";
import { Links } from "../../utils/links";

export default function Contact() {
  return (
    <div className="z-10 w-full h-full flex items-center justify-center flex-col space-y-5 text-white text-center p-5">
      {/* Heading */}
      <section>
        <motion.h1
          initial={{ translateX: "-20%", opacity: 0 }}
          exit={{ translateX: "-20%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-4xl lg:text-6xl tracking-widest font-bold"
        >
          {"Get in Touch"}
        </motion.h1>
        <motion.h1
          initial={{ translateX: "20%", opacity: 0 }}
          exit={{ translateX: "20%", opacity: 0 }}
          animate={{ translateX: "0%", opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="lg:text-2xl tracking-widest text-center text-text"
        >
          {"Let's Create Something Amazing Together!"}
        </motion.h1>
      </section>
      {/* Contact Cards */}
      <section className="flex flex-col gap-x-10 flex-wrap lg:flex-row gap-y-2">
        {Links.map((contact, i) => (
          <motion.a
            initial={{ translateY: "50%", opacity: 0 }}
            exit={{
              translateY: "50%",
              opacity: 0,
              transition: { duration: 0.1, delay: 0.1 + i * 0.1 },
            }}
            animate={{
              translateY: "0%",
              opacity: 1,
              transition: { duration: 0.2, delay: 0.2 + i * 0.1 },
            }}
            href={contact.link}
            key={i}
            className="flex-grow bg-tertiary hover:bg-shamrock-300 hover:text-tertiary rounded gap-x-2 py-3 px-10 flex items-center justify-center"
          >
            <contact.icon />
            {contact.text}
          </motion.a>
        ))}
      </section>
    </div>
  );
}
