
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useContactPopup } from "@/contexts/ContactPopupContext";

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Project Details', href: '#project-details' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openContactPopup } = useContactPopup();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookPlotClick = () => {
    openContactPopup('Book Your Plot Today');
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Now always visible with proper styling */}
        <div className="flex items-center z-20">
          <a href="#home" className="flex items-center">
            <h1 className={cn(
              "font-playfair font-bold text-2xl md:text-3xl transition-all duration-300",
              isScrolled ? "text-eco-dark" : "text-white text-shadow"
            )}>
              <span className="text-eco">Yamuna</span> Eco Homes
            </h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={cn(
                "font-medium text-sm transition-colors duration-300 hover:text-eco",
                isScrolled ? "text-gray-800" : "text-white text-shadow"
              )}
            >
              {item.label}
            </a>
          ))}
          <Button 
            className="bg-eco hover:bg-eco-dark text-white ml-4"
            onClick={handleBookPlotClick}
          >
            Book Your Plot Today!
          </Button>
        </nav>

        {/* Mobile menu button - Now properly positioned and always visible */}
        <button 
          className="lg:hidden p-2 z-20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={cn(
            "w-6 h-0.5 mb-1.5 transition-all",
            isScrolled ? "bg-gray-800" : "bg-white", 
            mobileMenuOpen && "transform rotate-45 translate-y-2"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 mb-1.5 transition-all",
            isScrolled ? "bg-gray-800" : "bg-white",
            mobileMenuOpen && "opacity-0"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 transition-all",
            isScrolled ? "bg-gray-800" : "bg-white",
            mobileMenuOpen && "transform -rotate-45 -translate-y-2"
          )}></div>
        </button>
      </div>

      {/* Mobile Menu - Fixed positioning for better mobile experience */}
      <div className={cn(
        "lg:hidden fixed inset-0 bg-white z-10 transition-all duration-300 pt-20",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <div className="container mx-auto px-4 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-4 py-4">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-gray-800 font-medium text-lg hover:text-eco"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="bg-eco hover:bg-eco-dark text-white w-full mt-4"
              onClick={handleBookPlotClick}
            >
              Book Your Plot Today!
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
