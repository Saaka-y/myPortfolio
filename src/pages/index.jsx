
import { Header } from "@/components/Header"
import { useEffect, useState } from "react";
import { Section } from "@/components/Scroll"
import { Skills } from "@/components/Contents/Skills"
import { About } from "@/components/Contents/About";
import { Works } from "@/components/Contents/Works";
import { Contact } from "@/components/Contents/Contact";

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
        <Section id="about">
          <About />
        </Section>
        <Section id="works">
          <Works />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </div>
    </>
  );
}


