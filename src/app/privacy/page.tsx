export default function Privacy() {
  return (
    <div className="min-h-screen bg-primary-bg -mt-24 md:-mt-32">
      {/* Privacy Policy Hero */}
      <section className="bg-gradient-to-br from-primary-bg via-secondary-bg to-neutral-dark pb-8 md:pb-12 pt-24 md:pt-32 prevent-horizontal-scroll">
        <div className="container-custom text-center">
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-semibold text-accent-gold uppercase tracking-wider px-3 md:px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/30">
              Legal
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-4 md:mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto px-4">
            How we protect and handle your personal information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-20 prevent-horizontal-scroll">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6 md:space-y-8">
            
            <div className="bg-secondary-bg p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border-gray">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 md:mb-4">Information We Collect</h2>
              <div className="text-text-secondary space-y-4">
                <p>When you use our website or services, we may collect:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Location data for service delivery</li>
                  <li>Usage data and preferences</li>
                  <li>Technical information about your device</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary-bg p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border-gray">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 md:mb-4">How We Use Your Information</h2>
              <div className="text-text-secondary space-y-4">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide and improve our services</li>
                  <li>Process your orders and inquiries</li>
                  <li>Send important updates and notifications</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary-bg p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border-gray">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 md:mb-4">Data Protection</h2>
              <div className="text-text-secondary space-y-4">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security audits</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data storage and transmission</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary-bg p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border-gray">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 md:mb-4">Your Rights</h2>
              <div className="text-text-secondary space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Data portability</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary-bg p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border-gray">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 md:mb-4">Cookies</h2>
              <div className="text-text-secondary space-y-4">
                <p>We use cookies to enhance your browsing experience and analyze website usage. You can control cookie settings through your browser preferences.</p>
              </div>
            </div>

            <div className="bg-secondary-bg p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-border-gray">
              <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-3 md:mb-4">Contact Us</h2>
              <div className="text-text-secondary space-y-4">
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> mukulgarg65@gmail.com</p>
                  <p><strong>Phone:</strong> +91 98186 49138</p>
                  <p><strong>Address:</strong> Near Atal Park, Sector-2, Faridabad, Haryana-121004</p>
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
