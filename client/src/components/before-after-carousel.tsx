import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Transformation {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

const transformations: Transformation[] = [
  {
    id: 1,
    title: "Deep Carpet Restoration",
    description: "Professional steam cleaning removes years of embedded dirt, stains, and odors completely.",
    beforeImage: "/assets/AdobeStock_334592268 2_1750506662307.jpg",
    afterImage: "/assets/AdobeStock_334592268 2 copy_1750506666192.jpg",
    beforeAlt: "Carpet before cleaning",
    afterAlt: "Carpet after cleaning"
  },
  {
    id: 2,
    title: "Grout Line Restoration",
    description: "Complete elimination of soap scum and mildew using professional-grade steam cleaning systems.",
    beforeImage: "/assets/AdobeStock_523168323_1750506670649.jpg",
    afterImage: "/assets/AdobeStock_523168323 copy_1750506673796.jpg",
    beforeAlt: "Bathroom tiles before cleaning",
    afterAlt: "Bathroom tiles after cleaning"
  },
  {
    id: 3,
    title: "Window Clarity Restoration",
    description: "Safe removal of dangerous mold and restoration to pristine condition using specialized treatments.",
    beforeImage: "/assets/AdobeStock_554450129_1750506681118.jpg",
    afterImage: "/assets/AdobeStock_554450129 copy_1750506684147.jpg",
    beforeAlt: "Window before cleaning",
    afterAlt: "Window after cleaning"
  },
  {
    id: 4,
    title: "Kitchen Deep Clean",
    description: "Complete elimination of grease buildup and food stains using specialized degreasing agents.",
    beforeImage: "/assets/AdobeStock_560781364_1750506688928.jpg",
    afterImage: "/assets/AdobeStock_560781364 copy_1750506691420.jpg",
    beforeAlt: "Kitchen before cleaning",
    afterAlt: "Kitchen after cleaning"
  },
  {
    id: 5,
    title: "Upholstery Revival",
    description: "Gentle steam cleaning and fabric protection treatment to lift deep stains and spills.",
    beforeImage: "/assets/AdobeStock_689599448_1750506694689.jpg",
    afterImage: "/assets/AdobeStock_689599448 copy_1750506697803.jpg",
    beforeAlt: "Upholstery before cleaning",
    afterAlt: "Upholstery after cleaning"
  }
];

export default function BeforeAfterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentTransformation = transformations[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Mouse/trackpad handling
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Only if mouse is pressed
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Carousel Container */}
      <div
        ref={containerRef}
        className="relative group select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'grab' }}
      >
        {/* Transformation Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Image Container */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <img
              src={currentTransformation.beforeImage}
              alt={currentTransformation.beforeAlt}
              className="w-full h-full object-cover transition-all duration-700 hover:opacity-0"
            />
            <img
              src={currentTransformation.afterImage}
              alt={currentTransformation.afterAlt}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 hover:opacity-100"
            />
            
            {/* Before/After Labels */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
              Before
            </div>
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 hover:opacity-100 transition-all duration-500 delay-200">
              After
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="font-serif text-2xl font-medium text-[#2D2D2D] mb-4 leading-tight">
              {currentTransformation.title}
            </h3>
            <p className="text-[#7A7A7A] text-base leading-relaxed">
              {currentTransformation.description}
            </p>
          </div>
        </div>

        {/* Professional Arrow Navigation */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
          aria-label="Previous transformation"
        >
          <ChevronLeft size={24} strokeWidth={2} />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
          aria-label="Next transformation"
        >
          <ChevronRight size={24} strokeWidth={2} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {transformations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-purple-500 scale-125'
                : 'bg-purple-200 hover:bg-purple-300'
            }`}
            aria-label={`Go to transformation ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {transformations.length}
        </span>
      </div>
    </div>
  );
}