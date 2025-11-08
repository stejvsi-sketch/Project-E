import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              M<span className="text-primary-orange">'</span>LiteEv
            </h3>
            <p className="text-xs text-primary-orange uppercase tracking-widest font-semibold mb-4">
              Energise Your Ride
            </p>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Revolutionizing urban transportation with premium electric scooters. Sustainable, stylish, and built for the modern city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/models" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Our Models
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Support & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary-orange mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-primary-orange mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@mliteev.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary-orange mt-1 flex-shrink-0" />
                <span className="text-gray-400">Your Location, City, State</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-orange transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-orange transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-primary-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} M&rsquo;LiteEv. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-orange transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-orange transition-colors text-sm">
                Terms of Use
              </Link>
              <Link href="/warranty" className="text-gray-400 hover:text-primary-orange transition-colors text-sm">
                Warranty Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
