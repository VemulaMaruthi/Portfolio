import React from "react";
import { motion, easeInOut } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Photo from "../assets/photoMy.jpg";

function Information({ contactsRef }) {
  const scrollToContacts = () => {
    contactsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openResume = () => {
    window.open(
      "https://portfolio-azeh.onrender.com/Resume/MaruthiVemula_Resume.pdf",
      "_blank"
    );
  };

  return (
    <>
    
     <section className="relative min-h-screen flex flex-col md:flex-row">

       
        <div className="w-full md:w-[50vw] min-h-[70vh] mx-auto mt-16 p-6">
          <div className="flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="border-2 border-border rounded-full px-4 py-2"
            >
              <p className="text-sm text-white whitespace-nowrap">
                Welcome to my Portfolio
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col items-center text-center mt-6 gap-2">
            <h1 className="text-4xl md:text-6xl font-bold text-sky-700">
              I'm Maruthi Vemula
            </h1>
            <p className="text-gray-500 text-lg md:text-3xl">
              Aspiring Java Full-Stack Developer
            </p>
          </div>

          <div className="mt-6 text-center px-4 md:px-16">
            <p className="text-white">
              B.Tech in Computer Science & Engineering | Passionate about Software
              Development, (Basic) Data Structures and Algorithms using Java, and
              Web Development.
            </p>
          </div>

          <div className="m-10 flex flex-col md:flex-row gap-3 justify-center items-center">
            <button
              onClick={scrollToContacts}
              className="border-2 border-border rounded-full px-6 py-2 bg-blue-600 text-white hover:bg-white hover:text-[#00131c] hover:border-[#00131c] transition duration-300"
            >
              Let's Connect
            </button>
            <button
              onClick={openResume}
              className="border-2 border-border rounded-full px-6 py-2 bg-blue-600 text-white hover:bg-white hover:text-[#00131c] hover:border-[#00131c] transition duration-300"
            >
              Resume
            </button>
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 1.2 },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: easeInOut,
            },
          }}
          className="w-full md:w-[50vw] min-h-[40vh] md:min-h-[70vh] mx-auto md:mt-20 flex justify-center"
        >
          <div className="w-full md:w-[30vw] md:h-[70vh] border-8 border-border rounded-lg overflow-hidden">
            <img
              src={Photo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            hidden md:flex 
            flex flex-col items-center gap-2

            mt-10                
            md:absolute          
            md:bottom-8
            md:left-1/2
            md:-translate-x-1/2
          "
        >
          <span className="text-xs text-white tracking-widest uppercase">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} color="white" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Information;
