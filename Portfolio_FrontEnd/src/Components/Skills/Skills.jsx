import Recat from 'react';
import {FaJava, FaPython, FaReact, FaGitAlt, FaGithub} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { AiTwotoneTool } from 'react-icons/ai';
import { FaDatabase, FaLaptopCode, FaBrain } from 'react-icons/fa';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { SiSpringboot, SiTailwindcss, SiMongodb } from 'react-icons/si';
function Skills () {
    return (
        <>
        <section id="skills" className = "min-h-screen border border-background">
        <div  className = "w-full h-full mt-20  flex flex-col items-center">
            <div className = "flex flex-col items-center justify-center gap-4">
                <h1 className = "text-3xl font-bold text-sky-400">Core Technical Skills</h1>
                <p className = "text-2xl text-sky-600">Tools & Technologies</p>
            </div>
          </div>
        <div className = "flex flex-col md:flex-row">
         <div className = "w-full md:w-[50vw] min-h-[50vh] ">
            <div className = " w-full  flex items-center flex-col gap-10">
                <div className = "w-full md:w-[40vw] gap-2 border border-border flex flex-col mt-10 px-4 py-4 rounded-lg bg-[#030644]/30 group hover:border-white shadow-md md:hover:scale-105 transition duration-300 ease-in-out">
                     <div className = "flex flex-row gap-2 text-white">
                        <span>{"</>"}</span>
                        <h1 className = "font-medium">Programming Language</h1>
                    </div>
                    
                    <div className = "flex gap-2 md:gap-10  mt-2">
                        <span className = " flex gap-2 px-2 py-2 rounded-xl text-white shadow-md hover:scale-105 transition duration-300 ease-in-out"> 
                            <FaJava size={25} color="#f89820"  />Java</span>
                        <span className = " flex gap-2 px-2 py-2 rounded-xl text-white shadow-md hover:scale-105 transition duration-300 ease-in-out"> 
                            <SiJavascript size = {25} color = "#F0DB4F"/>JavaScript</span>
                        <span className = "flex gap-2 px-2 py-2 rounded-xl text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                             <FaPython size={25} color="#3776AB"/>Python</span>
                    </div>
                </div>

                <div className = " w-full md:w-[40vw] flex flex-col gap-2 border border-border hover:border-white bg-[#030644]/30 my-20 px-4 py-4 shadow-md group md:hover:scale-105 transition duration-300 ease-in-out rounded-lg ">
                    <div className = "flex flex-row gap-2 text-white">
                        <span><AiTwotoneTool size={25}/></span>
                        <h1 className = "font-medium">Libraries & Tools</h1>
                    </div>
                        
                        <div className = "flex flex-row md:gap-10 gap-2 mt-2">
                            <span className = "flex gap-2 px-2 py-2 rounded-xl text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                                <FaReact size={25} color="blue"/>React</span>
                            <span className = "flex px-2 py-2 gap-2 rounded-xl text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                                <FaGitAlt size={25} color="orange"/>Git</span>
                            <span className = "flex px-2 py-2 rounded-xl gap-2 text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                                <FaGithub size={25} color="black"/>GitHub</span>
                        </div>
                    
                    
                </div>
            </div>
         </div>
         <div className =" w-full md:w-[50vw] min-h-[50vh] ">
                     <div className = " w-full   flex items-center flex-col gap-10">
                         <div className ="border border-border hover:border-white w-full md:w-[40vw] mt-10 rounded-lg px-4 py-4 bg-[#030644]/30 shadow-md group md:hover:scale-105 transition duration-300 ease-in-out">
                             <div className = "flex flex-row gap-2 text-white">
                                 <span><FaDatabase size={25}/></span>
                                 <h1 className = "font-medium">Frameworks & DataBases</h1>
                             </div>
                             <div className = "flex flex-col items-center  gap-2 mt-2">
                                 <div className = "flex flex-wrap gap-4">
                                 <span className = " rounded-xl px-2 py-2 flex flex-row gap-2 text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                                     <BiLogoSpringBoot size={25} color="green"/>Spring Framework</span>
                                 <span className = " rounded-xl px-2 py-2 flex flex-row gap-2 text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                                     <SiSpringboot size={25} color="green"/>Spring Boot</span>
                                 </div>
                                 <div className = "flex flex-wrap gap-4">
                                 <span className = " rounded-xl px-2 py-2 flex flex-row gap-2 text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                                     <SiTailwindcss size={25} color="blue"/>Tailwind css</span>
                                 <span className = " rounded-xl px-2 py-2 flex flex-row gap-2 text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                                     <SiMongodb size={25} color="green"/>MongoDB</span>
                                 </div>
                             </div>
                         </div>
                         <div className ="w-full md:w-[40vw] flex flex-col gap-2 border border-border hover:border-white mt-8 mb-20 px-4 py-4 shadow-md group md:hover:scale-105 transition duration-300 ease-in-out rounded-lg bg-[#030644]/30">
                             <div className = "flex flex-row gap-2 text-white">
                                 <span><FaLaptopCode size={25}/></span>
                                 <h1 className = "font-medium">Core CS Concepts</h1>
                             </div>
                             <div className = "flex flex-row">
                                 <span className = "flex flex-row gap-2  rounded-xl px-2 py-2 text-white shadow-md hover:scale-105 transition duration-300 ease-in-out">
                                     <FaBrain size={25} color="black"/>(Basis) Data Structures & Algorithms</span>
                             </div>
                         </div>
                     </div>
                  </div>
         </div>
         </section>
        </>
    )
}
export default Skills;