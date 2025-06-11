
import React from 'react';
import { Check } from "lucide-react";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const ProjectDetails = () => {
  const { openContactPopup } = useContactPopup();
  
  const features = [
    { title: "500m from Yamuna Expressway", description: "Quick access to Delhi-NCR's major highway" },
    { title: "5km from Noida International Airport", description: "Future-ready location near international connectivity" },
    { title: "Lush Green Surroundings", description: "Eco-friendly environment with abundant greenery" },
    { title: "1-hour drive to Vrindavan", description: "Close proximity to cultural and spiritual destinations" },
    { title: "1.5 hours to Agra", description: "Weekend getaways to historical sites made easy" },
    { title: "20-min drive to New Film City", description: "Near upcoming entertainment and business hub" }
  ];

  const plotOptions = [
    { size: "70 sq. yards", price: "17 Lakhs onwards", features: ["Corner plot", "Park facing available"] },
    { size: "100 sq. yards", price: "25 Lakhs onwards", features: ["Prime location", "Double corner options"] },
    { size: "120 sq. yards", price: "30 Lakhs onwards", features: ["Premium plots", "Best investment option"] }
  ];

  const handleRequestDetails = (size: string) => {
    openContactPopup(`Request Details for ${size} Plot`);
  };

  return (
    <section id="project-details" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Project Details</h2>
        <div className="w-24 h-1 bg-eco mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          {/* Key USPs */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Key Features & Location Advantages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-eco hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Masterplan */}
          <div className="mb-20">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src="/images/layout2.jpeg" 
                alt="Yamuna Eco Homes Masterplan" 
                className="w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-eco-dark/80 to-transparent flex items-center">
                <div className="p-8 md:p-12 max-w-lg">                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Thoughtfully Designed Masterplan</h3>
                  <p className="text-white text-lg mb-6">
                    Our meticulously planned development ensures that every plot benefits from excellent 
                    infrastructure, generous green spaces, and strategic positioning.
                  </p>
                  <button 
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/images/layout.jpeg';
                      link.download = 'Yamuna-Eco-Homes-Layout.jpeg';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="bg-eco-light hover:bg-eco-light text-white py-2 px-4 rounded-md mb-6 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Layout Plan
                  </button>
                  <ul className="space-y-2 text-white">
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-eco-light" /> Wide roads throughout the project
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-eco-light" /> Multiple parks and green spaces
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-eco-light" /> Underground utilities for clean aesthetics
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-eco-light" /> 24/7 security and surveillance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Plot Options */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Plot Size Options & Investment Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {plotOptions.map((plot, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl border border-gray-100"
                >
                  <div className="bg-eco-dark text-white p-4 text-center">
                    <h4 className="text-xl font-bold">{plot.size}</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-2xl font-bold text-center text-eco mb-6">{plot.price}</div>
                    <ul className="space-y-3">
                      {plot.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="mr-2 h-5 w-5 text-eco" /> {feature}
                        </li>
                      ))}
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-eco" /> Projected 15% annual appreciation
                      </li>
                      <li className="flex items-center">
                        <Check className="mr-2 h-5 w-5 text-eco" /> Clear title documentation
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button 
                        className="w-full bg-eco text-white py-3 rounded-md hover:bg-eco-dark transition-colors"
                        onClick={() => handleRequestDetails(plot.size)}
                      >
                        Request Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
