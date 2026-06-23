import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        // 80px = roughly 10% scroll
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`text-white h-20 transition-all duration-200 ease-in-out ${scrolled ? "bg-[#12DAA8] " : "bg-transparent"}  flex justify-between items-center pl-28 fixed w-full`}
    >
      <div className="">
        <div className="flex items-center ">
          <span
            className={`${scrolled ? "text-black" : "text-[#12DAA8]"} font-bold text-2xl tracking-tight`}
          >
            N
          </span>
          <span className="text-white font-bold text-2xl">/</span>
          <span className="text-white font-bold text-2xl tracking-tight">
            G
          </span>
        </div>
      </div>
      <div
        className={`text-xl flex items-center gap-10 justify-center w-[60%] font-medium ${scrolled ? "text-black" : "text-white"}`}
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
