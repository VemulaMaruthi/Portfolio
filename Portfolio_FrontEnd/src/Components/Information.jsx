import React from "react";
import {motion} from "framer-motion";
import Photo from "../assets/photoMy.jpg"

function Information ({contactsRef}) {
    const scrollToContacts = () => {
        contactsRef.current.scrollIntoView({
            behavior:"smooth"
        });
    };
    const openResume = () =>{
          window.open(
            "https://portfolio-azeh.onrender.com/Resume/MaruthiVemula_Resume.pdf",
            "_blank"
          );
    };
    return(
        <>
        <div className = "flex flex-col md:flex-row">
            <div className = "w-full md:w-[50vw] min-h-[70vh] mx-auto mt-16 p-6">
                <div className = "flex  justify-center">
                    <motion.div 
                        initial={{opacity: 0, y: -20}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className = "border-2 rounded-full px-4 py-1">
                        <p className = "text-sm"> Welcome to my Portfolio</p>
                    </motion.div>
                </div>
                <div className = "flex flex-col items-center text-center mt-6 gap-2">
                    <h1 className = "text-4xl md:text-6xl font-bold">I'm Maruthi Vemula</h1>
                    <p className = "text-gray-500 text-lg md:text-3xl">Aspiring Java Full-Stack Developer</p>
                </div>
                <div className = "mt-6 text-center px-4 md:px-16">
                    <p className = "text-gray-600"> B.Tech in Computer Science & Engineering | 
                    Passionate about Software Development, (Basic) Data Structures 
                    and Algorithms using Java, and Web Development.
                    </p>
                </div>
                <div className = "m-10 flex flex-col md:flex-row gap-2 justify-center items-center">
                    <button onClick={scrollToContacts} className = "border-2 rounded-full px-6 py-2 bg-blue-600 text-white hover:bg-white hover:text-[#00131c] hover:border-[#00131c] transition duration-300">Let's Connect</button>
                    <button onClick={openResume} className = "border-2 rounded-full px-6 py-2 bg-blue-600 text-white hover:bg-white hover:text-[#00131c] hover:border-[#00131c] transition duration-300">Resume</button>
                </div>
            </div>
            <div className = "w-full md:w-[50vw] min-h-[40vh] md:min-h-[70vh] mx-auto  md:mt-20 flex  justify-center">
                       <div className = "w-full  md:w-[30vw] md:h-[70vh] border-8 border-black rounded-lg overflow-hidden"> 
                        <img src={Photo}
                         alt="Profile"
                         className="w-full h-full object-cover "/>
                       </div>
                     </div>
            </div>
        </>
    )
}
export default Information;