
import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  fromX?: number;
  fromY?: number;
  delay?: number;
  className?: string;
  triggerPosition?: string; // e.g. "top 80%"
}

const AnimatedSection = ({ 
  children, 
  fromX = 0, 
  fromY = 50, 
  delay = 0, 
  className = "", 
  triggerPosition = "top 80%" 
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    if (section) {
      gsap.fromTo(
        section,
        { 
          x: fromX, 
          y: fromY, 
          opacity: 0 
        },
        { 
          x: 0, 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: triggerPosition,
            toggleActions: "play none none none"
          }
        }
      );
    }
    
    return () => {
      // Cleanup ScrollTrigger to avoid memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [fromX, fromY, delay, triggerPosition]);
  
  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
