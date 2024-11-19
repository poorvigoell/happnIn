const Services = () => {
    return (
      <section
        id="services"
        className="bg-gray-800 text-white py-20"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-400">WHAT WE DO?</h2>
          <p className="text-lg mt-4">
            We offer services that help you stay updated on college events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Website Design</h3>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Mobile & Desktop App</h3>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">UI/UX Design</h3>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Editing Photo</h3>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  