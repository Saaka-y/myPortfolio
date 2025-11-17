import { Contents } from "@/components/Contents";
import { Header } from "@/components/Header"
import { useEffect, useState } from "react";

export default function Home() {
  const [isShrunk, setIsShrunk] = useState(false); //header の状態

  useEffect(() => {
      window.scrollTo(0, 0)
  }, []); // refer to https://qiita.com/risto24/items/21ba4bf8a507e1eebe5e　

  return (
    <>
      <Header
        isShrunk={isShrunk}
        setIsShrunk={setIsShrunk}
      />

      <div className={`
        flex flex-col gap-12
        transition-all duration-1500
        ${!isShrunk ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
      `}>
        <Contents
          title="about"
          // className="mt-30 md:mt-50"
          id="about" />
        <Contents title="works" id="works" />
        <Contents title="skills" id="skills" />
        <Contents title="contact" id="contact" />
      </div>

    </>
  );
}
