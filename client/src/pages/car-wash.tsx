import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Star, Quote, Users, Shield, Clock, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageTransition } from "@/components/page-transition";
import carImage from "@assets/car_1750366993866.jpg";
import logoImage from "@assets/Logo_1750368000651.jpeg";

export default function CarWash() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [postalCode, setPostalCode] = useState("");
  const [coverageResult, setCoverageResult] = useState("");
  
  const carImages = [
    {
      src: carImage,
      alt: "Professional car wash and detailing service"
    },
    {
      src: logoImage, 
      alt: "Premium vehicle cleaning and maintenance"
    }
  ];

  const serviceFeatures = [
    "All surfaces cleaned & detailed",
    "Exterior: pressure washing and protective wax",
    "Interior: vacuuming and upholstery cleaning",
    "Dashboard and console detailing",
    "Wheels and tires cleaned and shined",
    "Windows cleaned inside and out",
    "Optional: Paint protection application",
    "Engine bay cleaning available"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  // Reset image index if it's out of bounds
  if (currentImageIndex >= carImages.length) {
    setCurrentImageIndex(0);
  }

  // Service areas in Reykjavík
  const serviceAreas = [
    "Hlíðar", "Vesturbær", "Miðborg", "Laugardalur", "Breiðholt", 
    "Árbær", "Grafarvogur", "Kópavogur", "Hafnarfjörður", "Garðabær"
  ];

  const postalCodes = {
    "101": "Miðborg", "102": "Miðborg", "103": "Miðborg", "104": "Miðborg", "105": "Miðborg",
    "107": "Vesturbær", "108": "Hlíðar", "109": "Hlíðar", "110": "Árbær", "111": "Breiðholt",
    "112": "Grafarvogur", "113": "Laugardalur", "116": "Kjalarnes", "200": "Kópavogur",
    "201": "Kópavogur", "202": "Kópavogur", "203": "Kópavogur", "210": "Garðabær",
    "220": "Hafnarfjörður", "221": "Hafnarfjörður"
  };

  const checkCoverage = () => {
    if (!postalCode) {
      setCoverageResult("Please enter a postal code");
      return;
    }
    
    const area = postalCodes[postalCode as keyof typeof postalCodes];
    if (area) {
      setCoverageResult(`✓ Great news! We serve ${area}. Book your cleaning today!`);
    } else {
      setCoverageResult("Sorry, we don't currently serve this area. Contact us for future availability.");
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Breadcrumb Navigation */}
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
              <span className="text-[#4B0082] font-medium">Apartment Cleaning</span>
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
                Professional Car Wash & Detailing
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your apartment into a spotless sanctuary with our comprehensive cleaning service. 
                From studios to multi-bedroom units, we deliver exceptional results every time.
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
                    What's Included in Your Apartment Clean
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
                            fontWeight: '400'
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
                        src={carImages[currentImageIndex].src}
                        alt={carImages[currentImageIndex].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white hover:scale-110 transition-all duration-200 opacity-80 hover:opacity-100"
                      >
                        <ArrowLeft className="w-6 h-6 text-[#4B0082]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl hover:bg-white hover:scale-110 transition-all duration-200 opacity-80 hover:opacity-100 rotate-180"
                      >
                        <ArrowLeft className="w-6 h-6 text-[#4B0082]" />
                      </button>
                    </div>
                    
                    {/* Swipe Dots */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {carImages.map((_, index) => (
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