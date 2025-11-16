

export function Header() {
  return (
    <div className="h-20 fixed w-full flex justify-center items-center md:h-30  md:justify-end md:items-end bg-gray-700/50 ">
      <nav className="flex gap-6 text-sm lg:text-base text-white md:pr-6 md:pb-4 lg:pr-8 lg:pb-6">
        <a href="#about" >About</a>
        <a href="#works" >Works</a>
        <a href="#skills" >Skills</a>
        <a href="#contact" >Contact</a>
      </nav>
    </div>
  );
}
