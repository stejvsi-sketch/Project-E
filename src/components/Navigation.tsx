'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin, User } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/models', label: 'Models' },
    { href: '/about', label: 'About' },
    { href: '/support', label: 'Support' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`bg-white sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled ? 'shadow-md border-gray-200' : 'shadow-sm border-gray-100'
    }`}>
      {/* Utility Bar - Hidden on Mobile */}
      <div className="hidden md:block border-b border-gray-100 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-end h-10 gap-6 text-sm">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-600 hover:text-primary-orange transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <Link href="/contact" className="flex items-center gap-2 text-gray-600 hover:text-primary-orange transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Find Store</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-28 py-2 md:py-3">
          {/* Logo with Title & Motto */}
          <Link href="/" className="flex items-center gap-2 md:gap-4 group">
            <Image
              src="/images/logo/logo.png"
              alt="M'LiteEv"
              width={400}
              height={140}
              priority
              className="h-12 w-auto md:h-20"
            />
            <div className="flex flex-col">
              <div className="text-lg md:text-3xl font-bold text-neutral-dark group-hover:text-primary-orange transition-colors">
                M<span className="text-primary-orange">'</span>LiteEv
              </div>
              <div className="text-[8px] md:text-xs text-gray-600 uppercase tracking-widest font-semibold">
                Energise Your Ride
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-dark hover:text-primary-orange transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button - Premium Style */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg hover:bg-gray-100 transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} className="text-neutral-dark" strokeWidth={2} />
            ) : (
              <Menu size={28} className="text-neutral-dark" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div
          className={cn(
            'md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
          style={{ top: '5rem' }} // Below navigation bar (h-20 = 5rem on mobile)
        >
          <div className="flex flex-col justify-between h-full p-8 bg-gradient-to-b from-transparent to-teal-900/20">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 pt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-2xl md:text-3xl font-semibold hover:text-teal-400 transition-colors border-b border-gray-700 pb-4"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl md:text-3xl font-semibold hover:text-teal-400 transition-colors border-b border-gray-700 pb-4"
              >
                Contact Us
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 justify-center pb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 12s0-3.85-.46-5.58c-.25-.95-1-1.7-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46c-.95.25-1.69 1.01-1.94 1.96C1 8.15 1 12 1 12s0 3.85.46 5.58c.25.95 1 1.7 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46c.95-.25 1.69-1.01 1.94-1.96C23 15.85 23 12 23 12zm-13 3.27V8.73L15.5 12 10 15.27z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
