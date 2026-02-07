import React from 'react';
import { LuSquareArrowOutUpRight } from 'react-icons/lu';
import {FiGithub} from 'react-icons/fi';
function ProjectMain () {
    const openVirtualStudyBuddy = () => {
        window.open(
            
        );
    };
    return (
        <>
        <section id="projects" className = "min-h-screen border border-background">
        <div  className = "w-full h-full mt-20  flex flex-col items-center">
            <div className = "flex flex-col items-center justify-center gap-4">
                <h1 className = "text-3xl font-bold text-sky-400">Project</h1>
                <p className = "text-2xl text-sky-600">Practical Experience</p>
            </div>
          </div>
        <div className = " w-full mx-auto flex flex-col justify-center items-center">
            <div className = " group w-full md:max-w-4xl md:mx-auto border border-border hover:border-white bg-[#030644]/30 md:px-10 mt-6 mb-20 rounded-lg shadow-md md:hover:scale-105 transition duration-300 ease-in-out">
                <div className = " mt-4 flex flex-row justify-between">
                    <h1 className = "font-bold text-white group-hover:text-blue-500">Virtual Study Buddy</h1>
                    <a 
                    href = "https://portfolio-azeh.onrender.com/github/Virtual-Study-Buddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className = "items-end border border-border rounded group-hover:border-blue-600 ">
                        <LuSquareArrowOutUpRight size={20} color='white'
                        className = ""/></a>
                </div>
            <div className = " my-2 pl-4 text-white">
                <p>• Developed a full-stack web app for managing study schedules, tasks, and reminders.</p>
                <p>• Implemented smart reminders and personalized academic planning to improve time management.</p>
                <p>• Provided quick access to past question papers and curated study resources.</p>
            </div>
            <div className = "pl-4 flex gap-2 mb-4">
                <span className = " px-2 border border-border rounded-2xl text-white group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">React</span>
                <span className = " px-2 border border-border rounded-2xl text-white group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">Java</span>
                <span className = " px-2 border border-border rounded-2xl text-white group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">Spring Boot</span>
                <span className = " px-2 border border-border rounded-2xl text-white group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">MongoDB</span>
            </div>
             </div>
             <div className = " group w-full md:max-w-4xl md:mx-auto border border-border hover:border-white bg-[#030644]/30 md:px-10 mt-6 mb-20 rounded-lg shadow-md md:hover:scale-105 transition duration-300 ease-in-out">
                <div className = "mt-4 flex flex-row justify-between ">
                    <h1 className = "font-bold text-white group-hover:text-blue-500">Budget-Planner </h1>
                    <a 
                    href = "https://portfolio-azeh.onrender.com/github/Budget-Planner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className = "items-end border border-border rounded group-hover:border-blue-500"><LuSquareArrowOutUpRight size={20} color='white'/></a>
                </div>
            <div className = "my-2 pl-4 text-white">
                <p>• Developed a Python-Based Budget Planner for managing income, expenses, and savings goals.</p>
                <p>• Implemented expense tracking, category-wise analysis, and budget limit alerts. </p>
                <p>• Stored and retrieved data using CSV, JSON for persistent records.</p>
                <p>• Created visual summaries of spending with Matplotlib and Pandas.</p>
            </div>
            <div className = "pl-4 flex gap-2 mb-4">
                <span className = "px-2 border border-border rounded-2xl text-white group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">React</span>
                <span className = "px-2 border border-border rounded-2xl text-white group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">Java</span>
                <span className = "px-2 border border-border rounded-2xl text-white group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">NumPy</span>
                <span className = "px-2 border border-border rounded-2xl text-white group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">Machine Learning</span>
            </div>
             </div>
             <div className = " shadow-md hover:scale-105 transition duration-300 ease-in-out mb-20 rounded-xl">
                <a 
                href ="https://portfolio-azeh.onrender.com/github/AllRepo"
                target='_blank'
                 rel="noopener noreferrer"
                className = " flex flex-row gap-2 border border-border rounded-xl px-10 py-1 bg-[#030644]/30 text-white  hover:text-blue-500 hover:border-white transition">view all projects on
                     <FiGithub size={20} color='black'/> 
                </a>
                  
             </div>
        </div>
        </section>
        </>
    )
}
export default ProjectMain;