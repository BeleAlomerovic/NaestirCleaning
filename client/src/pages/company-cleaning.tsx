import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageTransition } from "@/components/page-transition";

export default function CompanyCleaning() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [postalCode, setPostalCode] = useState("");
  const [coverageResult, setCoverageResult] = useState("");
  
  const companyImages = [
    {
      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNvbXBhbnkgQ2xlYW5pbmc8L3RleHQ+PC9zdmc+",
      alt: "Professional company cleaning result"
    },
    {
      src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNsZWFuIE9mZmljZSBTcGFjZTwvdGV4dD48L3N2Zz4=",
      alt: "Clean office space"
    }
  ];

  const serviceFeatures = [
    "Office space deep cleaning and organization",
    "Meeting room and conference area maintenance",
    "Kitchen and break room sanitization",
    "Restroom cleaning and restocking",
    "Reception and lobby area care",
    "Window cleaning and floor maintenance",
    "Waste management and recycling",
    "After-hours cleaning schedules available"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % companyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + companyImages.length) % companyImages.length);
  };

  if (currentImageIndex >= companyImages.length) {
    setCurrentImageIndex(0);
  }

  const checkCoverage = () => {
    const code = parseInt(postalCode);
    const reykjavikCodes = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 200, 201, 202, 203, 210, 220, 221];
    
    if (reykjavikCodes.includes(code)) {
      setCoverageResult("✓ We service your area! Contact us for scheduling.");
    } else {
      setCoverageResult("✗ Sorry, we don't currently serve that postal code.");
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#F8F6FB] via-white to-[#F0E6FF] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-8">
              <Link href="/">
                <Button variant="ghost" className="mr-4 text-[#4B0082] hover:bg-[#4B0082]/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 
                className="text-5xl md:text-6xl font-bold text-[#4B0082] mb-6"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Professional Company Cleaning Services
              </h1>
              <p 
                className="text-xl text-gray-600 leading-relaxed"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  lineHeight: '1.6'
                }}
              >
                Comprehensive commercial cleaning services for offices, businesses, and corporate environments. 
                We maintain professional workspaces that enhance productivity and create positive impressions.
              </p>
            </div>
          </div>
        </section>

        {/* Service Coverage Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              
              {/* Left Side - Service Details (40-45% width) */}
              <div className="lg:col-span-5 space-y-12 pr-8 border-r border-gray-100">
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
                    What's Included in Your Company Clean
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

              {/* Right Side - Image Gallery (55-60% width) */}
              <div className="lg:col-span-7">
                {/* Image Carousel */}
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#E6E6FA]/40"
                  style={{ 
                    background: 'linear-gradient(135deg, #E6E6FA 0%, #F0E6FF 100%)',
                    padding: '6px'
                  }}
                >
                  <div className="relative bg-white rounded-xl overflow-hidden">
                    <div className="aspect-[4/3] relative cursor-zoom-in group">
                      <img
                        src={companyImages[currentImageIndex].src}
                        alt={companyImages[currentImageIndex].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#4B0082] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#4B0082] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Image Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {companyImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'bg-[#4B0082] shadow-lg' 
                              : 'bg-white/70 hover:bg-white/90 hover:shadow-white/50'
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