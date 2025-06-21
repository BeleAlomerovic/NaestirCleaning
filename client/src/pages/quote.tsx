import { useState, useRef } from "react";
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
import { Sparkles, CheckCircle, Calendar, Home, Car, Building, Clipboard, Star, ArrowRight } from "lucide-react";

const formSchema = insertQuoteSchema.extend({
  serviceType: z.string().min(1, "Service type is required"),
  frequency: z.string().min(1, "Frequency is required"),
  propertySize: z.string().min(1, "Property size is required"),
  preferredDate: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Quote() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
          className="min-h-screen py-20 relative"
          style={{
            background: 'linear-gradient(135deg, #F7F4FA 0%, #FFFFFF 100%)'
          }}
        >
          {/* Background illustration */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div 
              className="bg-white p-12 text-center"
              style={{
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(75, 0, 130, 0.12)'
              }}
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="font-playfair text-4xl font-bold text-[#4B0082] mb-4">
                Thanks! We'll be in touch within 24 hours.
              </h2>
              <p className="text-lg text-[#2C2C2C] mb-8 leading-relaxed">
                Thank you, {form.getValues("name")}! Your request has been received and one of our team members will contact you with a custom estimate.
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Return to Home
                </Button>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                  className="bg-[#4B0082] hover:bg-[#6A0DAD] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Submit Another Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Header Section */}
        <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(135deg, #F7F4FA 0%, #FFFFFF 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side: Image */}
              <div className="hidden lg:block">
                <div 
                  className="relative h-96 w-full rounded-2xl overflow-hidden"
                  style={{ boxShadow: '0 8px 32px rgba(75, 0, 130, 0.15)' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional cleaning team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4B0082]/10 to-transparent" />
                </div>
              </div>

              {/* Right Side: Text */}
              <div className="text-center lg:text-left">
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-[#4B0082] mb-6">
                  Request Your Free Quote
                </h1>
                <p className="text-xl text-[#2C2C2C] mb-8 leading-relaxed">
                  Our team will contact you within 24 hours with a custom estimate tailored to your cleaning needs.
                </p>
                <Button
                  onClick={scrollToForm}
                  className="bg-[#4B0082] hover:bg-[#6A0DAD] text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Start Your Request
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section with Background */}
        <section 
          className="py-20 relative"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F7F4FA 100%)'
          }}
        >
          {/* Subtle background image */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />

          <div ref={formRef} className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Form Card */}
            <div 
              className="bg-white p-8 lg:p-12"
              style={{
                borderRadius: '24px',
                boxShadow: '0 8px 40px rgba(75, 0, 130, 0.12)'
              }}
            >
              {/* Decorative icon at top */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#F3F0FA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clipboard className="w-8 h-8 text-[#4B0082]" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-[#4B0082] mb-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-[#2C2C2C]">
                  We'll create a custom cleaning plan just for you
                </p>
              </div>
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
                  <Label htmlFor="serviceType" className="text-[#4B0082] font-semibold mb-3 flex items-center">
                    <Home className="w-4 h-4 mr-2" />
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
                      <SelectItem value="apartment">🏠 Apartment</SelectItem>
                      <SelectItem value="office">🏢 Office</SelectItem>
                      <SelectItem value="car">🚗 Car</SelectItem>
                      <SelectItem value="carpet">🧽 Carpet</SelectItem>
                      <SelectItem value="garbage">🗑️ Garbage</SelectItem>
                      <SelectItem value="building">🏗️ Building</SelectItem>
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
                <Label htmlFor="preferredDate" className="text-[#4B0082] font-semibold mb-3 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
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
                <Label htmlFor="specialRequests" className="text-[#4B0082] font-semibold mb-3 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Special Requests / Notes
                </Label>
                <Textarea
                  id="specialRequests"
                  {...form.register("specialRequests")}
                  placeholder="Tell us about any specific areas of focus, special requirements, or questions you have..."
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

          {/* Trust Builder Section */}
          <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial Cards */}
              <div 
                className="bg-white p-6 rounded-2xl text-center"
                style={{ boxShadow: '0 4px 20px rgba(75, 0, 130, 0.08)' }}
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-yellow-600 fill-current" />
                </div>
                <p className="text-[#2C2C2C] mb-3 italic">
                  "They made our office shine again! Professional and thorough."
                </p>
                <p className="text-[#4B0082] font-semibold">– Rebecca A.</p>
              </div>

              <div 
                className="bg-white p-6 rounded-2xl text-center"
                style={{ boxShadow: '0 4px 20px rgba(75, 0, 130, 0.08)' }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-[#2C2C2C] mb-3 italic">
                  "Quick response and amazing results. Highly recommend!"
                </p>
                <p className="text-[#4B0082] font-semibold">– Marcus T.</p>
              </div>

              <div 
                className="bg-white p-6 rounded-2xl text-center"
                style={{ boxShadow: '0 4px 20px rgba(75, 0, 130, 0.08)' }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-[#2C2C2C] mb-3 italic">
                  "Transformed our apartment completely. Worth every penny!"
                </p>
                <p className="text-[#4B0082] font-semibold">– Sarah L.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}