import { Links } from "../utils/links";

const SideBar = () => {
  return (
    <div className="flex-1 hidden lg:block">
      <div className="h-screen border-border border-r w-14 flex justify-between flex-col py-20 text-text text-sm">
        <a
          href={Links.find((l) => l.name === "LinkedIn")?.link}
          className="-rotate-90 whitespace-nowrap hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href={Links.find((l) => l.name === "Github")?.link}
          className="-rotate-90 whitespace-nowrap hover:text-white"
        >
          Github
        </a>
        <span className="-rotate-90 mt-48 whitespace-nowrap tracking-wide">
          Huzaifa Jalil @2024
        </span>
      </div>
    </div>
  );
};
export default SideBar;
