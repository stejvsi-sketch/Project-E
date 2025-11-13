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

  // Prevent body scroll when menu is open (fixes scroll glitch)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/models', label: 'Models' },
    { href: '/about', label: 'About' },
    { href: '/support', label: 'Support' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`bg-gradient-to-r from-secondary-bg via-primary-bg to-secondary-bg backdrop-blur-xl sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled ? 'shadow-xl border-border-gray bg-opacity-95' : 'shadow-lg border-border-gray/30 bg-opacity-90'
    }`}>

      {/* Main Navigation */}
      <div className="container-custom relative">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 via-transparent to-accent-teal/5 blur-xl opacity-30"></div>
        <div className="relative flex items-center justify-between h-20 md:h-28 py-2 md:py-3">
          {/* Logo with Title & Motto */}
          <Link href="/" className="flex items-center gap-2 md:gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 md:w-20 md:h-20 relative p-1 rounded-xl bg-gradient-to-br from-accent-gold/10 to-accent-teal/10 shadow-lg">
              <Image
                src="/images/logo/logo.png"
                alt="M'LiteEv"
                width={400}
                height={140}
                priority
                className="h-full w-full object-contain filter brightness-125 contrast-110 saturate-110 drop-shadow-lg"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="text-lg md:text-3xl font-bold text-text-primary group-hover:text-accent-gold transition-colors whitespace-nowrap">
                M<span className="text-accent-gold">'</span>LiteEv
              </div>
              <div className="text-[8px] md:text-xs text-text-secondary uppercase tracking-widest font-semibold whitespace-nowrap">
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
                className="text-text-primary hover:text-accent-gold transition-colors duration-200 font-medium"
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
            className="md:hidden p-3 rounded-lg hover:bg-secondary-bg transition-all active:scale-95"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} className="text-text-primary" strokeWidth={2} />
            ) : (
              <Menu size={28} className="text-text-primary" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div
          className={cn(
            'md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out bg-gradient-to-br from-secondary-bg via-primary-bg to-secondary-bg backdrop-blur-2xl',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
          style={{ top: '5rem' }} // Below navigation bar (h-20 = 5rem on mobile)
        >
          <div className="flex flex-col justify-between h-full p-8 bg-gradient-to-b from-accent-gold/3 via-transparent to-accent-teal/3">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 pt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-primary text-2xl md:text-3xl font-semibold hover:text-accent-gold transition-colors border-b border-border-gray pb-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}
