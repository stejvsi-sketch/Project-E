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
    <nav className={`bg-primary-bg/95 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      scrolled ? 'shadow-xl border-border-gray/50 bg-primary-bg' : 'shadow-lg border-border-gray/20'
    }`}>

      {/* Main Navigation */}
      <div className="container-custom relative">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/3 via-transparent to-accent-teal/3 blur-xl opacity-30"></div>
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
            {/* Hamburger Icon - no transform */}
            <Menu className="relative z-10 w-6 h-6 text-text-primary group-hover:text-accent-gold transition-colors duration-300" />
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
              'absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] shadow-2xl transition-all duration-500 ease-out overflow-y-auto',
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}
            style={{ 
              backgroundColor: '#0A0A0A',
              borderLeft: '2px solid rgba(255, 215, 0, 0.2)',
              backgroundImage: `
                linear-gradient(135deg, rgba(255, 215, 0, 0.03) 0%, transparent 50%, rgba(0, 188, 212, 0.03) 100%),
                radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.08), transparent 40%),
                radial-gradient(circle at 20% 80%, rgba(0, 188, 212, 0.08), transparent 40%)
              `,
              boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.5), inset 0 0 100px rgba(255, 215, 0, 0.02)',
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
                  className="relative group px-6 py-5 rounded-2xl transition-all duration-500 hover:bg-gradient-to-r hover:from-accent-gold/10 hover:via-accent-gold/5 hover:to-transparent border border-transparent hover:border-accent-gold/20"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideIn 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-gold/20 to-accent-teal/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center justify-between">
                    <span className="text-2xl md:text-3xl font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-300 uppercase tracking-wide">
                      {link.label}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-accent-gold/0 group-hover:bg-accent-gold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-gold/50"></div>
                  </div>
                  
                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
              
              {/* Ultra Premium Mobile CTA */}
              <div className="mt-auto pt-8 border-t border-accent-gold/20">
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="relative inline-flex items-center justify-center w-full px-8 py-5 bg-gradient-to-r from-accent-gold via-accent-gold-hover to-accent-gold text-primary-bg font-black text-lg uppercase tracking-widest rounded-2xl shadow-2xl hover:shadow-accent-gold/50 transition-all duration-500 hover:scale-105 active:scale-95 group overflow-hidden"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:animate-shine"></div>
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-gold to-accent-teal opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300"></div>
                  <span className="relative z-10">Enquire Now</span>
                </Link>
                
                {/* Contact info */}
                <div className="mt-6 text-center space-y-2">
                  <p className="text-sm text-text-secondary">Call us now</p>
                  <a href="tel:9818649138" className="text-accent-gold font-bold text-lg hover:text-accent-gold-hover transition-colors">9818649138</a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
