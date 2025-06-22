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
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center">
          {/* Background Video/Animation */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
            >
              <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c5a3e8c7&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            </video>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 hero-gradient"></div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-naestir-dark mb-4 leading-tight">
              A Cleaner Home,<br />
              <span className="text-naestir-primary">A Brighter You.</span>
            </h1>
            <p className="font-playfair text-xl md:text-2xl text-naestir-secondary mb-12 italic">
              (We clean. You breathe.)
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href="/quote">
                <Button 
                  className="bg-[#4B0082] hover:bg-[#6A0DAD] text-white px-10 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ borderRadius: '8px' }}
                >
                  Get Your Free Quote
                </Button>
              </Link>
              <Link href="/#services">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{ borderRadius: '8px' }}
                >
                  See Our Services
                </Button>
              </Link>
            </div>
            
            {/* Microcopy */}
            <p className="text-naestir-secondary text-sm md:text-base">
              Trusted by 2,000+ happy clients • Eco-friendly • Insured & Vetted Staff
            </p>
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

        {/* We're More Than Cleaners Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#2C2C2C] mb-6">
                We're More Than Cleaners —
                <span className="block text-[#6A0DAD] italic font-light">We're Caretakers</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mx-auto"></div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              {/* Trust */}
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#4B0082]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">Trust & Reliability</h3>
                <p className="text-[#6C6C6C] leading-relaxed">
                  Every team member is background-checked, insured, and trained to treat your space with the respect it deserves.
                </p>
              </div>

              {/* Care */}
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#4B0082]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">Genuine Care</h3>
                <p className="text-[#6C6C6C] leading-relaxed">
                  We don't just clean surfaces — we care for your home, your family's health, and your peace of mind.
                </p>
              </div>

              {/* Excellence */}
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#4B0082]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4">Attention to Detail</h3>
                <p className="text-[#6C6C6C] leading-relaxed">
                  From the visible surfaces to the hidden corners, we notice what others miss and clean what others overlook.
                </p>
              </div>
            </div>

            {/* Our Promise */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                  <div className="inline-block p-4 bg-purple-100 rounded-full mb-6">
                    <svg className="w-12 h-12 text-[#4B0082]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-semibold text-[#2C2C2C] mb-6">Our Promise to You</h3>
                </div>
                
                <blockquote className="text-xl text-[#6C6C6C] italic leading-relaxed mb-8">
                  "When you invite us into your space, you're not just hiring a cleaning service — you're welcoming caretakers who understand that a clean environment is the foundation of a peaceful life."
                </blockquote>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C]">We listen first</h4>
                        <p className="text-[#6C6C6C] text-sm">Understanding your specific needs and concerns before we begin</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C]">We protect what matters</h4>
                        <p className="text-[#6C6C6C] text-sm">Using only safe, eco-friendly products around your family and pets</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C]">We deliver consistency</h4>
                        <p className="text-[#6C6C6C] text-sm">The same high standards, every visit, every time</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2C2C2C]">We stand behind our work</h4>
                        <p className="text-[#6C6C6C] text-sm">100% satisfaction guarantee on every service</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <Link href="/quote">
                    <Button 
                      className="bg-[#4B0082] hover:bg-[#6A0DAD] text-white px-8 py-3 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{ borderRadius: '8px' }}
                    >
                      Experience the Difference
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </PageTransition>
  );
}