'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Scooter {
  name: string
  category: string
  emoji: string
  range: string
  speed: string
}

const scooters: Scooter[] = [
  { name: 'M\'LiteEv Urban Elite', category: 'Executive Series', emoji: '🛴', range: '60+ KM', speed: '45 KM/H' },
  { name: 'M\'LiteEv City Pro', category: 'Professional Series', emoji: '🛴', range: '55+ KM', speed: '42 KM/H' },
  { name: 'M\'LiteEv Metro X', category: 'Premium Series', emoji: '🛴', range: '70+ KM', speed: '48 KM/H' },
  { name: 'M\'LiteEv Eco Plus', category: 'Eco Series', emoji: '🛴', range: '45+ KM', speed: '35 KM/H' },
  { name: 'M\'LiteEv Sport', category: 'Performance Series', emoji: '🛴', range: '50+ KM', speed: '50 KM/H' },
  { name: 'M\'LiteEv Classic', category: 'Heritage Series', emoji: '🛴', range: '40+ KM', speed: '32 KM/H' },
  { name: 'M\'LiteEv Cruiser', category: 'Comfort Series', emoji: '🛴', range: '65+ KM', speed: '40 KM/H' },
]

interface ScooterCarouselProps {
  autoPlay?: boolean
  interval?: number
}

export function ScooterCarousel({ autoPlay = true, interval = 3000 }: ScooterCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!autoPlay || isHovered) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % scooters.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovered])

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % scooters.length)
  }

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + scooters.length) % scooters.length)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Display */}
      <div className="relative h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl">
        {/* Scooter Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            {/* Large Emoji/Image */}
            <div className="text-[200px] transition-all duration-500 transform hover:scale-110">
              {scooters[current].emoji}
            </div>
            
            {/* Info */}
            <div className="space-y-2">
              <p className="text-sm text-text-secondary uppercase tracking-wider">
                {scooters[current].category}
              </p>
              <h3 className="font-display text-4xl font-bold text-text-primary">
                M'LiteEv {scooters[current].name}
              </h3>
              <div className="flex items-center justify-center gap-6 text-text-secondary">
                <span>{scooters[current].range}</span>
                <span>•</span>
                <span>{scooters[current].speed}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary-bg/90 hover:bg-secondary-bg p-3 rounded-full shadow-lg transition-all hover:scale-110 border border-border-gray"
          aria-label="Previous scooter"
        >
          <ChevronLeft className="w-6 h-6 text-text-primary" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary-bg/90 hover:bg-secondary-bg p-3 rounded-full shadow-lg transition-all hover:scale-110 border border-border-gray"
          aria-label="Next scooter"
        >
          <ChevronRight className="w-6 h-6 text-text-primary" />
        </button>

      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {scooters.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              current === index 
                ? 'bg-accent-gold w-8' 
                : 'bg-border-gray w-2 hover:bg-text-secondary'
            }`}
            aria-label={`Go to scooter ${index + 1}`}
          />
        ))}
      </div>

      {/* Model Counter */}
      <div className="text-center mt-4 text-sm text-text-secondary">
        {current + 1} / {scooters.length}
      </div>
    </div>
  )
}
