import { Zap, Users, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white py-24">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-orange uppercase tracking-wider px-4 py-2 rounded-full bg-primary-orange/10">
              About Us
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark mb-6">About M&rsquo;LiteEv</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Energising the future of urban mobility
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At M&rsquo;LiteEv, we&apos;re on a mission to revolutionize urban transportation through 
              innovative, eco-friendly electric scooters. We believe that sustainable mobility 
              shouldn&apos;t come at the cost of performance or style. Our premium electric scooters 
              combine cutting-edge technology, superior design, and environmental responsibility 
              to deliver an unmatched riding experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark text-center mb-16">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Innovation',
                description: 'Constantly pushing boundaries with cutting-edge electric vehicle technology',
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Sustainability',
                description: 'Committed to reducing carbon footprint and protecting our environment',
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Quality',
                description: 'Premium materials and craftsmanship in every scooter we build',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Community',
                description: 'Building a community of eco-conscious urban riders',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary-orange mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
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
              <div className="bg-gradient-to-br from-primary-orange-light to-primary-orange rounded-3xl p-12 text-white">
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

      {/* Stats */}
      <section className="section-padding bg-primary-orange text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
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

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-neutral-dark mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how M&rsquo;LiteEv can transform your daily commute into an eco-friendly adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/models">
              <Button size="lg">Explore Our Models</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
