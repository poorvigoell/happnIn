import React from "react";
import Team from "./Team"; // Correct import path for Team

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-6xl font-bold text-teal-400 text-center">
          WHO ARE <span className="text-white">WE?</span>
        </h2>
        <p className="text-xl mt-10 max-w-4xl mx-auto text-gray-300 text-center">
          HappnIn is your ultimate platform for college students to stay on top of campus events. We offer a seamless experience to explore upcoming events, register, and receive notifications—all in one place.
        </p>

        {/* Mission, Vision, and Values Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Our Mission */}
          <div className="text-left px-4 overflow-hidden group">
            <div className="relative inline-block w-full">
              <h3 className="text-3xl font-semibold text-teal-400">Our Mission</h3>
              <p
                className="text-lg mt-4 text-gray-300 leading-relaxed whitespace-nowrap transition-transform duration-500 group-hover:animate-scroll"
              >
                Our mission is to help students stay informed and engaged with their college events. By centralizing event discovery and registration, we aim to simplify the process and empower students to participate actively in campus life.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="text-left px-4 overflow-hidden group">
            <div className="relative inline-block w-full">
              <h3 className="text-3xl font-semibold text-teal-400">Our Vision</h3>
              <p
                className="text-lg mt-4 text-gray-300 leading-relaxed whitespace-nowrap transition-transform duration-500 group-hover:animate-scroll"
              >
                We envision a connected student community where every event is easily accessible, with real-time updates that help students never miss an important opportunity to engage in campus activities.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="text-left px-4 overflow-hidden group">
            <div className="relative inline-block w-full">
              <h3 className="text-3xl font-semibold text-teal-400">Our Values</h3>
              <p
                className="text-lg mt-4 text-gray-300 leading-relaxed whitespace-nowrap transition-transform duration-500 group-hover:animate-scroll"
              >
                We believe in community, innovation, transparency, and empowerment. By building an inclusive network, continuously improving our platform, and ensuring accurate event information, we empower students to make the most of their college journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <Team />
    </section>
  );
};

export default About;
