import { Link } from "wouter";
import { Users, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { services } from "@/lib/constants";
import facilityImage from "@assets/facilities-professionals-card_1750588748071.jpg";
import professionalImage from "@assets/facilities-professionals-card_1750588748071.jpg";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={facilityImage}
              alt="Professional facility cleaning"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            {/* Additional light purple overlay for brand consistency */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B0082]/20 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex items-center min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                {/* Headline */}
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 text-white">
                  <span className="text-white">A Cleaner Home,</span>
                  <br />
                  <span className="text-[#E6E6FA]">A Brighter You.</span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-200 italic mb-12 font-light max-w-xl">
                  We clean. You breathe.
                </p>
                
                {/* Value Proposition */}
                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                  Professional cleaning services that bring sparkle to your space and peace to your mind. 
                  From industrial facilities to intimate homes, we deliver excellence in every detail.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <Link href="/quote">
                    <Button 
                      className="w-full sm:w-auto bg-[#4B0082] hover:bg-[#6A0DAD] text-white px-10 py-5 text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105"
                      style={{ borderRadius: '8px' }}
                    >
                      Get Your Free Quote
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#4B0082] bg-transparent px-10 py-5 text-lg font-bold transition-all duration-300"
                    style={{ borderRadius: '8px' }}
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    See Our Services
                  </Button>
                </div>
                
                {/* Trust Bar */}
                <div className="flex flex-wrap items-center gap-8 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm md:text-base">2,000+ Satisfied Clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm md:text-base">Eco-Conscious Methods</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm md:text-base">Insured & Licensed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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
                        className="service-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer w-80 flex-shrink-0 fade-in-up sparkle-hover"
                        style={{
                          animationDelay: `${index * 0.2}s`
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
                      Deep Upholstery Revival
                    </h3>
                    <p className="text-naestir-secondary leading-relaxed">
                      Pet stains and ground-in dirt fully extracted using our triple-step steam method and fabric-safe cleaning solutions.
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
      </div>
    </PageTransition>
  );
}