import { Contents } from "@/components/Contents";
import { Header } from "@/components/Header"
import { useState } from "react";

export default function Home() {

  const [isShrunk, setIsShrunk] = useState(false); //header の状態

  return (
    <>
      <Header 
        isShrunk={isShrunk}
        setIsShrunk={setIsShrunk}
      />

      { !isShrunk ? null : (<div className="flex flex-col gap-12">
          <Contents
            title="about"
            className="mt-30 md:mt-40"
            id="about" />
          <Contents title="works" id="works" />
          <Contents title="skills" id="skills" />
          <Contents title="contact" id="contact" />
      </div>) }
    </>
  );
}
