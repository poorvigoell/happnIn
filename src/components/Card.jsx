import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Card = ({ Title, Date, Society, ImageSrc, Mode }) => {
  return (
    <div className="bg-gray-950 rounded-lg shadow-md w-80 h-100 mx-auto p-6 flex flex-col justify-between transform transition-all duration-300 border border-transparent hover:border-teal-600 hover:-translate-y-2 hover:bg-transparent">
      {/* Image at the Top */}
      <img
        src={ImageSrc || "https://via.placeholder.com/150"} // Placeholder image if none provided
        alt="Card Image"
        className="rounded-t-lg w-full h-40 object-cover mb-4"
      />

      {/* Card Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-teal-500 mb-2">{Title}</h3>
        <p className="text-sm text-gray-500 mb-2">{Date} | {Mode}</p>
        <p className="text-md text-white font-medium mb-4">{Society}</p>
      </div>

      {/* Button */}
      <button className="bg-teal-500 flex items-center justify-center w-8 h-8 rounded-full hover:bg-teal-600 text-white transition duration-300 ease-in-out mt-4 absolute right-4 bottom-4">
        <IoIosArrowForward size={20} /> {/* Arrow icon */}
      </button>


    </div>
  );
};

export default Card;