
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000")',
          transform: `translateY(${offset}px)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-shadow mb-6 animate-fade-in-up">
          <span className="text-eco-light">Live Green</span>, Stay Connected
        </h1>
        <p className="text-xl md:text-2xl text-white text-shadow mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Premium Plots Near Jewar Airport, designed for modern sustainable living
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button className="bg-eco hover:bg-eco-dark text-white px-8 py-6 text-lg">
            Book Your Plot Today!
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-eco-dark px-8 py-6 text-lg">
            Get More Info <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
            <p className="font-bold">500m</p>
            <p>from Yamuna Expressway</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
            <p className="font-bold">5km</p>
            <p>from Noida International Airport</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
            <p className="font-bold">20min</p>
            <p>drive to New Film City</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
