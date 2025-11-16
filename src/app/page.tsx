import Link from 'next/link'
import Image from 'next/image'
import { Zap, Battery, Shield, Sparkles, ArrowRight, Award, TrendingUp, CheckCircle2, Phone, Mail, MapPin, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { QuickConfigurator } from '@/components/QuickConfigurator'
import { ScooterCarousel } from '@/components/ScooterCarousel'
import { ColorShowcase } from '@/components/ColorShowcase'

export default function Home() {
  return (
    <>
      {/* Ultra-Luxury Hero */}
      <section className="relative bg-primary-bg overflow-hidden min-h-screen w-full max-w-full flex items-center pt-0">
        {/* Sophisticated pattern overlay */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37), linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37), linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37), linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37)', backgroundSize: '80px 140px', backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'}}></div>
        </div>

        <div className="container-custom relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center justify-center py-12 md:py-16 w-full">

            {/* Ultra-luxury headline */}
            <div className="text-center max-w-6xl mb-10 md:mb-14">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-text-heading leading-[1.05] tracking-tight mb-6 md:mb-8 px-4">
                <span className="block font-light">Elevate</span>
                <span className="block font-black italic text-accent-gold mt-1 md:mt-2">Every Journey</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-heading leading-relaxed max-w-4xl mx-auto font-light tracking-wide px-4">
                Italian elegance meets electric innovation
              </p>
            </div>

            {/* Carousel showcase */}
            <div className="w-full max-w-7xl mb-12 md:mb-16 px-2 sm:px-4">
              <ScooterCarousel autoPlay={true} interval={5000} />
            </div>

            {/* Premium CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 mb-6 md:mb-10 px-4">
              <Link href="/models" className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 bg-text-heading font-bold text-sm tracking-[0.25em] uppercase overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                  <span className="relative z-10 text-white group-hover:text-white">Discover Collection</span>
                  <div className="absolute inset-0 bg-accent-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-12 md:px-16 py-5 md:py-6 border-2 border-text-heading text-text-heading bg-transparent hover:bg-accent-gold hover:border-accent-gold hover:text-white font-bold text-sm tracking-[0.25em] uppercase transition-all duration-500">
                  Private Consultation
                </button>
              </Link>
            </div>

            <div className="w-16 h-[2px] bg-accent-gold mx-auto mb-10 md:mb-14"></div>

          </div>
        </div>

        {/* Minimal credentials strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t-2 border-accent-gold/30">
          <div className="container-custom py-6 md:py-8">
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-gold mb-1 md:mb-2">7</p>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-text-heading font-medium">Models</p>
              </div>
              <div className="text-center border-x border-accent-gold/20">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-gold mb-1 md:mb-2">1200W</p>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-text-heading font-medium">Power</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-gold mb-1 md:mb-2">60+</p>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-text-heading font-medium">Range KM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy of Excellence */}
      <section className="py-32 md:py-40 bg-muted-bg overflow-hidden w-full max-w-full">
        <div className="container-custom max-w-7xl mx-auto px-4">
          {/* Refined header */}
          <div className="text-center mb-24 md:mb-32 overflow-hidden">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 px-4">
              <div className="w-12 md:w-20 h-[2px] bg-accent-gold flex-shrink-0"></div>
              <p className="text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-accent-gold font-bold whitespace-nowrap">Philosophy</p>
              <div className="w-12 md:w-20 h-[2px] bg-accent-gold flex-shrink-0"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-text-heading leading-tight mb-10 px-4">
              <span className="font-light block sm:inline">Uncompromising</span>
              <span className="block font-black italic mt-2 sm:mt-3">Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-text-heading/70 max-w-3xl mx-auto leading-relaxed font-light px-4">Every detail meticulously refined for perfection</p>
          </div>
          {/* Minimalist feature showcase - NO HORIZONTAL SCROLL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-6xl mx-auto">
            {[
              {
                number: '01',
                title: 'Artisan Craftsmanship',
                description: 'Each component hand-selected and assembled by master technicians with decades of experience in precision engineering.'
              },
              {
                number: '02',
                title: 'Intelligent Performance',
                description: 'Whisper-quiet 1000-1200W motors deliver seamless acceleration while intelligent battery management ensures optimal range.'
              },
              {
                number: '03',
                title: 'Safety Excellence',
                description: 'Advanced dual-disc braking systems and premium suspension technology provide uncompromising control in all conditions.'
              },
              {
                number: '04',
                title: 'Bespoke Personalization',
                description: (
                  <div className="space-y-4">
                    <p>Choose from our curated palette of finishes</p>
                    <div className="flex flex-wrap gap-3">
                      {['#000000', '#DC2626', '#1E40AF', '#0d9488', '#F5F5F5'].map((color, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-accent-gold/40 hover:border-accent-gold transition-all duration-300 hover:scale-110" style={{ backgroundColor: color }}></div>
                      ))}
                    </div>
                  </div>
                )
              },
            ].map((feature, index) => (
              <div key={index} className="group w-full">
                <div className="flex items-start gap-4 md:gap-6 w-full">
                  <div className="text-6xl md:text-7xl font-display font-bold text-accent-gold flex-shrink-0">
                    {feature.number}
                  </div>
                  <div className="flex-1 pt-2 md:pt-4 min-w-0">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-text-heading mb-3 md:mb-4 tracking-tight">
                      {feature.title}
                    </h3>
                    <div className="text-sm md:text-base lg:text-lg text-text-heading leading-relaxed">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Statement */}
      <section className="py-40 md:py-48 bg-text-charcoal overflow-hidden w-full max-w-full relative">
        {/* Refined pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>
        <div className="container-custom relative z-10 max-w-7xl mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Premium header */}
            <div className="text-center mb-20 md:mb-24">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-[1px] bg-accent-gold/50"></div>
                <p className="text-xs tracking-[0.5em] uppercase text-accent-gold font-medium">Heritage</p>
                <div className="w-20 h-[1px] bg-accent-gold/50"></div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-white leading-tight mb-10">
                Engineered for
                <span className="block font-bold italic text-accent-gold mt-3">Perfection</span>
              </h2>
              <p className="text-xl md:text-2xl text-white font-normal leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
                Each M'LiteEv represents the pinnacle of electric mobility—where meticulous Italian craftsmanship meets cutting-edge innovation.
              </p>
            </div>

            {/* Stats showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-20">
              <div className="text-center border-t-2 border-accent-gold/50 pt-8">
                <p className="text-5xl md:text-6xl font-display font-bold text-accent-gold mb-3">100%</p>
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white font-medium">Electric</p>
              </div>
              <div className="text-center border-t-2 border-accent-gold/50 pt-8">
                <p className="text-5xl md:text-6xl font-display font-bold text-accent-gold mb-3">Zero</p>
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white font-medium">Emissions</p>
              </div>
              <div className="text-center border-t-2 border-accent-gold/50 pt-8">
                <p className="text-5xl md:text-6xl font-display font-bold text-accent-gold mb-3">∞</p>
                <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white font-medium">Innovation</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/contact">
                <button className="px-12 md:px-16 py-5 md:py-6 bg-white text-text-heading font-semibold tracking-[0.2em] uppercase text-sm hover:bg-accent-gold hover:text-white transition-all duration-500 shadow-lg">
                  Book Private Viewing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-32 md:py-40 bg-secondary-bg overflow-hidden w-full max-w-full">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-[2px] bg-accent-gold"></div>
              <p className="text-xs tracking-[0.5em] uppercase text-accent-gold font-bold">Performance</p>
              <div className="w-20 h-[2px] bg-accent-gold"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-text-heading mb-10">
              <span className="font-light">Technical</span>
              <span className="block font-black italic mt-3">Excellence</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-heading/70 max-w-3xl mx-auto font-light">Precision engineering in every detail</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Power */}
            <div className="border-t border-accent-gold/20 pt-12">
              <h3 className="text-2xl md:text-3xl font-display font-light text-text-heading mb-10 text-center">Power & Performance</h3>
              <div className="grid md:grid-cols-4 gap-10 text-center">
                <div>
                  <p className="text-4xl md:text-5xl font-display font-light text-accent-gold mb-3">1200W</p>
                  <p className="text-sm tracking-[0.2em] uppercase text-text-body">Peak Power</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-display font-light text-accent-gold mb-3">72V</p>
                  <p className="text-sm tracking-[0.2em] uppercase text-text-body">Controller</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-display font-light text-accent-gold mb-3">55</p>
                  <p className="text-sm tracking-[0.2em] uppercase text-text-body">km/h Max</p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-display font-light text-accent-gold mb-3">7</p>
                  <p className="text-sm tracking-[0.2em] uppercase text-text-body">Models</p>
                </div>
              </div>
            </div>

            {/* Control & Safety */}
            <div className="border-t border-accent-gold/20 pt-12">
              <h3 className="text-2xl md:text-3xl font-display font-light text-text-heading mb-10 text-center">Control & Safety</h3>
              <div className="grid md:grid-cols-3 gap-10 text-center">
                <div>
                  <p className="text-3xl md:text-4xl font-display font-light text-accent-gold mb-3">Dual Disc</p>
                  <p className="text-sm tracking-[0.2em] uppercase text-text-body">Braking System</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-display font-light text-accent-gold mb-3">Telescopic</p>
                  <p className="text-sm tracking-[0.2em] uppercase text-text-body">Suspension</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-display font-light text-accent-gold mb-3">Premium</p>
                  <p className="text-sm tracking-[0.2em] uppercase text-text-body">90-90-12 Tyres</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Colors - Premium Edition */}
      <section className="py-32 md:py-40 bg-secondary-bg overflow-hidden w-full max-w-full border-t-2 border-accent-gold/20">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 md:mb-24">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-[2px] bg-accent-gold"></div>
              <p className="text-xs tracking-[0.5em] uppercase text-accent-gold font-bold">Personalization</p>
              <div className="w-20 h-[2px] bg-accent-gold"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display text-text-heading mb-8">
              <span className="font-light">Choose Your</span>
              <span className="block font-black mt-3">Signature</span>
            </h2>
            <p className="text-lg md:text-xl text-text-heading/80 max-w-2xl mx-auto font-light">Classic elegance in three timeless finishes</p>
          </div>
          
          <ColorShowcase />
        </div>
      </section>

      {/* Final Invitation */}
      <section className="py-40 md:py-52 bg-primary-bg overflow-hidden w-full max-w-full border-t-2 border-accent-gold/30">
        <div className="container-custom text-center max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-8"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display text-text-heading leading-tight mb-12">
            <span className="block font-light">Begin Your</span>
            <span className="block font-black italic text-accent-gold mt-4">Electric Journey</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-heading/70 mb-16 font-light leading-relaxed max-w-3xl mx-auto">
            Experience the pinnacle of electric mobility, crafted for those who demand nothing less than excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/models" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-16 py-6 bg-text-heading text-white font-bold tracking-[0.25em] uppercase text-sm hover:bg-accent-gold hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                View Collection
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-16 py-6 border-2 border-text-heading text-text-heading hover:bg-text-heading hover:text-white font-bold tracking-[0.25em] uppercase text-sm transition-all duration-500">
                Private Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="py-32 bg-secondary-bg hidden">
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
