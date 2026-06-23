import React from "react";
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
  return (
    <section id="skills" className="h-screen py-16 px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-medium text-gray-800 mb-2">My skills</h2>
        <div className="flex items-center justify-center gap-2">
          <span className="h-0.5 w-10 bg-gray-500"></span>
          <span className="text-gray-600 text-xl italic">what I know</span>
          <span className="h-0.5 w-10 bg-gray-500"></span>
        </div>
      </div>

      <div className="max-w-[1130px] mx-auto flex flex-col md:flex-row gap-14">
        {/* LEFT */}

        <div className="flex-1 ">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            My skills & experiences.
          </h3>

          <div className="space-y-5 mb-8">
            <div className="border-l-4 border-[#12DAA8] pl-4">
              <span className="text-base font-bold text-gray-800 block mb-1">
                Skills
              </span>
              <p className="text-base text-gray-600 text-justify leading-relaxed">
                Proficient in C#, ASP.NET Core, React.js, SQL Server, and
                JavaScript. Strong problem-solving and analytical skills.
                Experienced in building full stack web applications using MVC
                and N-Tier Architecture.
              </p>
            </div>

            <div className="border-l-4 border-[#12DAA8] pl-4">
              <span className="text-base font-bold text-gray-800 block mb-1">
                Projects
              </span>
              <p className="text-base text-gray-600 text-justify leading-relaxed">
                Developed full stack web applications including an E-Commerce
                platform and Food Management System using ASP.NET Core Web API
                and React.js. Implemented CRUD operations, RESTful APIs, and
                integrated SQL Server for efficient data management.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 border-2 border-[#12DAA8] bg-[#12DAA8]  hover:bg-transparent hover:border-[#12DAA8] text-black hover:text-[#12DAA8] text-base font-medium px-5 py-3 rounded-lg transition-colors"
            >
              <FaGithub /> Github
            </a>

            <a
              href="#"
              className="flex items-center gap-2 border-2 border-[#12DAA8] bg-[#12DAA8]  hover:bg-transparent hover:border-[#12DAA8] text-black hover:text-[#12DAA8] text-base font-medium px-5 py-3 rounded-lg transition-colors"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT - Skill Bars */}
        <div className="flex-1 space-y-5 ">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-black">
                  {skill.name}
                </span>
                <span className="text-lg font-medium text-black">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-gray-200  h-2.5">
                <div
                  className="bg-[#12DAA8] h-2.5 "
                  style={{ width: `${skill.percent}%` }}
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
