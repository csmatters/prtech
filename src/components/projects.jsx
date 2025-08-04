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
    <section className='bg-gray-200 py-8'>
         <div className='container mx-auto my-10'>

            <h2 className='text-3xl font-semibold text-center mb-4'>Our Projects</h2>

            <p className='text-center mb-10'>Our latest project we have done for the clients</p>

            <div className='columns-2 md:columns-4 gap-4 space-y-4'>
              {
                projects.map((project, index) => (
                  <div key={index} className="break-inside-avoid pb-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img className="w-full rounded-xl shadow" src={project.src} width="232" alt={project.alt} />
                    </a>
                  </div>
              ))}
            </div>

          </div>
    </section>
  )
}

export default Projects