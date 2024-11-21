import React from 'react';

const Card = ({ Title, Date, Category, Brief }) => {
    return (
      <div className="max-w-2xl bg-gray-950 rounded-lg shadow-md p-6 mx-auto my-4 hover:shadow-xl transition-all duration-300 ease-in-out">
        <h3 className="text-2xl font-semibold text-teal-600 mb-2">{Title}</h3>
        <p className="text-sm text-gray-500 mb-2">{Date}</p>
        <p className="text-md text-teal-400 font-medium mb-4">{Category}</p>
        <p className="text-lg text-gray-700 mb-4">{Brief}</p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out">
          Register
        </button>
      </div>
    );
  };
  
export default Card;