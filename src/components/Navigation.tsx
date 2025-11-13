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

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previousOverflow
      }
    }
    document.body.style.overflow = ''
  }, [isMenuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/models', label: 'Models' },
    { href: '/about', label: 'About' },
    { href: '/support', label: 'Support' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`bg-gradient-to-r from-secondary-bg/80 via-primary-bg/70 to-secondary-bg/80 backdrop-blur-xl sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled ? 'shadow-xl border-border-gray/50 bg-opacity-90' : 'shadow-lg border-border-gray/20 bg-opacity-80'
    }`}>

      {/* Main Navigation */}
      <div className="container-custom relative">
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/10 via-white/5 to-accent-teal/10 blur-xl opacity-50"></div>
        <div className="relative flex items-center justify-between h-24 md:h-32 py-3 md:py-4">
          {/* Premium Logo Section */}
          <Link href="/" className="flex items-center gap-3 md:gap-6 group">
            <div className="relative">
              {/* Logo Container with Premium Effects */}
              <div className="w-16 h-16 md:w-24 md:h-24 relative p-2 rounded-2xl bg-gradient-to-br from-accent-gold/15 via-white/5 to-accent-teal/15 shadow-2xl backdrop-blur-sm border border-white/10 group-hover:scale-105 transition-all duration-500">
                {/* Inner glow */}
                <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-teal/20 blur-sm opacity-50"></div>
                <Image
                  src="/images/logo/logo.png"
                  alt="M'LiteEv"
                  width={400}
                  height={140}
                  priority
                  className="relative z-10 h-full w-full object-contain filter brightness-125 contrast-115 saturate-120 drop-shadow-xl"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
            
            {/* Premium Brand Identity */}
            <div className="flex flex-col justify-center min-w-0">
              <div className="text-xl md:text-4xl font-black text-text-primary group-hover:text-accent-gold transition-all duration-300 tracking-tight">
                M<span className="text-accent-gold font-light">'</span><span className="bg-gradient-to-r from-text-primary to-accent-gold bg-clip-text text-transparent">LiteEv</span>
              </div>
              <div className="text-xs md:text-sm text-text-secondary/80 font-semibold uppercase tracking-[0.2em] mt-1 group-hover:text-accent-gold/70 transition-all duration-300">
                <span className="hidden sm:inline">Premium </span>Electric Mobility
              </div>
              {/* Subtle underline accent */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-accent-gold to-accent-teal transition-all duration-500 mt-1"></div>
            </div>
          </Link>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-text-primary hover:text-accent-gold transition-all duration-300 font-semibold text-sm uppercase tracking-wider group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover background effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-gold/10 to-accent-teal/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-accent-gold to-accent-teal transition-all duration-300"></div>
              </Link>
            ))}
            
            {/* Premium CTA Button */}
            <div className="ml-4 relative">
              <Link href="/contact" className="relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-accent-gold to-accent-gold-hover text-primary-bg font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl hover:shadow-accent-gold/25 transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden">
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-accent-teal/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Enquire Now</span>
                {/* Shine effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
              </Link>
            </div>
          </div>

          {/* Premium Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-4 rounded-xl bg-gradient-to-br from-accent-gold/10 to-accent-teal/10 border border-white/10 backdrop-blur-sm hover:scale-105 active:scale-95 transition-all duration-300 group shadow-lg"
            aria-label="Toggle menu"
          >
            {/* Button glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            {/* Always show hamburger menu - premium style */}
            <div className="relative z-10 flex flex-col justify-center items-center w-6 h-6">
              <div className={`w-6 h-0.5 bg-text-primary group-hover:bg-accent-gold transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-text-primary group-hover:bg-accent-gold transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-text-primary group-hover:bg-accent-gold transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Premium Side Menu Overlay */}
        <div
          className={cn(
            'md:hidden fixed inset-0 z-[60] transition-opacity duration-500 ease-in-out',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Premium Sliding Menu Panel */}
          <div
            className={cn(
              'absolute left-0 top-0 h-full w-[18rem] max-w-[88vw] shadow-2xl transition-transform duration-500 ease-out overflow-hidden',
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            )}
            style={{ 
              background: 'linear-gradient(to bottom, #1C1C1C, #121212, #1C1C1C)',
              borderRight: '1px solid #444444',
              backgroundImage: 'radial-gradient(circle at top left, rgba(255, 215, 0, 0.08), transparent 55%)',
              willChange: 'transform',
              backgroundColor: '#121212' // Fallback solid background
            }}
          >
            <div className="flex flex-col h-full p-8 overflow-y-auto" style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
            {/* Premium Navigation Links */}
            <div className="flex flex-col space-y-8 pt-24">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group text-text-primary text-3xl font-bold hover:text-accent-gold transition-all duration-300 pb-6 border-b border-border-gray/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 uppercase tracking-wider">{link.label}</span>
                  {/* Hover effect background */}
                  <div className="absolute inset-0 -mx-4 rounded-xl bg-gradient-to-r from-accent-gold/10 to-accent-teal/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  {/* Gold accent line */}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-16 h-1 bg-gradient-to-r from-accent-gold to-accent-teal transition-all duration-500"></div>
                </Link>
              ))}
              
              {/* Premium Mobile CTA */}
              <div className="mt-12 pt-8 border-t border-border-gray/30">
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-gold-hover text-primary-bg font-bold text-lg uppercase tracking-wider rounded-xl shadow-xl hover:shadow-2xl hover:shadow-accent-gold/25 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
