'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, Battery, Shield, Sparkles, ArrowRight, Award, TrendingUp, CheckCircle2, Phone, Mail, MapPin, Users, Target, Leaf, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { QuickConfigurator } from '@/components/QuickConfigurator'
import { ScooterCarousel } from '@/components/ScooterCarousel'
import { useEffect, useRef, useState } from 'react'
import { ALL_MODELS } from '@/data/models'

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])
  return (
    <>
      {/* M'LiteEv Hero - Premium Electric Scooter Showcase */}
      <section className="relative bg-gradient-to-br from-primary-bg via-secondary-bg to-neutral-dark overflow-hidden min-h-[85vh] w-full max-w-full">
        {/* M'LiteEv Brand Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[12vw] font-black text-white/5 tracking-tighter select-none whitespace-nowrap max-w-full">
            M'LITEEV
          </h1>
        </div>

        <div className="container-custom relative z-10 max-w-full">
          <div className="flex flex-col items-center justify-center py-12 md:py-20 w-full">
            {/* M'LiteEv Electric Scooter Carousel Showcase */}
            <div className="w-full max-w-5xl mb-10 px-2 sm:px-4">
              <ScooterCarousel autoPlay={true} interval={4000} />
            </div>

            {/* M'LiteEv Value Proposition */}
            <div className="text-center max-w-3xl mb-8">
              <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-4">
                Experience premium electric mobility with our complete range of 7 electric scooter models
              </p>
              <p className="text-base md:text-lg text-text-secondary">
                From S.L Pro to CS 3 • All Electric Scooty Sales & Genuine Spare Parts • 1000W-1200W Power Range
              </p>
            </div>

            {/* Primary M'LiteEv CTA - Book Now */}
            <Link href="/models" className="w-full sm:w-auto inline-block group">
              <button className="btn-primary w-full sm:w-auto px-8 sm:px-12 py-4 text-base font-semibold rounded-lg">
                EXPLORE M'LITEEV MODELS
              </button>
            </Link>

            {/* M'LiteEv Key Benefits */}
            <div className="flex flex-wrap gap-6 md:gap-12 mt-10 text-sm text-text-secondary justify-center">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-gold" /> Premium Quality</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-gold" /> 0% Financing</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-gold" /> Free Test Ride</span>
            </div>
          </div>
        </div>

        {/* Trust Bar - Badges */}
        <div className="border-t border-border-gray bg-secondary-bg/80 backdrop-blur-sm">
          <div className="container-custom py-8">
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
              {/* Trust Badges */}
              <div className="flex flex-col items-center text-center">
                <Shield className="w-8 h-8 text-accent-gold mb-2" />
                <p className="text-xs font-semibold text-text-primary">Premium Build</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="w-8 h-8 text-accent-gold mb-2" />
                <p className="text-xs font-semibold text-text-primary">Quality Certified</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-accent-gold mb-2" />
                <p className="text-xs font-semibold text-text-primary">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M'LiteEv Core Features - What Makes Us Different */}
      <section className="py-16 md:py-20 bg-secondary-bg border-t border-border-gray overflow-hidden w-full max-w-full">
        <div className="container-custom overflow-hidden px-4">
          <div id="features-header" className="animate-on-scroll text-center mb-12 transition-all duration-700 opacity-0 translate-y-8" style={{ opacity: isVisible['features-header'] ? 1 : 0, transform: isVisible['features-header'] ? 'translateY(0)' : 'translateY(2rem)' }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mb-4">Why Choose M'LiteEv</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-sm md:text-base">Premium features that set our electric scooters apart</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-hidden">
            {[
              {
                icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'PREMIUM BUILD',
                description: 'Superior quality engineering and materials',
                color: 'from-accent-gold/10 to-amber-600/10'
              },
              {
                icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'POWERFUL MOTORS',
                description: '1000W-1200W motors for excellent performance',
                color: 'from-accent-teal/10 to-cyan-600/10'
              },
              {
                icon: <Battery className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'LONG RANGE',
                description: 'Up to 60+ km on a single charge',
                color: 'from-green-500/10 to-emerald-600/10'
              },
              {
                icon: <Target className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'PRECISION BRAKING',
                description: 'Advanced disc braking for safety',
                color: 'from-purple-500/10 to-pink-600/10'
              },
            ].map((feature, index) => (
              <div key={index} id={`feature-${index}`} className="animate-on-scroll bg-gradient-to-br from-secondary-bg to-gray-800 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-accent-gold/10 transition-all duration-500 text-center group hover:-translate-y-2 border border-border-gray hover:border-accent-gold/50 opacity-0" style={{ opacity: isVisible[`feature-${index}`] ? 1 : 0, transform: isVisible[`feature-${index}`] ? 'translateY(0)' : 'translateY(2rem)', transitionDelay: `${index * 100}ms` }}>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-accent-gold group-hover:text-accent-gold-hover transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-base md:text-xl font-bold text-text-primary mb-2 md:mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Models Showcase */}
      <section id="models-section" className="animate-on-scroll py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden w-full max-w-full transition-all duration-700 opacity-0" style={{ opacity: isVisible['models-section'] ? 1 : 0 }}>
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">Our Premium Models</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">Choose from 7 exceptional electric scooter models</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {ALL_MODELS.slice(0, 7).map((model, index) => (
              <Link key={index} href="/models" className="group">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-xl border border-gray-700 hover:border-accent-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-gold/20">
                  <div className="text-4xl md:text-5xl mb-3 md:mb-4 text-center">🛴</div>
                  <h3 className="text-sm md:text-base font-bold text-white text-center mb-1 md:mb-2">{model.name}</h3>
                  <p className="text-xs text-gray-400 text-center">{model.motorPower}</p>
                  <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-gray-700 flex justify-center gap-1 md:gap-2">
                    {model.colors.map((color, i) => (
                      <div key={i} className={`w-3 h-3 md:w-4 md:h-4 rounded-full border ${color === 'Red' ? 'bg-red-600' : color === 'White' ? 'bg-white' : 'bg-black'} border-gray-600`}></div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Link href="/models">
              <button className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-accent-gold to-accent-gold-hover text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 text-sm md:text-base uppercase tracking-wider shadow-2xl">
                View All Models
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* M'LiteEv Durability Showcase - Built for Indian Roads */}
      <section id="durability-section" className="animate-on-scroll py-16 md:py-20 bg-gray-800 overflow-hidden w-full max-w-full transition-all duration-700 opacity-0" style={{ opacity: isVisible['durability-section'] ? 1 : 0 }}>
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* M'LiteEv Durability Promise */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                BUILT TO LAST
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every M'LiteEv scooter is engineered to withstand daily urban commutes with superior build quality and premium components.
              </p>
              <Link href="/contact" className="inline-block">
                <button className="px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all uppercase text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-105">
                  BOOK A TEST RIDE
                </button>
              </Link>
            </div>

            {/* M'LiteEv Premium Component Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image - Top Left */}
              <div className="col-span-2 lg:col-span-1 lg:row-span-2 relative h-64 lg:h-full bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">🛴</div>
                </div>
              </div>

              {/* LED Head Lamp */}
              <div className="relative h-32 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-white text-center p-4">
                  <div className="font-bold text-sm">LED HEAD LAMP &</div>
                  <div className="font-bold text-sm">DIGITAL DISPLAY</div>
                </div>
              </div>

              {/* Luxe Bulb Beam */}
              <div className="relative h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 text-white text-center p-4">
                  <div className="font-bold text-sm">LUXE</div>
                  <div className="font-bold text-sm">BULB BEAM</div>
                </div>
              </div>

              {/* Front Disc Brakes */}
              <div className="col-span-2 lg:col-span-1 relative h-32 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg overflow-hidden flex items-center justify-center">
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

      {/* M'LiteEv Technical Specifications */}
      <section className="py-20 bg-gray-900 overflow-hidden w-full max-w-full">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Detailed specs of our premium electric scooters</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Motor & Performance */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
              <div className="flex items-center gap-3 mb-6 text-teal-500 group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6" />
                <h3 className="text-xl font-bold text-white">Motor & Performance</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Motor Power</div>
                  <div className="text-gray-400">1000W / 1200W</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Controller</div>
                  <div className="text-gray-400">48V/60V/72V</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Max Speed</div>
                  <div className="text-gray-400">40-55 km/h</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">7 Models Available</div>
                  <div className="text-gray-400">S.L Pro to CS 3</div>
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
                  <div className="font-semibold text-gray-200 mb-1">Brake System</div>
                  <div className="text-gray-400">Disc/Drum or Disc/Disc</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">Tyre Size</div>
                  <div className="text-gray-400">90-100-10 / 90-90-12</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">S.L & D.L Pro</div>
                  <div className="text-gray-400">90-100-10 Tyre</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-200 mb-1">CS & Vespa Series</div>
                  <div className="text-gray-400">90-90-12 Tyre</div>
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

      {/* Color Selector with Dark Background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden w-full max-w-full">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Color Buttons */}
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
              <button className="w-full py-4 px-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all">
                M'LiteEv Red
              </button>
              <button className="w-full py-4 px-8 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all border border-gray-300">
                M'LiteEv White
              </button>
              <button className="w-full py-4 px-8 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all">
                M'LiteEv Black
              </button>
              <button className="w-full py-4 px-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                M'LiteEv Blue
              </button>
              <button className="w-full py-4 px-8 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all">
                M'LiteEv Grey
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
      <section className="py-20 bg-secondary-bg border-t border-border-gray overflow-hidden w-full max-w-full">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Effortless Elegance, Practical Luxury
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Street-Ready & Smart
          </p>
          <Link href="/contact">
            <button className="btn-primary px-12 py-4 font-semibold rounded-md uppercase text-sm tracking-wide">
              BOOK NOW
            </button>
          </Link>
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
                quote: "Outstanding build quality and performance. Highly recommended!",
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
