import { useState, useEffect } from "react";
import "./work.scss";
import Amazon from "./jobs/Amazon";
import Music from "./jobs/Music";
import Storage from "./jobs/Storage";
import BBQ from "./jobs/BBQ";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Work() {
  const [job, setJob] = useState("amazon");
  const {ref, inView} = useInView({ threshold: 0.40 });
  const animation = useAnimation();

  const toggleJob = (job) => {
    setJob(job);
  }

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
    <div className="work" id="work">
      <div className="container" ref={ref}>
        <motion.h2 className="title" animate={animation}>
          <span>03. </span>Where I've worked
          <div className="title-line" />
        </motion.h2>

        <section className="info">
          <motion.div className="left" animate={animation}>
            <ul className="jobs">
              <li
                className={job === "amazon" ? "amazon-active" : null}
                onClick={() => toggleJob("amazon")}
              >
                Amazon
              </li>
              <li
                className={job === "storage" ? "storage-active" : null}
                onClick={() => toggleJob("storage")}
              >
                Hayward Self Storage
              </li>
              <li
                className={job === "music" ? "music-active" : null}
                onClick={() => toggleJob("music")}
              >
                Music Unlimited
              </li>
              <li
                className={job === "bbq" ? "bbq-active" : null}
                onClick={() => toggleJob("bbq")}
              >
                Rudy's BBQ
              </li>
            </ul>
          </motion.div>

          <motion.div className="right" animate={animation}>
            <section className="descriptions">
              {job === "amazon" ? <Amazon /> : null}
              {job === "storage" ? <Storage /> : null}
              {job === "music" ? <Music /> : null}
              {job === "bbq" ? <BBQ /> : null}
            </section>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
