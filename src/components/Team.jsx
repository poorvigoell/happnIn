// src/components/Team.jsx
const Team = () => {
    return (
      <section id="team" className="bg-[#1f2937] text-white py-20">
        <div className="container mx-auto px-8 lg:px-16 text-center">
        <h2 className="text-6xl font-bold -mt-2">
            <span className="text-white">MEET OUR </span>
            <span className="text-teal-400">TEAM</span>
        
          </h2>
        
          <p className="text-lg mt-8 max-w-3xl mx-auto text-gray-300">
            Our team is a diverse group of passionate individuals working together to make HappnIn the best platform for students. Each member brings unique expertise to create a seamless experience for our users.
          </p>
  
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {/* Team Member 1 */}
            <div className="text-center">
              <h4 className="text-4xl font-semibold text-teal-400">SANYA SAXENA</h4>
             { /* <p className="text-gray-300">Founder & CEO</p> */}
            </div>
  
            {/* Team Member 2 */}
            <div className="text-center">
              <h4 className="text-4xl font-semibold text-teal-400">SANIYA ARORA</h4>
              { /* <p className="text-gray-300">Founder & CEO</p> */}
            </div>
  
            {/* Team Member 3 */}
            <div className="text-center">
              <h4 className="text-4xl font-semibold text-teal-400">POORVI GOEL</h4>
              { /* <p className="text-gray-300">Founder & CEO</p> */}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
