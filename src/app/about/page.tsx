import { Zap, Users, Award, Heart, Target, Lightbulb, Shield, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { COMPANY_INFO } from '@/data/models'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-bg overflow-hidden w-full max-w-full">
      {/* Ultra-Premium Hero */}
      <section className="relative bg-primary-bg pt-0 pb-20 md:pb-28 overflow-hidden w-full max-w-full">
        {/* Sophisticated pattern */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37), linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37), linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37), linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37)', backgroundSize: '80px 140px', backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'}}></div>
        </div>
        
        <div className="container-custom text-center relative z-10 max-w-6xl mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-[2px] bg-accent-gold"></div>
              <span className="text-xs tracking-[0.5em] uppercase text-accent-gold font-bold">Our Story</span>
              <div className="w-20 h-[2px] bg-accent-gold"></div>
            </div>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-heading mb-10 md:mb-12">
            <span className="block font-light">About</span>
            <span className="block font-black mt-2">M'LiteEv</span>
          </h1>
          <div className="w-24 h-[2px] bg-accent-gold mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl md:text-3xl text-text-heading/80 max-w-4xl mx-auto leading-relaxed font-light">
            Pioneering the future of luxury electric mobility
          </p>
        </div>
      </section>

      {/* M'LiteEv Mission Statement - Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted-bg to-secondary-bg overflow-hidden w-full max-w-full">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent-gold/10 border border-accent-gold/20 mb-6">
                <Target className="w-8 h-8 text-accent-gold" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-heading mb-6">Our Mission</h2>
            </div>
            <div className="relative p-8 md:p-12 rounded-3xl bg-accent-champagne/30 border border-accent-gold/20 shadow-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-gold/5 to-accent-champagne/5 blur-xl"></div>
              <p className="relative text-base sm:text-lg md:text-xl text-text-heading leading-relaxed text-center">
                At <span className="text-accent-gold font-bold">M'LiteEv</span>, we're revolutionizing urban transportation through 
                innovative, eco-friendly electric scooters. We believe sustainable mobility 
                shouldn't compromise on performance or style. Our premium electric scooters 
                combine cutting-edge technology, superior design, and environmental responsibility 
                to deliver an unmatched riding experience for modern cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* M'LiteEv Core Values - Premium Grid */}
      <section className="py-16 md:py-24 bg-primary-bg overflow-hidden w-full max-w-full">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-text-heading mb-4 md:mb-6">What Drives Us</h2>
            <p className="text-text-body text-base md:text-lg max-w-3xl mx-auto px-4">The principles that guide M'LiteEv in creating exceptional electric scooters</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge electric vehicle technology',
                color: 'from-accent-gold to-yellow-600'
              },
              {
                icon: <Heart className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Sustainability',
                description: 'Protecting our environment for future generations',
                color: 'from-green-500 to-emerald-600'
              },
              {
                icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Premium Quality',
                description: 'Superior craftsmanship in every M\'LiteEv scooter',
                color: 'from-accent-teal to-cyan-600'
              },
              {
                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Community',
                description: 'Building eco-conscious riders transforming mobility',
                color: 'from-purple-500 to-pink-600'
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative bg-muted-bg backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center hover:bg-accent-champagne transition-all duration-500 border border-border-subtle hover:border-accent-gold hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-accent-gold/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-accent-gold">{value.icon}</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-text-heading mb-3 group-hover:text-accent-gold transition-colors">{value.title}</h3>
                  <p className="text-sm md:text-base text-text-body leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M'LiteEv Journey - From Vision to Reality */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden w-full max-w-full">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 px-4 lg:px-0">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <Lightbulb className="w-6 h-6 text-accent-gold" />
                  <span className="text-accent-gold text-sm font-bold uppercase tracking-widest">The Journey</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 font-display">The M'LiteEv Story</h2>
              </div>
              <div className="space-y-4 md:space-y-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  <span className="text-accent-gold font-semibold">M'LiteEv</span> was born from a simple observation: cities needed smarter, 
                  cleaner, and more efficient transportation solutions. Founded by passionate 
                  engineers and designers, we set out to create electric scooters that people 
                  would be excited to ride.
                </p>
                <p>
                  What started as a vision has grown into a trusted name in 
                  urban electric mobility. Today, riders across <span className="text-accent-gold font-semibold">Faridabad and beyond</span> trust M'LiteEv to 
                  energise their daily commutes, reducing emissions and traffic congestion 
                  one ride at a time.
                </p>
                <p>
                  Every M'LiteEv scooter is designed with the rider in mind—balancing 
                  performance, range, and aesthetics to create the perfect urban companion.
                </p>
              </div>
            </div>
            <div className="relative px-4 lg:px-0">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-gold via-accent-gold-hover to-accent-teal p-1">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12">
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl mb-6">⚡</div>
                    <h3 className="text-2xl md:text-3xl font-black text-accent-gold mb-4 font-display">Energise Your Ride</h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      Join the electric revolution and experience the future of urban mobility
                    </p>
                    <Link href="/contact" className="inline-block mt-6">
                      <button className="px-8 py-3 bg-gradient-to-r from-accent-gold to-accent-gold-hover text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300 text-sm md:text-base">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M'LiteEv Impact - Our Numbers */}
      <section className="py-16 md:py-24 bg-text-charcoal text-primary-bg overflow-hidden w-full max-w-full relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-accent-gold">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm font-bold uppercase tracking-widest">Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-display text-primary-bg">Our Impact</h2>
            <p className="text-base md:text-lg font-semibold text-accent-champagne">Making a difference in urban mobility</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '7', label: 'Luxury Models', suffix: '' },
              { value: '1000', label: 'Watt Power', suffix: 'W+' },
              { value: '60', label: 'KM Range', suffix: '+' },
              { value: '100', label: 'Eco-Friendly', suffix: '%' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 md:p-8 rounded-2xl bg-accent-gold/10 backdrop-blur-sm border border-accent-gold/30 hover:bg-accent-gold/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2 text-accent-gold">{stat.value}{stat.suffix}</div>
                <div className="text-sm md:text-base font-bold text-primary-bg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M'LiteEv CTA - Join Us */}
      <section className="py-16 md:py-24 bg-secondary-bg overflow-hidden w-full max-w-full border-t border-border-subtle">
        <div className="container-custom text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-heading mb-6 md:mb-8 font-display">
            Ready to <span className="text-accent-gold">Join Us</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-body mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your daily commute into an eco-friendly adventure with M'LiteEv electric scooters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/models" className="w-full sm:w-auto">
              <button className="btn-primary w-full sm:w-auto px-10 py-4 text-sm md:text-base uppercase tracking-wider rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-accent-gold/50">
                Explore Models
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="btn-secondary w-full sm:w-auto px-10 py-4 text-sm md:text-base uppercase tracking-wider rounded-xl hover:bg-accent-gold hover:text-black transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
