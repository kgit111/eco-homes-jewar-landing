
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Yamuna Eco Homes different from other projects?",
    answer: "Yamuna Eco Homes stands out due to its strategic location near the upcoming Jewar Airport and Yamuna Expressway, focus on sustainable development with ample green spaces, premium infrastructure, and clear title documentation. Our project offers excellent appreciation potential due to proximity to major upcoming developments."
  },
  {
    question: "What plot sizes are available and what are the price ranges?",
    answer: "We offer various plot sizes ranging from 100 square yards to 300 square yards, with prices starting from ₹15 Lakhs. The exact pricing depends on the size and location of the plot within the project. We provide flexible payment plans to make your investment easier."
  },
  {
    question: "Is the title clear and what approvals does the project have?",
    answer: "Yes, the project has a 100% clear title. All necessary approvals from relevant authorities have been obtained, including layout approvals from the local development authority. We ensure complete transparency in all documentation and provide comprehensive paperwork to all buyers."
  },
  {
    question: "What amenities are planned within the project?",
    answer: "Yamuna Eco Homes features wide roads, underground electricity, water supply infrastructure, landscaped parks, community spaces, 24/7 security with CCTV surveillance, and proper drainage systems. We've focused on creating a self-sufficient community with all essential amenities."
  },
  {
    question: "What is the expected appreciation in this area?",
    answer: "With the development of Noida International Airport, New Film City, and other infrastructure projects nearby, property values in this region are projected to appreciate by 15-20% annually for the next 5-7 years, making it an excellent investment opportunity."
  },
  {
    question: "What is the possession timeline?",
    answer: "We provide immediate possession upon completion of payment as per the selected payment plan. The project is development-ready with all basic infrastructure already in place, allowing you to start construction as soon as you wish."
  },
  {
    question: "Are there any building guidelines or restrictions?",
    answer: "Yes, to maintain the aesthetic and quality of the township, there are basic architectural guidelines. These include minimum setbacks, maximum height restrictions, and certain design elements. Our team will provide you with detailed guidelines when you purchase a plot."
  },
  {
    question: "What is the process to book a plot?",
    answer: "Booking a plot is simple - you can fill out our inquiry form, after which our sales team will contact you to arrange a site visit. Once you select your preferred plot, you can secure it with a booking amount of 10% of the total cost, followed by documentation and payment as per the chosen plan."
  }
];

const Faqs = () => {
  return (
    <section id="faqs" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <div className="w-24 h-1 bg-eco mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Find answers to common questions about Yamuna Eco Homes. If you don't see your question here, 
          please don't hesitate to contact us directly.
        </p>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <span className="text-left font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-eco-lightest max-w-3xl mx-auto rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
            <p className="mb-6 text-gray-700">
              Our team is ready to assist you with any further questions or provide more details about Yamuna Eco Homes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="bg-eco hover:bg-eco-dark text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a href="tel:+919876543210" className="bg-white border border-eco text-eco-dark hover:bg-eco-lightest px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
