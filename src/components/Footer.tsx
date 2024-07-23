import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="flex justify-evenly items-center text-shamrock-950 text-sm border-t border-[#222222]">
      <button
        className={`flex-1 py-8 text-center text-white ${
          pathname === "/"
            ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-shamrock-950"
            : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-shamrock-950"
        }`}
        onClick={() => navigate("/")}
      >
        HOME
      </button>
      <button
        className={`flex-1 py-8 text-center text-white ${
          pathname === "/contact"
            ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-shamrock-950"
            : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-shamrock-950"
        }`}
        onClick={() => navigate("/contact")}
      >
        CONTACT
      </button>
      <button
        className={`flex-1 py-8 text-center text-white ${
          pathname === "/resume"
            ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-shamrock-950"
            : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-shamrock-950"
        }`}
        onClick={() => navigate("/resume")}
      >
        RESUME
      </button>
      <button
        className={`flex-1 py-8 text-center text-white ${
          pathname === "/projects"
            ? "bg-gradient-to-r from-shamrock-600 to-shamrock-200 text-shamrock-950"
            : "hover:bg-gradient-to-r from-shamrock-600 to-shamrock-200 hover:text-shamrock-950"
        }`}
        onClick={() => navigate("/projects")}
      >
        ALL WORKS
      </button>
    </footer>
  );
}
