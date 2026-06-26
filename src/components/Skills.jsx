import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  { name: "ASP.NET Core & Web API", percent: 85 },
  { name: "React.js & JavaScript", percent: 80 },
  { name: "SQL Server & Entity Framework", percent: 85 },
  { name: "Node.js & Express.js", percent: 70 },
  { name: "HTML, CSS & Bootstrap", percent: 90 },
  { name: "C# & MVC Architecture", percent: 80 },
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState(skills.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  const startCounting = () => {
    skills.forEach((skill, i) => {
      let current = 0;
      const step = skill.percent / 120;
      const interval = setInterval(() => {
        current += step;
        if (current >= skill.percent) {
          current = skill.percent;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(current);
          return updated;
        });
      }, 16);
    });
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-16 px-6 bg-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-['Space_Grotesk'] italic text-gray-800 mb-2">
          My skills
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="h-0.5 w-10 bg-gray-500"></span>
          <span className="text-gray-600 text-xl font-['Space_Grotesk'] italic">
            what I know
          </span>
          <span className="h-0.5 w-10 bg-gray-500"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14">
        {/* Left */}
        <div className="flex-1">
          <div className="flex-1">
            <h3
              className="
    font-['Space_Grotesk']
    text-2xl
    md:text-3xl
    font-bold
    text-gray-900
    mb-6
    "
            >
              My skills & experiences.
            </h3>

            <div className="space-y-6 mb-8">
              <div
                className="
      border-l-4
      border-[#12DAA8]
      pl-5
      py-1
      "
              >
                <span
                  className="
        font-['Space_Grotesk']
        text-lg
        font-semibold
        text-gray-900
        block
        mb-2
        "
                >
                  Skills
                </span>

                <p
                  className="
        font-['Space_Grotesk'] italic
        text-base
        md:text-lg
        text-gray-600
        text-justify
        leading-7
        "
                >
                  Proficient in C#, ASP.NET Core, React.js, SQL Server, and
                  JavaScript. Strong problem-solving and analytical skills.
                  Experienced in building full stack web applications using MVC
                  and N-Tier Architecture.
                </p>
              </div>

              <div
                className="
      border-l-4
      border-[#12DAA8]
      pl-5
      py-1
      "
              >
                <span
                  className="
        font-['Space_Grotesk']
        text-lg
        font-semibold
        text-gray-900
        block
        mb-2
        "
                >
                  Projects
                </span>

                <p
                  className="
        font-['Space_Grotesk'] italic
        text-base
        md:text-lg
        text-gray-600
        text-justify
        leading-7
        "
                >
                  Developed full stack web applications including an E-Commerce
                  platform and Food Management System using ASP.NET Core Web API
                  and React.js.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/neerajkr223"
              target="_blank"
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
      font-['Space_Grotesk']
      "
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
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
             font-['Space_Grotesk']
      "
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right - Skill Bars */}
        <div className="flex-1 space-y-5">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium font-['Space_Grotesk'] italic text-black">
                  {skill.name}
                </span>
                <span className="text-lg font-medium text-black">
                  {counts[i]}%
                </span>
              </div>
              <div className="w-full bg-gray-200 h-2.5 rounded">
                <div
                  className="bg-[#12DAA8] h-2.5 rounded transition-all duration-100"
                  style={{ width: `${counts[i]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
