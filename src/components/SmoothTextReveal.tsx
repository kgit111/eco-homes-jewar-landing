
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothTextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  triggerRefresh?: boolean;
}

const SmoothTextReveal = ({ 
  children, 
  delay = 0, 
  duration = 1.2,
  className = "",
  triggerRefresh = true
}: SmoothTextRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  
  useEffect(() => {
    const element = textRef.current;
    
    if (element) {
      // Clean up any existing trigger
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      
      // Reset the element state
      gsap.set(element, { 
        y: 50, 
        opacity: 0,
        scale: 0.95
      });
      
      // Create new animation with ScrollTrigger
      triggerRef.current = ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            transformOrigin: "center center"
          });
        },
        onLeaveBack: () => {
          gsap.to(element, {
            y: 50,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: "power2.inOut"
          });
        }
      });
    }
    
    // Cleanup function
    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
    };
  }, [delay, duration, triggerRefresh]);
  
  // Refresh ScrollTrigger when component updates
  useEffect(() => {
    if (triggerRefresh) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [triggerRefresh]);
  
  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default SmoothTextReveal;
