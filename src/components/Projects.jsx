import { LuSquareArrowOutUpRight } from "react-icons/lu";

import React from "react";
import { FaCartPlus, FaLock, FaReact, FaUtensils } from "react-icons/fa";
import { FaBook, FaCartShopping } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { SiDotnet } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      icon: <FaCartShopping className="text-violet-500" />,
      name: "E-Commerce REST API",
      desc: "Production-ready RESTful API built with ASP.NET Core. Features JWT-based authentication with Admin & Customer roles, complete CRUD operations for Products, Categories & Orders, Cart management, real-time notifications via SignalR, and secure role-based access control for scalable e-commerce solutions.",
      github: "https://github.com/Neerajkr223/DotNetECommerceApi.git",
      live: "",
    },
    {
      icon: <FaCartPlus className="text-blue-500" />,
      name: "Booksy - Online Bookstore",
      desc: "Full-featured online bookstore built with ASP.NET Core MVC. Includes role-based access for Admin & Customer, product & category management, Stripe payment integration, shopping cart, order management, and a clean responsive UI.",
      github: "https://github.com/Neerajkr223/AspNet-Bookstore.git",
      live: "",
    },
    {
      icon: <MdFastfood className="text-orange-500" />,
      name: "FoodWeb - Online Food Ordering UI",
      desc: "Modern food ordering frontend built with React. Features an intuitive restaurant browsing experience, food category filters, menu exploration, and a clean responsive UI optimized for seamless online food ordering.",
      github: "https://github.com/Neerajkr223/FoodWebUi.git",
      live: "https://food-web-ui.vercel.app/",
    },
    {
      icon: <FaUtensils className="text-amber-200" />,
      name: "Food Delivery Web App",
      desc: "Full Stack Food Delivery application built with React and ASP.NET Core Web API. Includes Admin dashboard, Customer management, Menu Item CRUD, Food search, Cart, Order management and authentication features.",
      github: "https://github.com/Neerajkr223/FoodWebApi.git",
      live: "",
    },
    {
      icon: <FaBook className="text-gray-300" />,
      name: "Advanced Todo List App",
      desc: "Modern task management application built with React. Includes responsive UI, task creation, task details, sidebar navigation, search, categories, and smooth user interactions.",
      github: "https://github.com/Neerajkr223/TodoList.git",
      live: "https://todo-list-flame-chi-73.vercel.app/",
    },
    {
      icon: <FaLock className="text-violet-500" />,
      name: "Password Generator",
      desc: "A secure and user-friendly password generator built with React. Generates strong random passwords with customizable options.",
      github: "https://github.com/Neerajkr223/password-gen.git",
      live: "https://password-gen-zeta-pied.vercel.app/",
    },
    {
      icon: (
        <div className="flex gap-1">
          <FaReact className="text-cyan-400" />
          <SiDotnet className="text-purple-500" />
        </div>
      ),
      name: "Full Stack E-Commerce",
      desc: "Project description here...",
      github: "",
      live: "",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundImage: "url('/images/bghome.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen text-white py-10"
    >
      <div className="flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-medium mb-2">Projects</h2>

          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-gray-500"></span>

            <span className="text-white text-xl italic">my work</span>

            <span className="h-0.5 w-10 bg-gray-500"></span>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className="
            min-h-90
            bg-gray-600
            hover:bg-[#12DAA8]
            transition-colors
            p-8
            flex
            flex-col
            items-center
            text-center
            gap-3
            rounded-lg
            shadow-2xl"
              >
                <div className="text-4xl">{project.icon}</div>

                <h3 className="text-2xl font-medium">{project.name}</h3>

                <p className="text-base leading-relaxed font-medium">
                  {project.desc}
                </p>

                <div className="flex gap-6 mt-3 flex-wrap justify-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            px-6 py-3
            rounded-full
            border-2
            border-white"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
            px-6 py-3
            rounded-full 
            bg-white hover:bg-gray-300
            text-black flex items-center gap-2"
                    >
                      <span>
                        <LuSquareArrowOutUpRight />
                      </span>
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
