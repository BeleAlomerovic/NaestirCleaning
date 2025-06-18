import { Link } from "wouter";
import { Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-naestir-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Næstir</h3>
            <p className="text-gray-300 mb-4">
              Professional cleaning services you can trust. Making your spaces spotless and healthy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Apartment Cleaning
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Blocks Cleaning
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Corporate Cleaning
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Car Wash
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Garbage Can Cleaning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors duration-200">
                  Reviews
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+1 (555) 123-NÆSTIR</li>
              <li>hello@naestir.com</li>
              <li>Metropolitan Area</li>
              <li>Mon-Sun: 7AM-7PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Næstir Professional Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
