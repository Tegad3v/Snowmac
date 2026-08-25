import { motion } from "framer-motion";

function MotionElement({
  children,
  axis = "y",
  distance = 40,
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.2,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        [axis]: distance,
      }}
      whileInView={{
        opacity: 1,
        [axis]: 0,
      }}
      transition={{
        duration,
        ease: "easeOut",
        delay,
      }}
      viewport={{
        once,
        amount,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionElement;
