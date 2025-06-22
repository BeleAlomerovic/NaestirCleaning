import { Link } from "wouter";
import { Users, Heart, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { services } from "@/lib/constants";
import apartmentImage from "@assets/AdobeStock_334592268_1750505728985.jpeg";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Header - Full Viewport */}
        <section 
          className="relative h-screen flex items-center justify-center"
          style={{
            background: 'linear-gradient(to bottom, #F3F0FA, #FFFFFF)'
          }}
        >
          {/* Ultra-subtle background image (backup option) */}
          <div 
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url(${apartmentImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px) saturate(0.2)'
            }}
          ></div>
          
          {/* Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
            
            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="font-playfair leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
                <span className="block text-[#2C2C2C] font-bold">A Cleaner Home,</span>
                <span className="block text-[#6A0DAD] font-bold">A Brighter You.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg text-[#6C6C6C] italic font-light" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                We clean. You breathe.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/quote">
                <Button 
                  className="bg-[#4B0082] hover:bg-[#5B1A96] text-white px-8 py-4 text-lg font-bold transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
                  style={{ borderRadius: '8px', minHeight: '56px' }}
                >
                  Get Your Free Quote
                </Button>
              </Link>
              
              <Link href="/services">
                <Button 
                  variant="outline" 
                  className="border-2 border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082]/5 px-8 py-4 text-lg font-medium transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto"
                  style={{ borderRadius: '8px', minHeight: '56px' }}
                >
                  <span>See Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Bar */}
            <div 
              className="text-[#7A7A7A] text-sm leading-relaxed"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Trusted by 2,000+ clients · Eco-conscious · Insured & Background-Checked Staff
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-naestir-dark mb-4">Why Choose Næstir?</h2>
              <p className="text-xl text-naestir-secondary max-w-3xl mx-auto">
                Experience the difference that professional care and attention to detail can make in your space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-naestir-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-naestir-primary" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-4">Expert Team</h3>
                <p className="text-naestir-secondary">
                  Our professionally trained cleaning specialists bring years of experience and meticulous attention to every job.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-naestir-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-naestir-primary" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-4">Eco-Friendly</h3>
                <p className="text-naestir-secondary">
                  We use environmentally safe products that protect your family, pets, and the planet while delivering exceptional results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-naestir-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-naestir-primary" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-4">Guaranteed Quality</h3>
                <p className="text-naestir-secondary">
                  Your satisfaction is our priority. We're not happy until you're completely satisfied with our service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section id="services" className="py-20 bg-naestir-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-naestir-dark mb-4">Our Services</h2>
              <p className="text-xl text-naestir-secondary max-w-3xl mx-auto">
                From residential homes to commercial spaces, we provide comprehensive cleaning solutions tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-naestir-dark mb-3">
                        {service.name}
                      </h3>
                      <p className="text-naestir-secondary mb-4">
                        {service.description}
                      </p>
                      <div className="text-sm text-naestir-primary font-medium">
                        Learn more →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/quote">
                <Button className="bg-naestir-primary hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold">
                  Get Your Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-naestir-dark mb-4">How It Works</h2>
              <p className="text-xl text-naestir-secondary max-w-3xl mx-auto">
                Getting professional cleaning services has never been easier. Here's how we make it happen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-naestir-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-4">Request Quote</h3>
                <p className="text-naestir-secondary">
                  Tell us about your space and cleaning needs. We'll provide a detailed, transparent quote within 24 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-naestir-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-4">Schedule Service</h3>
                <p className="text-naestir-secondary">
                  Choose a convenient time that works for you. We'll arrive prepared with all necessary equipment and supplies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-naestir-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-4">Enjoy Clean Space</h3>
                <p className="text-naestir-secondary">
                  Relax while our expert team transforms your space. We'll leave everything spotless and ready for you to enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-20 bg-naestir-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-naestir-dark mb-4">See the Difference</h2>
              <p className="text-xl text-naestir-secondary max-w-3xl mx-auto">
                Real results from our professional cleaning services. Every space tells a story of transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
                  alt="Kitchen cleaning before and after"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Kitchen Deep Clean</h3>
                  <p className="text-sm opacity-90">Complete transformation</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
                  alt="Bathroom cleaning results"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Bathroom Restoration</h3>
                  <p className="text-sm opacity-90">Spotless and sanitized</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
                  alt="Living room cleaning"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">Living Space Refresh</h3>
                  <p className="text-sm opacity-90">Fresh and inviting</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}