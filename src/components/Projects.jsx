// import React from "react";
// import { FaCartPlus, FaLock, FaReact, FaUtensils } from "react-icons/fa";
// import { FaBook, FaCartShopping } from "react-icons/fa6";
// import { MdFastfood } from "react-icons/md";
// import { SiDotnet } from "react-icons/si";

// const Projects = () => {
//   const projects = [
//     {
//       icon: <FaCartShopping className="text-violet-500" />,
//       name: "E-Commerce REST API",
//       desc: "Production-ready RESTful API built with ASP.NET Core. Features JWT-based authentication with Admin & Customer roles, complete CRUD operations for Products, Categories & Orders, Cart management, real-time notifications via SignalR, and secure role-based access control for scalable e-commerce solutions.",
//       github: "https://github.com/Neerajkr223/DotNetECommerceApi.git",
//       live: "",
//     },
//     {
//       icon: <FaCartPlus className="text-blue-500" />,
//       name: "Booksy - Online Bookstore",
//       desc: "Full-featured online bookstore built with ASP.NET Core MVC. Includes role-based access for Admin & Customer, product & category management, Stripe payment integration, shopping cart, order management, and a clean responsive UI.",
//       github: "https://github.com/Neerajkr223/AspNet-Bookstore.git",
//       live: "",
//     },
//     {
//       icon: <MdFastfood className="text-orange-500" />,
//       name: "FoodWeb - Online Food Ordering UI",
//       desc: "Modern food ordering frontend built with React. Features an intuitive restaurant browsing experience, food category filters, menu exploration, and a clean responsive UI optimized for seamless online food ordering.",
//       github: "https://github.com/Neerajkr223/FoodWebUi.git",
//       live: "https://food-web-ui.vercel.app/",
//     },
//     {
//       icon: <FaUtensils className="text-amber-200" />,
//       name: "Food Delivery Web App",
//       desc: "Full Stack Food Delivery application built with React and ASP.NET Core Web API. Includes Admin dashboard, Customer management, Menu Item CRUD, Food search, Cart, Order management and authentication features.",
//       github: "https://github.com/Neerajkr223/FoodWebApi.git",
//       live: "",
//     },

//     {
//       icon: <FaBook className="text-gray-300" />,
//       name: "Advanced Todo List App",
//       desc: "Modern task management application built with React. Includes responsive UI, task creation, task details, sidebar navigation, search, categories, and smooth user interactions for efficient daily task management.",
//       github: "https://github.com/Neerajkr223/TodoList.git",
//       live: "https://todo-list-flame-chi-73.vercel.app/",
//     },
//     {
//       icon: <FaLock className="text-violet-500" />,
//       name: "Password Generator",
//       desc: "A secure and user-friendly password generator built with React. Generates strong random passwords with customizable options like length, uppercase, lowercase, numbers, and special characters. Includes copy-to-clipboard functionality with a clean and responsive UI.",
//       github: "https://github.com/Neerajkr223/password-gen.git",
//       live: "https://password-gen-zeta-pied.vercel.app/",
//     },
//     {
//       icon: (
//         <div className="flex gap-1 items-center">
//           <FaReact className="text-cyan-400" />
//           <SiDotnet className="text-purple-500" />
//         </div>
//       ),
//       name: "Your Project Name",
//       desc: "Project description here...",
//       github: "",
//       live: "",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       style={{
//         backgroundImage: "url('/images/bghome.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="min-h-screen text-white py-10"
//     >
//       <div className="flex flex-col items-center">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-medium text-white mb-2">Projects</h2>

//           <div className="flex items-center justify-center gap-2">
//             <span className="h-0.5 w-10 bg-gray-500"></span>
//             <span className="text-white text-xl italic">my work</span>
//             <span className="h-0.5 w-10 bg-gray-500"></span>
//           </div>
//         </div>

//         {/* Project Grid */}
//         <div className="w-full max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-2">
//             {projects.map((project, i) => (
//               <div
//                 key={i}
//                 className=" h-90 bg-gray-600 hover:bg-[#12DAA8]  transition-colors p-8 flex flex-col items-center text-center gap-3 rounded-lg shadow-2xl"
//               >
//                 <div className="text-4xl">{project.icon}</div>

//                 <h3 className="text-white font-medium text-2xl">
//                   {project.name}
//                 </h3>

//                 <p className="text-white text-base leading-relaxed font-medium">
//                   {project.desc}
//                 </p>

//                 {/* Buttons */}
//                 <div className="flex gap-3 mt-3 flex-wrap justify-center">
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white text-base hover:border-white transition-colors"
//                     >
//                       <svg
//                         width="14"
//                         height="14"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
//                       </svg>
//                       GitHub
//                     </a>
//                   )}

//                   {project.live && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-transparent hover:border-2 hover:border-black  text-black text-lg transition-colors"
//                     >
//                       <svg
//                         width="18"
//                         height="18"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2.5"
//                       >
//                         <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                         <polyline points="15 3 21 3 21 9" />
//                         <line x1="10" y1="14" x2="21" y2="3" />
//                       </svg>
//                       Live Demo
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

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

                <div className="flex gap-3 mt-3 flex-wrap justify-center">
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
            px-4 py-2
            rounded-full
            bg-white
            text-black"
                    >
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
