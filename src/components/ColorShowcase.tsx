'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getShowcaseImages, getImageOrFallback, type ModelImage } from '@/lib/images'
import { Zap, Shield, Gauge, Battery } from 'lucide-react'

type ShowcaseColor = 'black' | 'white' | 'red'

const DISPLAY_COLORS = [
  { name: 'Midnight Black', hex: '#000000', border: 'border-text-heading', key: 'black' as ShowcaseColor },
  { name: 'Pure White', hex: '#FFFFFF', border: 'border-text-heading', key: 'white' as ShowcaseColor },
  { name: 'Crimson Red', hex: '#DC2626', border: 'border-red-600', key: 'red' as ShowcaseColor },
]

export function ColorShowcase() {
  const [showcaseImages, setShowcaseImages] = useState<Record<ShowcaseColor, ModelImage | null>>({
    black: null,
    white: null,
    red: null,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  useEffect(() => {
    async function loadShowcaseImages() {
      try {
        const images = await getShowcaseImages()

        const mappedImages = images.reduce((acc, img) => {
          const color = img.color as ShowcaseColor
          if (color && ['black', 'white', 'red'].includes(color)) {
            acc[color as ShowcaseColor] = img
          }
          return acc
        }, { black: null, white: null, red: null } as Record<ShowcaseColor, ModelImage | null>)

        setShowcaseImages(mappedImages)
      } catch (error) {
        console.error('Error loading showcase images:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadShowcaseImages()
  }, [])

  const currentColor = DISPLAY_COLORS[selectedColorIndex]
  const currentImage = showcaseImages[currentColor.key]
  const imageData = currentImage ? getImageOrFallback(currentImage.image_url) : { type: 'emoji' as const, value: '🛴' }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Premium color selector with larger spacing */}
      <div className="grid grid-cols-3 gap-6 md:gap-20 mb-12 md:mb-16">
        {DISPLAY_COLORS.map((color, i) => (
          <div 
            key={i} 
            className="text-center group cursor-pointer transform transition-all hover:scale-105"
            onClick={() => setSelectedColorIndex(i)}
          >
            <div className="relative mx-auto mb-4">
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full border-[3px] ${selectedColorIndex === i ? 'border-accent-gold scale-110' : color.border} transition-all duration-500 mx-auto p-1 bg-white shadow-xl group-hover:shadow-2xl group-hover:border-accent-gold`}>
                <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }}></div>
              </div>
              {selectedColorIndex === i && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
              )}
            </div>
            <p className={`text-xs md:text-sm tracking-[0.2em] uppercase font-bold transition-colors ${selectedColorIndex === i ? 'text-accent-gold' : 'text-text-heading'}`}>
              {color.name}
            </p>
          </div>
        ))}
      </div>
      
      {/* Premium scooter showcase with feature callouts */}
      <div className="relative bg-gradient-to-br from-muted-bg via-secondary-bg to-primary-bg rounded-3xl p-8 md:p-16 border border-accent-gold/20 shadow-xl overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)] rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-champagne/10 rounded-full blur-3xl"></div>
        
        <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
          {/* Left Feature Callouts */}
          <div className="hidden md:flex flex-col gap-6 justify-center">
            {/* Feature 1 */}
            <div className="group flex items-center gap-4 animate-fade-in">
              <div className="flex-1 text-right">
                <h4 className="text-sm font-bold text-text-heading mb-1 group-hover:text-accent-gold transition-colors">Powerful Motor</h4>
                <p className="text-xs text-text-muted">1000W-1200W Performance</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold/20 transition-all">
                <Zap className="w-5 h-5 text-accent-gold" />
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-gold/50 to-transparent"></div>
            </div>
            
            {/* Feature 2 */}
            <div className="group flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex-1 text-right">
                <h4 className="text-sm font-bold text-text-heading mb-1 group-hover:text-accent-gold transition-colors">Smart Battery</h4>
                <p className="text-xs text-text-muted">60V/72V Options</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold/20 transition-all">
                <Battery className="w-5 h-5 text-accent-gold" />
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-gold/50 to-transparent"></div>
            </div>
          </div>

          {/* Center: Scooter Image */}
          <div className="relative flex items-center justify-center">
            {isLoading ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-6 rounded-full bg-white/20 animate-pulse" />
                <div className="w-56 h-56 rounded-full bg-white/10 animate-pulse" />
              </div>
            ) : imageData.type === 'image' ? (
              <div className="relative w-full h-[320px] md:h-[450px] md:w-[400px]">
                <Image
                  src={imageData.value}
                  alt={`${currentColor.name} scooter`}
                  fill
                  className="object-contain drop-shadow-2xl transform scale-125 md:scale-100 transition-all duration-700 hover:scale-135"
                  sizes="(max-width: 768px) 320px, 400px"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-accent-gold text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  {currentColor.name}
                </div>
              </div>
            ) : (
              <div className="text-[150px] md:text-[250px] filter drop-shadow-2xl">
                {imageData.value}
              </div>
            )}
          </div>

          {/* Right Feature Callouts */}
          <div className="hidden md:flex flex-col gap-6 justify-center">
            {/* Feature 3 */}
            <div className="group flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-0.5 bg-gradient-to-l from-accent-gold/50 to-transparent"></div>
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold/20 transition-all">
                <Gauge className="w-5 h-5 text-accent-gold" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-text-heading mb-1 group-hover:text-accent-gold transition-colors">High Speed</h4>
                <p className="text-xs text-text-muted">Up to 55 Km/H</p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="group flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-0.5 bg-gradient-to-l from-accent-gold/50 to-transparent"></div>
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center group-hover:bg-accent-gold/20 transition-all">
                <Shield className="w-5 h-5 text-accent-gold" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-text-heading mb-1 group-hover:text-accent-gold transition-colors">Safe & Secure</h4>
                <p className="text-xs text-text-muted">Disc Brake System</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Feature Pills */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-3">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-accent-gold/20">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-accent-gold" />
              <h4 className="text-xs font-bold text-text-heading">Powerful Motor</h4>
            </div>
            <p className="text-[10px] text-text-muted">1000W-1200W</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-accent-gold/20">
            <div className="flex items-center gap-2 mb-1">
              <Battery className="w-4 h-4 text-accent-gold" />
              <h4 className="text-xs font-bold text-text-heading">Smart Battery</h4>
            </div>
            <p className="text-[10px] text-text-muted">60V/72V Options</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-accent-gold/20">
            <div className="flex items-center gap-2 mb-1">
              <Gauge className="w-4 h-4 text-accent-gold" />
              <h4 className="text-xs font-bold text-text-heading">High Speed</h4>
            </div>
            <p className="text-[10px] text-text-muted">Up to 55 Km/H</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-accent-gold/20">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-4 h-4 text-accent-gold" />
              <h4 className="text-xs font-bold text-text-heading">Safe & Secure</h4>
            </div>
            <p className="text-[10px] text-text-muted">Disc Brakes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
