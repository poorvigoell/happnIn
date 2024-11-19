const Services = () => {
  return (
    <section id="services" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Heading and Description */}
        <div className="text-left lg:w-1/2 pr-20">
          <h2 className="text-6xl font-bold mt-20">
            <span className="text-white">WHAT WE </span>
            <span className="text-teal-400">DO</span>
            <span className="text-white"> ? </span>
          </h2>
          {/* Horizontal Line with space from top */}
          <div className="relative mt-8">
            <hr className="absolute top-0 left-0 w-32 h-1 bg-teal-400" />
          </div>
          <p className="text-lg mt-20">
            At HappnIn, we're dedicated to enhancing your college experience by keeping you in the loop with all the important events and opportunities. Our services are designed to ensure you never miss out on anything happening around campus, whether it's through a personalized website, mobile apps, or professional design services.
            <br /><br />
            Whether you're planning an event or simply need to stay informed, we've got tools and solutions to make your college life easier and more engaging. Let us help you stay connected with your campus community, with seamless access to everything that matters most.
          </p>
        </div>

        {/* Right Section: Service Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 lg:mt-24 lg:w-1/2">
          {/* First Box (Big) */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-xl h-64 flex flex-col justify-center items-center transform transition-all hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-400 mb-8">Event Notifications</h3>
            <p className="text-sm">Our app helps you manage your college events seamlessly, from schedules to updates, all accessible from your phone or desktop.</p>
          </div>
          
          {/* Second Box (Small) */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-md h-48 flex flex-col justify-center items-center transform transition-all hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Event Feed</h3>
            <p className="text-sm">Explore upcoming events like hackathons, meetups, online events and more across campus.</p>
          </div>
          
          {/* Third Box (Small) */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-md h-48 flex flex-col justify-center items-center transform transition-all hover:scale-105">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Event Registration</h3>
            <p className="text-sm">Easily register for events with a streamlined and hassle-free process.</p>
          </div>
          
          {/* Fourth Box (Big) */}
          <div className="p-6 bg-gray-700 rounded-lg shadow-xl h-64 flex flex-col justify-center items-center transform transition-all hover:scale-105 -mt-16">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4 -mt-5">Event Management for Societies</h3>
            <p className="text-sm">Empower student societies to post, manage, and update their events on the platform.
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
