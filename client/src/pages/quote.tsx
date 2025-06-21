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
import { CheckCircle, ChevronDown, Loader2 } from "lucide-react";

const formSchema = insertQuoteSchema;
type FormData = z.infer<typeof formSchema>;

export default function Quote() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);

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
        preferredDate: data.preferredDate || "",
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
          className="min-h-screen flex items-center justify-center px-4"
          style={{
            background: 'linear-gradient(to bottom, #F8F6FB, #FFFFFF)'
          }}
        >
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-semibold text-[#2C2C2C] mb-4">
              Thank you! We've received your request.
            </h2>
            
            <p className="text-[#6C6C6C] mb-8 leading-relaxed">
              A team member will contact you within 24 hours.
            </p>
            
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white transition-all duration-300"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div 
        className="min-h-screen py-16 px-4"
        style={{
          background: 'linear-gradient(to bottom, #F8F6FB, #FFFFFF)'
        }}
      >
        <div className="max-w-2xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-[#2C2C2C] mb-4">
              Request a Free Cleaning Quote
            </h1>
            <p className="text-lg text-[#6C6C6C] mb-6">
              We'll review your request and get back to you within 24 hours.
            </p>
            
            {/* Divider */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent mx-auto mb-6"></div>
            
            {/* Trust Icons */}
            <div className="flex items-center justify-center space-x-6 text-sm text-[#6C6C6C]">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>24-hour response</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Free estimate</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div 
            className="bg-white p-8 mx-auto"
            style={{
              maxWidth: '600px',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
            }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Full Name */}
              <div>
                <Label htmlFor="name" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="Enter your full name"
                  autoFocus
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <Label htmlFor="email" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phone" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...form.register("phone")}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <Label htmlFor="serviceType" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                  Service Type *
                </Label>
                <Select
                  value={form.watch("serviceType")}
                  onValueChange={(value) => form.setValue("serviceType", value)}
                >
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300">
                    <SelectValue placeholder="Select service type" />
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment Cleaning</SelectItem>
                    <SelectItem value="office">Office Cleaning</SelectItem>
                    <SelectItem value="car">Car Cleaning</SelectItem>
                    <SelectItem value="carpet">Carpet Cleaning</SelectItem>
                    <SelectItem value="garbage">Garbage Can Cleaning</SelectItem>
                    <SelectItem value="building">Building Cleaning</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.serviceType.message}
                  </p>
                )}
              </div>

              {/* Cleaning Frequency */}
              <div>
                <Label htmlFor="frequency" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                  Cleaning Frequency *
                </Label>
                <Select
                  value={form.watch("frequency")}
                  onValueChange={(value) => form.setValue("frequency", value)}
                >
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300">
                    <SelectValue placeholder="How often?" />
                    <ChevronDown className="w-4 h-4 opacity-50" />
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

              {/* Property Size */}
              <div>
                <Label htmlFor="propertySize" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                  Property Size *
                </Label>
                <Input
                  id="propertySize"
                  {...form.register("propertySize")}
                  placeholder="e.g., Studio, 2BR, 1500 sq ft, Small office"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300"
                />
                {form.formState.errors.propertySize && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.propertySize.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                  Address or Zip Code *
                </Label>
                <Input
                  id="address"
                  {...form.register("address")}
                  placeholder="Enter your address or zip code"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300"
                />
                {form.formState.errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.address.message}
                  </p>
                )}
              </div>

              {/* Progressive Disclosure Toggle */}
              <button
                type="button"
                onClick={() => setShowOptionalFields(!showOptionalFields)}
                className="text-[#4B0082] text-sm font-medium hover:text-[#6A0DAD] transition-colors duration-300 flex items-center space-x-1"
              >
                <span>Add optional details</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showOptionalFields ? 'rotate-180' : ''}`} />
              </button>

              {/* Optional Fields */}
              {showOptionalFields && (
                <div className="space-y-6 pt-4 border-t border-gray-100">
                  {/* Preferred Date */}
                  <div>
                    <Label htmlFor="preferredDate" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                      Preferred Date (Optional)
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      {...form.register("preferredDate")}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300"
                    />
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <Label htmlFor="specialRequests" className="text-xs font-medium text-[#6C6C6C] uppercase tracking-wide mb-2 block">
                      Special Instructions (Optional)
                    </Label>
                    <Textarea
                      id="specialRequests"
                      {...form.register("specialRequests")}
                      placeholder="Any specific requirements, access instructions, or questions?"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-purple-200 focus:border-[#4B0082] transition-all duration-300 resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3 pt-4">
                <input
                  type="checkbox"
                  id="consent"
                  className="w-4 h-4 text-[#4B0082] mt-1 rounded border-gray-300 focus:ring-[#4B0082] focus:ring-2"
                  required
                  aria-label="Consent to contact"
                />
                <Label htmlFor="consent" className="text-sm text-[#6C6C6C] leading-relaxed">
                  I agree to be contacted via phone or email regarding my request. *
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={createQuoteMutation.isPending}
                className="w-full bg-[#4B0082] hover:bg-[#6A0DAD] text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-purple-200"
                style={{ borderRadius: '8px' }}
              >
                {createQuoteMutation.isPending ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit Quote Request"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}