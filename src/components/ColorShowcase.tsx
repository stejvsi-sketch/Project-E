'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getShowcaseImages, getImageOrFallback, type ModelImage } from '@/lib/images'

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
    <div className="max-w-5xl mx-auto">
      {/* Premium color trio - Only Red, White, Black */}
      <div className="grid grid-cols-3 gap-8 md:gap-16 mb-20">
        {DISPLAY_COLORS.map((color, i) => (
          <div 
            key={i} 
            className="text-center group cursor-pointer"
            onClick={() => setSelectedColorIndex(i)}
          >
            <div className="relative mx-auto mb-6">
              {/* Premium frame */}
              <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full border-4 ${selectedColorIndex === i ? 'border-accent-gold' : color.border} transition-all duration-500 mx-auto p-1 bg-white shadow-xl group-hover:shadow-2xl group-hover:border-accent-gold`}>
                <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }}></div>
              </div>
            </div>
            <p className={`text-sm md:text-base tracking-[0.2em] uppercase font-semibold transition-colors ${selectedColorIndex === i ? 'text-accent-gold' : 'text-text-heading'}`}>
              {color.name}
            </p>
          </div>
        ))}
      </div>
      
      {/* Premium scooter showcase */}
      <div className="relative bg-gradient-to-br from-muted-bg to-primary-bg rounded-3xl p-12 md:p-20 border-2 border-accent-gold/20 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)] rounded-3xl"></div>
        <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px]">
          {isLoading ? (
            <div className="text-text-heading text-xl">Loading...</div>
          ) : imageData.type === 'image' ? (
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src={imageData.value}
                alt={`${currentColor.name} scooter`}
                fill
                className="object-contain drop-shadow-2xl transition-all duration-700"
                sizes="(max-width: 768px) 300px, 500px"
              />
            </div>
          ) : (
            <div className="text-[150px] md:text-[250px] filter drop-shadow-2xl">
              {imageData.value}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
