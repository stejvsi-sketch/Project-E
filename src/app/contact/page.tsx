'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { LeadForm } from '@/components/LeadForm'

export default function ContactPage() {
  // Placeholder data - will be replaced with real scooter data from Supabase
  const scooters = [
    {
      id: '1',
      name: 'Model A',
      variants: [
        { id: '1a', color_name: 'Midnight Black' },
        { id: '1b', color_name: 'Racing Red' },
        { id: '1c', color_name: 'Pearl White' },
      ],
    },
    {
      id: '2',
      name: 'Model B',
      variants: [
        { id: '2a', color_name: 'Ocean Blue' },
        { id: '2b', color_name: 'Forest Green' },
        { id: '2c', color_name: 'Sunset Orange' },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-neutral-dark py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-teal-500 uppercase tracking-wider px-4 py-2 rounded-full bg-teal-500/10">
                Contact Us
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Let's Start Your Journey
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to experience premium electric mobility? Our team is here to help you find your perfect ride.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
              {/* Contact Cards */}
              <div className="space-y-6">
                <a href="tel:+919876543210" className="flex items-start gap-4 p-6 bg-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-600 hover:border-teal-500 group">
                  <div className="bg-teal-500/10 group-hover:bg-teal-500 p-3 rounded-lg transition-colors">
                    <Phone className="w-6 h-6 text-teal-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Call Us</h3>
                    <p className="text-gray-200 font-semibold">+91 98765 43210</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Sat, 9AM-7PM IST</p>
                  </div>
                </a>

                <a href="mailto:info@mliteev.com" className="flex items-start gap-4 p-6 bg-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-600 hover:border-teal-500 group">
                  <div className="bg-teal-500/10 group-hover:bg-teal-500 p-3 rounded-lg transition-colors">
                    <Mail className="w-6 h-6 text-teal-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email Us</h3>
                    <p className="text-gray-200 font-semibold">info@mliteev.com</p>
                    <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-600 hover:border-teal-500 group">
                  <div className="bg-teal-500/10 group-hover:bg-teal-500 p-3 rounded-lg transition-colors">
                    <MapPin className="w-6 h-6 text-teal-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Visit Our Store</h3>
                    <p className="text-gray-200">Experience Center</p>
                    <p className="text-gray-200">Mumbai, Maharashtra</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Sun, 10AM-8PM</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-700">
                <p className="text-sm font-semibold text-white mb-3">Trusted by</p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                  <span>✓ 15,000+ Customers</span>
                  <span>✓ 98% Satisfaction</span>
                  <span>✓ 4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-4xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our team responds within 24 hours. Let's find your perfect scooter.
                </p>
              </div>
              <LeadForm scooters={scooters} />
            </div>

            {/* Why Choose M&rsquo;LiteEv? */}
            <div className="mt-12 bg-gray-700 p-8 rounded-2xl border border-gray-600">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose M&rsquo;LiteEv?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  3-Year Comprehensive Warranty
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Free Home Test Rides
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Expert Customer Support
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Nationwide Service Network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
