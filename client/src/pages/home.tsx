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
// Before/After Image Imports
import beforeCar from "@assets/AdobeStock_334592268 2_1750506662307.jpg";
import afterCar from "@assets/AdobeStock_334592268 2 copy_1750506666192.jpg";
import beforeGrout from "@assets/AdobeStock_523168323_1750506670649.jpg";
import afterGrout from "@assets/AdobeStock_523168323 copy_1750506673796.jpg";
import beforeMold from "@assets/AdobeStock_554450129_1750506681118.jpg";
import afterMold from "@assets/AdobeStock_554450129 copy_1750506684147.jpg";
import beforeKitchen from "@assets/AdobeStock_560781364_1750506688928.jpg";
import afterKitchen from "@assets/AdobeStock_560781364 copy_1750506691420.jpg";
import beforeUpholstery from "@assets/AdobeStock_689599448_1750506694689.jpg";
import afterUpholstery from "@assets/AdobeStock_689599448 copy_1750506697803.jpg";

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

  // Transformation data - Using proper asset imports
  const transformations = [
    {
      id: 1,
      beforeImage: beforeCar,
      afterImage: afterCar,
      title: "Car Interior Revival",
      description: "Eliminated 3 years of pet hair, mud, and wear with specialized automotive detailing."
    },
    {
      id: 2,
      beforeImage: beforeGrout,
      afterImage: afterGrout,
      title: "Grout Line Restoration",
      description: "Removed years of soap scum and mildew with non-toxic deep steam extraction."
    },
    {
      id: 3,
      beforeImage: beforeMold,
      afterImage: afterMold,
      title: "Mold Remediation & Restoration",
      description: "Safely eliminated dangerous black mold and restored surfaces to pristine condition."
    },
    {
      id: 4,
      beforeImage: beforeKitchen,
      afterImage: afterKitchen,
      title: "Kitchen Deep Clean",
      description: "Dissolved stubborn grease buildup and food stains with professional degreasing agents."
    },
    {
      id: 5,
      beforeImage: beforeUpholstery,
      afterImage: afterUpholstery,
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
          <div className={`text-center py-16 relative scroll-animate ${galleryAnimation.isVisible ? 'visible' : ''}`}>
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
          </div>

          {/* Mobile Layout - Luxury Design */}
          <div className="block lg:hidden px-4 py-8 space-y-12">
            {/* Video Section */}
            <div>
              {/* Næstir Logo - Mobile Luxury Styling */}
              <div className="text-center mb-12">
                <div className="relative">
                  {/* Ambient glow behind logo */}
                  <div className="absolute inset-0 blur-2xl opacity-20 bg-purple-400 rounded-full transform scale-150"></div>
                  <h2 
                    className="relative text-[#4B0082] italic font-bold tracking-wider"
                    style={{ 
                      fontSize: '36px', 
                      lineHeight: '1.1',
                      fontFamily: 'Playfair Display, serif',
                      textShadow: '0 2px 8px rgba(75, 0, 130, 0.15)'
                    }}
                  >
                    Næstir
                  </h2>
                </div>
              </div>
              
              {/* Video Container - Mobile Luxury Design */}
              <div className="relative group">
                {/* Ambient shadow layer */}
                <div className="absolute -inset-6 bg-gradient-to-br from-purple-100/30 to-pink-50/20 rounded-3xl blur-xl opacity-60"></div>
                
                {/* Main video frame */}
                <div 
                  className="relative w-full aspect-video rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: `
                      0 2px 4px rgba(0,0,0,0.03),
                      0 12px 32px rgba(0,0,0,0.06),
                      0 40px 80px rgba(0,0,0,0.08)
                    `,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
                    padding: '6px'
                  }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
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
                    
                    {/* Subtle gradient overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Glassmorphism overlay with title */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 p-4"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0))',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      <p className="text-white font-light tracking-wide text-sm drop-shadow-lg">
                        Professional cleaning transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Gallery - Mobile Luxury Design */}
            <div 
              className={`scroll-animate ${galleryAnimation.isVisible ? 'visible' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Elevated Container with 3D Layering */}
              <div className="relative group">
                {/* Ambient shadow and glow layers */}
                <div className="absolute -inset-6 bg-gradient-to-br from-purple-100/40 to-pink-50/30 rounded-3xl blur-2xl opacity-50"></div>
                <div className="absolute -inset-3 bg-gradient-to-br from-white/60 to-purple-50/40 rounded-2xl blur-lg opacity-80"></div>
                
                {/* Main image frame with contextual framing */}
                <div 
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: `
                      0 2px 4px rgba(0,0,0,0.03),
                      0 12px 32px rgba(0,0,0,0.06),
                      0 40px 80px rgba(0,0,0,0.08)
                    `,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
                    padding: '6px'
                  }}
                >
                  {/* Image container */}
                  <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                    {/* Before Image (Default) */}
                    <img
                      src={transformations[currentIndex].beforeImage}
                      alt={`${transformations[currentIndex].title} before cleaning`}
                      className="w-full h-full object-cover transition-all duration-700 group-active:opacity-0"
                      style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                    />
                    {/* After Image (Touch Reveal) */}
                    <img
                      src={transformations[currentIndex].afterImage}
                      alt={`${transformations[currentIndex].title} after cleaning`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-active:opacity-100"
                      style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.1)' }}
                    />
                    
                    {/* Subtle gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Glassmorphism Badge Labels */}
                    <div 
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider"
                      style={{
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(8px)',
                        color: 'white',
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                      }}
                    >
                      BEFORE
                    </div>
                    <div 
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider opacity-0 group-active:opacity-100 transition-all duration-500 delay-200"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.9) 0%, rgba(168,85,247,0.9) 100%)',
                        backdropFilter: 'blur(8px)',
                        color: 'white',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}
                    >
                      AFTER
                    </div>
                    
                    {/* Bottom overlay with transformation title */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 p-4"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0))',
                        backdropFilter: 'blur(8px)'
                      }}
                    >
                      <h3 
                        className="text-white font-medium tracking-wide drop-shadow-lg mb-1"
                        style={{ 
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '16px',
                          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                        }}
                      >
                        {transformations[currentIndex].title}
                      </h3>
                      <p className="text-white/90 text-sm font-light tracking-wide drop-shadow">
                        Touch and hold to reveal transformation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-center max-w-xl mx-auto pt-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
                  {transformations[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {transformations[currentIndex].description}
                </p>
              </div>

              {/* Navigation for Mobile */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={goToPrev}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-200 group border border-gray-200"
                  aria-label="Previous transformation"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                </button>
                
                <div className="flex justify-center items-center space-x-2">
                  {transformations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                        index === currentIndex
                          ? 'w-6 h-2 bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-200/50'
                          : 'w-2 h-2 bg-gray-300 hover:bg-purple-300'
                      }`}
                      aria-label={`Go to transformation ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={goToNext}
                  className="w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-200 group border border-gray-200"
                  aria-label="Next transformation"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Split Layout Container */}
          <div className="hidden lg:flex flex-col lg:flex-row min-h-screen">
            
            {/* LEFT SIDE - Video Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
              <div className="w-full max-w-2xl">
                {/* Næstir Logo Above Video - Luxury Styling */}
                <div className="text-center mb-12">
                  <div className="relative">
                    {/* Ambient glow behind logo */}
                    <div className="absolute inset-0 blur-2xl opacity-20 bg-purple-400 rounded-full transform scale-150"></div>
                    <h2 
                      className="relative text-[#4B0082] italic font-bold tracking-wider"
                      style={{ 
                        fontSize: '42px', 
                        lineHeight: '1.1',
                        fontFamily: 'Playfair Display, serif',
                        textShadow: '0 2px 8px rgba(75, 0, 130, 0.15)'
                      }}
                    >
                      Næstir
                    </h2>
                  </div>
                </div>

                {/* Video Container - Contextual Framing with Elevated Design */}
                <div className="relative group">
                  {/* Ambient shadow layer */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-purple-100/30 to-pink-50/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-700"></div>
                  
                  {/* Main video frame */}
                  <div 
                    className="relative w-full aspect-video rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02]"
                    style={{
                      boxShadow: `
                        0 2px 4px rgba(0,0,0,0.03),
                        0 12px 32px rgba(0,0,0,0.06),
                        0 40px 80px rgba(0,0,0,0.08)
                      `,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)',
                      padding: '6px'
                    }}
                  >
                    {/* Video with subtle parallax */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <video
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={cleaningVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Subtle gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Glassmorphism overlay with title */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 p-6"
                        style={{
                          background: 'linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0))',
                          backdropFilter: 'blur(8px)'
                        }}
                      >
                        <p className="text-white font-light tracking-wide text-sm drop-shadow-lg">
                          Professional cleaning transformation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* RIGHT SIDE - Before/After Card */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
              <div className="w-full max-w-2xl">
                {/* Before/After Card - Luxury Contextual Framing */}
                <div 
                  className={`relative scroll-animate scroll-animate-delay-1 ${galleryAnimation.isVisible ? 'visible' : ''}`}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Elevated Container with 3D Layering */}
                  <div className="relative group">
                    {/* Ambient shadow and glow layers */}
                    <div className="absolute -inset-8 bg-gradient-to-br from-purple-100/40 to-pink-50/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-white/60 to-purple-50/40 rounded-2xl blur-lg opacity-80"></div>
                    
                    {/* Main image frame with contextual framing */}
                    <div 
                      className="relative rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02]"
                      style={{
                        boxShadow: `
                          0 2px 4px rgba(0,0,0,0.03),
                          0 12px 32px rgba(0,0,0,0.06),
                          0 40px 80px rgba(0,0,0,0.08)
                        `,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
                        padding: '8px'
                      }}
                    >
                      {/* Image container with subtle parallax */}
                      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                        {/* Before Image (Default) */}
                        <img
                          src={transformations[currentIndex].beforeImage}
                          alt={`${transformations[currentIndex].title} before cleaning`}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                          style={{ filter: 'brightness(0.95) contrast(1.05)' }}
                        />
                        {/* After Image (Hover Reveal) */}
                        <img
                          src={transformations[currentIndex].afterImage}
                          alt={`${transformations[currentIndex].title} after cleaning`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                          style={{ filter: 'brightness(1.05) contrast(1.1) saturate(1.1)' }}
                        />
                        
                        {/* Subtle gradient overlay for better text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                        
                        {/* Glassmorphism Badge Labels */}
                        <div 
                          className="absolute top-6 left-6 px-4 py-2 rounded-full text-xs font-bold tracking-wider"
                          style={{
                            background: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(8px)',
                            color: 'white',
                            textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                          }}
                        >
                          BEFORE
                        </div>
                        <div 
                          className="absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                          style={{
                            background: 'linear-gradient(135deg, rgba(139,92,246,0.9) 0%, rgba(168,85,247,0.9) 100%)',
                            backdropFilter: 'blur(8px)',
                            color: 'white',
                            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                          }}
                        >
                          AFTER
                        </div>
                        
                        {/* Bottom overlay with transformation title */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 p-6"
                          style={{
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0))',
                            backdropFilter: 'blur(8px)'
                          }}
                        >
                          <h3 
                            className="text-white font-medium tracking-wide drop-shadow-lg mb-1"
                            style={{ 
                              fontFamily: 'DM Sans, sans-serif',
                              fontSize: '18px',
                              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                            }}
                          >
                            {transformations[currentIndex].title}
                          </h3>
                          <p className="text-white/90 text-sm font-light tracking-wide drop-shadow">
                            Hover to reveal transformation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description with elevated styling */}
                  <div className="text-center max-w-xl mx-auto pt-12">
                    <p 
                      className="text-gray-600 text-base leading-relaxed"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        textShadow: '0 1px 2px rgba(0,0,0,0.05)'
                      }}
                    >
                      {transformations[currentIndex].description}
                    </p>
                  </div>

                  {/* Luxury Navigation with Glassmorphism */}
                  <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center pointer-events-none z-30">
                    <button
                      onClick={goToPrev}
                      className="ml-6 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group pointer-events-auto transform hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: `
                          0 2px 4px rgba(0,0,0,0.03),
                          0 8px 24px rgba(0,0,0,0.08),
                          0 16px 48px rgba(0,0,0,0.12)
                        `,
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                      aria-label="Previous transformation"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
                    </button>
                    
                    <button
                      onClick={goToNext}
                      className="mr-6 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group pointer-events-auto transform hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: `
                          0 2px 4px rgba(0,0,0,0.03),
                          0 8px 24px rgba(0,0,0,0.08),
                          0 16px 48px rgba(0,0,0,0.12)
                        `,
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                      aria-label="Next transformation"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-purple-600 transition-colors" />
                    </button>
                  </div>
                  
                  {/* Elevated Pagination Dots */}
                  <div className="flex justify-center items-center mt-12 space-x-4">
                    {transformations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 ${
                          index === currentIndex
                            ? 'w-10 h-3 shadow-lg'
                            : 'w-3 h-3 hover:w-4 hover:h-4'
                        }`}
                        style={{
                          background: index === currentIndex 
                            ? 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
                            : '#d1d5db',
                          boxShadow: index === currentIndex 
                            ? '0 4px 12px rgba(139, 92, 246, 0.4), 0 2px 4px rgba(0,0,0,0.1)'
                            : '0 2px 4px rgba(0,0,0,0.1)'
                        }}
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