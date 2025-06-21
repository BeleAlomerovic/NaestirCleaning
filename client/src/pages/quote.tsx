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
import { Sparkles, CheckCircle, ArrowDown, Calendar, FileText, Home, Car, Building2, Trash2, Palette, Shield, ClipboardCheck, Zap } from "lucide-react";
import teamImage from "@assets/WhatsApp Image 2025-06-21 at 10.21.51_1750501340014.jpeg";
import apartmentImage from "@assets/AdobeStock_334592268_1750505728985.jpeg";
import officeImage from "@assets/AdobeStock_523168323_1750505622955.jpeg";
import carpetImage from "@assets/AdobeStock_554450129_1750505626910.jpeg";
import carImage from "@assets/AdobeStock_560781364_1750505629812.jpeg";
import garbageImage from "@assets/AdobeStock_689599448_1750505634322.jpeg";

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

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'apartment': return <Home className="w-5 h-5 text-[#4B0082]" />;
      case 'office': return <Building2 className="w-5 h-5 text-[#4B0082]" />;
      case 'car': return <Car className="w-5 h-5 text-[#4B0082]" />;
      case 'carpet': return <Palette className="w-5 h-5 text-[#4B0082]" />;
      case 'garbage': return <Trash2 className="w-5 h-5 text-[#4B0082]" />;
      case 'building': return <Building2 className="w-5 h-5 text-[#4B0082]" />;
      default: return <Home className="w-5 h-5 text-[#4B0082]" />;
    }
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="bg-white p-12 text-center"
              style={{
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(75, 0, 130, 0.1)'
              }}
            >
              {/* Success Illustration */}
              <div className="mb-8">
                <div 
                  className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #F3F0FA 0%, #E6E6FA 100%)',
                    boxShadow: '0 8px 32px rgba(75, 0, 130, 0.1)'
                  }}
                >
                  <div className="relative">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                    <Sparkles className="w-6 h-6 text-[#4B0082] absolute -top-2 -right-2 animate-pulse" />
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mb-6">
                  <img 
                    src={apartmentImage} 
                    alt="Clean apartment" 
                    className="w-20 h-20 rounded-lg object-cover shadow-md opacity-80"
                  />
                  <img 
                    src={teamImage} 
                    alt="Our team" 
                    className="w-20 h-20 rounded-lg object-cover shadow-md"
                  />
                  <img 
                    src={officeImage} 
                    alt="Clean office" 
                    className="w-20 h-20 rounded-lg object-cover shadow-md opacity-80"
                  />
                </div>
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    form.reset();
                  }}
                  className="bg-[#4B0082] hover:bg-[#6A0DAD] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Submit Another Quote
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/'}
                  className="border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Return to Home
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
      {/* Hero Header with Image */}
      <section className="relative bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Vacuum Logo */}
            <div className="hidden lg:block">
              <div className="relative">
                <div 
                  className="w-full h-96 rounded-2xl shadow-2xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #F3F0FA 0%, #E6E6FA 50%, #D8BFD8 100%)'
                  }}
                >
                  {/* Cool Vacuum Logo Design */}
                  <div className="relative">
                    {/* Main vacuum body */}
                    <div 
                      className="w-32 h-20 rounded-2xl flex items-center justify-center relative"
                      style={{
                        background: 'linear-gradient(135deg, #4B0082 0%, #6A0DAD 100%)',
                        boxShadow: '0 8px 32px rgba(75, 0, 130, 0.3)'
                      }}
                    >
                      {/* Power indicator */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      
                      {/* Vacuum handle */}
                      <div 
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-12 rounded-t-lg"
                        style={{ background: 'linear-gradient(180deg, #6A0DAD 0%, #4B0082 100%)' }}
                      ></div>
                      
                      {/* Center power symbol */}
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Vacuum hose */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <div 
                        className="w-2 h-16 rounded-b-full"
                        style={{ background: 'linear-gradient(180deg, #4B0082 0%, #2C2C2C 100%)' }}
                      ></div>
                      {/* Nozzle */}
                      <div 
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 rounded-b-lg"
                        style={{ background: '#2C2C2C' }}
                      ></div>
                    </div>
                    
                    {/* Sparkle effects */}
                    <Sparkles className="absolute -top-4 -left-4 w-6 h-6 text-[#4B0082] animate-pulse" />
                    <Sparkles className="absolute -bottom-4 -right-4 w-4 h-4 text-[#6A0DAD] animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <Sparkles className="absolute top-8 -right-6 w-5 h-5 text-[#4B0082] animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                
                {/* Trust badge overlay */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-[#4B0082]" />
                    <span className="text-sm font-semibold text-[#2C2C2C]">Professional Equipment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="lg:pl-8">
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-[#4B0082] mr-3" />
                <span className="text-[#4B0082] font-semibold text-lg">FREE QUOTE</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6 leading-tight">
                Request Your Free Quote
              </h1>
              
              <p className="text-xl text-[#2C2C2C] mb-8 leading-relaxed">
                Our team will contact you within 24 hours with a custom estimate tailored to your cleaning needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={scrollToForm}
                  className="bg-[#4B0082] hover:bg-[#6A0DAD] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Request
                  <ArrowDown className="w-5 h-5 ml-2" />
                </Button>
                
                <div className="flex items-center space-x-4 text-[#2C2C2C]">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">24-hour response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">No obligation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section with Background */}
      <section 
        id="quote-form"
        className="relative py-20"
        style={{
          backgroundImage: `url(${apartmentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Background Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(247, 244, 250, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Main Form Card */}
          <div 
            className="bg-white p-8"
            style={{
              borderRadius: '20px',
              boxShadow: '0 8px 40px rgba(75, 0, 130, 0.15)'
            }}
          >
            {/* Form Header with Icon */}
            <div className="text-center mb-8">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #F3F0FA 0%, #E6E6FA 100%)'
                }}
              >
                <ClipboardCheck className="w-8 h-8 text-[#4B0082]" />
              </div>
              <h2 className="text-2xl font-bold text-[#4B0082] mb-2">
                Get Your Personalized Quote
              </h2>
              <p className="text-[#2C2C2C]">
                Tell us about your cleaning needs
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
                      <SelectItem value="apartment">
                        <div className="flex items-center space-x-3">
                          <Home className="w-4 h-4 text-[#4B0082]" />
                          <span>Apartment</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="office">
                        <div className="flex items-center space-x-3">
                          <Building2 className="w-4 h-4 text-[#4B0082]" />
                          <span>Office</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="car">
                        <div className="flex items-center space-x-3">
                          <Car className="w-4 h-4 text-[#4B0082]" />
                          <span>Car</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="carpet">
                        <div className="flex items-center space-x-3">
                          <Palette className="w-4 h-4 text-[#4B0082]" />
                          <span>Carpet</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="garbage">
                        <div className="flex items-center space-x-3">
                          <Trash2 className="w-4 h-4 text-[#4B0082]" />
                          <span>Garbage</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="building">
                        <div className="flex items-center space-x-3">
                          <Building2 className="w-4 h-4 text-[#4B0082]" />
                          <span>Building</span>
                        </div>
                      </SelectItem>
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
                <Label htmlFor="preferredDate" className="text-[#4B0082] font-semibold mb-2 block flex items-center">
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
                <Label htmlFor="specialRequests" className="text-[#4B0082] font-semibold mb-2 block flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
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

          {/* Trust Builder Section */}
          <div className="mt-16">
            <div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              style={{
                boxShadow: '0 4px 20px rgba(75, 0, 130, 0.1)'
              }}
            >
              <h3 className="text-2xl font-bold text-[#4B0082] text-center mb-8">
                Why Choose Næstir?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src={apartmentImage} 
                      alt="Quality cleaning" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#4B0082] rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-2">Premium Quality</h4>
                  <p className="text-sm text-[#2C2C2C] opacity-80">Professional results every time</p>
                </div>

                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src={teamImage} 
                      alt="Trusted team" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#4B0082] rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-2">Trusted & Insured</h4>
                  <p className="text-sm text-[#2C2C2C] opacity-80">Peace of mind guaranteed</p>
                </div>

                <div className="text-center">
                  <div className="relative mb-4">
                    <img 
                      src={officeImage} 
                      alt="Professional service" 
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#4B0082] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-2">24-Hour Response</h4>
                  <p className="text-sm text-[#2C2C2C] opacity-80">Quick and reliable service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}