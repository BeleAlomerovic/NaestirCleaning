import { Link } from "wouter";
import { Users, Heart, Award, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { WaveSeparator } from "@/components/wave-separator";
import { useParallax, useIntersectionObserver } from "@/hooks/use-parallax";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { services } from "@/lib/constants";
import heroImage from "@assets/Depositphotos_764505660_XL_1751107860312.jpg";

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

        {/* What We Clean Section */}
        <section 
          id="services" 
          ref={servicesAnimation.elementRef as any}
          className="section-purple parallax-section"
        >
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-content ${servicesAnimation.isVisible ? 'visible' : ''}`}>
            {/* Section Header - Elegant "Þjónustan Okkar" Design */}
            <div className={`text-center mb-16 relative scroll-animate ${servicesAnimation.isVisible ? 'visible' : ''}`}>
              {/* Background Quote Mark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[100px] text-[#B7A9D3] opacity-[0.02] font-serif leading-none select-none">
                  "
                </div>
              </div>
              
              {/* Main Title */}
              <h2 className="font-playfair text-[32px] md:text-[44px] font-bold text-[#1F1F1F] mb-6 tracking-[-0.5px] leading-[1.1] animate-fade-up">
                Þjónustan Okkar
              </h2>
              
              {/* Lavender Divider */}
              <div className="flex justify-center">
                <div className="w-[60px] h-[2px] bg-[#B7A9D3] rounded-[1px] animate-expand-width"></div>
              </div>
            </div>

            {/* Horizontal Scrollable Cards */}
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-6 min-w-max px-4">
                {services.map((service, index) => {
                  return (
                    <Link key={service.id} href={`/services/${service.id}`}>
                      <Card 
                        className="service-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer w-80 flex-shrink-0 fade-in-up hover:shadow-xl hover:transform hover:scale-105"
                        style={{
                          animationDelay: `${index * 0.2}s`,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="relative">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-48 object-cover transition-all duration-300"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-naestir-dark mb-3">{service.name}</h3>
                          <p className="text-naestir-secondary mb-4 line-clamp-2">{service.description}</p>
                          <Button variant="link" className="text-naestir-primary hover:text-purple-600 font-medium p-0">
                            Learn More →
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-8">
              <p className="text-naestir-secondary text-sm">
                ← Scroll to explore all our services →
              </p>
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
          
          <div className={`max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-24 section-content ${galleryAnimation.isVisible ? 'visible' : ''}`}>
            {/* Headline & Typography: Understated Luxury */}
            <div className={`text-center mb-20 scroll-animate ${galleryAnimation.isVisible ? 'visible' : ''}`}>
              {/* Main Title with Purple Highlight */}
              <h2 className="font-bold text-4xl md:text-5xl text-[#2D2D2D] mb-6 tracking-[1.2px] leading-tight">
                Before & After <span className="text-[#9966cc]">Transformations</span>
              </h2>
              
              {/* Subtitle */}
              <p className="font-light text-gray-600 text-lg max-w-[600px] mx-auto leading-relaxed tracking-wide">
                Real results from real clients. Immaculate, verified, and visual.
              </p>
            </div>

            {/* Editorial Magazine Spread Layout */}
            <div 
              className={`relative scroll-animate scroll-animate-delay-1 ${galleryAnimation.isVisible ? 'visible' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Center-aligned Content with Large Vertical Spacing */}
              <div className="flex flex-col items-center space-y-16">
                
                {/* Before Image - Commanding Hero Content */}
                <div className="w-full" style={{ maxWidth: 'min(90vw, 800px)' }}>
                  <div className="relative group">
                    <img
                      src={transformations[currentIndex].beforeImage}
                      alt={`${transformations[currentIndex].title} before cleaning`}
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-[#e8d9ff] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                    />
                    {/* Editorial Caption */}
                    <p className="mt-4 text-center font-light text-gray-700 text-sm tracking-wide">
                      {transformations[currentIndex].title} Before Deep Cleaning
                    </p>
                  </div>
                </div>

                {/* Elegant Transition Indicator */}
                <div className="flex items-center space-x-4 py-4">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                  <div className="text-purple-400 text-2xl">↓</div>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
                </div>

                {/* After Image - Commanding Hero Content */}
                <div className="w-full" style={{ maxWidth: 'min(90vw, 800px)' }}>
                  <div className="relative group">
                    <img
                      src={transformations[currentIndex].afterImage}
                      alt={`${transformations[currentIndex].title} after cleaning`}
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-[#e8d9ff] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                    />
                    {/* Editorial Caption */}
                    <p className="mt-4 text-center font-light text-gray-700 text-sm tracking-wide">
                      Post-Cleaning: Sparkling, Sanitized, Ready for Use
                    </p>
                  </div>
                </div>

                {/* Description with Ample Breathing Room */}
                <div className="text-center max-w-2xl pt-8">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                    {transformations[currentIndex].title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {transformations[currentIndex].description}
                  </p>
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
              
              {/* Refined Progress Indicators */}
              <div className="flex justify-center mt-12 space-x-3">
                {transformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-purple-500 scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400'
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