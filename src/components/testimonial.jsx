import React from 'react';

function Testimonial({ comment, author, designation }) {
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full max-w-md mx-auto text-white">
      {/* Testimonial Card */}
      <div className="relative bg-white text-gray-800 text-base rounded-md p-4 sm:p-6 shadow-md">
        <p className="italic leading-relaxed">{comment}</p>

        {/* Arrow */}
        <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
      </div>

      {/* Author Info */}
      <div className="mt-4 ml-2 sm:ml-4">
        <p className="text-orange-500 font-semibold">{author}</p>
        <p className="text-gray-400 text-sm">{designation}</p>
      </div>
    </div>
  );
}

export default Testimonial;


