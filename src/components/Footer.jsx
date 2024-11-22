// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-900 to-black text-white py-2">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section: HappnIn Logo/Name */}
        <div className="text-left mb-6 lg:mb-0">
          <h1 className="text-2xl font-bold text-teal-400">HappnIn</h1>
          <p className="text-sm mt-2 text-gray-300">Your gateway to college events</p>
        </div>

        {/* Middle Section: Footer Links */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 text-center lg:text-left">
          <div>
            <h4 className="font-semibold text-teal-400">Quick Links</h4>
            <ul className="mt-2 text-gray-300">
              <li><a href="/" className="hover:text-teal-400">Home</a></li>
              <li><a href="#services" className="hover:text-teal-400">Services</a></li>
              <li><a href="#about" className="hover:text-teal-400">About</a></li>
              <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-teal-400">Follow Us</h4>
            <ul className="mt-2 text-gray-300">
              <li><a href="https://facebook.com" className="hover:text-teal-400">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:text-teal-400">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:text-teal-400">Instagram</a></li>
              <li><a href="https://linkedin.com" className="hover:text-teal-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">&copy; 2024 HappnIn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
