import React from 'react'
import project_1 from "../assets/images/project-01.png";
import project_2 from "../assets/images/project-02.png";
import project_3 from "../assets/images/project_3.png";
import project_4 from "../assets/images/project-4.png";
import project_5 from "../assets/images/project_5.png";


function Projects() {

  const projects = [
    {
      src: project_1,
      alt: "project_01",
      link: "https://microparkindia.com/",
    },
    {
      src: project_2,
      alt: "project_02",
      link: "https://beyonddestination.in/",
    },
    {
      src: project_3,
      alt: "project_03",
      link: "#",
    },
    {
      src: project_4,
      alt: "project_04",
      link: "#",
    },
    {
      src: project_5,
      alt: "project_05",
      link: "https://wellfedbabyclinic.com/",
    },
  ];

  return (
    <section className="bg-gray-200 py-8">
  <div className="container mx-auto px-4 my-10">
    <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4">
      Our Projects
    </h2>
    <p className="text-center text-sm sm:text-base mb-10">
      Our latest project we have done for the clients
    </p>

    {/* Responsive masonry-style grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="w-full">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-auto object-cover rounded-xl"
            />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Projects