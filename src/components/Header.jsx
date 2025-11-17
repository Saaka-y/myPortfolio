// Header.jsx
import { Link as Scroll } from "react-scroll";

export function Header({ isShrunk, setIsShrunk }) {

  // ナビクリック時
  const handleNavClick = () => {
    if (isShrunk) { return; }
    else { setIsShrunk(true); }
  };

  return (
    <div
      className={`
        ${isShrunk
          ? "h-20 md:h-30 md:justify-end md:items-end bg-gray-700/70"
          : "h-screen bg-gray-700/40"
        } fixed top-0 w-full flex justify-center items-center transition-all duration-1000 ease-in-out z-20`}
    >
      <nav>
        <ul
          className={`
            ${isShrunk ? "gap-6 md:gap-8" : "gap-8 md:gap-12"}
            flex text-sm lg:text-base text-white md:pr-6 md:pb-4 lg:pr-8 lg:pb-6
          `}
        >
          <Scroll
            to="about"
            smooth={!isShrunk ? "easeInOutQuint" : "easeOutQuint"}
            duration={!isShrunk ? 1300 : 300}
            offset={-160}
            className="cursor-pointer"
            onClick={handleNavClick}
          >
            About
          </Scroll>
          <Scroll
            to="works"
            smooth={!isShrunk ? "easeInOutQuint" : "easeOutQuint"}
            duration={!isShrunk ? 1300 : 300}
            offset={-160}
            className="cursor-pointer"
            onClick={handleNavClick}

          > Works
          </Scroll>
          <Scroll
            to="skills"
            smooth={!isShrunk ? "easeInOutQuint" : "easeOutQuint"}
            duration={!isShrunk ? 1300 : 300}
            offset={-160}
            className="cursor-pointer"
            onClick={handleNavClick}

          >
            Skills
          </Scroll>
          <Scroll
            to="contact"
            smooth={!isShrunk ? "easeInOutQuint" : "easeOutQuint"}
            duration={!isShrunk ? 1300 : 300}
            offset={-160}
            className="cursor-pointer"
            onClick={handleNavClick}

          >
            Contact
          </Scroll>
        </ul>
      </nav>
    </div>
  );
}
