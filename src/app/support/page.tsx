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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white py-24">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-orange uppercase tracking-wider px-4 py-2 rounded-full bg-primary-orange/10">
              Support Center
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark mb-6">How Can We Help?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers, support, and expert guidance for your M&rsquo;LiteEv
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="section-padding bg-white">
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
                className="bg-neutral-gray p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-primary-orange mb-3 flex justify-center">{category.icon}</div>
                <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-dark text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-neutral-dark mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery Care Guide */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-neutral-dark mb-8 text-center">
            Battery Care Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">✓ DO</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Charge regularly, even if not fully depleted</li>
                <li>• Store in a cool, dry place</li>
                <li>• Use the original charger</li>
                <li>• Keep battery charge between 20-80% for daily use</li>
                <li>• Charge before long-term storage</li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">✗ DON&apos;T</h3>
              <ul className="space-y-3 text-gray-700">
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
      <section className="section-padding bg-primary-orange text-white">
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
