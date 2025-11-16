
// // refered to https://zenn.dev/shouta0715/articles/dd1c8665d4bf12 for scroll animation
// 'use client';

// import { motion, useReducedMotion } from 'motion/react';
// import { createContext, useContext } from 'react';

// const StaggerContext = createContext(false);
// const viewport = { once: true, margin: '0px 0px -120px' };

// export function FadeIn({ children, ...props }) {
//   const shouldReduceMotion = useReducedMotion();
//   const isStagger = useContext(StaggerContext);

//   return (
//     <motion.div
//       transition={{ duration: 0.5 }}
//       variants={{
//         hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       {...(!isStagger
//         ? { initial: 'hidden', whileInView: 'visible', viewport }
//         : {})}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export function FadeInWithStagger({ children, slow = false, speed, ...props }) {
//   return (
//     <StaggerContext.Provider value={true}>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={viewport}
//         transition={{ staggerChildren: speed ?? (slow ? 0.2 : 0.1) }}
//         {...props}
//       >
//         {children}
//       </motion.div>
//     </StaggerContext.Provider>
//   );
// }
