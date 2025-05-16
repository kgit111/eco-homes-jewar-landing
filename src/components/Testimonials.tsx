
import React, { useState } from 'react';

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Early Investor",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Investing in Yamuna Eco Homes was one of the best decisions I've made. The location near the upcoming airport has already shown promising appreciation, and the team has been transparent throughout the process."
  },
  {
    name: "Priya Malhotra",
    role: "Property Owner",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "What impressed me most was the detailed planning of the entire project. The infrastructure quality, plot layouts, and green spaces show that the developers have put thought into creating a sustainable community, not just selling plots."
  },
  {
    name: "Amit Patel",
    role: "Real Estate Advisor",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "As someone who advises clients on real estate investments, I can confidently say that Yamuna Eco Homes offers excellent growth potential given its proximity to major developments like Jewar Airport and the Film City."
  },
  {
    name: "Sunita Reddy",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    content: "The seamless buying process and clear documentation gave me confidence in my investment. Looking forward to building my dream home in such a well-planned community with excellent location advantages."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="section-padding bg-eco-lightest">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
        <div className="w-24 h-1 bg-eco mx-auto mb-20"></div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-24 h-24 rounded-full border-4 border-eco-light"
                        />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-gray-700 text-lg mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-eco-dark">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-eco-dark" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <button 
            onClick={prevTestimonial} 
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-eco hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-eco hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
