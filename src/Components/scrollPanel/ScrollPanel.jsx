
import { motion, useReducedMotion } from "motion/react";

export default function ScrollSection({
  children,
  className = "",
  delay = 0,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`scroll-section ${className}`}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: 65,
              scale: 0.985,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.9,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
