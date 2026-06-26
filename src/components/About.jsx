import React, { useEffect, useState } from "react";
import { FaDownload, FaFileDownload } from "react-icons/fa";

const About = () => {
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
    <section id="about" className="min-h-screen text-black bg-white">
      <div className="h-full flex flex-col items-center ">
        {/* Heading */}
        <div className="text-center mb-4 pt-5 w-full h-fit flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] italic text-gray-800 mb-2">
            About me
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-gray-500"></span>
            <span className="text-gray-600 text-lg md:text-xl font-['Space_Grotesk'] italic">
              who I am
            </span>
            <span className="h-0.5 w-10 bg-gray-500"></span>
          </div>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col md:flex-row min-h-[87vh]">
          {/* Image */}
          <div className="w-full md:w-[45%] flex items-center justify-center py-6 md:py-0">
            <div className="w-[60%] sm:w-[50%] md:w-[70%] h-75 md:h-[90%]">
              <img
                className="h-full w-full object-contain"
                src="/images/AboutImg.png"
                alt="Neeraj Gupta"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-[55%] p-4 md:p-6 flex items-center">
            <div className="w-full pt-2 md:pt-5 lg:pr-25">
              <div className="h-20 ">
                <h2
                  className="
                 font-['Space_Grotesk']
                 text-xl
                 sm:text-2xl
                 md:text-3xl
                 font-semibold
                 text-gray-900
                 pb-4
                  "
                >
                  I am Neeraj Gupta and I'm
                  <span className="text-[#12DAA8]"> {text}</span>
                  <span className="text-[#12DAA8] animate-pulse">|</span>
                </h2>
              </div>

              <p
                className="
      font-['Space_Grotesk'] italic
      text-sm
      sm:text-base
      md:text-lg
      leading-7
      md:leading-8
      text-gray-600
      text-justify
      "
              >
                Hello! I'm Neeraj Gupta, a passionate Full Stack Developer
                specializing in building modern and scalable web applications
                using .NET (ASP.NET Core Web API) and React. I enjoy creating
                clean, efficient, and user-friendly applications that solve
                real-world problems.
                <br />
                <br />
                I focus on developing strong and maintainable backend APIs with
                .NET while building responsive and interactive user interfaces
                using React. My goal is to deliver smooth performance and great
                user experience in every project I work on.
                <br />
                <br />
                Apart from development, I continuously learn new technologies
                and improve my problem-solving skills. I always try to follow
                best practices in software development and write clean, scalable
                code.
                <br />
                <br />
                I'm also interested in collaborating on innovative projects
                where I can contribute, learn, and grow as a developer while
                building impactful real-world solutions.
              </p>
              <div className="pt-5">
                <a
                  href="/resume.pdf"
                  download="Neeraj_Gupta_Resume.pdf"
                  rel="noopener noreferrer"
                  className="
                 flex items-center gap-2
                 px-6 py-3
                 rounded-full
                 border
                 border-gray-600
                 bg-gray-600
                 text-white
                 font-medium
                 transition-all
                 duration-300
                 hover:border-[#12DAA8]
                 hover:text-[#12DAA8]
                 hover:bg-[#181818]
                 hover:shadow-[0_0_18px_rgba(18,218,168,0.20)]
                 w-53
      "
                >
                  <FaFileDownload /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
