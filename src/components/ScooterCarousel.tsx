'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { getAllHeroImages, getImageOrFallback, type ModelImage } from '@/lib/images'
import { ALL_MODELS } from '@/data/models'

interface Scooter {
  name: string
  category: string
  slug: string
  imageUrl: string | null
  range: string
  speed: string
  power: string
}

interface ScooterCarouselProps {
  autoPlay?: boolean
  interval?: number
}

export function ScooterCarousel({ autoPlay = true, interval = 3000 }: ScooterCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [scooters, setScooters] = useState<Scooter[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch hero images on mount
  useEffect(() => {
    async function loadImages() {
      try {
        const heroImages = await getAllHeroImages()
        
        // Map models with their images
        const scootersWithImages: Scooter[] = ALL_MODELS.map((model) => {
          const heroImg = heroImages.find((img) => img.model_slug === model.id)
          return {
            name: model.name,
            category: model.category,
            slug: model.id,
            imageUrl: heroImg?.image_url || null,
            range: model.range,
            speed: model.maxSpeed,
            power: model.motorPower,
          }
        })

        setScooters(scootersWithImages)
      } catch (error) {
        console.error('Error loading carousel images:', error)
        // Fallback to models without images
        const fallbackScooters: Scooter[] = ALL_MODELS.map((model) => ({
          name: model.name,
          category: model.category,
          slug: model.id,
          imageUrl: null,
          range: model.range,
          speed: model.maxSpeed,
          power: model.motorPower,
        }))
        setScooters(fallbackScooters)
      } finally {
        setIsLoading(false)
      }
    }

    loadImages()
  }, [])

  useEffect(() => {
    if (!autoPlay || isHovered || scooters.length === 0) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % scooters.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, isHovered, scooters.length])

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
  const currentScooter = scooters[current]
  const imageData = currentScooter ? getImageOrFallback(currentScooter.imageUrl) : { type: 'emoji' as const, value: '🛴' }

  if (isLoading || scooters.length === 0) {
    return (
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden" style={{ maxWidth: '100%' }}>
        <div className="relative h-[400px] sm:h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-700 flex items-center justify-center">
          <div className="text-white text-xl">Loading models...</div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto overflow-hidden"
      style={{ maxWidth: '100%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Display */}
      <div className={`relative h-[550px] sm:h-[600px] md:h-[650px] bg-gradient-to-br ${currentScheme.bg} rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border ${currentScheme.border} transition-all duration-700`}>
        {/* Premium Image Container */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 py-8">
          {/* Scooter Image - Larger and More Prominent */}
          <div className="relative w-full h-[280px] sm:h-[320px] md:w-1/2 md:h-[500px] lg:h-[550px] flex items-center justify-center order-2 md:order-1">
            <div className="relative w-full h-full max-w-[400px] sm:max-w-[480px] md:max-w-none transition-all duration-500 transform hover:scale-105">
              {imageData.type === 'image' ? (
                <Image
                  src={imageData.value}
                  alt={currentScooter.name}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                  priority={current === 0}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[150px] sm:text-[180px] md:text-[250px]">
                  {imageData.value}
                </div>
              )}
            </div>
          </div>
          
          {/* Premium Text Overlay - Mobile: Over image, Desktop: Side by side */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6 order-1 md:order-2 md:pl-8">
            <div className="inline-block px-5 py-2 bg-accent-gold/20 backdrop-blur-md border border-accent-gold/40 rounded-full">
              <p className="text-xs sm:text-sm text-accent-gold uppercase tracking-widest font-bold">
                {scooters[current].category}
              </p>
            </div>
            <h3 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl leading-tight">
              {scooters[current].name}
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              <div className="bg-white/15 backdrop-blur-md border border-white/30 px-5 py-3 rounded-xl">
                <span className="text-white font-bold text-base sm:text-lg md:text-xl">{scooters[current].range}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
              <div className="bg-white/15 backdrop-blur-md border border-white/30 px-5 py-3 rounded-xl">
                <span className="text-white font-bold text-base sm:text-lg md:text-xl">{scooters[current].speed}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl transition-all hover:scale-110 border border-accent-gold/30 z-20"
          aria-label="Previous scooter"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-text-heading" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl transition-all hover:scale-110 border border-accent-gold/30 z-20"
          aria-label="Next scooter"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-text-heading" />
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
