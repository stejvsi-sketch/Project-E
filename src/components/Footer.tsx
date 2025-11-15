import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Instagram, Twitter } from 'lucide-react'
import { COMPANY_INFO } from '@/data/models'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-text-charcoal text-white border-t-2 border-accent-gold/40 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(247,230,202,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="container-custom py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white font-display">
                M<span className="text-accent-gold">'</span>LiteEv
              </h3>
              <p className="text-xs text-accent-gold uppercase tracking-[0.35em] font-semibold">
                {COMPANY_INFO.tagline}
              </p>
              <div className="w-16 h-0.5 bg-accent-gold mt-3"></div>
            </div>
            <p className="text-white/90 leading-relaxed text-sm mb-6">
              {COMPANY_INFO.description}
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <p className="font-semibold text-accent-gold">7 Premium Models</p>
              <p>Power: 1000W - 1200W</p>
              <p>Speed: 40-55 km/h</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/models', label: 'Our Models' },
                { href: '/about', label: 'About Us' },
                { href: '/support', label: 'Support & FAQ' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group inline-flex items-center text-white/80 hover:text-accent-gold transition-all duration-300"
                  >
                    <span className="text-sm">{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="group">
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="flex items-start hover:translate-x-1 transition-transform duration-300">
                  <div className="p-2 rounded-lg bg-accent-gold/10 group-hover:bg-accent-gold/20 transition-colors mr-3 flex-shrink-0">
                    <Phone className="w-4 h-4 text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Call Us</p>
                    <span className="text-white text-sm font-semibold group-hover:text-accent-gold transition-colors">{COMPANY_INFO.contact.phoneFormatted}</span>
                  </div>
                </a>
              </li>
              <li className="group">
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="flex items-start hover:translate-x-1 transition-transform duration-300">
                  <div className="p-2 rounded-lg bg-accent-gold/10 group-hover:bg-accent-gold/20 transition-colors mr-3 flex-shrink-0">
                    <Mail className="w-4 h-4 text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 mb-0.5">Email</p>
                    <span className="text-white text-sm font-semibold group-hover:text-accent-gold transition-colors break-all">{COMPANY_INFO.contact.email}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Visit Us</h4>
            <div className="group">
              <a 
                href={COMPANY_INFO.address.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 rounded-lg bg-accent-gold/10 border border-accent-gold/20 hover:border-accent-gold/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start mb-3">
                  <div className="p-2 rounded-lg bg-accent-gold/20 mr-3 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-accent-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/60 mb-1">Our Location</p>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-accent-gold text-xs font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  <span>View on Maps</span>
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/90 text-sm mb-2">
                © {currentYear} <span className="text-accent-gold font-semibold">M&rsquo;LiteEv</span>. All rights reserved.
              </p>
              <p className="text-white/60 text-xs">
                Crafted with precision for the future of mobility
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { href: '/privacy', label: 'Privacy' },
                { href: '/terms', label: 'Terms' },
                { href: '/quality', label: 'Quality' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-white/80 hover:text-accent-gold transition-colors text-xs uppercase tracking-wider font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
