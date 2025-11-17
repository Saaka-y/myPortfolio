// Scroll.jsx
import { motion } from "motion/react";
import { Element } from "react-scroll";

export function Section({ id, children }) {

  const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: [0.42, 0, 0.58, 1],
      duration: 1 
    }
  },
};

  return (
    <Element name={id}>
      <motion.div
        id={id}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // amount: 発火位置
        className={`flex flex-col justify-center items-center text-center border py-12`}>
        <p className="capitalize text-xl md:text-2xl pb-10 md:pb-16 lg:pb-20">{id}</p>
        <div className="flex flex-col gap-2">
          {children}
        </div>
      </motion.div>
    </Element>
  );
}

// animation variable for children
export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1], 
    },
  },
};

