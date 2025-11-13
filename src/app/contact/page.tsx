'use client'

import { Mail, Phone, MapPin, Clock, Award, Users, Shield } from 'lucide-react'
import { LeadForm } from '@/components/LeadForm'

export default function ContactPage() {
  // M'LiteEv Complete Model Lineup - All 7 models with their color variants
  const scooters = [
    {
      id: '1',
      name: 'M\'LiteEv Urban Elite',
      variants: [
        { id: '1a', color_name: 'Red' },
        { id: '1b', color_name: 'Black' },
        { id: '1c', color_name: 'White' },
      ],
    },
    {
      id: '2',
      name: 'M\'LiteEv City Pro',
      variants: [
        { id: '2a', color_name: 'Gray' },
        { id: '2b', color_name: 'Blue' },
        { id: '2c', color_name: 'Silver' },
      ],
    },
    {
      id: '3',
      name: 'M\'LiteEv Metro X',
      variants: [
        { id: '3a', color_name: 'Teal' },
        { id: '3b', color_name: 'White' },
        { id: '3c', color_name: 'Black' },
      ],
    },
    {
      id: '4',
      name: 'M\'LiteEv Eco Plus',
      variants: [
        { id: '4a', color_name: 'Green' },
        { id: '4b', color_name: 'White' },
        { id: '4c', color_name: 'Gray' },
      ],
    },
    {
      id: '5',
      name: 'M\'LiteEv Sport',
      variants: [
        { id: '5a', color_name: 'Orange' },
        { id: '5b', color_name: 'Black' },
        { id: '5c', color_name: 'Red' },
      ],
    },
    {
      id: '6',
      name: 'M\'LiteEv Classic',
      variants: [
        { id: '6a', color_name: 'Beige' },
        { id: '6b', color_name: 'Brown' },
        { id: '6c', color_name: 'Cream' },
      ],
    },
    {
      id: '7',
      name: 'M\'LiteEv Cruiser',
      variants: [
        { id: '7a', color_name: 'Blue' },
        { id: '7b', color_name: 'Silver' },
        { id: '7c', color_name: 'Black' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bg via-secondary-bg to-neutral-dark">
      {/* Premium Contact Hero with Animated Background */}
      <section className="relative overflow-hidden pb-8 md:pb-12 pt-0">
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-accent-gold" />
              <span className="text-text-primary font-medium">Premium Electric Mobility</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-text-primary via-accent-gold to-accent-teal bg-clip-text text-transparent mb-8 leading-tight">
              Let's Start Your
              <span className="block text-accent-gold">Electric Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Experience the future of urban mobility. Our premium electric scooters are crafted for the modern lifestyle.
            </p>
            
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-gray-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 xl:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-text-primary mb-4">
                  Get in Touch
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed">
                  Connect with our experts and discover your perfect electric companion.
                </p>
              </div>
              
              {/* Premium Contact Cards */}
              <div className="space-y-4">
                <a href="tel:+919876543210" className="group block">
                  <div className="relative p-8 bg-secondary-bg backdrop-blur-xl rounded-3xl border border-border-gray hover:border-accent-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-gold/20 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-5">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-gold to-accent-gold-hover rounded-2xl flex items-center justify-center shadow-lg shadow-accent-gold/25">
                        <Phone className="w-7 h-7 text-primary-bg" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-1">Call Us</h3>
                        <p className="text-lg text-text-primary font-semibold">+91 98765 43210</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>Mon-Sat, 9AM-7PM IST</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="mailto:info@mliteev.com" className="group block">
                  <div className="relative p-8 bg-secondary-bg backdrop-blur-xl rounded-3xl border border-border-gray hover:border-accent-teal/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-teal/20 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-5">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-teal to-accent-teal rounded-2xl flex items-center justify-center shadow-lg shadow-accent-teal/25">
                        <Mail className="w-7 h-7 text-primary-bg" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-1">Email Us</h3>
                        <p className="text-lg text-text-primary font-semibold">info@mliteev.com</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>Response within 24 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="group">
                  <div className="relative p-8 bg-secondary-bg backdrop-blur-xl rounded-3xl border border-border-gray hover:border-accent-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-gold/20 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-5">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent-teal to-accent-teal rounded-2xl flex items-center justify-center shadow-lg shadow-accent-teal/25">
                        <MapPin className="w-7 h-7 text-primary-bg" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-1">Visit Our Store</h3>
                        <p className="text-lg text-text-primary">Premium Experience Center</p>
                        <p className="text-text-secondary">Mumbai, Maharashtra</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-text-secondary">
                          <Clock className="w-4 h-4" />
                          <span>Mon-Sun, 10AM-8PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-5xl font-bold text-text-primary mb-6">
                  Start Your Journey
                </h2>
                <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                  Join thousands of satisfied customers who've discovered the future of urban mobility with M'LiteEv.
                </p>
              </div>
              
              {/* Premium Form Container */}
              <div className="relative p-8 bg-secondary-bg backdrop-blur-xl rounded-3xl border border-border-gray hover:border-accent-gold/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent rounded-3xl"></div>
                <div className="relative">
                  <LeadForm scooters={scooters} />
                </div>
              </div>
              
              {/* Premium Benefits Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-secondary-bg backdrop-blur-xl rounded-2xl border border-border-gray">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-gold to-accent-gold-hover rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary-bg" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">Premium Benefits</h3>
                  </div>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-3">✓</span>
                      Free Home Test Rides
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-3">✓</span>
                      Expert Customer Support
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-3">✓</span>
                      Premium Build Quality
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-secondary-bg backdrop-blur-xl rounded-2xl border border-border-gray">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-teal to-accent-teal rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-bg" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">Service Excellence</h3>
                  </div>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-3">✓</span>
                      Local Service Support
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-3">✓</span>
                      Quick Response Team
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-3">✓</span>
                      Premium Customer Care
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
