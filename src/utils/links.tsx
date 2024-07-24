import { GitHub, Linkedin, Mail, Phone } from "react-feather";

type Links = { text: string; link: string; icon: React.FC; name: string }[];

export const Links: Links = [
  {
    text: "devhuzaifa98",
    name: "Github",
    icon: GitHub,
    link: "https://github.com/devhuzaifa98",
  },
  {
    text: "Huzaifa Jalil",
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/huzaifa-jalil/",
  },
  {
    text: "huzaiffajalil@gmail.com",
    name: "Mail",
    icon: Mail,
    link: "mailto:huzaiffajalil@gmail.com",
  },
  {
    text: "+9212345678910",
    name: "Phone",
    icon: Phone,
    link: "tel:9212345678910",
  },
];
