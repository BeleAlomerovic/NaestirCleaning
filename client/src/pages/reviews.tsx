import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { PageTransition } from "@/components/page-transition";
import { reviewsData, services } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertReviewSchema } from "@shared/schema";

const reviewFormSchema = insertReviewSchema;
type ReviewFormData = z.infer<typeof reviewFormSchema>;

export default function Reviews() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const stats = {
    totalReviews: "250+",
    averageRating: "4.9",
    completedJobs: "500+",
    satisfaction: "98%",
  };

  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      customerName: "",
      service: "",
      rating: 5,
      comment: "",
    },
  });

  const createReview = useMutation({
    mutationFn: async (data: ReviewFormData) => {
      const response = await apiRequest("POST", "/api/reviews", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Review Submitted!",
        description: "Thank you for your feedback. Your review has been published.",
      });
      form.reset();
      setIsDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/reviews"] });
    },
    onError: (error) => {
      toast({
        title: "Review Submission Failed",
        description: error.message || "There was an error submitting your review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ReviewFormData) => {
    await createReview.mutateAsync(data);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  const renderRatingStars = (rating: number, onRatingChange: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 cursor-pointer transition-colors ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300 hover:text-yellow-300"
        }`}
        onClick={() => onRatingChange(i + 1)}
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

          {/* Add Review Section */}
          <div className="text-center mt-16">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-naestir-accent hover:bg-cyan-500 text-white px-6 py-3 text-lg font-semibold shadow-lg mb-8">
                  <Plus className="w-5 h-5 mr-2" />
                  Leave a Review
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Leave a Review</DialogTitle>
                  <DialogDescription>
                    Share your experience with Næstir cleaning services.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="customerName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Used</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select the service you used" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.id} value={service.name}>
                                  {service.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rating</FormLabel>
                          <FormControl>
                            <div className="flex space-x-1">
                              {renderRatingStars(field.value || 5, field.onChange)}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="comment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Review</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={4}
                              placeholder="Tell us about your experience with our cleaning service..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={createReview.isPending}
                      className="w-full bg-naestir-primary hover:bg-cyan-600 text-white py-3 font-semibold"
                    >
                      {createReview.isPending ? "Submitting Review..." : "Submit Review"}
                    </Button>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-naestir-dark mb-4">Ready to Join Our Happy Customers?</h3>
            <p className="text-lg text-naestir-secondary mb-8">Experience the Næstir difference for yourself.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button className="bg-naestir-accent hover:bg-cyan-500 text-white px-8 py-4 text-lg font-semibold shadow-lg">
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/booking">
                <Button className="bg-naestir-primary hover:bg-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg">
                  Book Your Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
