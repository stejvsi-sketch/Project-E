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
      document.body.style.height = '100vh'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.documentElement.style.overflow = ''
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
    <nav className={`bg-primary-bg fixed top-0 left-0 right-0 z-50 border-b-2 transition-all duration-500 ${
      scrolled ? 'shadow-lg border-accent-gold/30' : 'border-accent-gold/20'
    }`}>

      {/* Main Navigation */}
      <div className="container-custom relative">
        <div className="relative flex items-center justify-between h-20 md:h-24 py-4 md:py-5">
          {/* Clean Standalone Logo */}
          <Link href="/" className="flex items-center gap-4 md:gap-5 group">
            <div className="relative w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110">
              <Image
                src="/images/logo/logo.png"
                alt="M'LiteEv"
                width={400}
                height={140}
                priority
                className="h-full w-full object-contain"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
            
            {/* Refined Brand Identity */}
            <div className="flex flex-col justify-center min-w-0">
              <div className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-text-heading tracking-tight leading-none">
                M<span className="text-accent-gold">'</span>LiteEv
              </div>
              <div className="text-[9px] md:text-[11px] text-accent-gold font-bold uppercase tracking-[0.4em] mt-2 leading-none">
                Luxury Electric Mobility
              </div>
            </div>
          </Link>

          {/* Refined Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2.5 text-text-heading hover:text-accent-gold transition-all duration-300 font-medium text-sm tracking-wide group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
            
            {/* Luxury CTA */}
            <div className="ml-6">
              <Link href="/contact">
                <button className="px-8 py-2.5 bg-accent-gold text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-accent-gold-hover transition-all duration-300 shadow-sm hover:shadow-md">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>

          {/* Refined Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 rounded-sm border border-accent-gold/30 hover:border-accent-gold transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-text-heading group-hover:text-accent-gold transition-colors duration-300" />
          </button>
        </div>

        {/* Premium Side Menu Overlay */}
        <div
          className={cn(
            'md:hidden fixed inset-0 z-[100] transition-all duration-500 ease-in-out',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
          style={{ top: 0 }}
        >
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Ultra Premium Sliding Menu Panel */}
          <div
            className={cn(
              'absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] shadow-2xl transition-all duration-500 ease-out overflow-y-hidden bg-secondary-bg border-l-2 border-accent-gold/30',
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
            style={{ 
              willChange: 'transform',
              height: '100vh'
            }}
          >
            <div className="flex flex-col h-full p-8">
              {/* Premium Header with Close */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-accent-gold/20">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-accent-gold via-accent-gold-hover to-accent-teal bg-clip-text text-transparent">Menu</h2>
                  <p className="text-xs text-text-secondary mt-1 tracking-widest uppercase">Navigation</p>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="relative p-3 rounded-xl bg-gradient-to-br from-accent-gold/15 to-accent-teal/15 border border-accent-gold/30 hover:border-accent-gold hover:scale-110 active:scale-95 transition-all duration-300 group shadow-xl"
                  aria-label="Close menu"
                >
                  <div className="absolute inset-0 rounded-xl bg-accent-gold/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <X className="relative z-10 w-6 h-6 text-accent-gold group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>
            {/* Ultra Premium Navigation Links */}
            <div className="flex-1 flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group px-6 py-5 rounded-2xl transition-all duration-500 hover:bg-accent-champagne border border-transparent hover:border-accent-gold"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideIn 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className="relative flex items-center justify-between">
                    <span className="text-2xl md:text-3xl font-bold text-text-heading group-hover:text-accent-gold transition-colors duration-300 uppercase tracking-wide font-display">
                      {link.label}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-accent-gold/0 group-hover:bg-accent-gold transition-all duration-300"></div>
                  </div>
                  
                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
              
              {/* Ultra Premium Mobile CTA */}
              <div className="mt-auto pt-8 border-t border-border-subtle">
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="relative inline-flex items-center justify-center w-full px-8 py-5 bg-accent-gold hover:bg-accent-gold-hover text-white font-black text-lg uppercase tracking-widest rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 hover:scale-105 active:scale-95 group overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:animate-shine"></div>
                  <span className="relative z-10">Enquire Now</span>
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
