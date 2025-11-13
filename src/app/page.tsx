import Link from 'next/link'
import Image from 'next/image'
import { Zap, Battery, Shield, Sparkles, ArrowRight, Award, TrendingUp, CheckCircle2, Phone, Mail, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { QuickConfigurator } from '@/components/QuickConfigurator'
import { ScooterCarousel } from '@/components/ScooterCarousel'

export default function Home() {
  return (
    <>
      {/* M'LiteEv Hero - Premium Electric Scooter Showcase */}
      <section className="relative bg-gradient-to-br from-primary-bg via-secondary-bg to-neutral-dark overflow-hidden min-h-[85vh]">
        {/* M'LiteEv Brand Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 className="text-[18vw] md:text-[12vw] lg:text-[15vw] font-black text-white/5 tracking-tighter select-none whitespace-nowrap">
            M'LITEEV
          </h1>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center py-12 md:py-20">
            {/* M'LiteEv Electric Scooter Carousel Showcase */}
            <div className="w-full max-w-5xl mb-10">
              <ScooterCarousel autoPlay={true} interval={4000} />
            </div>

            {/* M'LiteEv Value Proposition */}
            <div className="text-center max-w-2xl mb-8">
              <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                Experience premium electric mobility with M'LiteEv's cutting-edge scooters
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
      <section className="py-20 bg-secondary-bg border-t border-border-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why Choose M'LiteEv</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Premium features that set our electric scooters apart</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'PREMIUM BUILD',
                description: 'Superior quality engineering and materials'
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'SMART CONNECTIVITY',
                description: 'Bluetooth connectivity with GPS tracking and real-time alerts'
              },
              {
                icon: <Battery className="w-12 h-12" />,
                title: 'ADVANCED BRAKING',
                description: 'Front disc and rear drum brakes for superior control'
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'VIBRANT COLORS',
                description: (
                  <div className="flex gap-2 justify-center mt-2">
                    {['#000000', '#DC2626', '#1E40AF', '#0d9488', '#F5F5F5'].map((color, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-gray-600 shadow-md hover:scale-110 transition-transform" style={{ backgroundColor: color }}></div>
                    ))}
                  </div>
                )
              },
            ].map((feature, index) => (
              <div key={index} className="bg-secondary-bg p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105 border border-border-gray hover:border-accent-gold/50">
                <div className="text-accent-gold mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <div className="text-text-secondary leading-relaxed">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M'LiteEv Durability Showcase - Built for Indian Roads */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
      <section className="py-20 bg-gray-900">
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

      {/* Color Selector with Dark Background */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Color Buttons */}
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
              <button className="w-full py-4 px-8 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all">
                M'LiteEv Emerald
              </button>
              <button className="w-full py-4 px-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all">
                M'LiteEv Red
              </button>
              <button className="w-full py-4 px-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                M'LiteEv Blue
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
      <section className="py-20 bg-secondary-bg border-t border-border-gray">
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

      {/* M'LiteEv Premium Testimonials - Social Proof */}
      <section className="py-20 bg-primary-bg border-t border-border-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Discover what our customers have to say about their M'LiteEv experience.
            </p>
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
