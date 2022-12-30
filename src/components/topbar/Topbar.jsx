import "./topbar.scss";
import Resume from "../../static/MitcheeCosteloResume2022.pdf";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Topbar() {
  function refreshPage() {
    window.location.reload(false);
  }

  const [lastYPosition, setLastYPosition] = useState(0);
  const [showTopbar, setShowTopbar] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const yPosition = window.scrollY;
      const isScrollingUp = yPosition < lastYPosition;

      setShowTopbar(isScrollingUp);
      setLastYPosition(yPosition);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPosition]);

  return (
    <motion.div
      className="topbar"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: showTopbar ? 1 : 0, y: showTopbar ? 0 : -50 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <div className="container">
        <div className="left">
          <Link
            className="logo"
            to="intro"
            duration={1000}
            onClick={refreshPage}
          >
            Mitchee Costelo
          </Link>
        </div>

        <div className="right">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <span>01. </span>About
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span>02. </span>Experience
          </Link>
          <Link to="work" spy={true} smooth={true} offset={-150} duration={500}>
            <span>03. </span>Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span>04. </span>Contact
          </Link>
          <a href={Resume} target="_blank" rel="noreferrer" className="button">
            Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}
