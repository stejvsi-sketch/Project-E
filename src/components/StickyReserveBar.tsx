'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface StickyReserveBarProps {
  productName: string
  onReserve?: () => void
}

export function StickyReserveBar({ productName, onReserve }: StickyReserveBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-secondary-bg border-t border-border-gray shadow-2xl transition-transform duration-300 lg:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-text-primary truncate">
              {productName}
            </p>
            <p className="text-xs text-text-secondary">
              Contact us for pricing
            </p>
          </div>

          {/* CTA Button */}
          {onReserve ? (
            <button
              onClick={onReserve}
              className="px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-primary-orange-dark transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              Reserve Now
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link href="/contact">
              <button className="px-6 py-3 bg-primary-orange text-white font-semibold rounded-lg hover:bg-primary-orange-dark transition-all shadow-lg flex items-center gap-2 whitespace-nowrap">
                Reserve Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
