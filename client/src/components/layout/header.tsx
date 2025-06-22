import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sparkles, ChevronDown, Home, Building, Car, Scissors, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Apartment Cleaning", href: "/services/apartment" },
    { name: "Corporate Cleaning", href: "/services/corporate" },
    { name: "Apartment Block Cleaning", href: "/services/apartment-block" },
    { name: "Car Wash", href: "/services/car-wash" },
    { name: "Carpet Cleaning", href: "/services/carpet" },
    { name: "Garbage Can Cleaning", href: "/services/garbage-can" }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header 
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: '#F3EFFA',
        borderBottomColor: 'rgba(120, 0, 170, 0.15)',
        borderBottomWidth: '1px'
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center">
              <h1 
                className="font-playfair text-[#4B0082] font-semibold tracking-wide relative logo-shimmer"
                style={{ fontSize: '26px' }}
              >
                Næst
                <span className="relative">
                  i
                  <Sparkles 
                    className="absolute -top-2 -right-1 w-3 h-3 text-[#B57EDC] sparkle-animate"
                    style={{ animation: 'sparkle 2s ease-in-out infinite' }}
                  />
                </span>
                r
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: '40px' }}>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`nav-gold-item font-medium text-[17px] transition-all duration-300 cursor-pointer relative ${
                    isActive(item.href) ? "nav-active-gold" : ""
                  }`}
                  style={{ 
                    fontFamily: 'Poppins, system-ui, sans-serif',
                    fontWeight: '500',
                    color: '#D4AF37'
                  }}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServiceDropdownOpen(true)}
              onMouseLeave={() => setIsServiceDropdownOpen(false)}
            >
              <Link href="/services">
                <span
                  className={`nav-gold-item font-medium text-[17px] transition-all duration-300 cursor-pointer relative ${
                    location.startsWith('/services') ? "nav-active-gold" : ""
                  }`}
                  style={{ 
                    fontFamily: 'Poppins, system-ui, sans-serif',
                    fontWeight: '500',
                    color: '#D4AF37'
                  }}
                >
                  Service
                </span>
              </Link>

              {/* Dropdown Menu */}
              {isServiceDropdownOpen && (
                <div className="service-dropdown absolute top-full left-0 mt-2 z-50">
                  <div 
                    className="bg-white border py-3"
                    style={{
                      background: '#F3EFFA',
                      border: '1px solid #DDD4E8',
                      borderRadius: '6px',
                      boxShadow: '0px 8px 16px rgba(0,0,0,0.08)',
                      minWidth: '220px'
                    }}
                  >
                    {services.map((service) => (
                      <Link key={service.name} href={service.href}>
                        <div
                          className="service-gold-item px-5 py-3 text-[16px] cursor-pointer transition-all duration-200"
                          style={{
                            color: '#D4AF37',
                            fontFamily: 'Poppins, system-ui, sans-serif',
                            fontWeight: '500',
                            lineHeight: '1.5'
                          }}
                        >
                          {service.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Get Quote Button */}
            <Link href="/quote">
              <Button
                className="quote-gold-button px-6 py-2 rounded-full text-white font-medium text-[16px] shadow-lg transition-all duration-300"
                style={{
                  background: '#D4AF37',
                  boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
                  fontFamily: 'Poppins, system-ui, sans-serif',
                  fontWeight: '600'
                }}
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#4B0082] hover:text-[#6A0DAD] p-2"
            >
              {isMobileMenuOpen ? 
                <X className="h-5 w-5" style={{ strokeWidth: '1.5px' }} /> : 
                <Menu className="h-5 w-5" style={{ strokeWidth: '1.5px' }} />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mobile-menu"
            style={{
              background: 'linear-gradient(135deg, rgba(230, 230, 250, 0.95) 0%, rgba(240, 230, 255, 0.95) 100%)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navigation.map((item, index) => (
                <Link key={item.name} href={item.href}>
                  <div
                    className="mobile-nav-item block w-full text-left px-4 py-3 font-medium text-[18px] transition-all duration-300 rounded-lg hover:bg-white/30"
                    style={{ 
                      fontFamily: 'Poppins, system-ui, sans-serif',
                      color: '#D4AF37',
                      animationDelay: `${index * 100}ms`
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="mobile-nav-item">
                <div className="font-semibold text-[18px] px-4 py-2 border-b border-gold-200" style={{ color: '#D4AF37' }}>
                  Services
                </div>
                <div className="pl-4 space-y-2 mt-2">
                  {services.map((service) => (
                    <Link key={service.name} href={service.href}>
                      <div
                        className="px-4 py-2 transition-colors duration-200 rounded-lg hover:bg-white/30"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ 
                          fontFamily: 'Poppins, system-ui, sans-serif',
                          color: '#D4AF37'
                        }}
                      >
                        {service.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Mobile Get Quote Button */}
              <Link href="/quote">
                <Button
                  className="w-full mt-4 px-6 py-3 rounded-full text-white font-medium text-[18px] shadow-lg"
                  style={{
                    background: '#D4AF37',
                    boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
                    fontFamily: 'Poppins, system-ui, sans-serif'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}