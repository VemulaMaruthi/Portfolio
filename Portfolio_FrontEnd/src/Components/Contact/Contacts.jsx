import React, { forwardRef, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error message
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields");
      setError(true);
      return;
    }

    setLoading(true);
    setStatus("");
    setError(false);

    try {
      const response = await fetch(
        "https://portfolio-azeh.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully");
        setError(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message");
        setError(true);
      }
    } catch (error) {
      setStatus("Server error");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openLinkedin = () => {
    window.open("https://portfolio-azeh.onrender.com/linkedIn", "_blank");
  };

  const openGithub = () => {
    window.open("https://portfolio-azeh.onrender.com/gitHub", "_blank");
  };

  return (
    <>
      <div ref={ref} className="w-full h-full mt-20 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl">Let’s Connect</h1>
          <p className="text-2xl text-gray-500">
            Build Something Great Together
          </p>
          <p className="font-medium text-center">
            I enjoy collaborating on creative ideas and exciting projects.
            Reach out if you’d like to team up!
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Contact Form */}
        <div className="w-full md:w-[50vw] min-h-[50vh]">
          <div className="w-full flex items-center flex-col gap-10">
            <div
              className="w-full md:w-[40vw] border-2 flex flex-col mt-10 px-4 py-6
                         rounded-lg bg-gray-100 shadow-md"
            >
              <h1 className="font-medium text-lg mb-4">Get In Touch</h1>

              {/* Status Message */}
              {status && (
                <p
                  className={`mb-4 text-sm font-medium ${
                    error ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {status}
                </p>
              )}

              <div className="flex flex-col gap-1 mb-4">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border rounded-md px-3 py-2 outline-none
                             focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1 mb-4">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border rounded-md px-3 py-2 outline-none
                             focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1 mb-6">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  className="border rounded-md px-3 py-2 outline-none resize-none
                             focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={sendMessage}
                disabled={loading}
                className="self-start bg-blue-600 text-white px-6 py-2 rounded-md
                           hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>

      
        <div className="w-full md:w-[50vw] min-h-[50vh]">
          <div className="w-full flex items-center flex-col gap-10">
            <button
              onClick={openLinkedin}
              className="border-2 w-full md:w-[30vw] flex items-center gap-4
                         mt-10 rounded-lg px-4 py-4 bg-gray-100 shadow-md
                         hover:scale-105 transition"
            >
              <FaLinkedin size={40} color="blue" />
              <div className="flex flex-col text-left">
                <h1 className="font-medium">LinkedIn</h1>
                <p className="text-sm text-gray-600">Connect with me</p>
              </div>
            </button>

            <button
              onClick={openGithub}
              className="border-2 w-full md:w-[30vw] flex items-center gap-4
                         rounded-lg px-4 py-4 bg-gray-100 shadow-md
                         hover:scale-105 transition"
            >
              <FaGithub size={40} />
              <div className="flex flex-col text-left">
                <h1 className="font-medium">GitHub</h1>
                <p className="text-sm text-gray-600">Follow me</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default Contacts;
