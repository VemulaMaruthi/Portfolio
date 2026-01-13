import React from "react";

function Educations() {
  return (
    <>
    <div className = "w-full h-full mt-20 flex flex-col items-center">
            <div className = "flex justify-center items-center flex-col gap-4">
                <h1 className = "text-3xl font-bold text-sky-400">Education</h1>
                <p className = "text-2xl text-sky-600">Learning Experience</p>
            </div>
        </div>
    <section className="w-full py-10">
      <div
        className="flex gap-6 overflow-x-auto md:overflow-visible px-4 md:px-0
                   md:flex md:h-[260px]"
      >

       
        <div
          className="order-1 md:order-2 min-w-[85%] md:min-w-0 md:flex-[2]
                     border-2 border-blue-500 rounded-lg p-6
                     bg-white shadow-lg"
        >
          <h3 className="text-xl font-bold text-blue-600">
            B.Tech – Computer Science
          </h3>
          <p className="text-sm text-gray-600">Ellenki College of Engineering and Technology | 2022 – 2026 | 75% upto 6th sem </p>
          <p className="mt-3 text-sm">
            Specialized in Software Development, Data Structures, and Web Technologies.
          </p>
        </div>

       
        <div
          className="group order-2 md:order-1 min-w-[85%] md:min-w-0 md:flex-[1]
                     hover:md:flex-[2]
                     transition-all duration-300
                     border rounded-lg p-5 bg-gray-100 shadow-md"
        >
          <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
            Intermediate
          </h3>
          <p className="text-sm text-gray-600">Saanvi Junior College | 2020 – 2022 | with 90%</p>
          <p className="mt-2 text-sm">
            Strong foundation in Mathematics and Science.
          </p>
        </div>

        
        <div
          className="group order-3 md:order-3 min-w-[85%] md:min-w-0 md:flex-[1]
                     hover:md:flex-[2]
                     transition-all duration-300
                     border rounded-lg p-5 bg-gray-100 shadow-md"
        >
          <h3 className="text-lg font-semibold group-hover:text-blue-600 transition">
            SSC
          </h3>
          <p className="text-sm text-gray-600">Z P H S | 2020 | with 9.0</p>
          <p className="mt-2 text-sm">
            Completed secondary education with distinction.
          </p>
        </div>

      </div>
    </section>
    </>
  );
}

export default Educations;
