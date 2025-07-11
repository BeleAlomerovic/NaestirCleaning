import { Link } from "wouter";
import { Users, Heart, Award, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { WaveSeparator } from "@/components/wave-separator";
import { useParallax, useIntersectionObserver } from "@/hooks/use-parallax";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { services } from "@/lib/constants";
import heroImage from "@assets/Depositphotos_764505660_XL_1751107860312.jpg";

// Import slideshow background images for services section
import cleanApartmentImage from "@assets/Clean-apartment_1750613206530.jpg";
import corporateCleaningImage from "@assets/comm-clean.2102030812301_1751047448997.jpg";
import carpetCleaningImage from "@assets/carpet cleaning_1751105111344.jpg";
import carWashImage from "@assets/car wash_1751105103650.webp";
import elevatorCleaningImage from "@assets/elevator_1751103467643.webp";
import stairwayCleaningImage from "@assets/stairway_1751103472278.webp";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const servicesRef = useParallax();
  const galleryRef = useParallax();
  const faqRef = useParallax();
  const servicesObserverRef = useIntersectionObserver();
  const galleryObserverRef = useIntersectionObserver();
  const faqObserverRef = useIntersectionObserver();
  
  // Scroll animations for each section
  const servicesAnimation = useScrollAnimation();
  const galleryAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  
  // State for transformation carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTransformations = 5;
  
  // State for before/after hover reveal
  const [isHoveringTransformation, setIsHoveringTransformation] = useState(false);
  const [revealPosition, setRevealPosition] = useState({ x: 0, y: 0 });
  const [isMobileReveal, setIsMobileReveal] = useState(false);
  
  // State for services split-screen slideshow
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  // Cinematic slideshow images for split-screen layout
  const slideshowImages = [
    cleanApartmentImage,
    corporateCleaningImage,
    carpetCleaningImage,
    carWashImage,
    elevatorCleaningImage,
    stairwayCleaningImage
  ];
  
  // Service-to-image mapping for dynamic updates
  const serviceImageMap: Record<string, string> = {
    "apartment": cleanApartmentImage,
    "corporate": corporateCleaningImage,
    "carpet-cleaning": carpetCleaningImage,
    "car-wash": carWashImage,
    "blocks-cleaning": elevatorCleaningImage,
    "garbage-can-cleaning": stairwayCleaningImage
  };
  
  // Navigation functions for carousel
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTransformations);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTransformations) % totalTransformations);
  };

  // Touch gesture support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  // Handle service hover to update image (removed auto-advance)
  useEffect(() => {
    if (hoveredService && serviceImageMap[hoveredService]) {
      const hoveredImageIndex = slideshowImages.indexOf(serviceImageMap[hoveredService]);
      if (hoveredImageIndex !== -1) {
        setCurrentSlideIndex(hoveredImageIndex);
      }
    }
  }, [hoveredService, slideshowImages, serviceImageMap]);
  
  // Handle service hover to update image
  const handleServiceHover = (serviceId: string) => {
    setHoveredService(serviceId);
    const imageIndex = slideshowImages.indexOf(serviceImageMap[serviceId]);
    if (imageIndex !== -1) {
      setCurrentSlideIndex(imageIndex);
    }
  };
  
  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  // Transformation data
  const transformations = [
    {
      id: 1,
      beforeImage: "/assets/AdobeStock_334592268 2_1750506662307.jpg",
      afterImage: "/assets/AdobeStock_334592268 2 copy_1750506666192.jpg",
      title: "Car Interior Revival",
      description: "Eliminated 3 years of pet hair, mud, and wear with specialized automotive detailing."
    },
    {
      id: 2,
      beforeImage: "/assets/AdobeStock_523168323_1750506670649.jpg",
      afterImage: "/assets/AdobeStock_523168323 copy_1750506673796.jpg",
      title: "Grout Line Restoration",
      description: "Removed years of soap scum and mildew with non-toxic deep steam extraction."
    },
    {
      id: 3,
      beforeImage: "/assets/AdobeStock_554450129_1750506681118.jpg",
      afterImage: "/assets/AdobeStock_554450129 copy_1750506684147.jpg",
      title: "Mold Remediation & Restoration",
      description: "Safely eliminated dangerous black mold and restored surfaces to pristine condition."
    },
    {
      id: 4,
      beforeImage: "/assets/AdobeStock_560781364_1750506688928.jpg",
      afterImage: "/assets/AdobeStock_560781364 copy_1750506691420.jpg",
      title: "Kitchen Deep Clean",
      description: "Dissolved stubborn grease buildup and food stains with professional degreasing agents."
    },
    {
      id: 5,
      beforeImage: "/assets/AdobeStock_689599448_1750506694689.jpg",
      afterImage: "/assets/AdobeStock_689599448 copy_1750506697803.jpg",
      title: "Upholstery Revival",
      description: "Lifted deep-set stains and odors with gentle steam cleaning and fabric protection."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] overflow-hidden">
          {/* Hero Image with Ken Burns Effect */}
          <div className="w-full h-full">
            <img
              src={heroImage}
              alt="Clean and modern living room with professional cleaning results"
              className="w-full h-full object-cover ken-burns-zoom"
            />
          </div>
          
          {/* Text Readability Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          
          {/* Sparkle Effect */}
          <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 sparkle-effect">
            <div className="w-2 h-2 bg-white rounded-full opacity-0 animate-sparkle"></div>
          </div>
          
          {/* Hero Content - Left Aligned */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-8 lg:px-12 xl:px-16 max-w-3xl hero-content">
              {/* Main Headline */}
              <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-tight tracking-wide hero-headline">
                Experience the Ultimate
              </h1>
              
              {/* Subheadline */}
              <h2 className="font-inter text-2xl md:text-3xl lg:text-4xl font-light text-white mb-6 hero-subheadline">
                Clean Living
              </h2>
              
              {/* Tagline */}
              <p className="font-inter text-base md:text-lg text-white/80 mb-10 italic leading-relaxed hero-tagline">
                Where pristine meets perfection
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-6 hero-cta">
                <Link href="/quote">
                  <Button 
                    className="bg-gradient-to-r from-[#B57EDC] to-[#D8BFD8] text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ borderRadius: '10px', height: '50px', width: '220px' }}
                  >
                    Get Your Free Quote
                  </Button>
                </Link>
                <Link href="/#services">
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:border-white hover:bg-white/10 px-8 py-4 text-lg font-normal transition-all duration-300 hover:shadow-lg"
                    style={{ borderRadius: '10px', height: '50px', width: '220px' }}
                  >
                    See Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Wave separator to next section */}
          <WaveSeparator nextSectionColor="purple" />
        </section>

        {/* Þjónustan Okkar - Commanding Split-Screen Layout */}
        <section 
          id="services" 
          ref={servicesAnimation.elementRef as any}
          className="relative min-h-screen overflow-hidden bg-white"
        >
          {/* Desktop Split-Screen Layout */}
          <div className="hidden lg:flex h-screen">
            {/* LEFT 70% - Premium Portfolio Image Gallery */}
            <div className="w-[70%] relative overflow-hidden bg-gray-50/30 flex items-center justify-center px-12 py-16">
              {/* Premium Gallery Frame Container - Larger Size */}
              <div className="relative w-full max-w-4xl aspect-[4/3] professional-frame-container">
                {/* White Padded Frame Background */}
                <div className="absolute inset-0 bg-white rounded-[16px] p-6 shadow-gallery-frame">
                  {/* Inner Image Container */}
                  <div className="relative w-full h-full overflow-hidden rounded-[12px] border border-lavender-frame">
                    {/* Hover-controlled image display */}
                    <img
                      src={slideshowImages[currentSlideIndex]}
                      alt="Service showcase"
                      className="w-full h-full object-cover professional-image-treatment transition-opacity duration-500"
                      style={{
                        filter: 'brightness(0.96) contrast(1.08) saturate(0.92)'
                      }}
                    />
                    
                    {/* Soft Edge Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none rounded-[12px]"></div>
                  </div>
                </div>
              </div>
              
              {/* Subtle ambient lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* RIGHT 30% - Refined Control Panel */}
            <div className="w-[30%] bg-white relative flex flex-col justify-center px-12 py-16">
              <div className={`space-y-8 ${servicesAnimation.isVisible ? 'visible' : ''}`}>
                
                {/* Section Label */}
                <div className="mb-12">
                  <p className="text-gray-500 text-sm font-medium tracking-[2px] uppercase mb-2">
                    Our Expertise
                  </p>
                  <div className="w-16 h-px bg-gray-300"></div>
                </div>
                
                {/* Service Navigation Menu */}
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                      <div 
                        className="group cursor-pointer py-2 transition-all duration-300 ease-out"
                        onMouseEnter={() => handleServiceHover(service.id)}
                        onMouseLeave={handleServiceLeave}
                      >
                        <h3 className="text-[32px] xl:text-[36px] font-medium text-gray-900 leading-[1.6] 
                                     tracking-tight group-hover:text-purple-400 transition-all duration-300
                                     group-hover:translate-x-2"
                            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}>
                          {service.name}
                        </h3>
                        
                        {/* Hover underline */}
                        <div className="w-0 group-hover:w-16 h-0.5 bg-purple-400 mt-2 
                                      transition-all duration-500 ease-out"></div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Scroll Cue */}
                <div className="absolute bottom-8 right-8">
                  <div className="flex items-center space-x-2 text-purple-400 text-sm tracking-wide
                                group cursor-pointer hover:text-purple-500 transition-colors duration-300">
                    <span className="font-medium">Explore All Services</span>
                    <div className="transform transition-transform duration-300 group-hover:translate-y-1">
                      ↓
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Stacked Layout */}
          <div className="lg:hidden">
            {/* Premium mobile gallery */}
            <div className="h-[60vh] relative overflow-hidden bg-gray-50/30 flex items-center justify-center px-4 py-6">
              <div className="relative w-full max-w-md aspect-[4/3] professional-frame-container">
                {/* White Padded Frame Background */}
                <div className="absolute inset-0 bg-white rounded-[14px] p-4 shadow-gallery-frame-mobile">
                  {/* Inner Image Container */}
                  <div className="relative w-full h-full overflow-hidden rounded-[10px] border border-lavender-frame">
                    {/* Hover-controlled image display */}
                    <img
                      src={slideshowImages[currentSlideIndex]}
                      alt="Service showcase"
                      className="w-full h-full object-cover professional-image-treatment transition-opacity duration-500"
                      style={{
                        filter: 'brightness(0.96) contrast(1.08) saturate(0.92)'
                      }}
                    />
                    
                    {/* Soft Edge Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none rounded-[10px]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Clean vertical stack of services below */}
            <div className="bg-white px-6 py-12">
              <div className={`max-w-lg mx-auto ${servicesAnimation.isVisible ? 'visible' : ''}`}>
                
                {/* Section Label */}
                <div className="text-center mb-12">
                  <p className="text-gray-500 text-sm font-medium tracking-[2px] uppercase mb-4">
                    Our Expertise
                  </p>
                  <div className="w-16 h-px bg-gray-300 mx-auto"></div>
                </div>
                
                {/* Service Navigation Menu */}
                <div className="space-y-8">
                  {services.map((service, index) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                      <div 
                        className="group text-center cursor-pointer py-4 transition-all duration-300 ease-out"
                        onMouseEnter={() => handleServiceHover(service.id)}
                        onMouseLeave={handleServiceLeave}
                      >
                        <h3 className="text-[26px] md:text-[30px] font-medium text-gray-900 leading-[1.6] 
                                     tracking-tight group-hover:text-purple-400 transition-all duration-300"
                            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}>
                          {service.name}
                        </h3>
                        
                        {/* Hover underline */}
                        <div className="w-0 group-hover:w-16 h-0.5 bg-purple-400 mt-2 mx-auto
                                      transition-all duration-500 ease-out"></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Wave separator to next section */}
          <WaveSeparator nextSectionColor="white" />
        </section>

        {/* Before & After Transformations Section - Editorial Magazine Layout */}
        <section 
          ref={galleryAnimation.elementRef as any}
          className="relative py-32 overflow-hidden"
        >
          {/* Elite Background Design: Sculpted Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f6f0ff] to-[#ffffff]">
            {/* Sculpted SVG Abstract Shape */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.06]">
              <svg viewBox="0 0 400 400" className="w-full h-full text-[#dcc9f9]">
                <path d="M300,50 Q350,100 320,200 Q290,300 200,320 Q100,350 80,250 Q50,150 150,80 Q250,20 300,50 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.04] rotate-45">
              <svg viewBox="0 0 200 200" className="w-full h-full text-[#dcc9f9]">
                <circle cx="100" cy="100" r="80" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          <div className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 section-content ${galleryAnimation.isVisible ? 'visible' : ''}`}>
            {/* Headline & Typography: Matching Meðmæli Style */}
            <div className={`text-center mb-16 scroll-animate ${galleryAnimation.isVisible ? 'visible' : ''}`}>
              {/* Background Quote Mark - Matching Meðmæli */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[100px] text-[#B7A9D3] opacity-[0.02] font-serif leading-none select-none">
                  "
                </div>
              </div>
              
              {/* Main Title - Exact Meðmæli Typography */}
              <h2 className="font-serif text-[36px] md:text-[48px] lg:text-[52px] font-medium text-purple-900 mb-4 tracking-wide leading-[1.1] relative z-10">
                Before & After <span className="text-purple-900">Transformations</span>
              </h2>
              
              {/* Elegant Decorative Underline - Matching Meðmæli */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-1.5 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 rounded-full shadow-sm opacity-80"></div>
              </div>
            </div>

            {/* High-Fidelity Luxury Card Layout */}
            <div 
              className={`relative scroll-animate scroll-animate-delay-1 ${galleryAnimation.isVisible ? 'visible' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Center-aligned Content with Luxury Card Container */}
              <div className="flex flex-col items-center space-y-12">
                
                {/* Luxury Card Container - Product Showcase Style */}
                <div className="w-full" style={{ maxWidth: 'min(90vw, 900px)' }}>
                  <div 
                    className="relative group luxury-transformation-card"
                    onMouseEnter={() => setIsHoveringTransformation(true)}
                    onMouseLeave={() => setIsHoveringTransformation(false)}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setRevealPosition({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                      });
                    }}
                    onClick={() => setIsMobileReveal(!isMobileReveal)}
                    onTouchStart={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const touch = e.touches[0];
                      setRevealPosition({
                        x: touch.clientX - rect.left,
                        y: touch.clientY - rect.top
                      });
                      setIsMobileReveal(true);
                    }}
                    onTouchMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const touch = e.touches[0];
                      setRevealPosition({
                        x: touch.clientX - rect.left,
                        y: touch.clientY - rect.top
                      });
                    }}
                    onTouchEnd={() => setIsMobileReveal(false)}
                  >
                    {/* Card Container with Premium Styling */}
                    <div className="relative overflow-hidden rounded-[20px] aspect-video bg-white shadow-luxury border border-purple-100/20">
                      
                      {/* Subtle Texture Background - Live Feel */}
                      <div className="absolute inset-0 z-0">
                        <div 
                          className="w-full h-full opacity-20 bg-gradient-to-br from-gray-100 via-purple-50 to-gray-200"
                          style={{ 
                            backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(167, 139, 250, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(167, 139, 250, 0.05) 0%, transparent 50%)',
                            animation: 'slowZoom 20s ease-in-out infinite alternate'
                          }}
                        />
                        
                        {/* Texture Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-purple-900/10"></div>
                      </div>
                      
                      {/* Before Image Layer */}
                      <div className="absolute inset-0 z-10">
                        <img
                          src={transformations[currentIndex].beforeImage}
                          alt={`${transformations[currentIndex].title} before cleaning`}
                          className="w-full h-full object-cover transition-all duration-800 ease-out"
                          style={{
                            clipPath: (isHoveringTransformation || isMobileReveal)
                              ? `polygon(0% 0%, ${(revealPosition.x / 900) * 100}% 0%, ${(revealPosition.x / 900) * 100}% 100%, 0% 100%)`
                              : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                          }}
                        />
                      </div>
                      
                      {/* After Image Layer - Revealed by Wipe */}
                      <div className="absolute inset-0 z-5">
                        <img
                          src={transformations[currentIndex].afterImage}
                          alt={`${transformations[currentIndex].title} after cleaning`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Wipe Dividing Line */}
                      {(isHoveringTransformation || isMobileReveal) && (
                        <div 
                          className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-lg z-20 transition-all duration-100"
                          style={{ left: `${revealPosition.x}px` }}
                        >
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-purple-200">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600">
                              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                              <path d="m15 9-6 6"/>
                              <path d="m9 9 6 6"/>
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Premium Badge Labels */}
                      <div className="absolute top-6 left-6 bg-black/90 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide backdrop-blur-sm z-30">
                        BEFORE
                      </div>
                      <div 
                        className={`absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide backdrop-blur-sm z-30 transition-all duration-500 ${
                          (isHoveringTransformation || isMobileReveal) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                      >
                        AFTER
                      </div>
                      
                      {/* Interactive Instructions */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
                        <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-purple-100">
                          <p className="text-sm font-medium text-gray-700 tracking-wide">
                            {(isHoveringTransformation || isMobileReveal) ? 'Move to reveal transformation' : 'Tap or hover to explore cleaning results'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Description - Editorial Style */}
                <div className="text-center max-w-3xl pt-8">
                  <h3 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-6 tracking-tight">
                    {transformations[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    {transformations[currentIndex].description}
                  </p>
                  
                  {/* View More CTA */}
                  <div className="mt-8">
                    <button className="text-purple-600 hover:text-purple-700 font-medium tracking-wide transition-colors duration-300 group">
                      View more transformations 
                      <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Professional Navigation */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center pointer-events-none">
                <button
                  onClick={goToPrev}
                  className="carousel-nav-button ml-4 lg:ml-8 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center transition-all duration-200 group border border-gray-200 pointer-events-auto"
                  aria-label="Previous transformation"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="carousel-nav-button mr-4 lg:mr-8 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center transition-all duration-200 group border border-gray-200 pointer-events-auto"
                  aria-label="Next transformation"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
                </button>
              </div>
              
              {/* Elegant Pagination Dots - Exact Meðmæli Style */}
              <div className="flex justify-center items-center mt-8 space-x-3">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                      index === currentIndex
                        ? 'w-8 h-2.5 bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-200/50'
                        : 'w-2.5 h-2.5 bg-gray-300 hover:bg-purple-300'
                    }`}
                    aria-label={`Go to transformation ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Wave separator to next section */}
          <WaveSeparator nextSectionColor="purple" />
        </section>

        {/* Client Testimonials Section */}
        <TestimonialsCarousel />

        {/* FAQ Section */}
        <section 
          ref={faqAnimation.elementRef as any}
          className="section-white parallax-section"
        >
          <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-content ${faqAnimation.isVisible ? 'visible' : ''}`}>
            {/* Section Header - Elegant "Algengar Spurningar" Design */}
            <div className={`text-center mb-16 relative scroll-animate ${faqAnimation.isVisible ? 'visible' : ''}`}>
              {/* Background Quote Mark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[100px] text-[#B7A9D3] opacity-[0.02] font-serif leading-none select-none">
                  "
                </div>
              </div>
              
              {/* Main Title */}
              <h2 className="font-playfair text-[32px] md:text-[44px] font-bold text-[#1F1F1F] mb-6 tracking-[-0.5px] leading-[1.1] animate-fade-up">
                Algengar Spurningar
              </h2>
              
              {/* Lavender Divider */}
              <div className="flex justify-center">
                <div className="w-[60px] h-[2px] bg-[#B7A9D3] rounded-[1px] animate-expand-width"></div>
              </div>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className={`faq-item bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden scroll-animate scroll-animate-delay-1 ${openFAQ === 0 ? 'active' : ''} ${faqAnimation.isVisible ? 'visible' : ''}`}>
                <button 
                  className="faq-trigger w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(0)}
                >
                  <span className="font-inter text-lg font-bold text-[#2A2A2A]">
                    Do I need to be home during the cleaning?
                  </span>
                  <span className="faq-icon text-2xl text-purple-400 transition-transform duration-300">
                    {openFAQ === 0 ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="px-6 pb-6">
                    <p className="font-inter text-base text-[#555] leading-relaxed">
                      No — as long as we have access, you don't need to be there. Many clients prefer returning to a spotless home.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className={`faq-item bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden scroll-animate scroll-animate-delay-2 ${openFAQ === 1 ? 'active' : ''} ${faqAnimation.isVisible ? 'visible' : ''}`}>
                <button 
                  className="faq-trigger w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(1)}
                >
                  <span className="font-inter text-lg font-bold text-[#2A2A2A]">
                    Are your cleaners background-checked and insured?
                  </span>
                  <span className="faq-icon text-2xl text-purple-400 transition-transform duration-300">
                    {openFAQ === 1 ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="px-6 pb-6">
                    <p className="font-inter text-base text-[#555] leading-relaxed">
                      Absolutely. Every Næstir team member is vetted, insured, and trained to meet our high standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className={`faq-item bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden scroll-animate scroll-animate-delay-3 ${openFAQ === 2 ? 'active' : ''} ${faqAnimation.isVisible ? 'visible' : ''}`}>
                <button 
                  className="faq-trigger w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(2)}
                >
                  <span className="font-inter text-lg font-bold text-[#2A2A2A]">
                    Do you bring your own supplies and equipment?
                  </span>
                  <span className="faq-icon text-2xl text-purple-400 transition-transform duration-300">
                    {openFAQ === 2 ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="px-6 pb-6">
                    <p className="font-inter text-base text-[#555] leading-relaxed">
                      Yes. We bring all eco-friendly cleaning products and tools — unless you prefer we use your own.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className={`faq-item bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${openFAQ === 3 ? 'active' : ''}`}>
                <button 
                  className="faq-trigger w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(3)}
                >
                  <span className="font-inter text-lg font-bold text-[#2A2A2A]">
                    How do I get a quote?
                  </span>
                  <span className="faq-icon text-2xl text-purple-400 transition-transform duration-300">
                    {openFAQ === 3 ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="px-6 pb-6">
                    <p className="font-inter text-base text-[#555] leading-relaxed">
                      Just click "Get My Quote" at the top or bottom of this page — it takes under a minute.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className={`faq-item bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${openFAQ === 4 ? 'active' : ''}`}>
                <button 
                  className="faq-trigger w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(4)}
                >
                  <span className="font-inter text-lg font-bold text-[#2A2A2A]">
                    Do you clean outside Reykjavík?
                  </span>
                  <span className="faq-icon text-2xl text-purple-400 transition-transform duration-300">
                    {openFAQ === 4 ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                  <div className="px-6 pb-6">
                    <p className="font-inter text-base text-[#555] leading-relaxed">
                      Mostly yes! Enter your zip code above to check if you're in our service area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}