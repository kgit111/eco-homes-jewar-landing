
import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  fromX?: number;
  fromY?: number;
  delay?: number;
  duration?: number;
  className?: string;
  triggerPosition?: string;
  scale?: number;
  stagger?: number;
  reverseOnLeave?: boolean;
}

const AnimatedSection = ({ 
  children, 
  fromX = 0, 
  fromY = 50, 
  delay = 0,
  duration = 1.2,
  className = "", 
  triggerPosition = "top 80%",
  scale = 0.95,
  stagger = 0,
  reverseOnLeave = true
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    if (section) {
      // Clean up existing trigger
      if (triggerRef.current) {
        triggerRef.current.kill();
      }
      
      // Get all child elements for stagger animation
      const children = gsap.utils.toArray(section.children) as Element[];
      const elementsToAnimate = children.length > 0 && stagger > 0 ? children : [section];
      
      // Set initial state
      gsap.set(elementsToAnimate, { 
        x: fromX, 
        y: fromY, 
        opacity: 0,
        scale: scale
      });
      
      // Create ScrollTrigger with smooth animations
      triggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: triggerPosition,
        end: "bottom 10%",
        toggleActions: reverseOnLeave ? "play none none reverse" : "play none none none",
        onEnter: () => {
          gsap.to(elementsToAnimate, {
            x: 0, 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: delay,
            stagger: stagger,
            ease: "power3.out",
            transformOrigin: "center center"
          });
        },
        onLeaveBack: reverseOnLeave ? () => {
          gsap.to(elementsToAnimate, {
            x: fromX,
            y: fromY,
            opacity: 0,
            scale: scale,
            duration: 0.8,
            stagger: stagger * 0.5,
            ease: "power2.inOut"
          });
        } : undefined
      });
    }
    
    return () => {
      if (triggerRef.current) {
        triggerRef.current.kill();
        triggerRef.current = null;
      }
    };
  }, [fromX, fromY, delay, duration, triggerPosition, scale, stagger, reverseOnLeave]);
  
  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
