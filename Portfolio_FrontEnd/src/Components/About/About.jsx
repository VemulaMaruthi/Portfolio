import Recat from "react";
import { SiLeetcode } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
function About () {
    return (
        <>
        <section id="about" className = "min-h-screen border border-background">
         <div  className = "w-full    flex flex-col items-center pb-10">
            <div className = " flex flex-col items-center text-center gap-4  mt-20">
                <h1 className = "text-3xl font-bold text-sky-400">About Me</h1>
                <p className = "text-sky-600 text-2xl">Building scalable software with clean code and modern technologies.</p>
            </div>
         </div>
        <div className = "flex flex-col md:flex-row">
         <div className = "w-full md:w-[50vw]  pl-2">
            <div className = "flex flex-col justify-center md:ml-16 my-6 gap-10 text-white">
            <p className = ""> I am a passionate Computer Science student graduating in 2026, 
            with a strong interest in software development and problem-solving. I enjoy building
             reliable, scalable applications and translating complex ideas into practical software 
             solutions.</p>

            <p>My journey in technology is driven by curiosity and hands-on learning. I have worked 
            on full-stack web applications, algorithmic problem-solving, and data-driven projects, 
            gaining experience in writing clean, maintainable code and designing efficient systems.
             I enjoy exploring how software can create real-world impact through thoughtful 
             engineering.</p>


            <p>Beyond development, I actively explore new technologies, contribute to collaborative
             projects, and work on innovative solutions that connect software with real-world 
             applications.</p>
            
             </div>
             
        </div>
         <div className = " flex sm:justify-center items-center flex-col gap-20 w-full md:w-[50vw] mt-4">
            <section className = "group p-6 rounded-2xl bg-[#030644]/30 border border-border hover:border-white transition-all duration-300 hover:shadow-lg"> 
                <div className = "flex items-center gap-3 group">
                    <span className="text-lg font-medium text-white">Infinite Learning</span>
               <a
                href="https://leetcode.com/u/maruthi_95/"
                target="_blank"
                className = "flex items-center gap-1 text-orange-500 transition-transform duration-300 group-hover:translate-x-1"
                >
                <SiLeetcode size={25} />
                <ArrowUpRight
          size={18}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
                </a>
                </div>
            </section>
            <section className = "group p-4 text-white rounded-2xl bg-[#030644]/30 border border-border hover:border-white transition-all duration-300 hover:shadow-lg">6+ Technologies learned</section>
            <section className = "group p-4 text-white rounded-2xl bg-[#030644]/30 border border-border hover:border-white transition-all duration-300 hover:shadow-lg">over 5+ projects</section>
        </div>
        </div>
        </section>
        </>
    )
}
export default About;