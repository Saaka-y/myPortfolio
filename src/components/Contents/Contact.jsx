// Contact.jsx
import { motion } from 'motion/react';
import { childVariants } from "@/components/Scroll"


export function Contact() {
  return (
    <>
      <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400"></motion.div>
      <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400"></motion.div>
      <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400"></motion.div>
      <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400"></motion.div>
    </>
  );
}
