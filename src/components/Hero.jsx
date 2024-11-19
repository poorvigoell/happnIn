const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white py-20 px-40 flex items-center justify-between"  // Adjusted padding here
    >
      <div className="text-left max-w-2xl">
        <h2 className="text-7xl font-bold text-teal-400 relative mt-28">
          YOUR <span className="text-white">ONE</span> STOP COLLEGE EVENT GUIDE
        </h2>
        {/* Horizontal Line with space from top */}
        <div className="relative mt-8">
          <hr className="absolute top-0 left-0 w-32 h-1 bg-white" />
        </div>
        <p className="text-lg mt-28 text-white">
          HappnIn is a centralized platform for students to explore upcoming events, including hackathons, meetups, and society updates, ensuring no event details are missed.
        </p>
      </div>
      <img
        src="https://via.placeholder.com/300"
        alt="Creative Design"
        className="mt-8 ml-8 rounded-lg shadow-lg w-96 -mt-12"
      />
    </section>
  );
};

export default Hero;
