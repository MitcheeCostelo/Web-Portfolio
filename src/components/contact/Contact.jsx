import "./contact.scss";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const {ref, inView} = useInView({ threshold: 0.40 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.75 }
      },
      console.log("in view"));
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
    <div className='contact' id='contact'>
      <div className="container" ref={ref}>
        <motion.h2 animate={animation}><span>04. </span>What's Next?</motion.h2>
        <motion.h1 animate={animation}>Let's Talk!</motion.h1>
        <motion.p animate={animation}>I would love any opportunity to expand my network and potentially learn more!
          If you have any questions or would like to reach out to me, my inbox is always open!
          Thank you!
        </motion.p>

        <motion.a animate={animation} href='mailto: mitcheecostelO@outlook.com' className="btn"> Say Hello!</motion.a>
      </div>
    </div>
  )
}
