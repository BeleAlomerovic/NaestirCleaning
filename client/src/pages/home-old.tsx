import { Link } from "wouter";
import { Users, Heart, Award, ArrowRight, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { services } from "@/lib/constants";
import { useState, useEffect } from "react";
import apartmentImage from "@assets/AdobeStock_334592268_1750505728985.jpeg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [shimmerActive, setShimmerActive] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Shimmer effect for trust signals every 30 seconds
    const shimmerInterval = setInterval(() => {
      setShimmerActive(true);
      setTimeout(() => setShimmerActive(false), 2000);
    }, 30000);

    return () => clearInterval(shimmerInterval);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Cinematic Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          {/* Cinematic Background Layer */}
          <div className="absolute inset-0">
            {/* Primary cinematic background - slow motion cleaning */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
              {/* Floating particles animation */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 10}s`,
                      animationDuration: `${8 + Math.random() * 4}s`
                    }}
                  />
                ))}
              </div>

              {/* Cinematic light rays */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent transform rotate-12 animate-pulse"></div>
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-300/40 to-transparent transform -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Glassy Lavender Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-800/30 to-slate-900/50 backdrop-blur-[1px]"></div>
          
          {/* Floating Badge - Top Rated */}
          <div className="absolute top-8 right-8 z-30">
            <div className={`
              bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 
              shadow-2xl transform transition-all duration-1000
              ${isVisible ? 'translate-y-0 opacity-100 animate-bounce-once' : 'translate-y-4 opacity-0'}
            `}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">Top Rated in Reykjavík</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-md -z-10 animate-pulse"></div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Editorial Headline */}
            <h1 className={`
              text-white transition-all duration-1000 ease-out mb-6
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}>
              <span className="block font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                {"We Don't Just Clean.".split('').map((char, i) => (
                  <span 
                    key={i}
                    className="inline-block animate-letter-rise"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
              <span className="block font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mt-2">
                {"We Elevate Spaces.".split('').map((char, i) => (
                  <span 
                    key={i}
                    className="inline-block animate-letter-rise"
                    style={{ animationDelay: `${(i + 20) * 50}ms` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>
            
            {/* Subheadline - Whisper Clarity */}
            <p 
              className={`
                text-purple-200/80 text-lg md:text-xl font-light mb-12 transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ animationDelay: '400ms' }}
            >
              Premium apartment cleaning. Trusted by hundreds across Reykjavík.
            </p>
            
            {/* CTA Buttons */}
            <div className={`
              flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `} style={{ animationDelay: '600ms' }}>
              <Link href="/quote">
                <Button className="
                  group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300
                  text-white px-10 py-4 text-lg font-semibold rounded-lg
                  transition-all duration-300 ease-out
                  shadow-lg hover:shadow-2xl hover:shadow-purple-500/25
                  hover:scale-105 hover:-translate-y-1
                  border border-purple-400/30
                ">
                  <span className="relative z-10">Get a Free Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Link>
              <Link href="/#services">
                <Button className="
                  group relative bg-transparent border-2 border-white/40 text-white hover:border-white/60
                  px-10 py-4 text-lg font-semibold rounded-lg
                  transition-all duration-300 ease-out
                  hover:bg-white/5 hover:scale-105 hover:-translate-y-1
                  backdrop-blur-sm
                ">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>See Our Services</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
            
            {/* Trust Signals */}
            <div className={`
              flex flex-wrap justify-center items-center gap-6 text-sm text-purple-200/70 transition-all duration-1000 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              ${shimmerActive ? 'animate-shimmer' : ''}
            `} style={{ animationDelay: '800ms' }}>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Insured</span>
              </div>
              <div className="w-1 h-1 bg-purple-300/50 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Eco-Safe Products</span>
              </div>
              <div className="w-1 h-1 bg-purple-300/50 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Scroll Cue */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex flex-col items-center space-y-2 animate-pulse-soft">
              <span className="text-white/60 text-sm font-light">Discover Our Process</span>
              <ChevronDown className="w-6 h-6 text-white/60 animate-bounce-slow" />
            </div>
          </div>
        </section>

        {/* What We Clean Section */}
        <section id="services" className="py-20 bg-naestir-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-naestir-dark mb-4">What We Clean</h2>
              <p className="text-xl text-naestir-secondary max-w-3xl mx-auto">
                Professional cleaning solutions tailored to meet your specific needs with the highest standards of quality.
              </p>
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
        </section>

        {/* Gallery Preview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title + Intro */}
            <div className="text-center mb-16">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-naestir-dark mb-6">
                Transformations You Can See — and Feel.
                <span className="inline-block ml-2 text-4xl">✨</span>
              </h2>
              <p className="text-xl text-naestir-secondary max-w-4xl mx-auto leading-relaxed">
                From grimy to gleaming, here's how we breathe life back into everyday spaces.
              </p>
              <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-naestir-primary to-naestir-accent mx-auto"></div>
            </div>

            {/* Before & After Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              
              {/* Gallery Item 1 - Car Interior */}
              <div className="gallery-card group">
                {/* Image Frame */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AdobeStock_334592268 2_1750506662307.jpg"
                      alt="Dirty car interior before cleaning"
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:opacity-0"
                    />
                    <img
                      src="/assets/AdobeStock_334592268 2 copy_1750506666192.jpg"
                      alt="Clean car interior after cleaning"
                      className="absolute inset-0 w-full h-80 object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0"
                    />
                    
                    {/* Wipe Progress Bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
                    
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-naestir-primary text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      After
                    </div>
                  </div>
                </div>

                {/* Caption Block */}
                <div className="mt-6 text-center bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-2">
                      Car Interior Revival
                    </h3>
                    <p className="text-naestir-secondary leading-relaxed">
                      Pet hair, mud, and years of wear completely restored with our specialized automotive detailing process and eco-safe products.
                    </p>
                  </div>
                  <div className="brand-signature opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-700">
                    <div className="font-playfair text-2xl text-naestir-primary italic tracking-wider">
                      <span className="text-3xl">N</span>æstir
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Item 2 - Bathroom Tile */}
              <div className="gallery-card group">
                {/* Image Frame */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AdobeStock_523168323_1750506670649.jpg"
                      alt="Dirty bathroom tiles before cleaning"
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:opacity-0"
                    />
                    <img
                      src="/assets/AdobeStock_523168323 copy_1750506673796.jpg"
                      alt="Clean bathroom tiles after cleaning"
                      className="absolute inset-0 w-full h-80 object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0"
                    />
                    
                    {/* Sparkle Animation */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-naestir-primary text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      After
                    </div>
                  </div>
                </div>

                {/* Caption Block */}
                <div className="mt-6 text-center bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-2">
                      Grout Line Restoration
                    </h3>
                    <p className="text-naestir-secondary leading-relaxed">
                      Years of soap scum and mildew completely eliminated using our professional-grade steam cleaning and tile restoration system.
                    </p>
                  </div>
                  <div className="brand-signature opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-700">
                    <div className="font-playfair text-2xl text-naestir-primary italic tracking-wider">
                      <span className="text-3xl">N</span>æstir
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Item 3 - Window Cleaning */}
              <div className="gallery-card group">
                {/* Image Frame */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AdobeStock_554450129_1750506681118.jpg"
                      alt="Dirty moldy window before cleaning"
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:opacity-0"
                    />
                    <img
                      src="/assets/AdobeStock_554450129 copy_1750506684147.jpg"
                      alt="Spotless clean window after cleaning"
                      className="absolute inset-0 w-full h-80 object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 transform scale-110 group-hover:scale-100"
                    />
                    
                    {/* Diagonal Wipe Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform rotate-45 -translate-x-full group-hover:translate-x-full"></div>
                    
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-naestir-primary text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      After
                    </div>
                  </div>
                </div>

                {/* Caption Block */}
                <div className="mt-6 text-center bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-2">
                      Mold Remediation & Restoration
                    </h3>
                    <p className="text-naestir-secondary leading-relaxed">
                      Dangerous black mold safely removed and surfaces restored to pristine condition using specialized anti-microbial treatments.
                    </p>
                  </div>
                  <div className="brand-signature opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-700">
                    <div className="font-playfair text-2xl text-naestir-primary italic tracking-wider">
                      <span className="text-3xl">N</span>æstir
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Item 4 - Kitchen Sink */}
              <div className="gallery-card group">
                {/* Image Frame */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AdobeStock_560781364_1750506688928.jpg"
                      alt="Dirty kitchen sink before cleaning"
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:opacity-0"
                    />
                    <img
                      src="/assets/AdobeStock_560781364 copy_1750506691420.jpg"
                      alt="Spotless kitchen sink after cleaning"
                      className="absolute inset-0 w-full h-80 object-cover opacity-0 transition-all duration-700 group-hover:opacity-100"
                    />
                    
                    {/* Circular Wipe Effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-0 group-hover:scale-150"></div>
                    
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-naestir-primary text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      After
                    </div>
                  </div>
                </div>

                {/* Caption Block */}
                <div className="mt-6 text-center bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-2">
                      Kitchen Deep Clean
                    </h3>
                    <p className="text-naestir-secondary leading-relaxed">
                      Grease buildup and food stains completely eliminated with our specialized degreasing agents and detailed scrubbing process.
                    </p>
                  </div>
                  <div className="brand-signature opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-700">
                    <div className="font-playfair text-2xl text-naestir-primary italic tracking-wider">
                      <span className="text-3xl">N</span>æstir
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery Item 5 - Upholstery */}
              <div className="gallery-card group">
                {/* Image Frame */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/assets/AdobeStock_689599448_1750506694689.jpg"
                      alt="Stained upholstery before cleaning"
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:opacity-0"
                    />
                    <img
                      src="/assets/AdobeStock_689599448 copy_1750506697803.jpg"
                      alt="Pristine upholstery after cleaning"
                      className="absolute inset-0 w-full h-80 object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0"
                    />
                    
                    {/* Steam Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-white/30 rounded-full blur-md animate-pulse"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-white/20 rounded-full blur-md animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    
                    {/* Before/After Labels */}
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      Before
                    </div>
                    <div className="absolute top-4 right-4 bg-naestir-primary text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                      After
                    </div>
                  </div>
                </div>

                {/* Caption Block */}
                <div className="mt-6 text-center bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-2">
                      Upholstery Revival
                    </h3>
                    <p className="text-naestir-secondary leading-relaxed">
                      Food spills and deep stains carefully lifted with our gentle steam cleaning and fabric protection treatment process.
                    </p>
                  </div>
                  <div className="brand-signature opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-700">
                    <div className="font-playfair text-2xl text-naestir-primary italic tracking-wider">
                      <span className="text-3xl">N</span>æstir
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-naestir-dark mb-8">
                What Our Customers Say
              </h2>
              
              {/* Floating Star Animation */}
              <div className="relative mb-12">
                <div className="floating-stars">
                  <span className="star-emoji">⭐</span>
                  <span className="star-emoji">⭐</span>
                  <span className="star-emoji">⭐</span>
                  <span className="star-emoji">⭐</span>
                  <span className="star-emoji">⭐</span>
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="fade-in-up bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-6xl mb-4">💬</div>
                  <blockquote className="text-lg text-naestir-dark mb-4 italic">
                    "Showed up on time, cleaned like magic, and even left a thank-you note."
                  </blockquote>
                  <div className="flex justify-center mb-2">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="text-naestir-secondary font-medium">
                    — Amanda R., Brooklyn
                  </div>
                </div>

                <div className="fade-in-up bg-white p-8 rounded-2xl shadow-lg" style={{animationDelay: '0.2s'}}>
                  <div className="text-6xl mb-4">💬</div>
                  <blockquote className="text-lg text-naestir-dark mb-4 italic">
                    "Professional service, eco-friendly products, and spotless results every time."
                  </blockquote>
                  <div className="flex justify-center mb-2">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="text-naestir-secondary font-medium">
                    — Michael K., Manhattan
                  </div>
                </div>

                <div className="fade-in-up bg-white p-8 rounded-2xl shadow-lg" style={{animationDelay: '0.4s'}}>
                  <div className="text-6xl mb-4">💬</div>
                  <blockquote className="text-lg text-naestir-dark mb-4 italic">
                    "Best cleaning service in the city. They treat your home like their own."
                  </blockquote>
                  <div className="flex justify-center mb-2">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="text-naestir-secondary font-medium">
                    — Sarah L., Queens
                  </div>
                </div>
              </div>

              {/* As Seen On Section */}
              <div className="text-center">
                <p className="text-naestir-secondary text-lg mb-8">As seen on:</p>
                <div className="flex justify-center items-center space-x-12">
                  <div className="logo-container yelp-logo">
                    <span className="text-2xl font-bold text-gray-400 hover:text-red-500 transition-all duration-300">Yelp</span>
                  </div>
                  <div className="logo-container google-logo">
                    <span className="text-2xl font-bold text-gray-400 hover:text-blue-500 transition-all duration-300">Google</span>
                  </div>
                  <div className="logo-container thumbtack-logo">
                    <span className="text-2xl font-bold text-gray-400 hover:text-green-500 transition-all duration-300">Thumbtack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-naestir-dark mb-4">
                We're More Than Cleaners - We're Caretakers
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1 fade-in-up">
                <img
                  src="/assets/founder.jpeg"
                  alt="Bele Alomerovic - Founder"
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-xl"
                />
              </div>

              {/* Right - Narrative */}
              <div className="order-1 lg:order-2 fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-naestir-secondary leading-relaxed">
                    We started this company with a mop, a mission, and a belief: that a clean space creates a clear mind. Every surface we touch matters — because your peace of mind is in the details.
                  </p>

                  {/* Founder Quote */}
                  <div className="bg-naestir-neutral p-8 rounded-2xl border-l-4 border-naestir-primary">
                    <blockquote className="font-handwritten text-2xl md:text-3xl text-naestir-dark text-center italic mb-4">
                      "Clean isn't just our job — it's our signature."
                    </blockquote>
                    <div className="text-center">
                      <span className="font-handwritten text-lg text-naestir-secondary">
                        — Bele Alomerovic, Founder
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link href="/about">
                      <Button className="bg-naestir-primary hover:bg-purple-600 text-white px-6 py-3 font-semibold">
                        Learn Our Story
                      </Button>
                    </Link>
                    <Link href="/quote">
                      <Button variant="outline" className="border-naestir-primary text-naestir-primary hover:bg-naestir-primary hover:text-white px-6 py-3 font-semibold">
                        Get Your Quote
                      </Button>
                    </Link>
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