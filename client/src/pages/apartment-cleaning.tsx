import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Star, Quote, Users, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";

export default function ApartmentCleaning() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const apartmentImages = [
    {
      src: "/assets/Clean-apartment_1750612374272.jpg",
      alt: "Clean modern apartment living room with neutral colors"
    },
    {
      src: "/assets/The-Ultimate-Apartment-Cleaning-Checklist-1024x683_1750612386226.jpg",
      alt: "Spotless apartment with blue sofa and organized kitchen"
    }
  ];

  const serviceFeatures = [
    "Deep clean all rooms including kitchen and bathrooms",
    "Vacuum and mop all floors",
    "Dust all surfaces including furniture and electronics",
    "Clean windows, mirrors, and glass surfaces",
    "Sanitize high-touch areas and doorknobs",
    "Empty trash and replace liners",
    "Clean and disinfect bathroom fixtures",
    "Kitchen deep clean including appliances"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % apartmentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + apartmentImages.length) % apartmentImages.length);
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Service Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#333] mb-6">
                    What's Included
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Our apartment cleaning service covers every corner of your home with meticulous attention to detail. 
                    We use eco-friendly products and professional-grade equipment to ensure the highest standards.
                  </p>
                </div>

                {/* Service Features */}
                <div className="space-y-4">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing Card */}
                <Card className="border-2 border-[#4B0082] bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-[#333] mb-2">Starting From</h3>
                      <div className="text-4xl font-bold text-[#4B0082] mb-2">$89</div>
                      <p className="text-gray-600 mb-4">For studio/1-bedroom apartments</p>
                      <p className="text-sm text-gray-500 mb-6">
                        Pricing varies based on apartment size and cleaning frequency
                      </p>
                      <div className="space-y-3">
                        <Link href="/quote">
                          <Button className="w-full bg-[#4B0082] hover:bg-purple-600 text-white py-3 text-lg font-semibold">
                            Get Free Quote
                          </Button>
                        </Link>
                        <Link href="/booking">
                          <Button variant="outline" className="w-full border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white py-3 text-lg font-semibold">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Image Gallery */}
              <div className="space-y-6">
                <h3 className="font-playfair text-2xl font-bold text-[#333] text-center">
                  See the Difference
                </h3>
                
                {/* Image Carousel */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={apartmentImages[currentImageIndex].src}
                      alt={apartmentImages[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200"
                    >
                      <ArrowLeft className="w-5 h-5 text-[#4B0082]" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-200 rotate-180"
                    >
                      <ArrowLeft className="w-5 h-5 text-[#4B0082]" />
                    </button>
                  </div>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {apartmentImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-[#4B0082]' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Image Caption */}
                <p className="text-center text-gray-600 italic">
                  {apartmentImages[currentImageIndex].alt}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Satisfaction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-purple-50 to-lavender-50 border-2 border-[#4B0082]/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  <Quote className="w-12 h-12 text-[#4B0082] mx-auto mb-6" />
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#333] mb-6">
                    Customer Satisfaction Guarantee
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    "We stand behind every cleaning with our 100% satisfaction guarantee. 
                    If you're not completely happy with our service, we'll return within 24 hours 
                    to make it right – at no additional cost."
                  </p>
                  
                  {/* Satisfaction Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div className="text-center">
                      <div className="flex justify-center mb-3">
                        <Star className="w-8 h-8 text-yellow-500 fill-current" />
                        <Star className="w-8 h-8 text-yellow-500 fill-current" />
                        <Star className="w-8 h-8 text-yellow-500 fill-current" />
                        <Star className="w-8 h-8 text-yellow-500 fill-current" />
                        <Star className="w-8 h-8 text-yellow-500 fill-current" />
                      </div>
                      <div className="text-2xl font-bold text-[#4B0082] mb-1">4.9/5</div>
                      <div className="text-gray-600">Average Rating</div>
                    </div>
                    
                    <div className="text-center">
                      <Users className="w-8 h-8 text-[#4B0082] mx-auto mb-3" />
                      <div className="text-2xl font-bold text-[#4B0082] mb-1">2,000+</div>
                      <div className="text-gray-600">Happy Customers</div>
                    </div>
                    
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-[#4B0082] mx-auto mb-3" />
                      <div className="text-2xl font-bold text-[#4B0082] mb-1">100%</div>
                      <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-[#4B0082]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Clock className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for a Spotless Apartment?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Book your apartment cleaning service today and experience the Næstir difference. 
              Same-day bookings available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button className="bg-white text-[#4B0082] hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/booking">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#4B0082] px-8 py-4 text-lg font-semibold">
                  Book Online
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}