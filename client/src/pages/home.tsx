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
import cleaningVideo from "@assets/6694034-uhd_4096_2160_30fps.mp4";

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
  const [showAfterOnMobile, setShowAfterOnMobile] = useState(false);
  const totalTransformations = 5;
  
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
    setShowAfterOnMobile(false); // Reset mobile state on navigation
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTransformations) % totalTransformations);
    setShowAfterOnMobile(false); // Reset mobile state on navigation
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

  // Mobile-specific touch handlers for the image container
  const handleImageTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleImageTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleImageTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe || isRightSwipe) {
      // For swipe navigation, ensure we show before photo immediately
      setShowAfterOnMobile(false);
      
      if (isLeftSwipe) {
        goToNext();
      } else if (isRightSwipe) {
        goToPrev();
      }
    }
    
    // Reset touch states
    setTouchStart(null);
    setTouchEnd(null);
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
          className={`relative min-h-screen overflow-hidden bg-white scroll-animate ${servicesAnimation.isVisible ? 'visible' : ''}`}
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
                
                {/* Service Navigation Menu - Mobile 3 Columns */}
                <div className="grid grid-cols-3 gap-3">
                  {services.map((service, index) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                      <div 
                        className="group text-center cursor-pointer py-3 px-1 transition-all duration-300 ease-out"
                        onMouseEnter={() => handleServiceHover(service.id)}
                        onMouseLeave={handleServiceLeave}
                        onTouchStart={() => handleServiceHover(service.id)}
                        onTouchEnd={handleServiceLeave}
                      >
                        <h3 className="text-[16px] font-medium text-gray-900 leading-[1.3] 
                                     tracking-tight group-hover:text-purple-400 transition-all duration-300"
                            style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}>
                          {service.name}
                        </h3>
                        
                        {/* Hover underline */}
                        <div className="w-0 group-hover:w-8 h-0.5 bg-purple-400 mt-2 mx-auto
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

        {/* Before & After Transformations Section - Split Layout */}
        <section 
          ref={galleryAnimation.elementRef as any}
          className="relative min-h-screen overflow-hidden"
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
          
          {/* Section Header - Elegant "Verkin Okkar" Design */}
          <div className={`text-center py-8 relative scroll-animate ${galleryAnimation.isVisible ? 'visible' : ''}`}>
            {/* Background Quote Mark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[100px] text-[#B7A9D3] opacity-[0.02] font-serif leading-none select-none">
                "
              </div>
            </div>
            
            {/* Main Title - Enhanced Elegant Styling */}
            <h2 className="font-serif text-[36px] md:text-[48px] lg:text-[52px] font-medium text-purple-900 mb-4 tracking-wide leading-[1.1] relative z-10">
              Verkin Okkar
            </h2>
            
            {/* Elegant Decorative Underline in Light Lavender */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1.5 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 rounded-full shadow-sm opacity-80"></div>
            </div>
            
            {/* Næstir Logo and Description */}
            <div className="text-left max-w-4xl mx-auto ml-[15px] lg:ml-[90px]">
              <h2 
                className="text-[#4B0082] font-playfair italic mb-6"
                style={{ fontSize: '48px', lineHeight: '1.2' }}
              >
                Næstir
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-light max-w-2xl">
                Sérverkefnadeild Sólar býr yfir áralangri reynslu og þekkingu á sérþrifum. Þjónustan okkar einkennist af hágæða vinnubrögðum og fagmennsku í hverju verkefni. Öllum verkefnum stýrir verkstjóri sem tryggir vandaða framkvæmd frá upphafi til enda. Fyrir okkur er ekkert verkefni of stórt eða smátt!
              </p>
            </div>
          </div>

          {/* Split Layout Container */}
          <div className="flex flex-col lg:flex-row min-h-[70vh]">
            
            {/* LEFT SIDE - Video Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
              <div className="w-full max-w-2xl">

                
                {/* Video Container */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(139,69,190,0.25),0_8px_32px_rgba(139,69,190,0.15),0_2px_8px_rgba(139,69,190,0.1)] border border-[#e8d9ff]">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={cleaningVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 pointer-events-none"></div>
                </div>
                
                {/* Video Caption */}
                <p className="mt-4 text-center font-light text-gray-700 text-sm tracking-wide">
                  Professional cleaning in action
                </p>
              </div>
            </div>
            
            {/* RIGHT SIDE - Before/After Card */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
              <div className="w-full max-w-2xl">
                {/* Before/After Card */}
                <div 
                  className={`relative scroll-animate scroll-animate-delay-1 ${galleryAnimation.isVisible ? 'visible' : ''}`}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Single Hover-to-Reveal Image */}
                  <div 
                    className="relative group w-full aspect-video rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(139,69,190,0.25),0_8px_32px_rgba(139,69,190,0.15),0_2px_8px_rgba(139,69,190,0.1)] border border-[#e8d9ff]"
                    onClick={(e) => {
                      // Only handle tap-to-reveal on mobile if it's not a swipe
                      if (!touchStart || !touchEnd || Math.abs(touchStart - touchEnd) < 20) {
                        setShowAfterOnMobile(!showAfterOnMobile);
                      }
                    }}
                    onTouchStart={handleImageTouchStart}
                    onTouchMove={handleImageTouchMove}
                    onTouchEnd={handleImageTouchEnd}
                  >
                    {/* Before Image (Default) */}
                    <img
                      src={transformations[currentIndex].beforeImage}
                      alt={`${transformations[currentIndex].title} before cleaning`}
                      className={`w-full h-full object-cover transition-all duration-700 ${showAfterOnMobile ? 'opacity-0 lg:opacity-100' : ''} lg:group-hover:opacity-0`}
                    />
                    {/* After Image (Hover Reveal / Tap Reveal) */}
                    <img
                      src={transformations[currentIndex].afterImage}
                      alt={`${transformations[currentIndex].title} after cleaning`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${showAfterOnMobile ? 'opacity-100 lg:opacity-0' : 'opacity-0'} lg:group-hover:opacity-100`}
                    />
                    
                    {/* Premium Badge Labels */}
                    <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide">
                      BEFORE
                    </div>
                    <div className={`absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-500 delay-200 ${showAfterOnMobile ? 'opacity-100 lg:opacity-0' : 'opacity-0'} lg:group-hover:opacity-100`}>
                      AFTER
                    </div>
                    
                    {/* Editorial Caption */}
                    <p className="mt-4 text-center font-light text-gray-700 text-sm tracking-wide">
                      <span className="lg:hidden">Tap to reveal transformation</span>
                      <span className="hidden lg:inline">Hover to reveal transformation</span>: {transformations[currentIndex].title}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="text-center max-w-xl mx-auto pt-8">
                    <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                      {transformations[currentIndex].title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {transformations[currentIndex].description}
                    </p>
                  </div>

                  {/* Glassmorphism Navigation - Desktop Only */}
                  <div className="hidden lg:block">
                    {/* Left Arrow - Outside Photo */}
                    <button
                      onClick={goToPrev}
                      className="absolute top-1/2 -left-20 z-20 w-16 h-16 bg-white/20 backdrop-blur-md hover:bg-white/30 shadow-2xl hover:shadow-purple-500/20 rounded-2xl flex items-center justify-center transition-all duration-300 group border border-white/30 hover:border-purple-300/50 transform -translate-y-1/2"
                      aria-label="Previous transformation"
                    >
                      <ChevronLeft className="w-7 h-7 text-gray-700 drop-shadow-lg group-hover:text-purple-600 transition-colors duration-300" />
                    </button>
                    
                    {/* Right Arrow - Outside Photo */}
                    <button
                      onClick={goToNext}
                      className="absolute top-1/2 -right-20 z-20 w-16 h-16 bg-white/20 backdrop-blur-md hover:bg-white/30 shadow-2xl hover:shadow-purple-500/20 rounded-2xl flex items-center justify-center transition-all duration-300 group border border-white/30 hover:border-purple-300/50 transform -translate-y-1/2"
                      aria-label="Next transformation"
                    >
                      <ChevronRight className="w-7 h-7 text-gray-700 drop-shadow-lg group-hover:text-purple-600 transition-colors duration-300" />
                    </button>
                  </div>
                  
                  {/* Elegant Pagination Dots */}
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
            </div>
          </div>
          
          {/* Wave separator to next section */}
          <WaveSeparator nextSectionColor="purple" />
        </section>

        {/* Client Testimonials Section */}
        <TestimonialsCarousel />

        {/* FAQ Section - Premium Redesign */}
        <section 
          ref={faqAnimation.elementRef as any}
          className={`py-20 lg:py-32 bg-gradient-to-br from-[#fafafa] to-[#f9f7ff] relative overflow-hidden scroll-animate ${faqAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className={`max-w-4xl mx-auto px-6 lg:px-8 scroll-animate ${faqAnimation.isVisible ? 'visible' : ''}`}>
            
            {/* Search Bar - Apple Style */}
            <div className="text-center mb-12">
              <div className="max-w-md mx-auto relative">
                <input 
                  type="text" 
                  placeholder="Have a question?" 
                  className="w-full px-6 py-4 text-lg bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400/30 focus:border-purple-300 transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Enhanced Header Design */}
            <div className="text-center mb-16 relative">
              {/* Main Title */}
              <h2 className="font-playfair text-[36px] md:text-[44px] font-bold text-[#1F1F1F] mb-6 tracking-[-0.5px] leading-[1.1]">
                Algengar Spurningar
              </h2>
              
              {/* Subtext */}
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Find answers to the most common questions about our cleaning services
              </p>
              
              {/* Lavender Divider */}
              <div className="flex justify-center">
                <div className="w-[60px] h-[2px] bg-[#B7A9D3] rounded-[1px]"></div>
              </div>
            </div>

            {/* Premium FAQ Cards */}
            <div className="space-y-6">
              {[
                {
                  question: "Do I need to be home during the cleaning?",
                  answer: "No — as long as we have access, you don't need to be there. Many clients prefer returning to a spotless home."
                },
                {
                  question: "Are your cleaners background-checked and insured?",
                  answer: "Absolutely. Every Næstir team member is vetted, insured, and trained to meet our high standards."
                },
                {
                  question: "Do you bring your own supplies and equipment?",
                  answer: "Yes. We bring all eco-friendly cleaning products and tools — unless you prefer we use your own."
                },
                {
                  question: "How do I get a quote?",
                  answer: "Just click \"Get My Quote\" at the top or bottom of this page — it takes under a minute."
                },
                {
                  question: "Do you clean outside Reykjavík?",
                  answer: "Mostly yes! Enter your zip code above to check if you're in our service area."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl shadow-sm border-0 overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-[#f3efff]/30 ${openFAQ === index ? 'shadow-lg bg-[#f3efff]/30' : ''}`}
                >
                  <button 
                    className="w-full px-8 py-6 lg:py-8 text-left flex justify-between items-center transition-all duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg lg:text-xl font-semibold text-[#2A2A2A] pr-4 leading-relaxed">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 transition-all duration-300 flex-shrink-0 ${openFAQ === index ? 'rotate-45 bg-purple-600 text-white' : ''}`}>
                      <span className="text-xl font-light">+</span>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                    <div className="px-8">
                      <div className="h-px bg-gray-200/60 mb-6"></div>
                      <p className="text-base lg:text-lg text-[#6B7280] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Link */}
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Still have questions? <a href="/contact" className="text-purple-600 hover:text-purple-700 font-medium underline decoration-2 underline-offset-2">Contact our team</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}