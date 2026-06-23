import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

function Home() {
  const texts = [
    "Web Developer.....",
    ".NET Developer.....",
    "Full Stack Developer.....",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const speed = deleting ? 80 : 150;
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setDeleting(true), 80);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <section id="home" className="h-screen text-white pt-10">
      <div className="flex flex-col pt-10 pl-28 gap-8 items-start mt-20">
        <h2 className="font-['Outfit'] text-3xl text-gray-300">
          Hello, my name is
        </h2>

        <h1 className="font-['Sora'] text-7xl font-bold leading-none">
          <span className="text-[#12DAA8]">NEE</span>RAJ GU
          <span className="text-[#12DAA8]">PTA</span>
        </h1>

        <h2 className="font-['Outfit'] text-4xl text-[#12DAA8]">
          <span className="text-white"> And I'm a </span>
          {text}
          <span className="animate-pulse">|</span>
        </h2>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-5 inline-flex items-center justify-center gap-2 bg-[#12DAA8] border-2 border-[#12DAA8] text-black hover:bg-transparent hover:border-[#12DAA8] hover:text-[#12DAA8] px-10 py-4 rounded-lg text-2xl font-medium transition-all duration-300"
        >
          <FaGithub size={28} />
          Github
        </a>
      </div>

      {/* <h2>And I'm a .Net Full Stack Developer.....</h2> */}
    </section>
  );
}

export default Home;
