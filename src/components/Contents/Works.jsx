// Works.jsx
import { motion } from 'motion/react';
import { childVariants } from "@/components/Scroll"
import { useState } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';


export function Works() {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null);

  const works = [
    { title: "Simple Todo-App", img: "/face.jpg" },
    { title: "GeoYama", img: "/face.jpg" },
  ]


  const handleOpenModal = (work) => {
    setSelectedWork(work);
    setIsOpen(true);
  };


  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedWork(null);
  }

  return (
    <>
      <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400" onClick={() => handleOpenModal(works[0])}></motion.div>
      <motion.div variants={childVariants} className="w-30 h-30 bg-amber-400" onClick={() => handleOpenModal(works[0])}></motion.div>

      <ReactModal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: "grey"
          }
        }}
      >
        <p>{selectedWork?.title}</p>
        <Image src="/face.jpg" alt="Work image" width={500} height={300}/>
        <button onClick={handleCloseModal}>× Close</button>
      </ReactModal >
    </>
  );
}
