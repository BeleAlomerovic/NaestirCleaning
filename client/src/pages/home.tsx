import { Link } from "wouter";
import { Users, Heart, Award, ArrowRight, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { services } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [shimmerActive, setShimmerActive] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Shimmer effect for trust signals every 30 seconds
    const shimmerInterval = setInterval(() => {
      setShimmerActive(true);
      setTimeout(() => setShimmerActive(false), 2000);
    }, 30000);

    return () => clearInterval(shimmerInterval);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Cinematic Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          {/* Cinematic Background Layer */}
          <div className="absolute inset-0">
            {/* Primary cinematic background - slow motion cleaning */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
              {/* Floating particles animation */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 10}s`,
                      animationDuration: `${8 + Math.random() * 4}s`
                    }}
                  />
                ))}
              </div>

              {/* Cinematic light rays */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent transform rotate-12 animate-pulse"></div>
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-300/40 to-transparent transform -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
          
          {/* Glassy Lavender Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-800/30 to-slate-900/50 backdrop-blur-[1px]"></div>
          
          {/* Floating Badge - Top Rated */}
          <div className="absolute top-8 right-8 z-30">
            <div className={`
              bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 
              shadow-2xl transform transition-all duration-1000
              ${isVisible ? 'translate-y-0 opacity-100 animate-bounce-once' : 'translate-y-4 opacity-0'}
            `}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">Top Rated in Reykjavík</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-md -z-10 animate-pulse"></div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {/* Editorial Headline */}
            <h1 className={`
              text-white transition-all duration-1000 ease-out mb-6
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}>
              <span className="block font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                {"We Don't Just Clean.".split('').map((char, i) => (
                  <span 
                    key={i}
                    className="inline-block animate-letter-rise"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
              <span className="block font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mt-2">
                {"We Elevate Spaces.".split('').map((char, i) => (
                  <span 
                    key={i}
                    className="inline-block animate-letter-rise"
                    style={{ animationDelay: `${(i + 20) * 50}ms` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>
            
            {/* Subheadline - Whisper Clarity */}
            <p 
              className={`
                text-purple-200/80 text-lg md:text-xl font-light mb-12 transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ animationDelay: '400ms' }}
            >
              Premium apartment cleaning. Trusted by hundreds across Reykjavík.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className={`
                flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              `} 
              style={{ animationDelay: '600ms' }}
            >
              <Link href="/quote">
                <Button className="
                  group relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300
                  text-white px-10 py-4 text-lg font-semibold rounded-lg
                  transition-all duration-300 ease-out
                  shadow-lg hover:shadow-2xl hover:shadow-purple-500/25
                  hover:scale-105 hover:-translate-y-1
                  border border-purple-400/30
                ">
                  <span className="relative z-10">Get a Free Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Link>
              <Link href="/#services">
                <Button className="
                  group relative bg-transparent border-2 border-white/40 text-white hover:border-white/60
                  px-10 py-4 text-lg font-semibold rounded-lg
                  transition-all duration-300 ease-out
                  hover:bg-white/5 hover:scale-105 hover:-translate-y-1
                  backdrop-blur-sm
                ">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>See Our Services</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
            
            {/* Trust Signals */}
            <div 
              className={`
                flex flex-wrap justify-center items-center gap-6 text-sm text-purple-200/70 transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                ${shimmerActive ? 'animate-shimmer' : ''}
              `} 
              style={{ animationDelay: '800ms' }}
            >
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Insured</span>
              </div>
              <div className="w-1 h-1 bg-purple-300/50 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Eco-Safe Products</span>
              </div>
              <div className="w-1 h-1 bg-purple-300/50 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Scroll Cue */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex flex-col items-center space-y-2 animate-pulse-soft">
              <span className="text-white/60 text-sm font-light">Discover Our Process</span>
              <ChevronDown className="w-6 h-6 text-white/60 animate-bounce-slow" />
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center w-16 h-16 bg-naestir-primary/10 rounded-full mb-6 mx-auto">
                        <service.icon className="w-8 h-8 text-naestir-primary" />
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-4 text-center">
                        {service.name}
                      </h3>
                      <p className="text-naestir-secondary text-center leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-naestir-dark mb-4">Why Choose Næstir</h2>
              <p className="text-xl text-naestir-secondary max-w-3xl mx-auto">
                We don't just clean — we transform your space into a sanctuary of cleanliness and comfort.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-naestir-primary/10 rounded-full mb-6 mx-auto">
                  <Users className="w-10 h-10 text-naestir-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-4">Trusted Professionals</h3>
                <p className="text-naestir-secondary leading-relaxed">
                  Our carefully vetted team brings years of experience and dedication to every cleaning session.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-naestir-primary/10 rounded-full mb-6 mx-auto">
                  <Heart className="w-10 h-10 text-naestir-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-4">Eco-Friendly Approach</h3>
                <p className="text-naestir-secondary leading-relaxed">
                  We use only environmentally safe products that protect your family and our planet.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-naestir-primary/10 rounded-full mb-6 mx-auto">
                  <Award className="w-10 h-10 text-naestir-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-naestir-dark mb-4">Satisfaction Guaranteed</h3>
                <p className="text-naestir-secondary leading-relaxed">
                  If you're not completely satisfied, we'll return and make it right — that's our promise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-naestir-primary">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for a Cleaner Tomorrow?
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              Join thousands of satisfied customers who trust Næstir for their cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/quote">
                <Button 
                  className="bg-white text-naestir-primary hover:bg-purple-50 px-10 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ borderRadius: '8px' }}
                >
                  Get Your Free Quote
                </Button>
              </Link>
              <Link href="/booking">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-naestir-primary px-10 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{ borderRadius: '8px' }}
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}