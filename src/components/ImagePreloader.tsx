'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getAllHeroImages, getModelVariantImages } from '@/lib/images'
import { ALL_MODELS } from '@/data/models'

/**
 * ImagePreloader - Preloads all model images in the background
 * when the site loads for instant navigation
 */
export function ImagePreloader() {
  const [imagesToPreload, setImagesToPreload] = useState<string[]>([])

  useEffect(() => {
    async function preloadAllImages() {
      try {
        const allImages: string[] = []
        
        // Load hero images
        const heroImages = await getAllHeroImages()
        heroImages.forEach(img => {
          if (img.image_url) allImages.push(img.image_url)
        })
        
        // Load all variant images for each model
        for (const model of ALL_MODELS) {
          const variants = await getModelVariantImages(model.id)
          variants.forEach(variant => {
            if (variant.image_url) allImages.push(variant.image_url)
          })
        }
        
        // Remove duplicates
        const uniqueImages = Array.from(new Set(allImages))
        setImagesToPreload(uniqueImages)
      } catch (error) {
        console.error('Error preloading images:', error)
      }
    }

    preloadAllImages()
  }, [])

  if (imagesToPreload.length === 0) return null

  return (
    <div className="fixed -z-50 opacity-0 pointer-events-none" aria-hidden="true">
      {imagesToPreload.map((imageUrl, index) => (
        <Image
          key={imageUrl}
          src={imageUrl}
          alt=""
          width={1}
          height={1}
          priority={index < 10} // Priority for first 10 images
          quality={95}
          loading={index < 10 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  )
}
