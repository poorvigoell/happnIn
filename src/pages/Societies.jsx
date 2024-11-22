import React from "react";

const societies = [
  { name: "Techneeds", description: "Learn coding and participate in hackathons." },
  { name: "Rehnuma", description: "Express creativity through drama and plays." },
  { name: "Tarannum", description: "Perform and enjoy musical events." },
  { name: "Hypnotics", description: "Showcase dance talents at events." },
  { name: "Technoliterati", description: "Promote literature and creative writing." },
  { name: "AI Club", description: "Exploring the future of Artificial Intelligence and Machine Learning." },
  { name: "Bhav - Public Speaking", description: "Enhancing communication skills through public speaking and debates." },
  { name: "Zena", description: "The OG fashion society" },
  { name: "ECell", description: "Support startup ideas and innovations." },
  { name: "Finivesta", description: "Finance and investment-focused society." },
  { name: "Taarangana", description: "Annual cultural fest showcasing talent and creativity." },
  { name: "MSC", description: "Learn and build with Microsoft technologies and tools." },
  { name: "GDSC", description: "Google Developer Student Club for learning and collaboration." },
  { name: "LeanIn", description: "Empowering women in tech and leadership roles." },
  { name: "Innerve", description: "Explore innovation and technology through exciting fests." },
  { name: "Nirvana", description: "A club for creative minds passionate about design and art." },
  { name: "AWS Cloud Club", description: "Learn and innovate with Amazon Web Services." },
  { name: "IEEE", description: "Promoting technical innovation and collaboration in engineering." },
  { name: "Synergy", description: "A platform for students to engage in various sports activities." },
  { name: "AssetMerkle", description: "Exploring blockchain technology and Web3 innovations." },
  { name: "Aarohan", description: "A celebration of literature, storytelling, and creativity." },

];

const Societies = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white min-h-screen py-10 px-8">
      <h1 className="text-4xl font-bold text-teal-400 text-center mb-10">Societies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {societies.map((society, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-teal-400 transform hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold text-teal-400 mb-4">{society.name}</h2>
            <p className="text-gray-300">{society.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Societies;
