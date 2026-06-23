import React from "react";
import { FaUtensils } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      icon: <FaUtensils />,
      name: "Food Delivery Web App",
      desc: "Full Stack Food Delivery application built with React and ASP.NET Core Web API. Includes Admin dashboard, Customer management, Menu Item CRUD, Food search, Cart, Order management and authentication features.",
      github: "https://github.com/Neerajkr223/FoodWebApi.git",
      live: "",
    },

    {
      icon: "📝",
      name: "Advanced Todo List App",
      desc: "Modern task management application built with React. Includes responsive UI, task creation, task details, sidebar navigation, search, categories, and smooth user interactions for efficient daily task management.",
      github: "https://github.com/Neerajkr223/TodoList.git",
      live: "https://todo-list-flame-chi-73.vercel.app/",
    },
    {
      icon: "🌾",
      name: "FarmSaathi — AI Advisory",
      desc: "Hindi AI chatbot for farmers using weather & soil data to give crop recommendations in real time.",
      github: "https://github.com/yourname/farmsaathi",
      live: "",
    },
    {
      icon: "📚",
      name: "PadhAI Learning App",
      desc: "Vernacular education app for Class 6–10 students. Offline-first, built with Flutter and Firebase.",
      github: "https://github.com/yourname/padhai",
      live: "",
    },
  ];

  return (
    <section id="projects" className="min-h-screen text-white py-10">
      <div className="flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-medium text-white mb-2">Projects</h2>

          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-gray-500"></span>
            <span className="text-white text-xl italic">my work</span>
            <span className="h-0.5 w-10 bg-gray-500"></span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className=" h-90 bg-[#1a1a1a] hover:bg-[#222] transition-colors p-8 flex flex-col items-center text-center gap-3 border border-[#333] rounded-lg"
              >
                <div className="text-4xl">{project.icon}</div>

                <h3 className="text-white font-bold text-lg">{project.name}</h3>

                <p className="text-[#aaa] text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-3 flex-wrap justify-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#444] text-white text-sm hover:border-white transition-colors"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#12DAA8] hover:bg-red-500 text-black text-sm transition-colors"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
