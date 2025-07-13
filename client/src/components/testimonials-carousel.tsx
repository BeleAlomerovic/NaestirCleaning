import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviewsData } from '@/lib/constants';
import { WaveSeparator } from './wave-separator';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useParallax } from '@/hooks/use-parallax';
import towelBackgroundImage from '@assets/Marriott-towel-set-MAR-320-01-SET-BT-WH_xlrg_1751680650160.webp';

interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialsCarousel({ className = '' }: TestimonialCarouselProps) {
  const reviews = reviewsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  // Scroll animation for testimonials section
  const testimonialsAnimation = useScrollAnimation();
  
  // Parallax effect for background
  const parallaxRef = useParallax();
  
  // Keyboard navigation support
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'ArrowRight') goToNext();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % reviews.length;
    goToSlide(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  // Touch handling for mobile swipe
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
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentReview = reviews[currentIndex];

  return (
    <section 
      ref={testimonialsAnimation.elementRef as any} 
      className={`w-full section-purple relative overflow-hidden ${className}`}
      style={{ minHeight: '60vh', paddingTop: '8rem' }}
    >
      {/* Desktop Background with Fixed Attachment */}
      <div 
        className="absolute inset-0 w-full h-full hidden lg:block"
        style={{
          backgroundImage: `url(${towelBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      
      {/* Mobile Parallax Background - Shows Partial Image */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full lg:hidden"
        style={{
          backgroundImage: `url(${towelBackgroundImage})`,
          backgroundSize: '140%', // Even larger for more parallax movement
          backgroundPosition: '50% 30%', // Start showing upper portion
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
        }}
      ></div>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/65 backdrop-blur-[1px]"></div>
      
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content ${testimonialsAnimation.isVisible ? 'visible' : ''}`}>
        {/* Mobile: Centered content with more vertical space */}
        <div className="lg:hidden min-h-[60vh] flex flex-col justify-center py-8 transform -translate-y-[100px]">
          {/* Section Header - Elegant "Meðmæli" Design */}
          <div className={`text-center mb-8 relative scroll-animate ${testimonialsAnimation.isVisible ? 'visible' : ''}`}>
            {/* Background Quote Mark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[80px] text-[#B7A9D3] opacity-[0.02] font-serif leading-none select-none">
                "
              </div>
            </div>
            
            {/* Main Title - Enhanced Elegant Styling - Matching Verkin Okkar */}
            <h2 className="font-serif text-[36px] md:text-[48px] lg:text-[52px] font-medium text-purple-900 mb-4 tracking-wide leading-[1.1] relative z-10">
              Meðmæli
            </h2>
            
            {/* Elegant Decorative Underline in Light Lavender - Matching Verkin Okkar */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1.5 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 rounded-full shadow-sm opacity-80"></div>
            </div>
          </div>

          {/* Mobile Testimonial Card - Smaller and Centered */}
          <div
            className="relative overflow-hidden max-w-xs mx-auto"
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
              <div className="bg-white rounded-[16px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] relative transform transition-all duration-600">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-5 h-5 text-[#D5C7F3]" />
                </div>



                {/* Review Text */}
                <blockquote className="text-[#444444] text-sm leading-relaxed mb-4 italic">
                  "{currentReview.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs mr-2">
                    {currentReview.customerInitials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#555555] text-xs">
                      {currentReview.customerName}
                    </div>
                    <div className="text-[#777777] text-xs">
                      {currentReview.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                  index === currentIndex
                    ? 'w-6 h-2 bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-200/50'
                    : 'w-2 h-2 bg-gray-300 hover:bg-purple-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Content */}
        <div className="hidden lg:block">
          {/* Section Header - Elegant "Meðmæli" Design */}
          <div className={`text-center mb-12 relative scroll-animate ${testimonialsAnimation.isVisible ? 'visible' : ''}`}>
            {/* Background Quote Mark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[100px] text-[#B7A9D3] opacity-[0.02] font-serif leading-none select-none">
                "
              </div>
            </div>
            
            {/* Main Title - Enhanced Elegant Styling */}
            <h2 className="font-serif text-[36px] md:text-[48px] lg:text-[52px] font-medium text-purple-900 mb-4 tracking-wide leading-[1.1] relative z-10">
              Meðmæli
            </h2>
            
            {/* Elegant Decorative Underline in Light Lavender */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1.5 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 rounded-full shadow-sm opacity-80"></div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-2xl mx-auto">
            {/* Navigation Arrows - Enhanced with subtle glow on hover */}
            <button
              onClick={goToPrev}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 opacity-70 hover:opacity-100 hover:shadow-purple-200/50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-purple-600 transition-colors" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 opacity-70 hover:opacity-100 hover:shadow-purple-200/50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 hover:text-purple-600 transition-colors" />
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
                <div className="bg-white rounded-[16px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] max-w-lg mx-auto relative transform transition-all duration-600 hover:scale-105 ease-in-out">
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

            {/* Desktop Elegant Pagination Dots */}
            <div className="flex justify-center items-center mt-8 space-x-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                    index === currentIndex
                      ? 'w-8 h-2.5 bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-200/50'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-purple-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator to next section */}
      <WaveSeparator nextSectionColor="white" />
    </section>
  );
}