import React from 'react';
import bannerImage from "../assets/images/banner-image.jpg";
import bannerBgImage from "../assets/images/banner-background-homepage.jpg";

function Hero() {
  return (
   <section className='py-3 clip-path-curved-top relative overflow-hidden'>
      {/* Background image layer with opacity */}
      <div
        className="absolute inset-0 z-0 bg-[image:var(--banner-image)] bg-cover bg-center bg-no-repeat grayscale backdrop-blur-2xl"
        style={{ "--banner-image": `url(${bannerBgImage})` }}
      ></div>

      {/* Content layer (normal opacity) */}
      <div className="relative z-10 container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-14 my-12 mx-4 md:mx-0 py-12 md:py-6 bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 px-8 rounded-2xl"> {/* Removed opacity-50 from this div */}
              <div className='flex flex-col gap-8 text-center md:text-left'> {/* Removed normal class, as it's not a standard Tailwind utility and not needed here */}
                <h1 className='text-5xl font-bold'>Build What's Next <br/>with AI</h1>
                <p>We engineer intelligent, scalable, and future-proof software solutions that transform complex challenges into competitive advantages. Stop adapting to the future—start building it.</p>
                <div className='flex gap-4 justify-center md:justify-start'>
                  <button className='px-4 py-2 bg-gray-950 text-white rounded-lg'>Innovate With Us</button>
                  <button className='px-4 py-2 text-gray-950 border-gray-950 border border-1 rounded-lg'>Explore Our Work</button>
                </div>
              </div>
              <div className='p-4'>
                <img src={bannerImage} className='rounded-lg' /> {/* Removed opacity-100 as it's default */}
              </div>
          </div>
      </div>
    </section>
      )
    }

export default Hero