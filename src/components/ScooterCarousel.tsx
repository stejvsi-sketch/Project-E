'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Scooter {
  name: string
  category: string
  emoji: string
  range: string
  speed: string
  power: string
}

const scooters: Scooter[] = [
  { name: 'S.L Pro', category: 'Standard Line', emoji: '🛴', range: '50+ KM', speed: '40-45 KM/H', power: '1000W' },
  { name: 'D.L Pro', category: 'Deluxe Line', emoji: '🛴', range: '50+ KM', speed: '40-45 KM/H', power: '1000W' },
  { name: 'CS Pro', category: 'City Sport', emoji: '🛴', range: '60+ KM', speed: '50-55 KM/H', power: '1200W' },
  { name: 'CS Pro +', category: 'City Sport Plus', emoji: '🛴', range: '60+ KM', speed: '50-55 KM/H', power: '1200W' },
  { name: 'Vespa Pro', category: 'Premium Classic', emoji: '🛴', range: '60+ KM', speed: '50-55 KM/H', power: '1200W' },
  { name: 'Vespa Pro +', category: 'Premium Classic Plus', emoji: '🛴', range: '60+ KM', speed: '50-55 KM/H', power: '1200W' },
  { name: 'CS 3', category: 'City Sport 3', emoji: '🛴', range: '60+ KM', speed: '50-55 KM/H', power: '1200W' },
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

  // Premium dark color schemes for each scooter
  const colorSchemes = [
    { bg: 'from-orange-900 via-red-900 to-orange-800', border: 'border-orange-700/30' }, // Urban Elite - Deep Orange
    { bg: 'from-slate-900 via-gray-900 to-slate-800', border: 'border-slate-700/30' }, // City Pro - Deep Gray
    { bg: 'from-emerald-900 via-green-900 to-emerald-800', border: 'border-emerald-700/30' }, // Metro X - Forest Green
    { bg: 'from-teal-900 via-cyan-900 to-teal-800', border: 'border-teal-700/30' }, // Eco Plus - Deep Teal
    { bg: 'from-red-900 via-rose-900 to-red-800', border: 'border-red-700/30' }, // Sport - Deep Red
    { bg: 'from-indigo-900 via-blue-900 to-indigo-800', border: 'border-indigo-700/30' }, // Classic - Deep Indigo
    { bg: 'from-blue-900 via-sky-900 to-blue-800', border: 'border-blue-700/30' }, // Cruiser - Deep Blue
  ]

  const currentScheme = colorSchemes[current] || colorSchemes[0]

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Display */}
      <div className={`relative h-[500px] bg-gradient-to-br ${currentScheme.bg} rounded-3xl overflow-hidden shadow-xl border ${currentScheme.border} transition-all duration-700`}>
        {/* Scooter Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            {/* Large Emoji/Image */}
            <div className="text-[120px] md:text-[200px] transition-all duration-500 transform hover:scale-110">
              {scooters[current].emoji}
            </div>
            
            {/* Info */}
            <div className="space-y-4">
              <p className="text-sm text-accent-gold uppercase tracking-wider font-semibold">
                {scooters[current].category}
              </p>
              <h3 className="font-display text-4xl font-bold text-white drop-shadow-lg">
                {scooters[current].name}
              </h3>
              <div className="flex items-center justify-center gap-6 text-white/90 text-lg font-medium">
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
