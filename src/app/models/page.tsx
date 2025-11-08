import Link from 'next/link'
import { Battery, Zap, Shield, Filter, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { QuickConfigurator } from '@/components/QuickConfigurator'
import { SkeletonProductGrid } from '@/components/SkeletonLoader'

export default function ModelsPage() {
  // Placeholder data - will be replaced with Supabase data
  const models = [
    { id: 1, name: 'Model A', slug: 'model-a', category: 'Commuter' },
    { id: 2, name: 'Model B', slug: 'model-b', category: 'City' },
    { id: 3, name: 'Model C', slug: 'model-c', category: 'Premium' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary-orange uppercase tracking-wider px-4 py-2 rounded-full bg-primary-orange/10">
                Our Collection
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-dark mb-6">
              Find Your Perfect Ride
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Premium electric scooters engineered for the modern city. Choose from our executive collection.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button className="btn-primary">All Models</button>
            <button className="btn-secondary">Commuter</button>
            <button className="btn-secondary">City</button>
            <button className="btn-secondary">Premium</button>
          </div>
        </div>
      </section>

      {/* Quick Configurator */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <QuickConfigurator />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Urban Elite', category: 'Executive Series', range: '60+ KM', speed: '45 KM/H', rating: 4.9, reviews: 234, badge: 'Best Seller' },
              { name: 'City Pro', category: 'Professional Series', range: '55+ KM', speed: '42 KM/H', rating: 4.8, reviews: 187, badge: 'Popular' },
              { name: 'Metro X', category: 'Premium Series', range: '70+ KM', speed: '48 KM/H', rating: 5.0, reviews: 156, badge: 'Premium' },
              { name: 'Eco Plus', category: 'Eco Series', range: '45+ KM', speed: '35 KM/H', rating: 4.6, reviews: 298, badge: 'Budget' },
              { name: 'Sport', category: 'Performance Series', range: '50+ KM', speed: '50 KM/H', rating: 4.9, reviews: 112, badge: 'Fast' },
              { name: 'Classic', category: 'Heritage Series', range: '40+ KM', speed: '32 KM/H', rating: 4.7, reviews: 203, badge: 'Classic' },
              { name: 'Cruiser', category: 'Comfort Series', range: '65+ KM', speed: '40 KM/H', rating: 4.8, reviews: 145, badge: 'New' },
            ].map((model, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                {/* Badge */}
                {model.badge && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary-orange text-white text-xs font-bold rounded-full">
                    {model.badge}
                  </div>
                )}

                {/* Image Placeholder */}
                <div className="relative h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl group-hover:scale-110 transition-transform duration-500">🛴</div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="text-sm text-primary-orange font-semibold mb-2">{model.category}</div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-4">{model.name}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Range:</span>
                      <span className="font-semibold">{model.range}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Top Speed:</span>
                      <span className="font-semibold">{model.speed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-semibold">{model.rating} ({model.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <Link href="/contact" className="flex-1">
                      <button className="w-full btn-primary py-3 text-base">
                        Reserve
                      </button>
                    </Link>
                    <Link href="/models" className="flex-1">
                      <button className="w-full btn-secondary py-3 text-base">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center bg-white p-12 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-neutral-dark mb-4">More Models Coming Soon!</h3>
            <p className="text-xl text-gray-600 mb-6">
              We&apos;re expanding our lineup with even more premium electric scooters
            </p>
            <Link href="/contact">
              <Button size="lg">Get Notified</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
