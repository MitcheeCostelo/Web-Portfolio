import "./leftbar.scss";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="accent-line" />
        <a
          href="https://www.linkedin.com/in/mitcheecostelo/"
          className="linkedin"
          rel="noreferrer"
          target="_blank"
          aria-label="Mitchee Costelo Linkedin"
        >
          <FaLinkedin size="1.5rem" />
        </a>
        <a
          href="https://www.instagram.com/mitcheecostelo/"
          className="instagram"
          rel="noreferrer"
          target="_blank"
          aria-label="Mitchee Costelo Instagram"
        >
          <FaInstagram size="1.5rem" />
        </a>
        <a
          href="https://github.com/MitcheeCostelo"
          className="github"
          rel="noreferrer"
          target="_blank"
          aria-label="Mitchee Costelo Github"
        >
          <FaGithub size="1.5rem" />
        </a>
      </div>
    </div>
  );
}
