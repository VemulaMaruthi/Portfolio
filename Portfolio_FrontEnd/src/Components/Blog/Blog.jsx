import React from "react";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "Aug 12, 2025",
    description:
      "Learn the basics of React, components, JSX, and how to build your first application.",
    tags: ["React", "React Router"],
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS",
    date: "Sep 02, 2025",
    description:
      "A beginner-friendly guide to CSS and how Tailwind speeds up UI development.",
    tags: ["Tailwind CSS", "Responsive UI"],
  },
  {
    id: 3,
    title: "Practice Java",
    date: "Oct 10, 2025",
    description:
      "Best practices to write clean, readable, and maintainable code using structured logic.",
    tags: ["Java", "DSA"],
  },
  {
    id: 4,
    title: "Learning Spring Boot",
    date: "Aug 20, 2025",
    description: "Understanding Spring Boot fundamentals and architecture.",
    tags: ["Spring Framework", "Spring Boot"],
  },
];

function Blog() {
  return (
    <>
    <div className = "w-full h-full mt-20  flex flex-col items-center">
            <div className = "flex flex-col items-center justify-center gap-4">
                <h1 className = "text-3xl">Blogs</h1>
                <p className = "text-2xl text-gray-500">Hands-On Learnings</p>
            </div>
          </div>
    <div className="flex flex-col md:flex-row w-full">

      
      <div className="w-full md:w-[50vw] min-h-[50vh]">
        <div className="flex flex-col items-center gap-10 my-10">
          {blogs.slice(0, 2).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

     
      <div className="w-full md:w-[50vw] min-h-[50vh]">
        <div className="flex flex-col items-center gap-10 my-10">
          {blogs.slice(2).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

    </div>
    </>
  );
}


function BlogCard({ blog }) {
  return (
    <div
      className="w-full md:w-[40vw] border-2 px-4 py-4 rounded-lg
                 bg-gray-100 shadow-md md:hover:scale-105
                 transition duration-300 ease-in-out group"
    >
      <h1 className="font-medium text-lg group-hover:text-blue-600 transition">
        {blog.title}
      </h1>

      <p className="text-sm text-gray-500 mt-1">{blog.date}</p>

      <p className="text-sm text-gray-700 mt-2">
        {blog.description}
      </p>

      <div className="grid grid-cols-2 gap-2 mt-4">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="border border-gray-400 rounded-lg px-3 py-1
                       text-xs text-center group-hover:bg-blue-600
                       group-hover:text-white hover:border-blue-600
                       transition cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="text-blue-600 font-medium hover:underline mt-2">
        Read More →
      </button>
    </div>
  );
}

export default Blog;
