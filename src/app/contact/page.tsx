'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { LeadForm } from '@/components/LeadForm'

export default function ContactPage() {
  // 7 Models with 3 colors each = 21 total variants
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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-neutral-dark py-20 pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
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
          <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
              {/* Contact Cards */}
              <div className="space-y-6">
                <a href="tel:+919876543210" className="flex items-start gap-4 p-6 bg-gray-700/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-gray-600 hover:border-teal-500/50 group hover:scale-105">
                  <div className="bg-teal-500/10 group-hover:bg-teal-500 p-3 rounded-lg transition-colors">
                    <Phone className="w-6 h-6 text-teal-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Call Us</h3>
                    <p className="text-gray-200 font-semibold">+91 98765 43210</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Sat, 9AM-7PM IST</p>
                  </div>
                </a>

                <a href="mailto:info@mliteev.com" className="flex items-start gap-4 p-6 bg-gray-700/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-gray-600 hover:border-teal-500/50 group hover:scale-105">
                  <div className="bg-teal-500/10 group-hover:bg-teal-500 p-3 rounded-lg transition-colors">
                    <Mail className="w-6 h-6 text-teal-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email Us</h3>
                    <p className="text-gray-200 font-semibold">info@mliteev.com</p>
                    <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-gray-700/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-gray-600 hover:border-teal-500/50 group hover:scale-105">
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

            {/* Contact Form */}
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
              
              {/* Why Choose M&rsquo;LiteEv? */}
              <div className="mt-8 bg-gray-700/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 hover:border-teal-500/50 transition-all duration-300">
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
        </div>
      </section>
    </div>
  )
}
