import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-bg text-text-primary border-t border-border-gray">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              M<span className="text-accent-gold">'</span>LiteEv
            </h3>
            <p className="text-xs text-accent-gold uppercase tracking-widest font-semibold mb-4">
              Energise Your Ride
            </p>
            <p className="text-text-secondary leading-relaxed max-w-sm mb-4">
              Deals in all kinds of electrical scooty & spare parts. 7 premium models from S.L Pro to CS 3.
            </p>
            <p className="text-xs text-text-secondary">
              Power Range: 1000W - 1200W | Speed: 40-55 km/h
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/models" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Our Models
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary hover:text-accent-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-text-secondary hover:text-accent-gold transition-colors">
                  Support & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-accent-gold transition-colors">
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
                <Phone className="w-5 h-5 mr-3 text-accent-gold mt-1 flex-shrink-0" />
                <span className="text-text-secondary">+91 98186 49138</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-accent-gold mt-1 flex-shrink-0" />
                <span className="text-text-secondary">mukulgarg65@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent-gold mt-1 flex-shrink-0" />
                <span className="text-text-secondary">Near Atal Park, Sector-2<br />Faridabad, Haryana-121004</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border-gray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm mb-4 md:mb-0">
              © {currentYear} M&rsquo;LiteEv. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                Terms of Use
              </Link>
              <Link href="/quality" className="text-text-secondary hover:text-accent-gold transition-colors text-sm">
                Quality Standards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
