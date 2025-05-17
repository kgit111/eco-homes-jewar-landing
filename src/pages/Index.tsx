
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import AnimatedSection from "@/components/AnimatedSection";
import { ContactPopupProvider } from "@/contexts/ContactPopupContext";

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Set the page title for SEO
    document.title = "Yamuna Eco Homes | Premium Plots Near Jewar Airport";
    
    // Add meta description for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Yamuna Eco Homes offers premium plots near Jewar Airport and Yamuna Expressway. Experience sustainable living with excellent connectivity and investment potential.");
    }
    
    // Initialize ScrollTrigger to refresh on page load
    ScrollTrigger.refresh();
    
    // Smooth scroll implementation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: targetElement,
              offsetY: 80
            },
            ease: "power3.inOut"
          });
        }
      }
    };
    
    // Add event listener for smooth scrolling
    document.addEventListener('click', handleAnchorClick);
    
    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ContactPopupProvider>
      <div className="min-h-screen">
        <Toaster />
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <AnimatedSection>
            <ProjectDetails />
          </AnimatedSection>
          <AnimatedSection fromY={0} fromX={-50}>
            <LocationMap />
          </AnimatedSection>
          <AnimatedSection>
            <Gallery />
          </AnimatedSection>
          <AnimatedSection fromY={0} fromX={50}>
            <Testimonials />
          </AnimatedSection>
          <AnimatedSection>
            <Faqs />
          </AnimatedSection>
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </ContactPopupProvider>
  );
};

export default Index;
