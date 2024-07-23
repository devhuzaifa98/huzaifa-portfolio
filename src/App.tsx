import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import Contact from "./pages/contact";
import Resume from "./pages/resume/page";
import { Projects } from "./pages/projects";
import CustomCursor from "./components/CustomCursor";
import SideBar from "./components/SideBar";
import Background from "./components/Background";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const key = location.pathname;
  return (
    <main className="min-h-screen flex flex-row bg-black">
      <CustomCursor />
      <SideBar />
      <div className="flex flex-col w-full relative overflow-hidden">
        <Background />
        <AnimatePresence mode="wait">
          <Routes location={location} key={key}>
            <Route path="/" Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path="/resume" Component={Resume} />
            <Route path="/projects" Component={Projects} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </main>
  );
}

export default App;
