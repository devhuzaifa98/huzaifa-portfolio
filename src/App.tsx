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
import { NotFound } from "./pages/404";

function App() {
  const location = useLocation();

  const key = location.pathname;
  return (
    <main className="min-h-screen lg:max-h-screen flex flex-row bg-black">
      <CustomCursor />
      <SideBar />
      <div className="flex flex-col-reverse lg:flex-col w-full relative lg:overflow-hidden">
        <Background />
        <AnimatePresence mode="wait">
          <Routes location={location} key={key}>
            <Route path="/" Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path="/resume" Component={Resume} />
            <Route path="/projects" Component={Projects} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </main>
  );
}

export default App;
