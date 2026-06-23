import React from "react";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaUser, FaMapPin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const socialLinks = [
    { Icon: FaLinkedin, label: "LinkedIn" },
    { Icon: FaGithub, label: "GitHub" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="h-screen text-black bg-white">
      <div className="w-full h-fit flex justify-center pt-6">
        <div className="text-center mb-3">
          <h2 className="text-4xl font-medium text-gray-800 mb-2">Contact</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-gray-500"></span>
            <span className="text-gray-600 text-xl italic">get in touch</span>
            <span className="h-0.5 w-10 bg-gray-500"></span>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* LEFT DIV */}
          <div className="flex-1">
            <h2 className="text-2xl font-medium text-gray-800 mb-4 ">
              Let's Connect!
            </h2>
            <p className=" text-xl leading-relaxed mb-8 text-justify">
              I'm a Full Stack Developer skilled in React and .NET, passionate
              about building modern and scalable web applications. From crafting
              responsive frontends to developing robust backends, I enjoy every
              part of the development journey. Always open to exciting projects
              and meaningful collaborations — let's build something great
              together!
            </p>

            {/* Contact Info */}
            <div className="space-y-5 mb-8 ">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                  <FaUser className="text-[#12DAA8] text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-700 font-medium uppercase">
                    Name
                  </p>
                  <p className="text-gray-400 font-semibold">NEERAJ GUPTA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                  <FaMapPin className="text-[#12DAA8] text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-700 font-medium uppercase">
                    Phone
                  </p>
                  <p className="text-gray-400 font-semibold">+91 7007812166</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                  <FaEnvelope className="text-[#12DAA8] text-lg" />
                </div>
                <div>
                  <p className="text-xs text-gray-700 font-medium uppercase">
                    Email
                  </p>
                  <p className="text-gray-400 font-semibold">
                    neerajkrg23@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-10">
              {socialLinks.map(({ Icon, label }, i) => (
                <button
                  key={i}
                  className="group flex items-center  gap-2 bg-white text-black rounded-full px-3 py-3 overflow-hidden transition-all duration-300 w-14 hover:w-32 shadow-[0_0_15px_5px_rgba(0,0,0,0.08)]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#12DAA8] flex items-center justify-center flex-shrink-0">
                    <Icon className=" text-xl" />
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT DIV */}
          <div className="flex-1 mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Message me
            </h2>

            <div className="flex gap-3 mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 border border-gray-400 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#12DAA8] transition-colors placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 border border-gray-400 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#12DAA8] transition-colors placeholder-gray-400"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#12DAA8] transition-colors placeholder-gray-400 mb-3"
            />

            <textarea
              name="message"
              placeholder="Message.."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#12DAA8] transition-colors placeholder-gray-400 resize-none mb-4"
            />

            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-[#12DAA8] border-[#12DAA8] hover:bg-transparent hover:text-[#12DAA8] hover:border-2 text-black font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <FaPaperPlane className="text-sm" />
              Send message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
