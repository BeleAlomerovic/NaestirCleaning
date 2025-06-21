import { Link } from "wouter";
import { Users, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { services } from "@/lib/constants";

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
                <Button className="pulse-animation bg-naestir-primary hover:bg-purple-600 text-white px-10 py-6 text-lg font-semibold shadow-xl rounded-full border-2 border-naestir-primary">
                  🟣 Get Your Free Quote
                </Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" className="bg-transparent border-2 border-naestir-dark text-naestir-dark hover:bg-naestir-dark hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300">
                  ⚪️ See Our Services
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
                  const getHoverClass = () => {
                    switch (service.id) {
                      case 'apartment': return 'sparkle-hover';
                      case 'corporate': return 'glow-hover';
                      case 'carwash': return 'ripple-hover';
                      case 'carpet': return 'price-reveal';
                      case 'garbage': return 'bounce-hover';
                      default: return 'hover:scale-105';
                    }
                  };

                  return (
                    <Link key={service.id} href={`/services/${service.id}`}>
                      <Card 
                        className={`service-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer w-80 flex-shrink-0 fade-in-up ${getHoverClass()}`}
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
                          <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-2">
                            <span className="text-2xl">{service.icon}</span>
                          </div>
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

        {/* Why Choose Us Section */}
        <section className="py-20 bg-naestir-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-naestir-dark mb-4">Why Choose Næstir?</h2>
              <p className="text-xl text-naestir-secondary max-w-3xl mx-auto">
                We combine years of experience with modern techniques to deliver exceptional cleaning results every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center fade-in-up">
                <div className="bg-naestir-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-naestir-primary" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Expert Team</h3>
                <p className="text-naestir-secondary">
                  Our trained and insured professionals bring expertise and attention to detail to every job.
                </p>
              </div>

              <div className="text-center fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="bg-naestir-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-naestir-accent" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Eco-Friendly</h3>
                <p className="text-naestir-secondary">
                  Using environmentally safe products and sustainable cleaning practices for a healthier environment.
                </p>
              </div>

              <div className="text-center fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="bg-naestir-secondary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-naestir-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Satisfaction Guaranteed</h3>
                <p className="text-naestir-secondary">
                  We stand behind our work with a 100% satisfaction guarantee on all our cleaning services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-naestir-primary to-naestir-accent text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Ready to Experience the Næstir Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your personalized cleaning quote today and join thousands of satisfied customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button className="bg-white text-naestir-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg pulse-animation">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/booking">
                <Button className="bg-naestir-dark hover:bg-opacity-80 px-8 py-4 text-lg font-semibold shadow-lg">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}