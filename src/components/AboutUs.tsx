
import React from 'react';
import AnimatedSection from './AnimatedSection';
import SmoothTextReveal from './SmoothTextReveal';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-eco-lightest">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SmoothTextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Yamuna Eco Homes</h2>
            <div className="w-24 h-1 bg-eco mx-auto mb-12"></div>
          </SmoothTextReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection fromX={-30} duration={1}>
              <h3 className="text-2xl font-semibold mb-4 text-eco-dark">Our Vision</h3>
              <p className="mb-6 text-gray-700">
                Yamuna Eco Homes represents a harmonious blend of modern living and ecological responsibility. 
                Nestled near the upcoming Jewar Airport, our premium plotting project is designed to provide 
                residents with a sustainable environment without compromising on connectivity and convenience.
              </p>
              <p className="text-gray-700">
                We envision creating a thriving community where families can enjoy the tranquility of nature 
                while benefiting from strategic proximity to Delhi-NCR's most significant developments. Every 
                aspect of Yamuna Eco Homes is meticulously planned to ensure a high quality of life and 
                long-term investment value.
              </p>
            </AnimatedSection>

            <AnimatedSection fromX={30} delay={0.2} duration={1}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800" 
                  alt="Lush greenery at Yamuna Eco Homes" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-eco text-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-bold">Sustainable Development</p>
                  <p>Preserving nature while creating modern infrastructure</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <SmoothTextReveal className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-10px]" delay={0.1} duration={0.8}>
              <div className="w-16 h-16 bg-eco rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Eco-Friendly Development</h4>
              <p className="text-gray-600">
                Our project is designed with sustainability at its core, featuring green spaces, 
                energy-efficient planning, and environmentally friendly infrastructure.
              </p>
            </SmoothTextReveal>

            <SmoothTextReveal className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-10px]" delay={0.3} duration={0.8}>
              <div className="w-16 h-16 bg-eco rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Prime Location</h4>
              <p className="text-gray-600">
                Strategically located near the Yamuna Expressway and upcoming Jewar Airport, 
                offering unparalleled connectivity to Delhi-NCR and beyond.
              </p>
            </SmoothTextReveal>

            <SmoothTextReveal className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-10px]" delay={0.5} duration={0.8}>
              <div className="w-16 h-16 bg-eco rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Investment Potential</h4>
              <p className="text-gray-600">
                With proximity to major infrastructure developments like the airport and Film City, 
                your investment is poised for significant appreciation.
              </p>
            </SmoothTextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
