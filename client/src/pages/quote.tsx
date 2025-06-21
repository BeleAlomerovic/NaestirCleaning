import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertQuoteSchema, type InsertQuote } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { PageTransition } from "@/components/page-transition";
import { Sparkles, CheckCircle } from "lucide-react";

const formSchema = insertQuoteSchema;

type FormData = z.infer<typeof formSchema>;

export default function Quote() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      frequency: "",
      propertySize: "",
      address: "",
      preferredDate: "",
      specialRequests: "",
    },
  });

  const createQuoteMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const quoteData: InsertQuote = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        serviceType: data.serviceType,
        frequency: data.frequency,
        propertySize: data.propertySize,
        address: data.address,
        preferredDate: data.preferredDate,
        specialRequests: data.specialRequests || null,
      };
      
      return await apiRequest({ 
        path: "/api/quotes", 
        method: "POST", 
        body: quoteData 
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/quotes"] });
      setIsSubmitted(true);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit quote request",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: FormData) => {
    createQuoteMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <PageTransition>
        <div 
          className="min-h-screen py-20"
          style={{
            background: 'linear-gradient(135deg, #F7F4FA 0%, #FFFFFF 100%)'
          }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="bg-white p-12 text-center"
              style={{
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(75, 0, 130, 0.1)'
              }}
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-[#4B0082] mb-4">
                Thank you, {form.getValues("name")}!
              </h2>
              <p className="text-lg text-[#2C2C2C] mb-8 leading-relaxed">
                Your request has been received. One of our team members will review your details and get back to you within 24 hours.
              </p>
              <div 
                className="p-6 mb-8"
                style={{
                  background: '#F3F0FA',
                  borderRadius: '15px'
                }}
              >
                <p className="text-[#2C2C2C] leading-relaxed">
                  <strong>Need to reach us sooner?</strong><br />
                  📞 Call us at: <span className="text-[#4B0082] font-semibold">(234) 567-8910</span><br />
                  📧 Email us at: <span className="text-[#4B0082] font-semibold">support@naestir.com</span>
                </p>
              </div>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  form.reset();
                }}
                className="bg-[#4B0082] hover:bg-[#6A0DAD] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Submit Another Quote
              </Button>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div 
        className="min-h-screen py-20"
        style={{
          background: 'linear-gradient(135deg, #F7F4FA 0%, #FFFFFF 100%)'
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Clean Intro Header */}
          <div 
            className="text-center mb-12 p-8"
            style={{
              background: '#F3F0FA',
              borderRadius: '20px'
            }}
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-[#4B0082] mr-3" />
              <h1 className="font-playfair text-4xl font-bold text-[#4B0082]">
                Request Your Free Quote
              </h1>
            </div>
            <p className="text-xl text-[#2C2C2C] font-medium">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Main Form Card */}
          <div 
            className="bg-white p-8"
            style={{
              borderRadius: '20px',
              boxShadow: '0 4px 20px rgba(75, 0, 130, 0.1)'
            }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <div>
                <Label htmlFor="name" className="text-[#4B0082] font-semibold mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-[#4B0082] font-semibold mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#4B0082] font-semibold mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Service Type and Frequency */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="serviceType" className="text-[#4B0082] font-semibold mb-2 block">
                    Service Type *
                  </Label>
                  <Select
                    value={form.watch("serviceType")}
                    onValueChange={(value) => form.setValue("serviceType", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="car">Car</SelectItem>
                      <SelectItem value="carpet">Carpet</SelectItem>
                      <SelectItem value="garbage">Garbage</SelectItem>
                      <SelectItem value="building">Building</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.serviceType.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="frequency" className="text-[#4B0082] font-semibold mb-2 block">
                    Cleaning Frequency *
                  </Label>
                  <Select
                    value={form.watch("frequency")}
                    onValueChange={(value) => form.setValue("frequency", value)}
                  >
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300">
                      <SelectValue placeholder="How often?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.frequency && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.frequency.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Property Size and Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="propertySize" className="text-[#4B0082] font-semibold mb-2 block">
                    Property Size *
                  </Label>
                  <Input
                    id="propertySize"
                    {...form.register("propertySize")}
                    placeholder="e.g., Studio, 2BR, 1500 sq ft, Small office"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300"
                  />
                  {form.formState.errors.propertySize && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.propertySize.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="address" className="text-[#4B0082] font-semibold mb-2 block">
                    Address / Zip Code *
                  </Label>
                  <Input
                    id="address"
                    {...form.register("address")}
                    placeholder="Enter your address or zip code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300"
                  />
                  {form.formState.errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.address.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <Label htmlFor="preferredDate" className="text-[#4B0082] font-semibold mb-2 block">
                  Preferred Date (Optional)
                </Label>
                <Input
                  id="preferredDate"
                  type="date"
                  {...form.register("preferredDate")}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Special Requests */}
              <div>
                <Label htmlFor="specialRequests" className="text-[#4B0082] font-semibold mb-2 block">
                  Special Requests / Notes
                </Label>
                <Textarea
                  id="specialRequests"
                  {...form.register("specialRequests")}
                  placeholder="Any specific requirements or questions?"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B0082] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-5 h-5 text-[#4B0082] mt-1 rounded border-gray-300 focus:ring-[#4B0082]"
                  required
                />
                <Label htmlFor="consent" className="text-[#2C2C2C] leading-relaxed">
                  I agree to be contacted via phone or email regarding my request.
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={createQuoteMutation.isPending}
                className="w-full bg-[#4B0082] hover:bg-[#6A0DAD] text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {createQuoteMutation.isPending ? "Submitting..." : "🟣 Submit Quote Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}