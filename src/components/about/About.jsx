import "./about.scss";
import Picture from "../../static/PortfolioPic.JPG";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  const {ref, inView} = useInView({ threshold: 0.25 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75 }
      });
    }

    if(!inView) {
      animation.start({
        opacity: 0,
        y: 100,
        transition: { duration: 0.5 }
      });
    }
  }, [inView, animation]);

  return (
    <div className="about" id="about">
      <div ref={ref} className="container">
        <div className="left">
          <motion.h2 className="title" animate={animation}>
            <span>01. </span> About Me
            <div className="title-line" />
          </motion.h2>

          <section>
            <motion.p animate={animation}>
              Hello! My name is Mitchee and I enjoy building and designing user
              interfaces. I began studying computer science back in 2017, but
              everything started to click when I took my first web development
              class. Since then, I fell in love with the visual aspect of front
              end engineering, and realized that was something I wanted to build
              a career off of!
            </motion.p>
          </section>

          <section>
            <motion.p animate={animation}>
              Outside of programming, I have a wide variety of hobbies like
              camping, making music, cooking, and playing video games!
            </motion.p>
          </section>

          <section>
            <motion.p animate={animation}>
              Here are some languages and libraries I've worked with in the
              past:{" "}
            </motion.p>
          </section>

          <motion.ul className="languages" animate={animation}>
            <li>C++</li>
            <li>Java</li>
            <li>JavaScript (ES6)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>jQuery</li>
          </motion.ul>
        </div>

        <motion.div className="right" animate={animation}>
          <div className="imgContainer">
            
            <img
              onLoad={Picture}
              src={Picture}
              className="profilePic"
              alt=""
            />
          </div>          
        </motion.div>
      </div>
    </div>
  );
}
