import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PageTransition } from "@/components/page-transition";
import { apiRequest } from "@/lib/queryClient";
import { services } from "@/lib/constants";
import { insertQuoteSchema } from "@shared/schema";

const formSchema = insertQuoteSchema;

type FormData = z.infer<typeof formSchema>;

export default function Quote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      description: "",
    },
  });

  const createQuote = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/quotes", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Successful!",
        description: "We'll contact you within 24 hours with your personalized quote.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/quotes"] });
    },
    onError: (error) => {
      toast({
        title: "Quote Request Failed",
        description: error.message || "There was an error submitting your quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await createQuote.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <section className="py-16 bg-naestir-neutral min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-naestir-dark mb-4">Get Your Free Quote</h1>
            <p className="text-lg text-naestir-secondary">
              Tell us about your cleaning needs and we'll provide you with a personalized quote.
            </p>
          </div>

          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Service Selection */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-naestir-dark mb-3">Select Service</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          >
                            {services.map((service) => (
                              <div key={service.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={service.id} id={service.id} />
                                <Label
                                  htmlFor={service.id}
                                  className="flex-1 border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-naestir-primary transition-colors duration-200"
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className="text-2xl">{service.icon}</span>
                                    <div>
                                      <h3 className="font-medium text-naestir-dark">{service.name}</h3>
                                      <p className="text-sm text-naestir-secondary">{service.description.split('.')[0]}.</p>
                                    </div>
                                  </div>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Address */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Address</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={3}
                            placeholder="Enter the complete address where service is needed"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Description */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Please describe your cleaning needs, space size, frequency, and any specific requirements..."
                            value={field.value || ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-naestir-primary hover:bg-cyan-600 text-white py-4 text-lg font-semibold shadow-lg"
                    >
                      {isSubmitting ? "Requesting Quote..." : "Get Free Quote"}
                    </Button>
                    <p className="text-sm text-naestir-secondary text-center mt-3">
                      We'll contact you within 24 hours with your personalized quote.
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
}