'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

interface GalleryImage {
  url: string
  alt: string
  thumbnail: string
  highRes?: string
}

interface ProductGalleryProps {
  images: GalleryImage[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
        <div className="text-8xl">🛴</div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square group">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-50">
          {images[activeImage]?.url?.startsWith('http') ? (
            <Image
              src={images[activeImage].url}
              alt={images[activeImage].alt || `${productName} view ${activeImage + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-9xl">🛴</div>
            </div>
          )}
        </div>

        {/* Zoom Button */}
        <button
          onClick={() => setIsZoomed(true)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
          aria-label="Zoom image"
        >
          <ZoomIn className="w-5 h-5 text-neutral-dark" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm font-medium">
          {activeImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
              activeImage === idx
                ? 'ring-2 ring-primary-orange ring-offset-2'
                : 'hover:ring-2 hover:ring-gray-300'
            }`}
          >
            {img.thumbnail?.startsWith('http') ? (
              <Image
                src={img.thumbnail}
                alt={img.alt || `${productName} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="200px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-4xl">🛴</div>
              </div>
            )}
            {activeImage === idx && (
              <div className="absolute inset-0 bg-primary-orange/20" />
            )}
          </button>
        ))}
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
            aria-label="Close zoom"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Zoomed Image */}
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            {images[activeImage]?.highRes?.startsWith('http') || images[activeImage]?.url?.startsWith('http') ? (
              <Image
                src={images[activeImage].highRes || images[activeImage].url}
                alt={images[activeImage].alt || `${productName} zoomed view`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-[200px]">🛴</div>
              </div>
            )}
          </div>

          {/* Navigation */}
          {images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveImage(idx)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeImage === idx ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
