
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContactPopup } from "@/contexts/ContactPopupContext";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const statsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const bgImageRef = useRef(null);
  const { openContactPopup } = useContactPopup();
  
  useEffect(() => {
    // GSAP animations for content
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      heroContentRef.current?.querySelector('h1'), 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(
      heroContentRef.current?.querySelector('p'), 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      "-=0.6"
    )
    .fromTo(
      heroContentRef.current?.querySelector('.buttons-container'), 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      "-=0.6"
    )
    .fromTo(
      statsRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, 
      "-=0.4"
    )
    .fromTo(
      scrollIndicatorRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5 }, 
      "-=0.2"
    );
    
    // Enhanced parallax effect with ScrollTrigger
    if (bgImageRef.current) {
      gsap.to(bgImageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6
        }
      });
    }
    
    // Clean up ScrollTrigger instances to avoid memory leaks
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleBookPlotClick = () => {
    openContactPopup('Book Your Plot Today');
  };

  const handleMoreInfoClick = () => {
    openContactPopup('Get More Information');
  };

  return (    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen overflow-hidden flex items-center justify-center pt-12 md:pt-16"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        ref={bgImageRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=2000")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}      <div ref={heroContentRef} className="container relative z-10 px-4 text-center pt-8 md:pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-shadow mb-8 mt-4">
          <span className="text-eco-light">Live Green</span>, Stay Connected
        </h1>
        <p className="text-xl md:text-2xl text-white text-shadow mb-8 max-w-3xl mx-auto">
          Premium Plots Near Jewar Airport and Yamuna Expressway, designed for modern sustainable living
        </p>
        
        <div className="buttons-container flex flex-col md:flex-row justify-center items-center gap-4">
          <Button 
            className="bg-eco hover:bg-eco-dark text-white px-8 py-6 text-lg"
            onClick={handleBookPlotClick}
          >
            Book Your Plot Today!
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-eco-dark px-8 py-6 text-lg"
            onClick={handleMoreInfoClick}
          >
            Get More Info <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div ref={statsRef} className="mt-12 flex flex-wrap justify-center gap-6">
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
      <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
