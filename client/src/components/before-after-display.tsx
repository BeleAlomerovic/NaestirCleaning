import React, { useState } from 'react';
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
    title: "Deep Carpet Revival",
    description: "Years of embedded dirt and stains completely removed using professional steam extraction.",
    beforeImage: "/assets/AdobeStock_334592268_1750505728985.jpeg",
    afterImage: "/assets/AdobeStock_334592268 2_1750506662307.jpg",
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
    title: "Mold Remediation & Restoration",
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

export function BeforeAfterDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const currentTransformation = transformations[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStart === null) return;
    
    const dragEnd = e.changedTouches[0].clientX;
    const dragDistance = dragStart - dragEnd;
    
    // Minimum swipe distance to trigger navigation
    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    setDragStart(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStart === null) return;
    
    const dragEnd = e.clientX;
    const dragDistance = dragStart - dragEnd;
    
    // Minimum drag distance to trigger navigation
    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    setDragStart(null);
  };

  return (
    <div className="relative flex items-center justify-center max-w-6xl mx-auto">
      {/* Left Navigation Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 flex items-center justify-center group"
        aria-label="Previous transformation"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-0 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 flex items-center justify-center group"
        aria-label="Next transformation"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
      </button>

      {/* Main Card Container */}
      <div 
        className="w-full max-w-4xl mx-16 bg-white rounded-[20px] shadow-xl overflow-hidden cursor-grab active:cursor-grabbing transition-transform duration-300 hover:scale-[1.01]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {/* Side-by-Side Before/After Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-80">
          {/* Before Image */}
          <div className="relative overflow-hidden">
            <img
              src={currentTransformation.beforeImage}
              alt={currentTransformation.beforeAlt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium">
              Before
            </div>
          </div>

          {/* After Image */}
          <div className="relative overflow-hidden">
            <img
              src={currentTransformation.afterImage}
              alt={currentTransformation.afterAlt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              After
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8">
          <h3 className="text-2xl font-serif font-medium text-[#2D2D2D] mb-4 leading-tight">
            {currentTransformation.title}
          </h3>
          <p className="text-[#7A7A7A] leading-relaxed text-lg">
            {currentTransformation.description}
          </p>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {transformations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-purple-600 scale-125'
                : 'bg-purple-200 hover:bg-purple-300'
            }`}
            aria-label={`Go to transformation ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}