// Skills.jsx
import { motion } from 'motion/react';
import { childVariants } from "@/components/Scroll"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";


export function Skills() {

  const skills = [
    { icon: FaHtml5, title: "HTML" },
    { icon: FaCss3Alt, title: "CSS" },
    { icon: FaJsSquare, title: "JavaScript" },
    { icon: FaReact, title: "React" },
    { icon: SiNextdotjs, title: "Next.js" },
    { icon: SiTailwindcss, title: "TailwindCSS" },
    { icon: FaGit, title: "Git" },
    { icon: FaGithub, title: "GitHub" },
    { icon: FaNodeJs, title: "Node.js" },
  ]


  return (
    <motion.div variants={childVariants} className="grid grid-cols-3 gap-x-2 gap-y-6 md:flex md:justify-center md:gap-6 lg:gap-12">
      {skills.map(skill => {
        const Icon = skill.icon;
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col items-center gap-2 hover:scale-[1.2] transition-transform duration-300">
            <Icon size={24} className='w-10 h-10 text-[#2e2e2b]' />
            <p>{skill.title}</p>
          </div>
        )
      })}
    </motion.div>
  );
}



