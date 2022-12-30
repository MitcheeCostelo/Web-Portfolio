import "./loading.scss";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `100%`,
    };

    setStyle(newStyle);
  }, 300);

  return (
    <motion.div
      exit={{ opacity: 0 }}
    >
      <div className="loading">
        <motion.div initial={{ y: -50, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{size: 0, opacity: 0}}  className="loading-bar">
          <div className="loading-done" style={style}>
            100%
          </div>
        </motion.div>
      </div>
    </motion.div>

  );
}
