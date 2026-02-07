import React from "react";
import { motion, easeInOut } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Photo from "../assets/photoMy.jpg";
import photoHover from "../assets/MyPhoto.jpeg";

function Information({ contactsRef }) {
  const [isHover, setIsHover] = React.useState(false);
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
      <section className="relative min-h-screen  flex flex-col md:flex-row py-10 border border-background">

        {/* ---------------- LEFT CONTENT ---------------- */}
        <div className="w-full md:w-[50vw] min-h-[70vh] mx-auto mt-20 p-6">
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
              B.Tech in Computer Science & Engineering | Passionate about
              Software Development, (Basic) Data Structures and Algorithms using
              Java, and Web Development.
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

        {/* ---------------- RIGHT PHOTO (FULL ANIMATION) ---------------- */}
        <motion.div
          className="w-full md:w-[50vw] flex justify-center items-center mt-10 md:mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative mx-auto max-w-md">

            {/* Glow Background */}
            <div className = "hidden sm:block">
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            </div>

            {/* Rotating Border Ring */}
            <div className = "hidden sm:block">
            <motion.div
              className="absolute -inset-3 sm:-inset-4 md:-inset-6 border-4 border-blue-400 rounded-3xl opacity-40"
              animate={{
                rotate: [0, 360],
                borderRadius: ["24px", "48px", "24px"],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                borderRadius: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            {/* Second Smaller Rotating Ring */}
            <motion.div
                  className="absolute  -inset-1 sm:-inset-2 md:-inset-3 border-2 border-pink-400 rounded-2xl opacity-30"
                  animate={{
                  rotate: [360, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                    rotate: { duration: 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
             />
            </div>
            {/* Floating Particle */}
            <div className="hidden sm:block">
            <motion.div
              className="absolute top-10 -left-6 w-4 h-4 bg-blue-500 rounded-lg"
              animate={{
                y: [0, -30, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
  className="absolute top-12 -left-6 w-3 h-3 bg-blue-500 rounded-full"
  animate={{
    y: [0, -20, 0],
    opacity: [0.4, 1, 0.4],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

{/* Particle 2 */}
<motion.div
  className="absolute bottom-16 -right-8 w-4 h-4 bg-purple-500 rounded-lg"
  animate={{
    y: [0, 25, 0],
    x: [0, -10, 0],
    rotate: [0, 180, 360],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.5,
  }}
/>

{/* Particle 3 */}
<motion.div
  className="absolute top-20 right-4 w-2 h-2 bg-pink-400 rounded-full"
  animate={{
    y: [0, -15, 0],
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
  }}
  transition={{
    duration: 2.8,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1,
  }}
/>

{/* Particle 4 */}
<motion.div
  className="absolute bottom-10 left-8 w-3 h-3 bg-yellow-400 rounded-full"
  animate={{
    y: [0, -18, 0],
    x: [0, 12, 0],
    opacity: [0.4, 1, 0.4],
  }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.8,
  }}
/>
</div>

            {/* Main Photo Container */}
            <motion.div
              className="relative rounded-3xl overflow-hidden 
               w-[250px] h-[250px]
  sm:w-[250px] sm:h-[250px]
  md:w-[300px] md:h-[300px]
  lg:w-[350px] lg:h-[350px]
  w-[350px] h-[350px] border-8 border-white shadow-2xl"
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateY: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Image */}
              <motion.img
                src={isHover ? photoHover : Photo}
  alt="Profile"
  className="w-full h-full object-cover relative z-10"
  onMouseEnter={() => setIsHover(true)}
  onMouseLeave={() => setIsHover(false)}
  initial={{ scale: 1.1 }}
  animate={{ scale: [1, 1.05, 1] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{ scale: 1.15 }}
              />
            </motion.div>

            {/* Badge */}
           <motion.div
  className="
    absolute -bottom-6

    left-1/2 -translate-x-1/2   /* ✅ Center on mobile */

    md:left-auto md:translate-x-0 md:-right-6  /* ✅ Right on desktop */

    bg-gradient-to-r from-gray-900 to-gray-700
    text-white px-6 py-3 rounded-2xl shadow-xl
    border-2 border-white flex items-center
  "
  animate={{
    y: [0, -8, 0],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <p className="text-sm font-bold">Available for Hire</p>
</motion.div>

            {/* Sparkle */}
            <motion.div
              className="absolute top-6 right-6 text-yellow-300 text-3xl"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>
          </div>
        </motion.div>

        {/* ---------------- SCROLL ICON ---------------- */}
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
