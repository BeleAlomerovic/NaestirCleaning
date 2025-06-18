import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { PageTransition } from "@/components/page-transition";
import { reviewsData } from "@/lib/constants";

export default function Reviews() {
  const stats = {
    totalReviews: "250+",
    averageRating: "4.9",
    completedJobs: "500+",
    satisfaction: "98%",
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <PageTransition>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-naestir-dark mb-4">Customer Reviews</h1>
            <p className="text-lg text-naestir-secondary max-w-2xl mx-auto">
              See what our satisfied customers have to say about Næstir's cleaning services.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-naestir-primary mb-2">{stats.totalReviews}</div>
              <div className="text-naestir-secondary">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-naestir-accent mb-2">{stats.averageRating}</div>
              <div className="text-naestir-secondary">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-naestir-primary mb-2">{stats.completedJobs}</div>
              <div className="text-naestir-secondary">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-naestir-accent mb-2">{stats.satisfaction}</div>
              <div className="text-naestir-secondary">Satisfaction Rate</div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.map((review) => (
              <Card key={review.id} className="bg-naestir-neutral rounded-xl shadow-sm">
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

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-naestir-dark mb-4">Ready to Join Our Happy Customers?</h3>
            <p className="text-lg text-naestir-secondary mb-8">Experience the Næstir difference for yourself.</p>
            <Link href="/booking">
              <Button className="bg-naestir-primary hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-lg">
                Book Your Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
