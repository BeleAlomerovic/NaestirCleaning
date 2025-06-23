import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Star, Quote, Users, Shield, Clock, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageTransition } from "@/components/page-transition";
import cleanApartment1 from "@assets/Clean-apartment_1750613206530.jpg";
import apartmentChecklist1 from "@assets/The-Ultimate-Apartment-Cleaning-Checklist-1024x683_1750613219827.jpg";
import cleanApartment2 from "@assets/Clean-apartment_1750612374272.jpg";
import apartmentChecklist2 from "@assets/The-Ultimate-Apartment-Cleaning-Checklist-1024x683_1750612386226.jpg";

export default function ApartmentCleaning() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [postalCode, setPostalCode] = useState("");
  const [coverageResult, setCoverageResult] = useState("");
  
  const apartmentImages = [
    {
      src: cleanApartment1,
      alt: "Clean modern apartment living room with neutral colors and open kitchen"
    },
    {
      src: apartmentChecklist1, 
      alt: "Spotless apartment with blue sofa, organized kitchen and large windows"
    },
    {
      src: cleanApartment2,
      alt: "Pristine apartment with wooden accents and modern furnishing"
    },
    {
      src: apartmentChecklist2,
      alt: "Immaculate apartment featuring contemporary design and natural light"
    }
  ];

  const serviceFeatures = [
    "Dusting & wiping all surfaces",
    "Vacuuming carpets and rugs",
    "Mopping hard floors",
    "Bathroom deep clean & disinfection",
    "Kitchen counters, sink, and stove scrub",
    "Bedroom cleaning & bed making",
    "Trash removal and bin sanitizing",
    "Inside window wipe-down"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartmentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartmentImages.length) % apartmentImages.length);
  };

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
    
    const area = postalCodes[postalCode];
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
                Professional Apartment Cleaning
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your apartment into a spotless sanctuary with our comprehensive cleaning service. 
                From studios to multi-bedroom units, we deliver exceptional results every time.
              </p>
            </div>
          </div>
        </section>

        {/* Split-View Section */}
        <section className="py-20 bg-white min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
              
              {/* Left Side - Service Details (40-45% width) */}
              <div className="lg:col-span-5 space-y-10 pr-8">
                <div>
                  <h2 
                    className="font-bold text-[#4B0082] mb-8"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '2.5rem',
                      lineHeight: '1.2',
                      letterSpacing: '0.5px'
                    }}
                  >
                    What's Included in Your Apartment Cleaning
                  </h2>
                </div>

                {/* Service Features */}
                <div className="space-y-6">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-[#B57EDC] mt-0.5 flex-shrink-0" />
                      <span 
                        className="text-gray-700 text-lg"
                        style={{ 
                          fontFamily: 'Inter, system-ui, sans-serif',
                          lineHeight: '1.6',
                          letterSpacing: '0.3px'
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Get Quote Section */}
                <div className="bg-gradient-to-br from-purple-50 to-lavender-100 rounded-2xl p-8 border border-[#4B0082]/10 shadow-lg">
                  <h3 
                    className="text-2xl font-bold text-[#4B0082] mb-4"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    Ready to Book?
                  </h3>
                  <p 
                    className="text-gray-600 mb-6"
                    style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      lineHeight: '1.6'
                    }}
                  >
                    Get a personalized quote for your apartment cleaning service. Free estimates with no obligations.
                  </p>
                  <Link href="/quote">
                    <Button className="w-full bg-[#4B0082] hover:bg-purple-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Get Your Free Quote
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Side - Image Gallery (55-60% width) */}
              <div className="lg:col-span-7">
                {/* Image Carousel */}
                <div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E6E6FA]/50"
                  style={{ 
                    background: 'linear-gradient(135deg, #E6E6FA 0%, #F0E6FF 100%)',
                    padding: '8px'
                  }}
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden">
                    <div className="aspect-[5/4] relative cursor-zoom-in group">
                      <img
                        src={apartmentImages[currentImageIndex].src}
                        alt={apartmentImages[currentImageIndex].alt}
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
                      {apartmentImages.map((_, index) => (
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
                
                {/* Image Caption */}
                <p 
                  className="text-center text-gray-600 mt-6 italic text-lg"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  {apartmentImages[currentImageIndex].alt}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Coverage Map Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Side - Service Area Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#333] mb-4">
                    We Clean Apartments Across Reykjavík
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    From Hlíðar to Vesturbær, we cover every corner of the city with our professional apartment cleaning services.
                  </p>
                </div>

                {/* Service Areas List */}
                <div>
                  <h3 className="font-semibold text-xl text-[#4B0082] mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Our Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-purple-100 shadow-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Postal Code Checker */}
                <Card className="bg-white border-2 border-[#4B0082]/20 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-[#333] mb-3">
                      Not sure if we serve your neighborhood?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Enter your postal code below to check availability.
                    </p>
                    
                    <div className="flex gap-3">
                      <Input
                        type="text"
                        placeholder="e.g., 101, 107, 200"
                        value={postalCode}
                        onChange={(e) => {
                          setPostalCode(e.target.value);
                          setCoverageResult("");
                        }}
                        className="flex-1 border-2 border-purple-200 focus:border-[#4B0082] focus:ring-[#4B0082]"
                        maxLength={3}
                      />
                      <Button 
                        onClick={checkCoverage}
                        className="bg-[#4B0082] hover:bg-[#4B0082]/90 px-6"
                      >
                        <Search className="w-4 h-4 mr-2" />
                        Check
                      </Button>
                    </div>
                    
                    {coverageResult && (
                      <div className={`mt-4 p-3 rounded-lg ${
                        coverageResult.includes('✓') 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'bg-orange-50 text-orange-800 border border-orange-200'
                      }`}>
                        {coverageResult}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Map Display */}
              <div className="lg:pl-8">
                <div className="sticky top-8">
                  <Card className="bg-white border-2 border-purple-100 shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-[#4B0082]/10 to-purple-100 p-6">
                        <h3 className="font-playfair text-2xl font-bold text-[#333] mb-2">
                          Reykjavík Service Coverage
                        </h3>
                        <p className="text-gray-600">
                          Purple areas show our current coverage zones
                        </p>
                      </div>
                      
                      {/* Map Container */}
                      <div className="relative h-96 bg-gradient-to-br from-blue-50 to-blue-100">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {/* Simplified Map Representation */}
                          <div className="relative w-full h-full max-w-md mx-auto">
                            {/* Background Map Shape */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 border-gray-300 opacity-80"></div>
                            
                            {/* Service Area Overlays */}
                            <div className="absolute top-6 left-8 w-16 h-12 bg-[#4B0082]/40 rounded-lg border border-[#4B0082]/60">
                              <span className="absolute -bottom-6 left-0 text-xs font-medium text-[#4B0082]">Vesturbær</span>
                            </div>
                            
                            <div className="absolute top-4 left-24 w-20 h-16 bg-[#4B0082]/40 rounded-lg border border-[#4B0082]/60">
                              <span className="absolute -bottom-6 left-2 text-xs font-medium text-[#4B0082]">Miðborg</span>
                            </div>
                            
                            <div className="absolute top-8 right-8 w-16 h-14 bg-[#4B0082]/40 rounded-lg border border-[#4B0082]/60">
                              <span className="absolute -bottom-6 -left-2 text-xs font-medium text-[#4B0082]">Laugardalur</span>
                            </div>
                            
                            <div className="absolute bottom-16 left-6 w-18 h-12 bg-[#4B0082]/40 rounded-lg border border-[#4B0082]/60">
                              <span className="absolute -bottom-6 left-0 text-xs font-medium text-[#4B0082]">Hlíðar</span>
                            </div>
                            
                            <div className="absolute bottom-8 right-10 w-16 h-14 bg-[#4B0082]/40 rounded-lg border border-[#4B0082]/60">
                              <span className="absolute -bottom-6 -left-2 text-xs font-medium text-[#4B0082]">Breiðholt</span>
                            </div>
                            
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-14 h-10 bg-[#4B0082]/40 rounded-lg border border-[#4B0082]/60">
                              <span className="absolute -bottom-6 -left-1 text-xs font-medium text-[#4B0082]">Árbær</span>
                            </div>

                            {/* Map Pin for Current Location */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <MapPin className="w-8 h-8 text-red-500 drop-shadow-lg" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Map Legend */}
                        <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 shadow-lg">
                          <div className="flex items-center space-x-2 text-sm">
                            <div className="w-4 h-4 bg-[#4B0082]/40 rounded border border-[#4B0082]/60"></div>
                            <span className="text-gray-700 font-medium">Service Coverage</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}