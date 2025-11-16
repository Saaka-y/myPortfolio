
import { FadeIn } from "@/components/Motion";

export function Contents({ title, className }) {
  return (
    <FadeIn
      className={`${className} flex flex-col gap-3 justify-center items-center text-center border py-12`}>
      <p className="capitalize pb-2">{title}</p>
      <div className="flex gap-2">
        <div className="w-30 h-30 bg-amber-400"></div>
        <div className="w-30 h-30 bg-amber-400"></div>
        <div className="w-30 h-30 bg-amber-400"></div>
      </div>
    </FadeIn>
  );
}
