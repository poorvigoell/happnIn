// Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-400">HappnIn</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#home" className="text-white hover:text-teal-400 transition-colors">Home</a></li>
          <li><a href="#services" className="text-white hover:text-teal-400 transition-colors">Services</a></li>
          <li><a href="#about" className="text-white hover:text-teal-400 transition-colors">About</a></li>
          <li><a href="#contact" className="text-white hover:text-teal-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;  // Default export
