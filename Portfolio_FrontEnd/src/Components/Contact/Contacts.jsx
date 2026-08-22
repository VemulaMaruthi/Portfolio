import React, { forwardRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contacts = forwardRef((props, ref) => {
  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openGithub = () => {
    window.open(
      "https://github.com/YOUR-GITHUB-USERNAME",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openEmail = () => {
    window.location.href = "mailto:maruthivemula08@gmail.com";
  };

  return (
    <section
      id="contact"
      className="min-h-screen border border-background"
    >
      <div
        ref={ref}
        className="w-full min-h-screen flex flex-col items-center justify-center px-4"
      >
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-400">
            Let’s Connect
          </h1>

          <p className="text-xl md:text-2xl text-sky-600">
            Build Something Great Together
          </p>

          <p className="font-medium text-white max-w-xl">
            I'm open to software engineering opportunities, collaborations,
            and interesting projects. Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* LinkedIn */}
          <button
            onClick={openLinkedin}
            className="
              w-full
              flex flex-col items-center justify-center
              gap-3
              border border-border
              rounded-xl
              px-6 py-8
              bg-[#030644]/30
              shadow-md
              hover:scale-105
              hover:border-blue-500
              transition duration-300
            "
          >
            <FaLinkedin
              size={45}
              className="text-blue-500"
            />

            <h2 className="font-semibold text-lg text-white">
              LinkedIn
            </h2>

            <p className="text-sm text-gray-400">
              Connect with me
            </p>
          </button>

          {/* GitHub */}
          <button
            onClick={openGithub}
            className="
              w-full
              flex flex-col items-center justify-center
              gap-3
              border border-border
              rounded-xl
              px-6 py-8
              bg-[#030644]/30
              shadow-md
              hover:scale-105
              hover:border-gray-400
              transition duration-300
            "
          >
            <FaGithub
              size={45}
              className="text-white"
            />

            <h2 className="font-semibold text-lg text-white">
              GitHub
            </h2>

            <p className="text-sm text-gray-400">
              View my projects
            </p>
          </button>

          {/* Email */}
          <button
            onClick={openEmail}
            className="
              w-full
              flex flex-col items-center justify-center
              gap-3
              border border-border
              rounded-xl
              px-6 py-8
              bg-[#030644]/30
              shadow-md
              hover:scale-105
              hover:border-red-400
              transition duration-300
            "
          >
            <FaEnvelope
              size={45}
              className="text-red-400"
            />

            <h2 className="font-semibold text-lg text-white">
              Email
            </h2>

            <p className="text-sm text-gray-400">
              Send me an email
            </p>
          </button>
        </div>

        {/* Email Address */}
        <p className="mt-10 text-sm text-gray-400">
          maruthivemula08@gmail.com
        </p>
      </div>
    </section>
  );
});

export default Contacts;