import Link from 'next/link'
import Image from 'next/image'
import { Zap, Battery, Shield, Sparkles, ArrowRight, Award, TrendingUp, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { QuickConfigurator } from '@/components/QuickConfigurator'
import { ScooterCarousel } from '@/components/ScooterCarousel'

export default function Home() {
  return (
    <>
      {/* Hero Section - Clean Minimal */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-neutral-dark overflow-hidden min-h-[85vh]">
        {/* Large Background Text Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 className="text-[20vw] md:text-[15vw] font-black text-white/5 tracking-tighter select-none">
            M'LITEEV
          </h1>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center py-12 md:py-16">
            {/* Main Scooter Display */}
            <div className="w-full max-w-4xl mb-8">
              <ScooterCarousel autoPlay={true} interval={4000} />
            </div>

            {/* Product Description */}
            <div className="text-center max-w-2xl mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Premium electric scooters engineered for the modern city — sustainable, silent, and sophisticated.
              </p>
            </div>

            {/* Single CTA Button */}
            <Link href="/models">
              <button className="px-12 py-4 bg-teal-600 hover:bg-teal-500 text-white text-base font-semibold rounded-md transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                BOOK NOW
              </button>
            </Link>

            {/* Minimal Features */}
            <div className="flex gap-6 md:gap-12 mt-10 text-sm text-gray-400">
              <span>✓ 3-Year Warranty</span>
              <span>✓ 0% Financing</span>
              <span>✓ Free Test Ride</span>
            </div>
          </div>
        </div>

        {/* Trust Bar - Press & Badges */}
        <div className="border-t border-gray-700 bg-gray-800/80 backdrop-blur-sm">
          <div className="container-custom py-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {/* Trust Badges */}
              <div className="flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-teal-500 mb-2" />
                <p className="text-xs font-semibold text-gray-300">3-Year Warranty</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-teal-500 mb-2" />
                <p className="text-xs font-semibold text-gray-300">ISO Certified</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-8 h-8 text-teal-500 mb-2" />
                <p className="text-xs font-semibold text-gray-300">Award Winning</p>
              </div>
              
              {/* Press Mentions */}
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">As Seen In</div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Economic Times</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Icon Cards */}
      <section className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: '3-YEAR WARRANTY',
                description: 'Combines product durability with warranty support'
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'SMART CONNECTIVITY',
                description: 'Captures key benefits—turn-by-turn maps and real-time alerts'
              },
              {
                icon: <Battery className="w-12 h-12" />,
                title: 'DISC BRAKES',
                description: 'Precision Braking for Real Control'
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'AMAZING COLORS',
                description: (
                  <div className="flex gap-2 justify-center mt-2">
                    {['#000000', '#DC2626', '#1E40AF', '#0d9488', '#6B7280'].map((color, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-gray-300" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                )
              },
            ].map((feature, index) => (
              <div key={index} className="group text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/10">
                <div className="flex justify-center mb-4 text-teal-500 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide group-hover:text-teal-400 transition-colors">
                  {feature.title}
                </h3>
                <div className="text-xs text-gray-400">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Last - Product Detail Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                BUILT TO LAST
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Designed for everyday use
              </p>
              <Link href="/contact">
                <button className="px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md transition-all uppercase text-sm tracking-wide">
                  BOOK A TEST RIDE
                </button>
              </Link>
            </div>

            {/* Right Grid - Product Details */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image - Top Left */}
              <div className="col-span-2 lg:col-span-1 lg:row-span-2 relative h-64 lg:h-full bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">🛴</div>
                </div>
              </div>

              {/* LED Head Lamp */}
              <div className="relative h-32 bg-gray-400 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-white text-center p-4">
                  <div className="font-bold text-sm">LED HEAD LAMP &</div>
                  <div className="font-bold text-sm">DIGITAL DISPLAY</div>
                </div>
              </div>

              {/* Luxe Bulb Beam */}
              <div className="relative h-32 bg-gray-500 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-white text-center p-4">
                  <div className="font-bold text-sm">LUXE</div>
                  <div className="font-bold text-sm">BULB BEAM</div>
                </div>
              </div>

              {/* Front Disc Brakes */}
              <div className="col-span-2 lg:col-span-1 relative h-32 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="relative z-10 text-white text-center p-4">
                  <div className="font-bold text-lg">FRONT</div>
                  <div className="font-bold text-lg">DISC</div>
                  <div className="font-bold text-lg">BRAKES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Specifications
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Motor & Performance */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center gap-3 mb-6 text-teal-500 group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Motor & Performance</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Battery</div>
                  <div className="text-gray-400">Lead Acid / Lithium</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Range</div>
                  <div className="text-gray-400">Upto 120 kms</div>
                </div>
              </div>
            </div>

            {/* Brake & Tyre */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center gap-3 mb-6 text-teal-500 group-hover:scale-105 transition-transform duration-300">
                <Battery className="w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Brake & Tyre</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Brake Type</div>
                  <div className="text-gray-400">Front Disc / Rear Drum</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Tyre Type</div>
                  <div className="text-gray-400">Tubeless</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Front Tyre</div>
                  <div className="text-gray-400">90/100/10</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Rear Tyre</div>
                  <div className="text-gray-400">90/100/10</div>
                </div>
              </div>
            </div>

            {/* Suspension & Dimension */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center gap-3 mb-6 text-teal-500 group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Suspension & Dimension</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Dimensions (lxwxh) mm</div>
                  <div className="text-gray-400">1800 x 660 x 1100</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Front</div>
                  <div className="text-gray-400">Telescopic</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Rear</div>
                  <div className="text-gray-400">Dual</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Kerb weight without battery</div>
                  <div className="text-gray-400">58.500 kg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Selector with Teal Background */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-700">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Color Buttons */}
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
              <button className="w-full py-4 px-8 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white/30 transition-all">
                M'LiteEv Teal
              </button>
              <button className="w-full py-4 px-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all">
                M'LiteEv Red
              </button>
              <button className="w-full py-4 px-8 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all">
                M'LiteEv Gray
              </button>
            </div>

            {/* Right - Scooter Image */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="text-[200px]">🛴</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA Section */}
      <section className="py-20 bg-neutral-dark">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Effortless Elegance, Practical Luxury
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Street-Ready & Smart
          </p>
          <Link href="/contact">
            <button className="px-12 py-4 border-2 border-teal-600 text-teal-600 bg-transparent font-semibold rounded-md hover:bg-teal-600 hover:text-white transition-all uppercase text-sm tracking-wide">
              BOOK NOW
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Models - Minimal */}
      <section className="py-32 bg-gray-50 hidden">
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
              { name: 'M\'LiteEv Urban Elite', category: 'Executive Series' },
              { name: 'M\'LiteEv City Pro', category: 'Professional Series' },
              { name: 'M\'LiteEv Metro X', category: 'Premium Series' }
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
                    <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition-all uppercase text-sm tracking-wide">
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
              <button className="px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md transition-all uppercase text-sm tracking-wide shadow-md hover:shadow-lg">
                View All Models
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="py-32 bg-white hidden">
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
      <section className="py-20 bg-gray-50 hidden">
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

    </>
  )
}
