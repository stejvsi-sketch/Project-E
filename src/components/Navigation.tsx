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
      {/* Utility Bar */}
      <div className="border-b border-gray-100 bg-gray-50">
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
        <div className="flex items-center justify-between h-28 md:h-28 py-3">
          {/* Logo with Title & Motto */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <Image
              src="/images/logo/logo.png"
              alt="M'LiteEv"
              width={400}
              height={140}
              priority
              className="h-16 w-auto md:h-20"
            />
            <div className="flex flex-col">
              <div className="text-xl md:text-3xl font-bold text-neutral-dark group-hover:text-primary-orange transition-colors">
                M<span className="text-primary-orange">'</span>LiteEv
              </div>
              <div className="text-[9px] md:text-xs text-gray-600 uppercase tracking-widest font-semibold">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-gray transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-dark hover:text-primary-orange transition-colors duration-200 font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
