import React, { useEffect, useState } from "react";

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
          <h2 className="text-3xl md:text-4xl font-medium text-gray-800 mb-2">
            About me
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-gray-500"></span>
            <span className="text-gray-600 text-lg md:text-xl italic">
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
              <h2 className="font-['Outfit'] text-2xl text-[#12DAA8] pb-2 md:text-xl">
                <span className="text-black">I am Neeraj Gupta and I'm a</span>
                {text}
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-justify leading-7 text-sm sm:text-base font-medium">
                Hello! I'm Neeraj Gupta, a passionate Full Stack Developer
                specializing in building modern and scalable web applications
                using .NET (ASP.NET Core Web API) and React. I enjoy creating
                clean, efficient, and user-friendly applications that solve
                real-world problems. <br /> I focus on developing strong and
                maintainable backend APIs with .NET while building responsive
                and interactive user interfaces using React. My goal is to
                deliver smooth performance and great user experience in every
                project I work on. <br /> Apart from development, I continuously
                learn new technologies and improve my problem-solving skills. I
                always try to follow best practices in software development and
                write clean, scalable code. <br /> I'm also interested in
                collaborating on innovative projects where I can contribute,
                learn, and grow as a developer while building impactful
                real-world solutions.
              </p>

              <a
                href="/resume.pdf"
                download="Neeraj_Gupta_Resume.pdf"
                className="bg-[#12DAA8] border-2 border-[#12DAA8] text-white hover:bg-transparent hover:border-[#12DAA8] hover:text-[#12DAA8] font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-xl tracking-wide transition-colors duration-200 mt-5 md:mt-7 inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
