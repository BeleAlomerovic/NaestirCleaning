import { CheckCircle, Clock, Heart, Shield, Zap, Lightbulb, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { PageTransition } from "@/components/page-transition";

export default function About() {
  return (
    <PageTransition>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-naestir-dark mb-4">About Næstir</h1>
            <p className="text-lg text-naestir-secondary max-w-3xl mx-auto">
              Founded on the principles of excellence, reliability, and environmental responsibility, Næstir has been serving the community with professional cleaning services since 2018.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-naestir-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-naestir-secondary">
                <p>
                  Næstir was born from a simple vision: to provide cleaning services that exceed expectations while respecting both our customers and the environment. What started as a small local operation has grown into a trusted partner for hundreds of residential and commercial clients.
                </p>
                <p>
                  Our commitment to quality and sustainability has earned us a reputation as the premier cleaning service in the region. We believe that a clean environment contributes to better health, productivity, and overall well-being.
                </p>
                <p>
                  Today, we continue to evolve our services and methods, always staying ahead of industry standards while maintaining the personal touch that our customers love.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional cleaning equipment and supplies"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Mission & Values */}
          <div className="bg-naestir-neutral rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-naestir-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-naestir-primary" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Our Mission</h3>
                <p className="text-naestir-secondary">
                  To provide exceptional cleaning services that enhance the quality of life for our customers while promoting environmental sustainability and supporting our local community.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-naestir-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-naestir-accent" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Our Vision</h3>
                <p className="text-naestir-secondary">
                  To be the leading cleaning service provider known for innovation, reliability, and environmental stewardship, setting new standards for the industry.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500 bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-naestir-dark mb-3">Our Values</h3>
                <p className="text-naestir-secondary">
                  Excellence, integrity, sustainability, and customer satisfaction guide every decision we make and every service we provide.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-naestir-dark text-center mb-12">Why Choose Næstir?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-naestir-primary bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-naestir-primary" />
                </div>
                <h3 className="font-semibold text-naestir-dark mb-2">Certified Professionals</h3>
                <p className="text-sm text-naestir-secondary">All our staff are trained and certified in latest cleaning techniques</p>
              </div>

              <div className="text-center">
                <div className="bg-naestir-accent bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-naestir-accent" />
                </div>
                <h3 className="font-semibold text-naestir-dark mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-naestir-secondary">We work around your schedule with convenient booking options</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500 bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-naestir-dark mb-2">Eco-Friendly Products</h3>
                <p className="text-sm text-naestir-secondary">Safe, non-toxic cleaning solutions for your family and pets</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500 bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold text-naestir-dark mb-2">Insured & Bonded</h3>
                <p className="text-sm text-naestir-secondary">Complete protection and peace of mind with every service</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="bg-gradient-to-br from-naestir-primary to-naestir-accent rounded-2xl text-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 mr-3 opacity-80" />
                      <span>+1 (555) 123-NÆSTIR</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 mr-3 opacity-80" />
                      <span>hello@naestir.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 mr-3 opacity-80" />
                      <span>Serving Greater Metropolitan Area</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 mr-3 opacity-80" />
                      <span>Mon-Fri: 7AM-7PM, Sat-Sun: 8AM-5PM</span>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6 opacity-90">Get your free quote or schedule your cleaning service today.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <Link href="/quote">
                      <Button className="bg-white text-naestir-primary hover:bg-gray-100 px-6 py-3 text-lg font-semibold shadow-lg">
                        Get Quote
                      </Button>
                    </Link>
                    <Link href="/booking">
                      <Button className="bg-naestir-dark hover:bg-opacity-80 px-6 py-3 text-lg font-semibold shadow-lg">
                        Book Service
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}
