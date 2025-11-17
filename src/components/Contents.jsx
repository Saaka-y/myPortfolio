// Contents.jsx
import { motion } from 'motion/react';
import { Element } from "react-scroll"


export function Contents({ title, className, id }) {

  const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: [0.42, 0, 0.58, 1],
      duration: id === "about" ? 3 : 1 
    }
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: id === "about" ? 3 : 2,
      ease: [0.42, 0, 0.58, 1], // easeInOutカスタム
    },
  },
};

  return (
    <Element name={id}>
      <motion.div
        id={id}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }} // amount: 発火位置
        className={`${className} flex flex-col gap-3 justify-center items-center text-center py-12`}>
        <p className="capitalize pb-2">{title}</p>
        <div className="flex flex-col gap-2">
          <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400"></motion.div>
          <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400"></motion.div>
          <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400"></motion.div>
        </div>
      </motion.div>
    </Element>
  );
}
