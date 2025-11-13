export default function Terms() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Terms of Use Hero */}
      <section className="bg-gradient-to-br from-primary-bg via-secondary-bg to-neutral-dark py-20 pt-32">
        <div className="container-custom text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-accent-teal uppercase tracking-wider px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/30">
              Legal
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Terms of Use
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Terms and conditions for using M'LiteEv services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg prose-invert max-w-none">
            
            <div className="bg-secondary-bg p-8 rounded-3xl border border-border-gray mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Acceptance of Terms</h2>
              <div className="text-text-secondary space-y-4">
                <p>By accessing and using the M'LiteEv website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>
            </div>

            <div className="bg-secondary-bg p-8 rounded-3xl border border-border-gray mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Use License</h2>
              <div className="text-text-secondary space-y-4">
                <p>Permission is granted to temporarily download one copy of the materials on M'LiteEv's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary-bg p-8 rounded-3xl border border-border-gray mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Product Information</h2>
              <div className="text-text-secondary space-y-4">
                <p>We strive to provide accurate product information, but:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Specifications may vary and are subject to change</li>
                  <li>Colors may appear different on various devices</li>
                  <li>Availability is subject to stock and demand</li>
                  <li>Prices are subject to change without notice</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary-bg p-8 rounded-3xl border border-border-gray mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Service Terms</h2>
              <div className="text-text-secondary space-y-4">
                <p>When using our services:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>You must provide accurate information</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>You must comply with all applicable laws</li>
                  <li>You may not use our services for illegal activities</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary-bg p-8 rounded-3xl border border-border-gray mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Limitation of Liability</h2>
              <div className="text-text-secondary space-y-4">
                <p>M'LiteEv shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
              </div>
            </div>

            <div className="bg-secondary-bg p-8 rounded-3xl border border-border-gray mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Governing Law</h2>
              <div className="text-text-secondary space-y-4">
                <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
              </div>
            </div>

            <div className="bg-secondary-bg p-8 rounded-3xl border border-border-gray">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
              <div className="text-text-secondary space-y-4">
                <p>Questions about the Terms of Use should be sent to us at:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> info@mliteev.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                </div>
                <p className="text-sm mt-4"><em>Last updated: November 2024</em></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
