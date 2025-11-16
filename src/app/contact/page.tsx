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
    <div className="min-h-screen bg-gradient-to-br from-primary-bg via-muted-bg to-secondary-bg overflow-x-hidden -mt-24 md:-mt-32">
      {/* Clean Contact Hero */}
      <section className="relative overflow-hidden pb-8 md:pb-12 pt-24 md:pt-32">
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent-gold/10 border border-accent-gold/20 rounded-full px-5 py-2 mb-6">
              <Award className="w-4 h-4 text-accent-gold" />
              <span className="text-text-heading font-semibold text-sm">Premium Electric Mobility</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading mb-5 leading-tight">
              Let's Start Your
              <span className="block text-accent-gold mt-2">Electric Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-text-body leading-relaxed max-w-xl mx-auto">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-12 md:py-16">
        
        <div className="container-custom relative z-10 px-4">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-2 font-display">
                  Get in Touch
                </h2>
                <p className="text-base text-text-body leading-relaxed">
                  We're here to help you find your perfect ride.
                </p>
              </div>
              
              {/* Contact Cards */}
              <div className="space-y-3">
                <a href={`tel:+${COMPANY_INFO.social.whatsapp}`} className="group block">
                  <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-border-subtle hover:border-accent-gold hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-accent-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-text-heading mb-0.5">Call Us</h3>
                        <p className="text-base text-text-heading font-bold truncate">{COMPANY_INFO.contact.phoneFormatted}</p>
                        <p className="text-xs text-text-muted mt-0.5">Mon-Sat, 9AM-7PM</p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="group block">
                  <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-border-subtle hover:border-accent-gold hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-accent-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-text-heading mb-0.5">Email Us</h3>
                        <p className="text-base text-text-heading font-bold truncate">{COMPANY_INFO.contact.email}</p>
                        <p className="text-xs text-text-muted mt-0.5">24h response time</p>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="group">
                  <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-border-subtle hover:border-accent-gold hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-accent-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-text-heading mb-0.5">Visit Us</h3>
                        <p className="text-sm text-text-heading font-semibold">{COMPANY_INFO.address.street}</p>
                        <p className="text-xs text-text-body">{`${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}-${COMPANY_INFO.address.pincode}`}</p>
                        <p className="text-xs text-text-muted mt-0.5">Mon-Sun, 10AM-8PM</p>
                        <a
                          href={COMPANY_INFO.address.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-accent-gold font-semibold mt-1 hover:underline"
                        >
                          View on Google Maps
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-border-subtle shadow-lg p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-text-heading mb-2">
                    Request Information
                  </h2>
                  <p className="text-sm text-text-body">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                <LeadForm scooters={scooters} />
              </div>
              
              {/* Benefits Section */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-border-subtle">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 bg-accent-gold rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-text-heading">Why Choose Us</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-text-body">
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2 text-base">✓</span>
                      Free Home Test Rides
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2 text-base">✓</span>
                      Expert Support Team
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2 text-base">✓</span>
                      Premium Quality Assured
                    </li>
                  </ul>
                </div>
                
                <div className="p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-border-subtle">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 bg-accent-gold rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-text-heading">Our Services</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-text-body">
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2 text-base">✓</span>
                      Deals in: All Kind of Electrical Scooty &amp; Its Spare Parts
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2 text-base">✓</span>
                      Electric Scooter Sales
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2 text-base">✓</span>
                      Genuine Spare Parts
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent-gold mr-2 text-base">✓</span>
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
