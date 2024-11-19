const About = () => {
    return (
      <section
        id="about"
        className="bg-gray-900 text-white py-20"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-400">WHO ARE WE?</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            HappInA is your ultimate platform for exploring and managing college events. With features like event categories, notifications, and seamless registration, we make sure you never miss out!
          </p>
          <div className="flex justify-center gap-10 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-teal-400">Clean Code</h3>
              <p>We deliver maintainable and efficient code.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-teal-400">Modern Design</h3>
              <p>Our UI is sleek, responsive, and user-friendly.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  