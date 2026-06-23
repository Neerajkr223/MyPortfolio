import React from "react";

const About = () => {
  return (
    <section id="about" className="h-screen text-black bg-white ">
      <div className="h-full flex flex-col items-center">
        <div className="text-center mb-4  pt-5 w-full h-fit flex flex-col justify-center">
          <h2 className="text-4xl font-medium text-gray-800 mb-2">About me</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-gray-500"></span>
            <span className="text-gray-600 text-xl italic">who I am</span>
            <span className="h-0.5 w-10 bg-gray-500"></span>
          </div>
        </div>
        <div className="w-full flex h-[87vh]">
          <div className="w-[45%] flex items-center justify-center">
            <div className="w-[70%] h-[90%] ">
              <img
                className="h-full "
                src="/images/AboutImg.png"
                alt="Description"
              />
            </div>
          </div>
          <div className="w-[55%] p-4">
            <div className="w-155 pt-5">
              <span className="text-[#12DAA8] font-medium text-2xl block mb-2">
                I am Neeraj Gupta and I'm a Full Stack Developer.....|
              </span>

              <p className="text-justify leading-7 text-base font-medium ">
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
                write clean, scalable code. <br /> I’m also interested in
                collaborating on innovative projects where I can contribute,
                learn, and grow as a developer while building impactful
                real-world solutions.
              </p>
              <button className="bg-[#12DAA8] border-2 border-[#12DAA8] text-white hover:bg-transparent hover:border-[#12DAA8] hover:text-[#12DAA8] font-semibold py-3 px-8 rounded-lg text-xl tracking-wide transition-colors duration-200 mt-7">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
