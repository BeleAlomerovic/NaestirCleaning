import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageCircle, Shield, Award, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer 
      className="bg-[#F3F0FA] text-[#2C2C2C]"
      style={{ 
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)' 
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Branding & Identity (Leftmost Column) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-[#4B0082] mb-2">Næstir</h3>
              <p className="text-lg text-[#2C2C2C] font-medium">
                Professional. Reliable. Sparkling Clean.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-[#4B0082]" />
                <span>Insured & Bonded</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Leaf className="w-4 h-4 text-[#4B0082]" />
                <span>Eco-Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="w-4 h-4 text-[#4B0082]" />
                <span>5-Star Rated</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4B0082] hover:bg-[#4B0082] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4B0082] hover:bg-[#4B0082] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4B0082] hover:bg-[#4B0082] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#4B0082] hover:bg-[#4B0082] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation (Center-Left Column) */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#4B0082]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#2C2C2C] hover:text-[#6A0DAD] hover:underline transition-all duration-300 text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#2C2C2C] hover:text-[#6A0DAD] hover:underline transition-all duration-300 text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-[#2C2C2C] hover:text-[#6A0DAD] hover:underline transition-all duration-300 text-base">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#2C2C2C] hover:text-[#6A0DAD] hover:underline transition-all duration-300 text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-[#2C2C2C] hover:text-[#6A0DAD] hover:underline transition-all duration-300 text-base">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#2C2C2C] hover:text-[#6A0DAD] hover:underline transition-all duration-300 text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Center-Right Column) */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#4B0082]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#4B0082] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#2C2C2C] leading-relaxed">
                    123 Clean Ave, Suite 4B<br />
                    City, ZIP
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#4B0082] flex-shrink-0" />
                <a 
                  href="tel:+12345678910" 
                  className="text-[#2C2C2C] hover:text-[#6A0DAD] transition-colors duration-300"
                >
                  +1 (234) 567-8910
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#4B0082] flex-shrink-0" />
                <a 
                  href="mailto:support@naestir.com" 
                  className="text-[#2C2C2C] hover:text-[#6A0DAD] transition-colors duration-300"
                >
                  support@naestir.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#4B0082] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#2C2C2C] leading-relaxed">
                    <strong>Business Hours:</strong><br />
                    Mon–Sat: 8 AM – 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup (Rightmost Column) */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[#4B0082]">Stay Updated</h4>
            <p className="text-[#2C2C2C] text-sm leading-relaxed">
              Get cleaning tips, special offers, and updates delivered to your inbox.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4B0082] focus:border-transparent text-[#2C2C2C] placeholder-[#6A0DAD]"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="w-full bg-[#4B0082] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#6A0DAD] transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm text-gray-600">
            <p>© 2025 Næstir. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="/terms" className="hover:text-[#6A0DAD] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/privacy" className="hover:text-[#6A0DAD] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/sitemap" className="hover:text-[#6A0DAD] transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
