import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Star, Quote, Users, Shield, Clock, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageTransition } from "@/components/page-transition";
import { TornPaperDivider } from "@/components/torn-paper-divider";
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
      alt: "Professional apartment cleaning result"
    },
    {
      src: apartmentChecklist1, 
      alt: "Clean apartment interior"
    }
  ];

  const serviceFeatures = [
    "All surfaces dusted & disinfected",
    "Kitchen: sink, stove, and counters cleaned",
    "Bathroom: tub, toilet, and mirrors sanitized",
    "Floors vacuumed and mopped",
    "Trash bins emptied and wiped",
    "Bed-making and linen reset",
    "Optional: Inside window cleaning",
    "Light switches and door handles sanitized"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartmentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartmentImages.length) % apartmentImages.length);
  };

  // Reset image index if it's out of bounds
  if (currentImageIndex >= apartmentImages.length) {
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

        {/* Split-Screen Layout */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Left Side - Image Gallery (50% width) */}
          <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-50">
            <div className="relative w-full h-full">
              {/* Image Gallery */}
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={apartmentImages[currentImageIndex].src}
                  alt={apartmentImages[currentImageIndex].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Navigation dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {apartmentImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white shadow-lg'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Torn Paper Divider */}
          <TornPaperDivider className="z-10" />

          {/* Right Side - Service Options (50% width) */}
          <div className="absolute right-0 top-0 w-1/2 h-full bg-white">
            <div className="h-full flex flex-col justify-center px-8 lg:px-16">
              {/* Back Link */}
              <Link href="/services" className="inline-flex items-center text-[#4B0082] hover:text-purple-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>

              {/* Service Title */}
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-[#333] mb-6 leading-tight">
                Professional Apartment Cleaning
              </h1>

              {/* Service Description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your apartment into a spotless sanctuary with our comprehensive cleaning service. 
                From studios to multi-bedroom units, we deliver exceptional results every time.
              </p>

              {/* Service Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#333] mb-4">What's Included:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {serviceFeatures.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#4B0082] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link href="/booking">
                  <Button className="w-full sm:w-auto bg-[#4B0082] hover:bg-purple-600 text-white px-8 py-3 text-lg font-semibold">
                    Book Now
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button variant="outline" className="w-full sm:w-auto border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white px-8 py-3 text-lg">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Layout - Show content below on small screens */}
        <section className="lg:hidden py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Image Gallery */}
            <div className="mb-8">
              <img
                src={apartmentImages[currentImageIndex].src}
                alt={apartmentImages[currentImageIndex].alt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {apartmentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-[#4B0082] shadow-lg'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Content */}
            <div className="text-center">
              <Link href="/services" className="inline-flex items-center text-[#4B0082] hover:text-purple-600 mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
              
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#333] mb-6">
                Professional Apartment Cleaning
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your apartment into a spotless sanctuary with our comprehensive cleaning service.
              </p>

              <div className="text-left mb-8">
                <h3 className="text-xl font-semibold text-[#333] mb-4 text-center">What's Included:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {serviceFeatures.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#4B0082] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <Link href="/booking">
                  <Button className="w-full bg-[#4B0082] hover:bg-purple-600 text-white px-8 py-3 text-lg font-semibold">
                    Book Now
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button variant="outline" className="w-full border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white px-8 py-3 text-lg">
                    Get Quote
                  </Button>
                </Link>
              </div>
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

        {/* Additional Service Information for Mobile/Desktop */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[#333] mb-8">Why Choose Our Apartment Cleaning?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#4B0082] mx-auto mb-4" />
                <h3 className="font-semibold text-[#333] mb-2">Insured & Trusted</h3>
                <p className="text-gray-600">All cleaners are background-checked and fully insured</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-[#4B0082] mx-auto mb-4" />
                <h3 className="font-semibold text-[#333] mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Book at your convenience, including weekends</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-[#4B0082] mx-auto mb-4" />
                <h3 className="font-semibold text-[#333] mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">100% satisfaction guarantee on every cleaning</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}