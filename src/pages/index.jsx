import { Contents } from "@/components/Contents";
import { Header } from "@/components/Header"
import { FadeInWithStagger } from "@/components/Motion";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-12">
        <FadeInWithStagger>
          <Contents
            title="about"
            className="mt-30 md:mt-40"
            id="about" />
          <Contents title="works" id="works" />
          <Contents title="skills" id="skills" />
          <Contents title="contact" id="contact" />
        </FadeInWithStagger>
      </div>
    </>
  );
}
