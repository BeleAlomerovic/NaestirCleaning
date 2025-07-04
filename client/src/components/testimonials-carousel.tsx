import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviewsData } from '@/lib/constants';

interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialsCarousel({ className = '' }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const reviews = reviewsData;

  const goToNext = () => {
    if (isTransitioning) return;
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setIsTransitioning(false);
    }, 200);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsTransitioning(false);
    }, 200);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  // Removed auto-advance - only manual navigation now

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-[#B7A9D3]' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className={`w-full py-16 bg-[#FAF9FC] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Elegant "Meðmæli" Design */}
        <div className="text-center mb-12 pt-16 pb-12 relative">
          {/* Background Quote Mark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-[100px] text-[#B7A9D3] opacity-[0.02] font-serif leading-none select-none">
              "
            </div>
          </div>
          
          {/* Main Title */}
          <h2 className="font-playfair text-[32px] md:text-[44px] font-bold text-[#1F1F1F] mb-6 tracking-[-0.5px] leading-[1.1] animate-fade-up">
            Meðmæli
          </h2>
          
          {/* Lavender Divider */}
          <div className="flex justify-center">
            <div className="w-[60px] h-[2px] bg-[#B7A9D3] rounded-[1px] animate-expand-width"></div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-md mx-auto">
          {/* Navigation Arrows - Hidden on mobile until hover */}
          <button
            onClick={goToPrev}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 opacity-60 hover:opacity-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 opacity-60 hover:opacity-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`transition-all duration-400 ease-in-out ${
                isTransitioning
                  ? direction === 'right'
                    ? 'opacity-0 transform translate-x-8'
                    : 'opacity-0 transform -translate-x-8'
                  : 'opacity-100 transform translate-x-0'
              }`}
            >
              <div className="bg-gradient-to-br from-white to-[#f9f7fc] rounded-xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.04)] max-w-sm mx-auto relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-6 h-6 text-[#D5C7F3]" />
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(currentReview.rating)}
                </div>

                {/* Review Text */}
                <blockquote className="text-[#444444] text-base leading-relaxed mb-6 italic">
                  "{currentReview.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {currentReview.customerInitials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#555555] text-sm">
                      {currentReview.customerName}
                    </div>
                    <div className="text-[#777777] text-xs">
                      {currentReview.service} • {currentReview.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#B7A9D3] w-6'
                    : 'bg-[#E5E1F0] hover:bg-[#D5C7F3]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}