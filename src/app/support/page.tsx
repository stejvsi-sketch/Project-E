import { HelpCircle, Battery, Wrench, Shield, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function SupportPage() {
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
      question: 'What warranty do you offer?',
      answer: 'All M\'LiteEv scooters come with a comprehensive 3-year warranty covering motor, battery, and major components.',
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
      answer: 'Yes, we maintain a network of service centers and authorized dealers with readily available spare parts.',
    },
    {
      question: 'What is the top speed?',
      answer: 'Our scooters can reach speeds of up to 45 km/h, depending on the model. All comply with local regulations.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-neutral-dark py-20 pt-32">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">How Can We Help?</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers, support, and expert guidance for your M&rsquo;LiteEv
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                title: 'Warranty',
                description: 'Understand your coverage',
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Contact Support',
                description: 'Reach out to our team',
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 text-center border border-gray-700 hover:border-teal-500/50 hover:scale-105"
              >
                <div className="text-teal-500 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-white group-hover:text-teal-400 transition-colors">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-gray-700 hover:border-teal-500/50">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Care Guide */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Battery Care Tips
          </h2>
          
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

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is ready to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary-orange hover:bg-gray-100">
                Contact Support
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary-orange">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
