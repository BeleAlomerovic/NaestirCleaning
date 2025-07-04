import { Link } from "wouter";
import { Users, Heart, Award, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { services } from "@/lib/constants";
import heroImage from "@assets/Depositphotos_764505660_XL_1751107860312.jpg";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
        </section>

        {/* What We Clean Section */}
        <section id="services" className="py-20 bg-[#FAF9FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header - Elegant "Þjónustan Okkar" Design */}
            <div className="text-center mb-16 pt-16 pb-12 relative">
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
        </section>

        {/* Gallery Preview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header - Elegant "Verkin okkar" Design */}
            <div className="text-center mb-16 pt-16 pb-12 relative">
              {/* Background Quote Mark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[100px] text-[#B7A9D3] opacity-[0.02] font-serif leading-none select-none">
                  "
                </div>
              </div>
              
              {/* Main Title */}
              <h2 className="font-playfair text-[32px] md:text-[44px] font-bold text-[#1F1F1F] mb-6 tracking-[-0.5px] leading-[1.1] animate-fade-up">
                Verkin okkar
              </h2>
              
              {/* Lavender Divider */}
              <div className="flex justify-center">
                <div className="w-[60px] h-[2px] bg-[#B7A9D3] rounded-[1px] animate-expand-width"></div>
              </div>
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

        {/* Client Testimonials Section */}
        <TestimonialsCarousel />

        {/* FAQ Section */}
        <section className="py-20 bg-[#FAF9FC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header - Elegant "Algengar Spurningar" Design */}
            <div className="text-center mb-16 pt-16 pb-12 relative">
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
              <div className={`faq-item bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${openFAQ === 0 ? 'active' : ''}`}>
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
              <div className={`faq-item bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${openFAQ === 1 ? 'active' : ''}`}>
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
              <div className={`faq-item bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${openFAQ === 2 ? 'active' : ''}`}>
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