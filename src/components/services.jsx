import React from 'react'
import { RxGlobe } from "react-icons/rx";
import { ImMobile } from "react-icons/im";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaMixcloud } from "react-icons/fa";
import { RiAiGenerate2 } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";
import { BsGearWideConnected } from "react-icons/bs";
import { HiPaintBrush } from "react-icons/hi2";


function Services() {

  const data =  [
              {
                icon: <RxGlobe className="text-4xl text-gray-200" />,
                title: "Web Development",
                desc: "Your website is your digital storefront. We build powerful, responsive, and visually stunning websites and web applications that deliver an outstanding user experience on any device."
              },
              {
                icon: <ImMobile className="text-4xl text-gray-200" />,
                title: "Mobile App Development",
                desc: "Reach your audience directly on their most-used devices. We specialize in developing high-performance, user-friendly mobile applications for both iOS and Android platforms."

              },
              {
                icon: <MdOutlineDashboardCustomize className="text-4xl text-gray-200" />,
                title: "Custom Software",
                desc: "Our custom software development service involves creating solutions from the ground up, perfectly aligned with your workflows, processes, and objectives. We ensure seamless integration with your existing systems for a smooth, efficient operation.",
              },
              {
                icon: <FaMixcloud className="text-4xl text-gray-200" />,
                title: "Cloud Computing",
                desc: "We design and develop applications that harness the full potential of leading cloud platforms like Amazon Web Services (AWS), Google Cloud, and Microsoft Azure. ",
              },
              {
                icon: <RiAiGenerate2 className="text-4xl text-gray-200" />,
                title: "AI & ML Development",
                desc: "We create intelligent software that can automate complex tasks, analyze vast amounts of data to predict trends, and deliver personalized experiences to your users.",
              },
              {
                icon: <VscAzureDevops className="text-4xl text-gray-200" />,
                title: "DevOps Services",
                desc: "n a market that demands speed, our DevOps services give you the edge. By integrating your software development and IT operations, we create a streamlined, automated workflow.",
              },
              {
                icon: <BsGearWideConnected className="text-4xl text-gray-200" />,
                title: "Specialized Services",
                desc: "This includes database development, embedded systems development, cybersecurity software development, e-commerce software development, and more",
              },
              {
                icon: <HiPaintBrush className="text-4xl text-gray-200" />,
                title: "Web Design",
                desc: "We build beautiful, responsive websites that captivate your audience and are optimized for performance from the ground up.",
              },
            ];
  return (
      <section id="services" className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Intro section */}
          <div className="flex flex-col md:flex-row py-12 items-center gap-8 md:gap-12 shadow-xl p-6 bg-white rounded-lg mb-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
                Best IT Service For Your Business
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-center md:text-left text-gray-600">
                At PR Tech, we provide cutting-edge software solutions tailored to meet business needs. Our expertise spans across various domains:
              </p>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
           data.map((service, i) => (
              <div
                key={i}
                className="p-6 border-orange-400 border-2 rounded-lg flex flex-col gap-4 hover:shadow-lg"
              >
                <div className='flex justify-between'>
                  <span className='p-4 bg-gray-900 rounded-lg '>{service.icon}</span>
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-orange-500"></span>
                  </span>
                </div>
                
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="text-gray-500 text-sm flex-1">{service.desc}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Services