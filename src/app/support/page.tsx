import { HelpCircle, Battery, Wrench, Shield, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function SupportPage() {
  // M'LiteEv Frequently Asked Questions - Common queries from our customers
  const faqs = [
    {
      question: 'What is the range of M\'LiteEv scooters?',
      answer: 'Our scooters offer a range of 60+ kilometers on a single charge, depending on the model and riding conditions.',
    },
    {
      question: 'How long does it take to charge?',
      answer: 'Full charge typically takes 4-6 hours using the standard charger. Fast charging options are available for select models.',
    },
    {
      question: 'Do you provide home delivery?',
      answer: 'Yes! We offer free home delivery across all major cities. Assembly and initial setup are included.',
    },
    {
      question: 'Can I test ride before buying?',
      answer: 'Absolutely! We offer free home test rides. Contact us to schedule a test ride at your convenience.',
    },
    {
      question: 'What maintenance is required?',
      answer: 'M\'LiteEv scooters require minimal maintenance. We recommend a service check every 3 months or 1000 km, whichever comes first.',
    },
    {
      question: 'Are spare parts readily available?',
      answer: 'Yes, we work with local service partners and maintain stock of common spare parts for quick repairs.',
    },
    {
      question: 'What is the top speed?',
      answer: 'Our scooters can reach speeds of up to 45 km/h, depending on the model. All comply with local regulations.',
    },
  ]

  return (
    <div className="min-h-screen bg-primary-bg overflow-hidden w-full max-w-full">
      {/* M'LiteEv Support Center Hero */}
      <section className="bg-gradient-to-br from-primary-bg via-secondary-bg to-neutral-dark pb-12 md:pb-16 overflow-hidden w-full max-w-full">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-accent-teal uppercase tracking-wider px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/30">
              Support Center
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Support Center
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Get answers, support, and expert guidance for your M&rsquo;LiteEv electric scooter
          </p>
        </div>
      </section>

      {/* M'LiteEv Support Categories */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Battery className="w-8 h-8" />,
                title: 'Battery Care',
                description: 'Tips for optimal battery performance',
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: 'Maintenance',
                description: 'Keep your scooter in top condition',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Quality Assurance',
                description: 'Premium build standards',
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Contact Support',
                description: 'Reach out to our team',
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group bg-secondary-bg backdrop-blur-sm p-6 rounded-2xl hover:shadow-xl hover:shadow-accent-gold/10 transition-all duration-300 text-center border border-border-gray hover:border-accent-gold/50 hover:scale-105"
              >
                <div className="text-accent-gold mb-4 group-hover:scale-110 group-hover:text-accent-gold-hover transition-all">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{category.title}</h3>
                <p className="text-text-secondary">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M'LiteEv FAQ - Customer Questions Answered */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-8">How Can We Help?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Quick answers to common M'LiteEv questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-secondary-bg backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-accent-gold/10 transition-all duration-300 border border-border-gray hover:border-accent-gold/50">
                <h3 className="text-xl font-bold text-text-primary mb-3">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M'LiteEv Battery Care Guide */}
      <section className="py-20 bg-gray-800">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Battery Care Tips
            </h2>
            <p className="text-gray-400">Maximize your M'LiteEv battery life with these tips</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-900/30 border-2 border-teal-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-teal-400 mb-4">✓ DO</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Charge regularly, even if not fully depleted</li>
                <li>• Store in a cool, dry place</li>
                <li>• Use the original charger</li>
                <li>• Keep battery charge between 20-80% for daily use</li>
                <li>• Charge before long-term storage</li>
              </ul>
            </div>

            <div className="bg-red-900/30 border-2 border-red-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">✗ DON&apos;T</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Leave battery completely discharged for long periods</li>
                <li>• Expose to extreme temperatures</li>
                <li>• Use third-party chargers</li>
                <li>• Overcharge (unplug when fully charged)</li>
                <li>• Ride with low battery repeatedly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* M'LiteEv Support Contact CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Our M'LiteEv support team is ready to assist you with any queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto inline-block">
              <Button size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500">
                Contact Support
              </Button>
            </Link>
            <a href="tel:+919876543210" className="w-full sm:w-auto inline-block">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
