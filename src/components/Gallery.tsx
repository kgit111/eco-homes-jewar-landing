
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { gsap } from 'gsap';

const galleryImages = [
  {
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600",
    fullsize: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    alt: "Scenic view of Yamuna Eco Homes landscape"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600",
    fullsize: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200",
    alt: "Lush greenery surrounding the plots"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600",
    fullsize: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200",
    alt: "Sunlight through trees at Yamuna Eco Homes"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600",
    fullsize: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200",
    alt: "Aerial view of the development area"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=600",
    fullsize: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1200",
    alt: "Natural terrain at the project site"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=600",
    fullsize: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1200",
    alt: "River view near Yamuna Eco Homes"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryRef = useRef(null);
  const galleryItemsRef = useRef<HTMLDivElement[]>([]);
  const videoSectionRef = useRef(null);
  
  useEffect(() => {
    // Header animation
    gsap.fromTo(
      galleryRef.current?.querySelector('h2'),
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: galleryRef.current?.querySelector('h2'),
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Gallery items animation with stagger effect
    gsap.fromTo(
      galleryItemsRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Video section animation
    gsap.fromTo(
      videoSectionRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: videoSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );
    
    // Hover animations for gallery items
    galleryItemsRef.current.forEach(item => {
      const image = item.querySelector('img');
      const overlay = item.querySelector('.overlay-content');
      
      if (image && overlay) {
        item.addEventListener('mouseenter', () => {
          gsap.to(image, { scale: 1.1, duration: 0.4 });
          gsap.to(overlay, { opacity: 1, duration: 0.3 });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(image, { scale: 1, duration: 0.4 });
          gsap.to(overlay, { opacity: 0, duration: 0.3 });
        });
      }
    });
  }, []);

  // Function to add items to refs array
  const addToRefs = (el: HTMLDivElement) => {
    if (el && !galleryItemsRef.current.includes(el)) {
      galleryItemsRef.current.push(el);
    }
  };

  return (
    <section id="gallery" ref={galleryRef} className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Gallery</h2>
        <div className="w-24 h-1 bg-eco mx-auto mb-8"></div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Experience the beauty and potential of Yamuna Eco Homes through our gallery. 
          These images capture the natural beauty and planned development of our premium plots.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              ref={addToRefs}
              className="relative overflow-hidden rounded-lg cursor-pointer h-64"
              onClick={() => setSelectedImage(image.fullsize)}
            >
              <img 
                src={image.thumbnail} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="overlay-content absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 flex items-end p-6">
                <p className="text-white">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={videoSectionRef} className="mt-12 text-center">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600" 
              alt="Yamuna Eco Homes video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-eco rounded-full flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <p className="mt-4 text-gray-600">Click to watch our project video walkthrough</p>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-full object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
