import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaUser, FaMapPin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_on09nwc",
        "template_fm7ftau",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "cBsT38rErvR-Zqqc_",
      )

      .then(() => {
        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })

      .catch(() => {
        toast.error("Message failed to send");
      })

      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen text-black bg-white">
      <div className="w-full flex justify-center pt-6">
        <div className="text-center mb-3">
          <h2 className="text-4xl font-['Space_Grotesk'] font-bold text-gray-800 mb-2">
            Contact
          </h2>

          <div className="flex items-center justify-center gap-2">
            <span className="h-0.5 w-10 bg-gray-500"></span>

            <span className="text-gray-600 font-['Space_Grotesk'] text-xl italic">
              get in touch
            </span>

            <span className="h-0.5 w-10 bg-gray-500"></span>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* LEFT SIDE */}

          <div className="flex-1">
            <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-gray-900 mb-4">
              Let's Connect!
            </h2>

            <p
              className="
             font-['Outfit']
             text-lg
             md:text-xl
             leading-relaxed
             mb-8
             text-gray-600
             text-justify
             "
            >
              I'm a Full Stack Developer specializing in React.js and .NET,
              focused on creating modern, scalable, and high-performance web
              applications. I enjoy building clean user interfaces with React
              and developing secure, efficient backend solutions using .NET
              technologies.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <FaUser className="text-white" />
                </div>

                <div>
                  <p className="text-base text-black font-bold uppercase font-['Space_Grotesk'] ">
                    Name
                  </p>

                  <p className="text-gray-500 font-semibold">NEERAJ GUPTA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full  bg-gray-600 flex items-center justify-center">
                  <FaMapPin className="text-white" />
                </div>

                <div>
                  <p className="text-base text-black font-bold uppercase font-['Space_Grotesk']">
                    Phone
                  </p>

                  <p className="text-gray-500 font-semibold">+91 7007812166</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <FaEnvelope className="text-white" />
                </div>

                <div>
                  <p className="text-base text-black font-bold uppercase font-['Space_Grotesk']">
                    Email
                  </p>

                  <p className="text-gray-500 font-semibold">
                    neerajkrg23@gmail.com
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
                href="https://www.linkedin.com/in/neeraj-gupta-dotnet/"
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

          {/* RIGHT SIDE */}

          <div className="flex-1 mt-10">
            <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-gray-900 mb-4">
              Message me
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-3 mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="flex-1 border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-[#12DAA8]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="flex-1 border border-gray-400 rounded-lg px-4 py-3 outline-none focus:border-[#12DAA8]"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-3 outline-none focus:border-[#12DAA8]"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message.."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-lg px-4 py-3 mb-4 resize-none outline-none focus:border-[#12DAA8]"
              />

              <button
                type="submit"
                disabled={loading}
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
                <FaPaperPlane />

                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
