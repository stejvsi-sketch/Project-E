'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Model {
  id: string
  name: string
  price: number
  range: string
  topSpeed: string
}

const models: Model[] = [
  { id: 'urban-elite', name: 'Urban Elite', price: 85000, range: '60+ KM', topSpeed: '45 KM/H' },
  { id: 'city-pro', name: 'City Pro', price: 75000, range: '55+ KM', topSpeed: '42 KM/H' },
  { id: 'metro-x', name: 'Metro X', price: 95000, range: '70+ KM', topSpeed: '48 KM/H' },
]

const colors = [
  { id: 'black', name: 'Midnight Black', hex: '#000000' },
  { id: 'white', name: 'Pearl White', hex: '#FFFFFF' },
  { id: 'orange', name: 'Sunset Orange', hex: '#FF6A00' },
]

export function QuickConfigurator() {
  const [selectedModel, setSelectedModel] = useState<Model>(models[0])
  const [selectedColor, setSelectedColor] = useState(colors[0])

  return (
    <div className="bg-secondary-bg rounded-3xl shadow-2xl p-8 max-w-md mx-auto border border-border-gray">
      <div className="mb-8">
        <h3 className="font-display text-3xl font-bold text-text-primary mb-2">
          Configure Your Scooter
        </h3>
        <p className="text-text-secondary">Build your perfect electric scooter in seconds</p>
      </div>

      {/* Model Selection */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-neutral-dark mb-4 uppercase tracking-wider">
          Choose Model
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedModel(model)}
              className={`relative p-6 rounded-xl border-2 transition-all text-left ${
                selectedModel.id === model.id
                  ? 'border-primary-orange bg-primary-orange/5 shadow-lg'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="text-lg font-bold text-text-primary mb-2">{model.name}</div>
              <div className="text-sm text-text-secondary space-y-1">
                <div>{model.range} range</div>
                <div>{model.topSpeed} top speed</div>
              </div>
              {selectedModel.id === model.id && (
                <div className="absolute top-3 right-3">
                  <div className="w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-neutral-dark mb-4 uppercase tracking-wider">
          Choose Color
        </label>
        <div className="flex flex-wrap gap-4">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color)}
              className="flex items-center gap-3 p-3 pr-6 rounded-xl border-2 transition-all hover:shadow-md"
              style={{
                borderColor: selectedColor.id === color.id ? '#FF6A00' : '#E5E7EB',
                backgroundColor: selectedColor.id === color.id ? '#FFF7F0' : 'transparent',
              }}
            >
              <div
                className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-inner"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-sm font-medium text-neutral-dark">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Configuration Summary */}
      <div className="bg-primary-bg border border-border-gray rounded-xl p-6 mb-6">
        <div className="mb-4">
          <p className="text-sm text-text-secondary mb-2">Your Configuration</p>
          <p className="text-2xl font-bold text-text-primary">
            {selectedModel.name} · {selectedColor.name}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-text-secondary">Premium Build</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-text-secondary">Free Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-text-secondary">0% Financing</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-text-secondary">30-Day Test Ride</span>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/contact" className="flex-1">
          <button className="w-full btn-primary text-center">
            Reserve Now
          </button>
        </Link>
        <Link href="/models" className="flex-1">
          <button className="w-full btn-secondary text-center">
            View Details
          </button>
        </Link>
      </div>

      {/* Fine Print */}
      <p className="text-xs text-text-secondary text-center mt-4">
        Free 30-day test ride · 0% financing available · Contact us for pricing
      </p>
    </div>
  )
}
