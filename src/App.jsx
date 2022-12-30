import About from "./components/about/About";
import TopBar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Rightbar from "./components/rightbar/Rightbar";
import Leftbar from "./components/leftbar/Leftbar";
import { AnimatePresence } from "framer-motion";
import "./app.scss";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="app">
        <div className="menu">
          <TopBar />
          <Rightbar />
          <Leftbar />
        </div>

        <div className="content">
          <Intro />
          <About />
          <Experience />
          <Work />
          <Contact />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
