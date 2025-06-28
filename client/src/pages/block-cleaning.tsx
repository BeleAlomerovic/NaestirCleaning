import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Star, Quote, Users, Shield, Clock, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageTransition } from "@/components/page-transition";
import cleanApartment1 from "@assets/Clean-apartment_1750613206530.jpg";
import apartmentChecklist1 from "@assets/The-Ultimate-Apartment-Cleaning-Checklist-1024x683_1750613219827.jpg";

export default function BlockCleaning() {
  console.log("✅ BlockCleaning component is rendering!");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [postalCode, setPostalCode] = useState("");
  const [coverageResult, setCoverageResult] = useState("");
  
  const blockImages = [
    {
      src: cleanApartment1,
      alt: "Professional apartment block cleaning service"
    },
    {
      src: apartmentChecklist1, 
      alt: "Clean apartment block common areas"
    }
  ];

  const serviceFeatures = [
    "All surfaces dusted & disinfected",
    "Lobby: reception, seating, and floors cleaned",
    "Stairwells: railings, steps, and walls sanitized",
    "Elevators vacuumed and maintained",
    "Common areas thoroughly cleaned",
    "Hallways mopped and organized",
    "Optional: Exterior facade cleaning",
    "Entrance doors and handles sanitized"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % blockImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + blockImages.length) % blockImages.length);
  };

  // Reset image index if it's out of bounds
  if (currentImageIndex >= blockImages.length) {
    setCurrentImageIndex(0);
  }

  const reykjavikCodes: { [key: string]: string } = {
    "101": "Reykjavík - Downtown",
    "102": "Reykjavík - Thingholt",
    "103": "Reykjavík - Hlemmur/Laugavegur",
    "104": "Reykjavík - Laugardalur",
    "105": "Reykjavík - Hlíðar",
    "107": "Reykjavík - Vesturbær",
    "108": "Reykjavík - Háaleiti",
    "109": "Reykjavík - Breiðholt",
    "110": "Reykjavík - Árbær",
    "111": "Reykjavík - Mjódd",
    "112": "Reykjavík - Grafarvogur",
    "113": "Reykjavík - Grafarholt",
    "116": "Reykjavík - Kjalarnes",
    "200": "Kópavogur - Center",
    "201": "Kópavogur - East",
    "202": "Kópavogur - West",
    "203": "Kópavogur - North",
    "210": "Garðabær",
    "220": "Hafnarfjörður - Center",
    "221": "Hafnarfjörður - South"
  };

  const checkCoverage = () => {
    const area = reykjavikCodes[postalCode as keyof typeof reykjavikCodes];
    if (area) {
      setCoverageResult(`✓ We service ${area}! Book your block cleaning today.`);
    } else {
      setCoverageResult("We currently serve the Greater Reykjavík area. Contact us for special arrangements.");
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#4B0082] transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/services" className="text-gray-500 hover:text-[#4B0082] transition-colors">
                Services
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#4B0082] font-medium">Block Cleaning</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link href="/services" className="inline-flex items-center text-[#4B0082] hover:text-purple-600 mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] mb-6">
                Professional Blocks Cleaning
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Maintain pristine common areas and create a welcoming environment with our comprehensive apartment block cleaning services. 
                From lobbies to stairwells, we ensure your building reflects quality and care.
              </p>
            </div>
          </div>
        </section>

        {/* Service Coverage Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Compact Postal Code Checker */}
            <div className="max-w-sm mx-auto">
              <p className="text-sm text-gray-600 mb-3">Check if we serve your area:</p>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="101, 107, 200"
                  value={postalCode}
                  onChange={(e) => {
                    setPostalCode(e.target.value);
                    setCoverageResult("");
                  }}
                  className="flex-1 h-10 text-sm border-gray-300 focus:border-[#4B0082] focus:ring-[#4B0082]"
                  maxLength={3}
                />
                <Button 
                  onClick={checkCoverage}
                  className="btn-expand px-4 h-10 text-sm font-medium"
                >
                  <span>Check</span>
                </Button>
              </div>
              
              {coverageResult && (
                <div className={`mt-3 p-2 rounded-md text-sm transition-all duration-300 ${
                  coverageResult.includes('✓') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {coverageResult.includes('✓') ? '✅ You\'re covered! Book now.' : '❌ We don\'t currently serve that area.'}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Split-View Section */}
        <section className="py-20 bg-white min-h-screen flex items-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
              
              {/* Left Side - Service Details (increased width) */}
              <div className="lg:col-span-6 space-y-12 pr-8 border-r border-gray-100">
                {/* Professional Section Heading */}
                <div>
                  <h2 
                    className="font-medium text-[#2B2B2B] mb-8"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '1.75rem',
                      lineHeight: '1.3',
                      letterSpacing: '0.2px'
                    }}
                  >
                    What's Included in Your Block Clean
                  </h2>
                  
                  {/* Minimal Feature Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                    {serviceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-4 h-4 mr-3 flex-shrink-0">
                          <svg 
                            className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span 
                          className="text-gray-700 leading-relaxed"
                          style={{ 
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSize: '0.95rem',
                            lineHeight: '1.5'
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>


                {/* Sleek Call-to-Action Block */}
                <div className="pt-8 border-t border-gray-100">
                  <Link href="/quote">
                    <Button 
                      className="btn-expand font-semibold rounded-lg"
                      style={{
                        height: '48px',
                        width: '200px',
                        fontSize: '0.95rem'
                      }}
                    >
                      <span>Get My Quote</span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Side - Image Gallery (reduced width) */}
              <div className="lg:col-span-6">
                {/* Image Carousel */}
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#E6E6FA]/40"
                  style={{ 
                    background: 'linear-gradient(135deg, #E6E6FA 0%, #F0E6FF 100%)',
                    padding: '6px'
                  }}
                >
                  <div className="relative bg-white rounded-xl overflow-hidden">
                    <div className="aspect-[3/2] relative cursor-zoom-in group">
                      <img
                        src={blockImages[currentImageIndex].src}
                        alt={blockImages[currentImageIndex].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Overlay Navigation */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                        {/* Previous Button */}
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#4B0082] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        
                        {/* Next Button */}
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#4B0082] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
                        >
                          <ArrowLeft className="w-4 h-4 rotate-180" />
                        </button>
                      </div>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                        {blockImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${
                              index === currentImageIndex 
                                ? 'bg-[#4B0082] shadow-lg shadow-[#4B0082]/50' 
                                : 'bg-white/70 hover:bg-white/90 hover:shadow-lg hover:shadow-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                

                {/* Trust & Safety Commitment Section */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="space-y-3">
                    <div className="trust-item opacity-0 animate-trust-fade-1 flex items-center space-x-3">
                      <div className="w-4 h-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span 
                        className="text-[#2B2B2B]"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '1.5'
                        }}
                      >
                        All cleaners are background-checked and trained
                      </span>
                    </div>

                    <div className="trust-item opacity-0 animate-trust-fade-2 flex items-center space-x-3">
                      <div className="w-4 h-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span 
                        className="text-[#2B2B2B]"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '1.5'
                        }}
                      >
                        Fully insured and bonded for your protection
                      </span>
                    </div>

                    <div className="trust-item opacity-0 animate-trust-fade-3 flex items-center space-x-3">
                      <div className="w-4 h-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span 
                        className="text-[#2B2B2B]"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '1.5'
                        }}
                      >
                        100% satisfaction guarantee — no exceptions
                      </span>
                    </div>

                    <div className="trust-item opacity-0 animate-trust-fade-4 flex items-center space-x-3">
                      <div className="w-4 h-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span 
                        className="text-[#2B2B2B]"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '1.5'
                        }}
                      >
                        Respectful, punctual, and detail-focused staff
                      </span>
                    </div>

                    <div className="trust-item opacity-0 animate-trust-fade-5 flex items-center space-x-3">
                      <div className="w-4 h-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-400 animate-trust-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span 
                        className="text-[#2B2B2B]"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          fontSize: '14px',
                          fontWeight: '400',
                          lineHeight: '1.5'
                        }}
                      >
                        Transparent pricing — no surprise fees
                      </span>
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