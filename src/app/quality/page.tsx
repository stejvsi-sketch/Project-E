import { Shield, Award, Zap, Settings, CheckCircle, Star } from 'lucide-react'

export default function Quality() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Quality Standards Hero */}
      <section className="bg-gradient-to-br from-primary-bg via-secondary-bg to-neutral-dark py-20 pt-32">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-accent-gold uppercase tracking-wider px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/30">
              Excellence
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Quality Standards
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Our commitment to premium electric mobility excellence
          </p>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Quality Pillars
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every M'LiteEv scooter meets the highest standards of quality, safety, and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Safety First',
                description: 'Rigorous safety testing and premium component selection ensure your protection on every ride.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Premium Materials',
                description: 'High-grade aluminum frames, quality batteries, and durable components built to last.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Performance Standards',
                description: 'Consistent power delivery, reliable range, and optimal efficiency in all conditions.'
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: 'Precision Engineering',
                description: 'Advanced manufacturing processes and quality control at every production stage.'
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Quality Assurance',
                description: 'Comprehensive testing protocols and inspection procedures before delivery.'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Customer Satisfaction',
                description: 'Dedicated support and continuous improvement based on customer feedback.'
              }
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-secondary-bg p-8 rounded-3xl border border-border-gray hover:border-accent-gold/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="text-accent-gold mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{pillar.title}</h3>
                <p className="text-text-secondary">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Standards */}
      <section className="py-20 bg-secondary-bg border-t border-border-gray">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Rigorous Testing Protocols
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-gold pl-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Battery Testing</h3>
                  <p className="text-text-secondary">1000+ charge cycles, temperature extremes, and performance validation under various conditions.</p>
                </div>
                <div className="border-l-4 border-accent-teal pl-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Safety Compliance</h3>
                  <p className="text-text-secondary">All models undergo comprehensive safety testing including brake performance, electrical safety, and structural integrity.</p>
                </div>
                <div className="border-l-4 border-accent-gold pl-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">Durability Testing</h3>
                  <p className="text-text-secondary">Extended road testing, vibration analysis, and component longevity assessments.</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-bg p-8 rounded-3xl border border-border-gray">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Quality Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-gold" />
                  <span className="text-text-primary">ISO 9001:2015 Quality Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-gold" />
                  <span className="text-text-primary">Bureau of Indian Standards (BIS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-gold" />
                  <span className="text-text-primary">Automotive Research Association of India (ARAI)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-gold" />
                  <span className="text-text-primary">International Electrotechnical Commission (IEC)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-gold" />
                  <span className="text-text-primary">Environmental Management System (ISO 14001)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Our Quality Commitment
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              We stand behind every M'LiteEv scooter with comprehensive quality assurance, ongoing support, and continuous improvement to deliver the premium electric mobility experience you deserve.
            </p>
            <div className="bg-secondary-bg p-8 rounded-3xl border border-border-gray">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">100%</div>
                  <div className="text-text-secondary">Quality Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-teal mb-2">24/7</div>
                  <div className="text-text-secondary">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-gold mb-2">Premium</div>
                  <div className="text-text-secondary">Build Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
