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
        <div className = "w-full h-full mt-20  flex flex-col items-center">
            <div className = "flex flex-col items-center justify-center gap-4">
                <h1 className = "text-3xl">Project</h1>
                <p className = "text-2xl text-gray-500">Practical Experience</p>
            </div>
          </div>
        <div className = " w-full mx-auto flex flex-col justify-center items-center">
            <div className = " group w-full md:max-w-4xl md:mx-auto border-2 bg-gray-100 md:px-10 mt-6 mb-20 rounded-lg shadow-md md:hover:scale-105 transition duration-300 ease-in-out">
                <div className = " mt-4 flex flex-row justify-between">
                    <h1 className = "font-bold group-hover:text-blue-500">Virtual Study Buddy</h1>
                    <a 
                    href = "http://localhost:8080/github/Virtual-Study-Buddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className = "items-end border-2 border-black rounded group-hover:border-blue-600">
                        <LuSquareArrowOutUpRight size={20}
                        className = ""/></a>
                </div>
            <div className = " my-2 pl-4">
                <p>• Developed a full-stack web app for managing study schedules, tasks, and reminders.</p>
                <p>• Implemented smart reminders and personalized academic planning to improve time management.</p>
                <p>• Provided quick access to past question papers and curated study resources.</p>
            </div>
            <div className = "pl-4 flex gap-2 mb-4">
                <span className = "border-2 border-gray-500 rounded-xl px-2 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">React</span>
                <span className = "border-2 border-gray-500 rounded-xl px-2 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">Java</span>
                <span className = "border-2 border-gray-500 rounded-xl px-2 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">Spring Boot</span>
                <span className = "border-2 border-gray-500 rounded-xl px-2 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500">MongoDB</span>
            </div>
             </div>
             <div className = " group w-full md:max-w-4xl md:mx-auto border-2 bg-gray-100 md:px-10 mt-6 mb-20 rounded-lg shadow-md md:hover:scale-105 transition duration-300 ease-in-out">
                <div className = "mt-4 flex flex-row justify-between ">
                    <h1 className = "font-bold group-hover:text-blue-500">Budget-Planner </h1>
                    <a 
                    href = "http://localhost:8080/github/Budget-Planner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className = "items-end border-2 border-black rounded group-hover:border-blue-500"><LuSquareArrowOutUpRight size={20}/></a>
                </div>
            <div className = "my-2 pl-4">
                <p>• Developed a Python-Based Budget Planner for managing income, expenses, and savings goals.</p>
                <p>• Implemented expense tracking, category-wise analysis, and budget limit alerts. </p>
                <p>• Stored and retrieved data using CSV, JSON for persistent records.</p>
                <p>• Created visual summaries of spending with Matplotlib and Pandas.</p>
            </div>
            <div className = "pl-4 flex gap-2 mb-4">
                <span className = "border-2 border-gray-500 rounded-xl px-2 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition">React</span>
                <span className = "border-2 border-gray-500 rounded-xl px-2 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition">Java</span>
                <span className = "border-2 border-gray-500 rounded-xl px-2 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition">NumPy</span>
                <span className = "border-2 border-gray-500 rounded-xl px-2 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition">Machine Learning</span>
            </div>
             </div>
             <div className = " shadow-md hover:scale-105 transition duration-300 ease-in-out mb-20 rounded-xl">
                <a 
                href ="http://localhost:8080/github/AllRepo"
                target='_blank'
                 rel="noopener noreferrer"
                className = " flex flex-row gap-2 border-2 rounded-xl px-10 py-1 bg-gray-100 border-[#00131c] hover:text-blue-500 hover:border-blue-500 transition">view all projects on
                     <FiGithub size={20} /> 
                </a>
                  
             </div>
        </div>
        </>
    )
}
export default ProjectMain;