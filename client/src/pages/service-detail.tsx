import { useParams, Link } from "wouter";
import { Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageTransition } from "@/components/page-transition";
import { services, reviewsData } from "@/lib/constants";
const logoPath = "/assets/Logo_1750368000651.jpeg";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  
  // Redirect specific services to their dedicated pages
  if (serviceId === "corporate") {
    window.location.href = "/services/corporate-cleaning";
    return null;
  }
  
  if (serviceId === "apartment") {
    window.location.href = "/services/apartment-cleaning";
    return null;
  }
  
  if (serviceId === "blocks") {
    window.location.href = "/services/blocks-cleaning";
    return null;
  }
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-naestir-dark mb-4">Service Not Found</h1>
            <Link href="/">
              <Button className="bg-naestir-primary hover:bg-purple-600 text-white">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Filter reviews for this specific service
  const serviceReviews = reviewsData.filter(review => 
    review.service.toLowerCase().includes(service.name.toLowerCase()) ||
    service.name.toLowerCase().includes(review.service.toLowerCase())
  ).slice(0, 3);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-naestir-neutral">
        {/* Hero Section with Service Image */}
        <section className="relative h-64 md:h-80">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-naestir-primary bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
              {service.name}
            </h1>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Get Quote Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-naestir-dark mb-4">
              Professional {service.name} Services
            </h2>
            <p className="text-lg text-naestir-secondary mb-8 max-w-3xl mx-auto">
              {service.description}
            </p>
            <Link href="/quote">
              <Button className="bg-naestir-primary hover:bg-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg">
                Get Your Free Quote
              </Button>
            </Link>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-naestir-dark mb-6">What's Included:</h3>
              <div className="space-y-4">
                {service.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-naestir-accent mt-0.5 flex-shrink-0" />
                    <p className="text-naestir-secondary">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Logo */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <img
                  src={logoPath}
                  alt="Næstir Logo"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold text-naestir-dark">Næstir</h4>
                <p className="text-naestir-secondary">Professional Cleaning Services</p>
              </div>
            </div>
          </div>

          {/* Service Reviews */}
          {serviceReviews.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-naestir-dark text-center mb-8">
                What Our Customers Say About {service.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceReviews.map((review) => (
                  <Card key={review.id} className="bg-white rounded-xl shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex mr-3">{renderStars(review.rating)}</div>
                        <span className="text-naestir-secondary text-sm">{review.service}</span>
                      </div>
                      <p className="text-naestir-dark mb-4">"{review.comment}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-naestir-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                          <span className="text-naestir-primary font-semibold">{review.customerInitials}</span>
                        </div>
                        <div>
                          <div className="font-medium text-naestir-dark">{review.customerName}</div>
                          <div className="text-sm text-naestir-secondary">{review.date}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-naestir-primary to-naestir-accent rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Book Your {service.name}?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Get started with a free quote or schedule your service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button className="bg-white text-naestir-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/booking">
                <Button className="bg-naestir-dark hover:bg-opacity-80 px-8 py-4 text-lg font-semibold shadow-lg">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}