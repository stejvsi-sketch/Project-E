import Link from 'next/link'
import Image from 'next/image'
import { Zap, Battery, Shield, Sparkles, ArrowRight, Award, TrendingUp, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { QuickConfigurator } from '@/components/QuickConfigurator'
import { ScooterCarousel } from '@/components/ScooterCarousel'

export default function Home() {
  return (
    <>
      {/* Hero Section - Premium First Fold */}
      <section className="relative bg-white overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-6 md:py-10">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Heading - Display Serif */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark leading-[1.1]">
                The Future of
                <span className="block text-primary-orange">Urban Mobility</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                Premium electric scooters engineered for the modern city — sustainable, silent, and sophisticated.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/models">
                  <button className="px-10 py-5 bg-neutral-dark text-white text-lg font-semibold rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto">
                    Reserve Test Ride
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-10 py-5 border-2 border-neutral-dark text-neutral-dark text-lg font-semibold rounded-xl hover:bg-neutral-dark hover:text-white transition-all w-full sm:w-auto">
                    Explore Models
                  </button>
                </Link>
              </div>

              {/* Microcopy */}
              <p className="text-sm text-gray-500">
                ✓ Free 30-day test ride · ✓ 0% financing available · ✓ 3-year warranty
              </p>
            </div>

            {/* Right Visual - Auto-Rotating Scooter Display */}
            <div className="relative hidden lg:block">
              <ScooterCarousel autoPlay={true} interval={4000} />
            </div>
          </div>
        </div>

        {/* Trust Bar - Press & Badges */}
        <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="container-custom py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {/* Trust Badges */}
              <div className="flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-primary-orange mb-2" />
                <p className="text-xs font-semibold text-gray-700">3-Year Warranty</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-primary-orange mb-2" />
                <p className="text-xs font-semibold text-gray-700">ISO Certified</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-8 h-8 text-primary-orange mb-2" />
                <p className="text-xs font-semibold text-gray-700">Award Winning</p>
              </div>
              
              {/* Press Mentions */}
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">As Seen In</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Economic Times</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars - Minimal */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Why M&rsquo;LiteEv?
            </h2>
            <p className="text-xl text-gray-600">
              Uncompromising quality, innovative engineering, and timeless design.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Powerful Performance',
                description: 'High-efficiency motors for smooth acceleration'
              },
              {
                icon: <Battery className="w-8 h-8" />,
                title: 'Extended Range',
                description: 'Advanced battery for longer rides'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: '3-Year Warranty',
                description: 'Comprehensive coverage and support'
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Premium Design',
                description: 'Sleek aesthetics, modern engineering'
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-neutral-dark">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models - Minimal */}
      <section className="py-32 bg-gray-50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Our Models
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our collection of premium electric scooters.
            </p>
          </div>

          {/* Models Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Urban Elite', category: 'Executive Series' },
              { name: 'City Pro', category: 'Professional Series' },
              { name: 'Metro X', category: 'Premium Series' }
            ].map((model, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                {/* Image */}
                <div className="h-80 bg-gray-100 flex items-center justify-center">
                  <div className="text-9xl">🛴</div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-sm text-gray-500 mb-2">{model.category}</div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                    {model.name}
                  </h3>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <div className="text-2xl font-bold text-neutral-dark">60+</div>
                      <div className="text-xs text-gray-500 uppercase">KM</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-dark">45</div>
                      <div className="text-xs text-gray-500 uppercase">KM/H</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-neutral-dark">3Y</div>
                      <div className="text-xs text-gray-500 uppercase">Warranty</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href="/models">
                    <button className="w-full bg-neutral-dark text-white font-medium py-3 rounded-lg hover:bg-black transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Under Models */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: "Best purchase I've made. Range is incredible!", author: "Arjun M.", rating: 5 },
                { quote: "Premium feel, silent ride. Worth every rupee.", author: "Sneha K.", rating: 5 },
                { quote: "Customer service is top-notch. Highly recommend!", author: "Vikram S.", rating: 5 }
              ].map((review, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-primary-orange fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">"{review.quote}"</p>
                  <p className="text-xs text-gray-500 font-medium">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/models">
              <button className="px-8 py-4 border-2 border-neutral-dark text-neutral-dark font-medium rounded-lg hover:bg-neutral-dark hover:text-white transition-all">
                View All Models
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
              Customer Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of riders across India.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The M'LiteEv has transformed my daily commute. Excellent build quality and range.",
                author: "Rajesh Kumar",
                role: "Mumbai",
                rating: 5
              },
              {
                quote: "Premium experience. The motor is whisper-quiet and the design is elegant.",
                author: "Priya Sharma",
                role: "Bangalore",
                rating: 5
              },
              {
                quote: "Outstanding warranty support and performance. Highly recommended!",
                author: "Amit Patel",
                role: "Delhi",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-neutral-dark fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-bold text-neutral-dark">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15K+', label: 'Customers' },
              { value: '98%', label: 'Satisfaction' },
              { value: '4.9/5', label: 'Rating' },
              { value: '50+', label: 'Cities' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-neutral-dark mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Configurator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Configure Your Scooter
            </h2>
            <p className="text-xl text-gray-600">
              Build your perfect ride in 30 seconds with real-time pricing
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <QuickConfigurator />
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-32 bg-neutral-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Explore our collection or get in touch with our team.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/models">
                <button className="px-10 py-4 bg-white text-neutral-dark font-medium text-lg rounded-lg hover:bg-gray-100 transition-colors">
                  Explore Models
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-10 py-4 border-2 border-white text-white font-medium text-lg rounded-lg hover:bg-white hover:text-neutral-dark transition-all">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <div className="text-sm mb-1">Call Us</div>
                <div className="font-medium">+91 XXXX XXXXXX</div>
              </div>
              <div>
                <div className="text-sm mb-1">Email</div>
                <div className="font-medium">info@mliteev.com</div>
              </div>
              <div>
                <div className="text-sm mb-1">Visit Us</div>
                <div className="font-medium">Experience Center</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
