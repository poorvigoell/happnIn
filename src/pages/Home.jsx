import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { useEffect } from 'react';



function Home() {
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
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
