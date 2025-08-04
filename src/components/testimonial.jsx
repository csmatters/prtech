import React from 'react'

function Testimonial({comment, author, designation}) {
  return (
   
       <div className="bg-gray-900 p-2 rounded-lg max-w-xl mx-auto text-white">
            <div className="relative bg-white text-gray-800 text-base rounded-md p-6 shadow-md">
                <p className="italic leading-relaxed">
                    {comment}
                </p>
                {/* Arrow below the box */}
                <div className="absolute bottom-[-10px] left-10 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
            </div>

            {/* Author Info */}
            <div className="mt-6 ml-4">
                <p className="text-orange-500 font-semibold">{author}</p>
                <p className="text-gray-400">{designation}</p>
            </div>
        </div>

  )
}

export default Testimonial;