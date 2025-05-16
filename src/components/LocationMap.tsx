
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  const [apiKey, setApiKey] = useState("");
  const [showKeyInput, setShowKeyInput] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowKeyInput(false);
  };

  const landmarks = [
    { name: "Yamuna Expressway", distance: "500m" },
    { name: "Noida International Airport", distance: "5km" },
    { name: "New Film City", distance: "10km" },
    { name: "Sector 151 Metro Station", distance: "15km" },
    { name: "Vrindavan", distance: "60km" },
    { name: "Agra (Taj Mahal)", distance: "90km" },
  ];

  return (
    <section id="location" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Location</h2>
        <div className="w-24 h-1 bg-eco mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Perfectly positioned for convenience and connectivity, Yamuna Eco Homes offers the ideal balance 
          of peaceful surroundings with easy access to major landmarks and transportation.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Landmarks list */}
              <div className="md:col-span-2 bg-eco-lightest p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <MapPin className="mr-2 text-eco" /> Nearby Landmarks
                </h3>
                <ul className="space-y-4">
                  {landmarks.map((landmark, index) => (
                    <li key={index} className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium">{landmark.name}</span>
                      <span className="text-eco-dark font-bold">{landmark.distance}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-2">Address</h4>
                  <p className="text-gray-700">
                    Yamuna Eco Homes, Near Yamuna Expressway, <br />
                    Jewar, Gautam Buddha Nagar, <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="md:col-span-3 h-[500px]">
                {showKeyInput ? (
                  <div className="h-full flex items-center justify-center bg-gray-100">
                    <div className="text-center p-8 max-w-md">
                      <h3 className="text-lg font-medium mb-4">Enter your Google Maps API key</h3>
                      <p className="text-gray-500 mb-6">
                        To view the interactive map, please enter your Google Maps API key. This is 
                        a temporary step for the demo.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder="Enter API Key"
                          className="w-full p-3 border border-gray-300 rounded-md"
                        />
                        <button
                          type="submit"
                          className="w-full py-3 bg-eco text-white rounded-md hover:bg-eco-dark transition-colors"
                        >
                          Load Map
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <iframe
                    title="Yamuna Eco Homes Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Jewar+Airport,Uttar+Pradesh,India&zoom=12`}
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-eco mb-2">20 min</div>
              <p className="text-gray-700">Drive to Noida Expressway</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-eco mb-2">45 min</div>
              <p className="text-gray-700">To Greater Noida</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-eco mb-2">90 min</div>
              <p className="text-gray-700">To Delhi City Center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
