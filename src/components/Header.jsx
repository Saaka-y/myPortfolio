

export function Header({ isShrunk, setIsShrunk }) {

  const handleNavClick = () => {
    setIsShrunk(true);
  };

  

  return (
    <div 
      className={`${ isShrunk ? "h-30 " : "h-screen" } fixed w-full flex justify-center items-center md:h-30  md:justify-end md:items-end bg-gray-700/40`}>
      <nav className="flex gap-6 text-sm lg:text-base text-white md:pr-6 md:pb-4 lg:pr-8 lg:pb-6">
        <a href="#about" onClick={handleNavClick}>About</a>
        <a href="#works" onClick={handleNavClick}>Works</a>
        <a href="#skills" onClick={handleNavClick}>Skills</a>
        <a href="#contact"onClick={handleNavClick} >Contact</a>
      </nav>
    </div>
  );
}
