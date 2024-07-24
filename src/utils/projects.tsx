export interface ProjectData {
  name: string;
  image: string;
  url: string;
  location?: string;
  date: string;
  position: string;
  description?: string;
  responsibilities: string[];
}

export const ProjectData: ProjectData[] = [
  {
    name: "Bosley.ai",
    image: "/bosley.png",
    url: "https://app.bosley.ai/",
    location: "USA",
    date: "Dec 2023 – Present",
    position: "Sr. Software Engineer Full Stack",
    description:
      "Bosley.ai is an innovative AI-driven solution designed for restaurants, allowing customers to send inquiries and place orders via call and text messaging.",
    responsibilities: [
      "Specialised prompt engineering implemented, dynamic and adaptable for multiple restaurants.",
      "Customers can send inquiries and orders via call and text message.",
      "GPT-4 integrated with prompt-to-response mechanism for seamless customer interaction.",
      "Twilio integrated for seamless calling and text messaging.",
      "Stripe integrated for secure payment processing and subscription management.",
      "Web portal created for restaurant owners to configure timings, track orders, and perform other critical operations.",
    ],
  },
  {
    name: "Permission.io",
    image: "/permission.png",
    url: "https://permission.io/",
    location: "Zug, Switzerland",
    date: "Oct 2022 – Nov 2023",
    position: "Sr. Software Engineer Full Stack (MERN)",
    description:
      "WEB3 advertising, connecting brands & consumers through crypto rewards.",
    responsibilities: [
      "Centralized user authentication via Keycloak, reducing synchronization issues and enhancing security, resulting in a 20% decrease in password-related incidents.",
      "Enabled user data encryption with CryptoJS, providing on-demand data retrieval for users, leading to a 30% decrease in unauthorized data access attempts.",
      "Configured S3 bucket with encryption and deletion policies, improving data security, resulting in a 25% reduction in data breaches.",
      "Implemented OneTrust for compliance, minimizing regulatory incidents by 20%.",
      "Developed a user-friendly survey feature using Formik, boosting completion rates by 40%.",
      "Introduced ASK export for faster fund transfers to external wallets, reducing transaction processing time by 50%.",
      "Leveraged Shuftipro and Keycloak for robust identity verification.",
      "Developed decentralized applications (dApps) using Web3 and MoralisWeb3, ensuring secure interactions within blockchain ecosystems.",
      "Integrated React-GTM-Module and Chart.js for advanced tracking, analytics, and data visualization in web applications.",
      "Utilized @ethersproject/shims and Ethereum-HDWallet for efficient Ethereum blockchain interaction and secure key management.",
      "Implemented React Custom Events for flexible event handling logic and customization capabilities.",
    ],
  },
  {
    name: "Factiiii",
    image: "/factiii.png",
    url: "https://factiii.com/",
    date: "Feb 2021 – Sep 2022",
    position: "Sr. Software Engineer Full Stack (MERN)",
    description:
      "A community building platform aimed to deliver reliable, unbiased information that stems from authentic sources.",
    responsibilities: [
      "Built a 2FA system using biometric verification (Face ID and fingerprint) for mobile devices.",
      "Streamlined code by removing spaghetti code, fixing component re-renders, reducing backend calls, and adding memoization.",
      "Proficiently utilized Next.js.",
      "Removed spaghetti code, added memoization which reduced unnecessary backend calls and component re-renders.",
      "Implemented in-app-purchases for both iOS and Android platforms.",
      "Replaced useContext with react-query, slashing load times by up to 3s.",
      "Proficient in Express.js and Prisma technologies.",
      "Experience with JWT authentication, Socket.io communication, and Bcrypt encryption.",
      "Proficient in integrating Stripe payment gateway.",
      "Crafted a dynamic Wikipedia scraper that classifies articles and tags posts with distinct topics enabling users to access enormous information.",
    ],
  },
  {
    name: "Duke Leads FZCO",
    image: "/duke-leads.png",
    url: "https://dukeleads.com/",
    date: "Oct 2019 – Jan 2021",
    position: "Software Engineer Full Stack (Vue.js)",
    description:
      "Developed one of the largest marketplaces for the smartphone industry.",
    responsibilities: [
      "Implemented lazy loading to improve efficiency and reduce the response time of the application.",
      "Designed frontend using Vue.js with API supported ROR backend application for a fine user experience.",
      "Wrote an intelligent script to fetch over 1M+ data from Awin and Three, extracted correct device names and colours using a tailored script.",
      "Implemented features to decide on popular products and display them on top.",
    ],
  },
  {
    name: "Virtual Totem",
    image: "/virtual-totem.png",
    url: "https://store.totemteam.com/",
    date: "Nov 2018 – Sep 2019",
    position: "Software Engineer Full Stack",
    description: "Web app offering a team building activity.",
    responsibilities: [
      "Used view components to write highly reusable code in the form of components.",
      "Implemented Stimulus reflex to display real-time changes and give the experience of SPA.",
      "Implemented state machine engine using AASM to handle the transition between 100+ states.",
      "Used Redis and Sidekiq for efficient background job processing.",
      "Implemented Passwordless for streamlined user authentication processes.",
      "Employed Acts-As-Votable to enable user interaction features like voting and liking.",
      "Configured Sentry for real-time error tracking and debugging.",
      "Utilized AWS SDK S3 for efficient storage solutions and seamless integration.",
    ],
  },
];
