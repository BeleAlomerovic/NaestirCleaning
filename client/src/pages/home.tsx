import { Link } from "wouter";
import { CheckCircle, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { services } from "@/lib/constants";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-naestir-primary to-blue-600 text-white py-20">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="absolute inset-0"
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Cleaning Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Reliable, thorough, and professional cleaning solutions for your home, office, and vehicle needs.
            </p>
            <Link href="/booking">
              <Button className="bg-naestir-accent hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg">
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-naestir-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-naestir-dark mb-4">Our Services</h2>
              <p className="text-lg text-naestir-secondary max-w-2xl mx-auto">
                We provide comprehensive cleaning solutions tailored to meet your specific needs with the highest standards of quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-naestir-dark mb-3">{service.name}</h3>
                    <p className="text-naestir-secondary mb-4">{service.description}</p>
                    <Link href="/booking">
                      <Button variant="link" className="text-naestir-primary hover:text-blue-600 font-medium p-0">
                        Book Now →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}

              {/* Get an Offer Card */}
              <Card className="bg-gradient-to-br from-naestir-accent to-green-600 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-6 flex flex-col justify-center h-full">
                  <h3 className="text-xl font-semibold mb-3">Need a Custom Quote?</h3>
                  <p className="mb-4 opacity-90">Get a personalized estimate for your specific cleaning requirements.</p>
                  <Link href="/booking">
                    <Button className="bg-white text-naestir-accent hover:bg-gray-100 px-6 py-3 font-medium">
                      Get Free Estimate
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-naestir-dark mb-4">Our Values & Approach</h2>
              <p className="text-lg text-naestir-secondary max-w-2xl mx-auto">
                What sets Næstir apart in delivering exceptional cleaning services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-naestir-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-naestir-primary" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Quality Guarantee</h3>
                <p className="text-naestir-secondary">
                  We stand behind our work with a 100% satisfaction guarantee and attention to every detail.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-naestir-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-naestir-accent" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Reliable Service</h3>
                <p className="text-naestir-secondary">
                  Punctual, consistent, and dependable cleaning services that fit your schedule.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500 bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Eco-Friendly</h3>
                <p className="text-naestir-secondary">
                  Using environmentally safe products and sustainable cleaning practices for a healthier environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-naestir-primary to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Næstir Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your personalized cleaning quote today and join hundreds of satisfied customers.
            </p>
            <Link href="/booking">
              <Button className="bg-white text-naestir-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                Schedule Your Service
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
