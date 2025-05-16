
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProjectDetails from "@/components/ProjectDetails";
import LocationMap from "@/components/LocationMap";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set the page title for SEO
    document.title = "Yamuna Eco Homes | Premium Plots Near Jewar Airport";
    
    // Add meta description for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Yamuna Eco Homes offers premium plots near Jewar Airport and Yamuna Expressway. Experience sustainable living with excellent connectivity and investment potential.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Toaster />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <ProjectDetails />
        <LocationMap />
        <Gallery />
        <Testimonials />
        <Faqs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
