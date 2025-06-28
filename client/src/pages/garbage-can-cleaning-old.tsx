import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Star, Quote, Users, Shield, Clock, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageTransition } from "@/components/page-transition";
import garbageImage from "@assets/Garbage_1750367027204.jpeg";
import logoImage from "@assets/Logo_1750368000651.jpeg";

export default function GarbageCanCleaning() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [postalCode, setPostalCode] = useState("");
  const [coverageResult, setCoverageResult] = useState("");
  
  const garbageImages = [
    {
      src: garbageImage,
      alt: "Professional garbage can cleaning and sanitization service"
    },
    {
      src: logoImage, 
      alt: "Hygienic waste container cleaning and odor elimination"
    }
  ];

  const serviceFeatures = [
    "All bins cleaned & sanitized",
    "High-pressure washing of containers",
    "Sanitization with eco-friendly disinfectants", 
    "Odor elimination and deodorizing treatment",
    "Regular scheduled cleaning programs",
    "Both residential and commercial service",
    "Optional: Bin deodorizer application",
    "Environmentally responsible disposal"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % garbageImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + garbageImages.length) % garbageImages.length);
  };

  const checkCoverage = () => {
    if (postalCode.trim() === "") {
      setCoverageResult("Please enter a postal code");
      return;
    }
    setCoverageResult("✓ We service this area! Contact us for scheduling.");
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-lavender-50 to-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-50/30 opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <Link href="/services" className="inline-flex items-center text-[#4B0082] hover:text-purple-600 mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] mb-6">
                Professional Garbage Can Cleaning
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hygienic cleaning and sanitization of waste containers to eliminate odors and bacteria. Keep your bins 
                clean and fresh with our professional garbage can cleaning service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/booking">
                  <Button 
                    size="lg" 
                    className="bg-[#4B0082] hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden relative"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-[#4B0082] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative group-hover:text-white transition-colors duration-300">
                      Book Bin Cleaning
                    </span>
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden relative"
                  >
                    <span className="absolute inset-0 bg-[#4B0082] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative transition-colors duration-300">
                      Get Free Quote
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#333] mb-4">
                What's Included in Our Garbage Can Cleaning Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete sanitization and cleaning service to keep your waste containers hygienic and odor-free.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-[#4B0082] fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#4B0082] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#333] mb-4">
                Professional Garbage Can Cleaning Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our cleaning service transforms dirty bins into clean, sanitized containers.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div 
                className="fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="relative bg-white rounded-xl overflow-hidden">
                  <div className="aspect-[3/2] relative cursor-zoom-in group">
                    <img
                      src={garbageImages[currentImageIndex].src}
                      alt={garbageImages[currentImageIndex].alt}
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
                      {garbageImages.map((_, index) => (
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
            </div>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1 space-y-8">
                <div 
                  className="flex items-start space-x-4 fade-in-up"
                  style={{ animationDelay: '0.1s' }}
                >
                  <Shield className="w-8 h-8 text-[#4B0082] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-[#333] mb-2">Eco-Friendly Products</h3>
                    <p className="text-gray-600">
                      We use environmentally safe disinfectants that are effective yet gentle on the environment.
                    </p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start space-x-4 fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                >
                  <Users className="w-8 h-8 text-[#4B0082] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-[#333] mb-2">Health & Safety Focus</h3>
                    <p className="text-gray-600">
                      Our cleaning eliminates harmful bacteria and odors, promoting a healthier environment.
                    </p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start space-x-4 fade-in-up"
                  style={{ animationDelay: '0.3s' }}
                >
                  <Clock className="w-8 h-8 text-[#4B0082] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-[#333] mb-2">Regular Service Plans</h3>
                    <p className="text-gray-600">
                      Weekly, bi-weekly, or monthly cleaning schedules to keep your bins consistently clean.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="text-center">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#333] mb-6">
                    Why Choose Næstir Garbage Can Cleaning?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                    Professional bin cleaning service that eliminates odors, bacteria, and unsanitary conditions. 
                    Keep your property clean and healthy with regular garbage can maintenance.
                  </p>
                  
                  {/* Coverage Checker */}
                  <div className="max-w-md mx-auto">
                    <Card className="p-6 bg-gradient-to-r from-purple-50 to-lavender-50">
                      <h3 className="font-semibold text-lg text-[#333] mb-4 flex items-center justify-center">
                        <MapPin className="w-5 h-5 mr-2 text-[#4B0082]" />
                        Check Service Coverage
                      </h3>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter postal code"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          className="flex-1"
                        />
                        <Button
                          onClick={checkCoverage}
                          size="sm"
                          className="bg-[#4B0082] hover:bg-purple-600 text-white"
                        >
                          <Search className="w-4 h-4" />
                        </Button>
                      </div>
                      {coverageResult && (
                        <p className="mt-3 text-sm text-center text-gray-600">
                          {coverageResult}
                        </p>
                      )}
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#333] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Read reviews from satisfied customers who choose our garbage can cleaning service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Santos",
                  rating: 5,
                  review: "Finally no more smelly garbage cans! The team does a thorough job and the bins stay fresh for weeks.",
                  service: "Weekly Cleaning Plan"
                },
                {
                  name: "Tom Wilson",
                  rating: 5,
                  review: "Professional service that makes a real difference. My property looks and smells so much better now.",
                  service: "Residential Bin Cleaning"
                },
                {
                  name: "Restaurant Owner",
                  rating: 5,
                  review: "Essential service for our business. They keep our commercial bins clean and odor-free, which is crucial for health standards.",
                  service: "Commercial Service"
                }
              ].map((review, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{review.service}</span>
                  </div>
                  <Quote className="w-8 h-8 text-[#4B0082] mb-4 opacity-50" />
                  <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                  <div className="font-semibold text-[#333]">— {review.name}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#4B0082] to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Ready for Clean, Odor-Free Bins?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your garbage can cleaning service today and eliminate odors and bacteria for good.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-[#4B0082] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </Button>
              </Link>
              <Link href="/quote">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#4B0082] px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}