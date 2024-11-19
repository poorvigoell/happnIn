import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Team from './components/Team';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';





function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* About Section */}
      <About />
      <Team />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
