'use client'

import { Mail, Phone, MapPin, Clock, Award, Users, Shield, ArrowUpRight } from 'lucide-react'
import { LeadForm } from '@/components/LeadForm'
import { ALL_MODELS, COMPANY_INFO } from '@/data/models'

export default function ContactPage() {
  // M'LiteEv Complete Model Lineup - 7 models with accurate color variants (Red, White, Black)
  const scooters = ALL_MODELS.map((model, index) => ({
    id: String(index + 1),
    name: model.name,
    variants: model.colors.map((color, colorIndex) => ({
      id: `${index + 1}${String.fromCharCode(97 + colorIndex)}`,
      color_name: color
    }))
  }))

  // Legacy color format for backward compatibility
  const legacyScooters = [
    {
      id: '1',
      name: 'S.L Pro',
      variants: [
        { id: '1a', color_name: 'Red' },
        { id: '1b', color_name: 'White' },
        { id: '1c', color_name: 'Black' },
      ],
    },
    {
      id: '2',
      name: 'D.L Pro',
      variants: [
        { id: '2a', color_name: 'Red' },
        { id: '2b', color_name: 'White' },
        { id: '2c', color_name: 'Black' },
      ],
    },
    {
      id: '3',
      name: 'CS Pro',
      variants: [
        { id: '3a', color_name: 'Red' },
        { id: '3b', color_name: 'White' },
        { id: '3c', color_name: 'Black' },
      ],
    },
    {
      id: '4',
      name: 'CS Pro +',
      variants: [
        { id: '4a', color_name: 'Red' },
        { id: '4b', color_name: 'White' },
        { id: '4c', color_name: 'Black' },
      ],
    },
    {
      id: '5',
      name: 'Vespa Pro',
      variants: [
        { id: '5a', color_name: 'Red' },
        { id: '5b', color_name: 'White' },
        { id: '5c', color_name: 'Black' },
      ],
    },
    {
      id: '6',
      name: 'Vespa Pro +',
      variants: [
        { id: '6a', color_name: 'Red' },
        { id: '6b', color_name: 'White' },
        { id: '6c', color_name: 'Black' },
      ],
    },
    {
      id: '7',
      name: 'CS 3',
      variants: [
        { id: '7a', color_name: 'Red' },
        { id: '7b', color_name: 'White' },
        { id: '7c', color_name: 'White' },
        { id: '7d', color_name: 'Blue' },
        { id: '7e', color_name: 'Grey' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-bg via-muted-bg to-secondary-bg overflow-x-hidden">
      {/* Premium Contact Hero with Animated Background */}
      <section className="relative overflow-hidden pb-6 md:pb-8 pt-2 md:pt-4">
        
        {/* Content */}
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary-bg backdrop-blur-md border border-border-subtle rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-accent-gold" />
              <span className="text-text-heading font-medium text-sm md:text-base">Premium Electric Mobility</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading mb-4 md:mb-6 leading-tight">
              Let's Start Your
              <span className="block text-accent-gold">Electric Journey</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-body leading-relaxed max-w-2xl mx-auto">
              Experience the future of urban mobility. Our premium electric scooters are crafted for the modern lifestyle.
            </p>
            
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-8 md:py-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-bg/30 to-secondary-bg/50"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,175,55,0.1) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="container-custom relative z-10 px-4">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-3 font-display">
                  Get in Touch
                </h2>
                <p className="text-base md:text-lg text-text-body leading-relaxed">
                  Connect with our experts and discover your perfect electric companion.
                </p>
              </div>
              
              {/* Premium Contact Cards */}
              <div className="space-y-3 md:space-y-4">
                <a href="tel:+919818649138" className="group block">
                  <div className="relative p-4 md:p-6 bg-muted-bg backdrop-blur-xl rounded-2xl border border-border-subtle hover:border-accent-gold transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="relative flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent-gold rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-bold text-text-heading mb-0.5">Call Us</h3>
                        <p className="text-sm md:text-base text-text-heading font-semibold truncate">+91 98186 49138</p>
                        <div className="flex items-center gap-1 md:gap-2 mt-1 text-xs md:text-sm text-text-muted">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span>Mon-Sat, 9AM-7PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="mailto:mukulgarg65@gmail.com" className="group block">
                  <div className="relative p-4 md:p-6 bg-muted-bg backdrop-blur-xl rounded-2xl border border-border-subtle hover:border-accent-gold transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="relative flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent-gold rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-bold text-text-heading mb-0.5">Email Us</h3>
                        <p className="text-sm md:text-base text-text-heading font-semibold truncate">mukulgarg65@gmail.com</p>
                        <div className="flex items-center gap-1 md:gap-2 mt-1 text-xs md:text-sm text-text-muted">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span>24h response</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="group">
                  <div className="relative p-4 md:p-6 bg-muted-bg backdrop-blur-xl rounded-2xl border border-border-subtle hover:border-accent-gold transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="relative flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent-gold rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-bold text-text-heading mb-0.5">Visit Us</h3>
                        <p className="text-sm md:text-base text-text-heading">Near Atal Park, Sector-2</p>
                        <p className="text-xs md:text-sm text-text-body">Faridabad, Haryana-121004</p>
                        <div className="flex items-center gap-1 md:gap-2 mt-1 text-xs md:text-sm text-text-muted">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span>Mon-Sun, 10AM-8PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-text-heading mb-3 md:mb-4">
                  Start Your Journey
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-text-body leading-relaxed max-w-xl">
                  Join thousands of satisfied customers who've discovered the future of urban mobility.
                </p>
              </div>
              
              {/* Premium Form Container */}
              <div className="relative p-4 md:p-6 bg-muted-bg backdrop-blur-xl rounded-2xl border border-border-subtle shadow-sm">
                <div className="relative">
                  <LeadForm scooters={scooters} />
                </div>
              </div>
              
              {/* Premium Benefits Section */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 md:p-5 bg-muted-bg backdrop-blur-xl rounded-xl border border-border-subtle shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-text-heading">Premium Benefits</h3>
                  </div>
                  <ul className="space-y-2 text-sm md:text-base text-text-body">
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2">✓</span>
                      Free Home Test Rides
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2">✓</span>
                      Expert Support
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2">✓</span>
                      Premium Quality
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 md:p-5 bg-muted-bg backdrop-blur-xl rounded-xl border border-border-subtle shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-accent-gold rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-text-heading">Our Services</h3>
                  </div>
                  <ul className="space-y-2 text-sm md:text-base text-text-body">
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2">✓</span>
                      Electric Scooty Sales
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2">✓</span>
                      Genuine Spare Parts
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2">✓</span>
                      Service & Maintenance
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
