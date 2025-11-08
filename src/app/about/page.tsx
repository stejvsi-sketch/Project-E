import { Zap, Users, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* M'LiteEv Brand Story Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-neutral-dark py-20 pt-32">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-teal-500 uppercase tracking-wider px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30">
              Our Story
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About M&rsquo;LiteEv</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Energising the future of urban mobility with premium electric scooters
          </p>
        </div>
      </section>

      {/* M'LiteEv Mission Statement */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              At M&rsquo;LiteEv, we&apos;re revolutionizing urban transportation through 
              innovative, eco-friendly electric scooters. We believe sustainable mobility 
              shouldn&apos;t compromise on performance or style. Our premium electric scooters 
              combine cutting-edge technology, superior design, and environmental responsibility 
              to deliver an unmatched riding experience for modern cities.
            </p>
          </div>
        </div>
      </section>

      {/* M'LiteEv Core Values */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">What Drives Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide M'LiteEv in creating exceptional electric scooters</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge electric vehicle technology and smart features',
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Sustainability',
                description: 'Reducing carbon emissions and protecting our environment for future generations',
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Premium Quality',
                description: 'Superior materials and exceptional craftsmanship in every M\'LiteEv scooter',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Community',
                description: 'Building a community of eco-conscious riders transforming urban mobility',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl text-center hover:shadow-xl hover:shadow-teal-500/10 hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-teal-500/50 hover:scale-105"
              >
                <div className="text-teal-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M'LiteEv Journey - From Vision to Reality */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The M'LiteEv Journey</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  M&rsquo;LiteEv was born from a simple observation: cities needed smarter, 
                  cleaner, and more efficient transportation solutions. Founded by passionate 
                  engineers and designers, we set out to create electric scooters that people 
                  would be excited to ride.
                </p>
                <p>
                  What started as a small team in a garage has grown into a leading name in 
                  urban electric mobility. Today, thousands of riders trust M&rsquo;LiteEv to 
                  energise their daily commutes, reducing emissions and traffic congestion 
                  one ride at a time.
                </p>
                <p>
                  Every M&rsquo;LiteEv scooter is designed with the rider in mind—balancing 
                  performance, range, and aesthetics to create the perfect urban companion.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-12 text-white">
                <div className="text-center">
                  <div className="text-8xl mb-6">⚡</div>
                  <h3 className="text-3xl font-bold mb-4">Energise Your Ride</h3>
                  <p className="text-lg opacity-90">
                    Join the electric revolution and experience the future of urban mobility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* M'LiteEv Impact - Our Numbers Tell Our Story */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg opacity-90">Making a difference in urban mobility across India</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Happy Riders</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Cities Covered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500K+</div>
              <div className="text-lg opacity-90">KM Traveled</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* M'LiteEv CTA - Join the Electric Revolution */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the M'LiteEv Family?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your daily commute into an eco-friendly adventure with M&rsquo;LiteEv electric scooters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/models" className="w-full sm:w-auto inline-block">
              <Button size="lg" className="w-full sm:w-auto">Explore Our Models</Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-block">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
