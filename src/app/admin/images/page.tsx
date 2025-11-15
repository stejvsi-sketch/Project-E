'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase/client'
import { Upload, CheckCircle, XCircle, ArrowLeft, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface UploadedImage {
  id: string
  model_slug: string
  color: string
  image_type: string
  image_url: string
}

const MODELS = [
  { slug: 'sl-pro', name: 'S.L Pro' },
  { slug: 'dl-pro', name: 'D.L Pro' },
  { slug: 'cs-pro', name: 'CS Pro' },
  { slug: 'cs-pro-plus', name: 'CS Pro +' },
  { slug: 'vespa-pro', name: 'Vespa Pro' },
  { slug: 'vespa-pro-plus', name: 'Vespa Pro +' },
  { slug: 'cs-3', name: 'CS 3' },
]

const COLORS = ['red', 'white', 'black']

export default function ImageAdminPage() {
  const [images, setImages] = useState<UploadedImage[]>([])
  const [uploadingKey, setUploadingKey] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    loadImages()
  }, [])

  async function loadImages() {
    const { data } = await supabase
      .from('model_images')
      .select('*')
      .order('image_type')
      .order('model_slug')

    setImages(data || [])
  }

  function showMessage(type: 'success' | 'error', text: string) {
    setMessage({ type, text })
    setTimeout(() => setMessage(null), 3000)
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>, imageType: string, modelSlug: string, color: string) {
    const file = e.target.files?.[0]
    if (!file) return

    const uploadKey = `${imageType}-${modelSlug}-${color}`
    setUploadingKey(uploadKey)

    try {
      // Determine folder and filename
      let folder = ''
      let filename = ''
      
      if (imageType === 'hero') {
        folder = 'heroes'
        filename = `${modelSlug}-hero.png`
      } else if (imageType === 'showcase') {
        folder = 'showcase'
        filename = `showcase-${color}.png`
      } else {
        folder = 'models'
        filename = `${modelSlug}-${color}.png`
      }

      const filePath = `${folder}/${filename}`

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('scooter-images')
        .upload(filePath, file, { upsert: true })

      if (uploadError) throw new Error(uploadError.message)

      // Get public URL (add cache-busting param)
      const { data: { publicUrl } } = supabase.storage
        .from('scooter-images')
        .getPublicUrl(filePath)

      const cacheBustedUrl = `${publicUrl}?v=${Date.now()}`

      // Check if record exists
      const { data: existing } = await supabase
        .from('model_images')
        .select('id')
        .eq('model_slug', modelSlug)
        .eq('color', color)
        .eq('image_type', imageType)
        .single()

      // Update or insert
      if (existing) {
        await supabase
          .from('model_images')
          .update({ image_url: cacheBustedUrl })
          .eq('id', existing.id)
      } else {
        await supabase
          .from('model_images')
          .insert({
            model_slug: modelSlug,
            color: color,
            image_type: imageType,
            image_url: cacheBustedUrl
          })
      }

      showMessage('success', 'Image uploaded!')
      await loadImages()
      
      // Reset input
      e.target.value = ''
    } catch (error: any) {
      showMessage('error', error.message || 'Upload failed')
      e.target.value = ''
    } finally {
      setUploadingKey(null)
    }
  }

  async function handleDelete(image: UploadedImage) {
    if (!confirm('Delete this image?')) return

    setDeletingId(image.id)

    try {
      const urlWithoutQuery = image.image_url.split('?')[0]
      const urlParts = urlWithoutQuery.split('/')
      const filename = urlParts[urlParts.length - 1]
      const folder = urlParts[urlParts.length - 2]
      const filePath = `${folder}/${filename}`

      const { error: storageError } = await supabase.storage
        .from('scooter-images')
        .remove([filePath])

      if (storageError) throw new Error(storageError.message)

      const { error: dbError } = await supabase
        .from('model_images')
        .delete()
        .eq('id', image.id)

      if (dbError) throw new Error(dbError.message)

      showMessage('success', 'Image removed!')
      await loadImages()
    } catch (error: any) {
      showMessage('error', error.message || 'Delete failed')
    } finally {
      setDeletingId(null)
    }
  }

  const heroCount = images.filter(img => img.image_type === 'hero').length
  const showcaseCount = images.filter(img => img.image_type === 'showcase').length
  const variantCount = images.filter(img => img.image_type === 'variant').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Image Manager</h1>
              <p className="text-sm text-gray-600 mt-1">{heroCount + showcaseCount + variantCount} of 31 images uploaded</p>
            </div>
            <Link 
              href="/admin"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium text-gray-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Admin
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Status Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            <span className="font-medium">{message.text}</span>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-gray-700">Total Progress</span>
            <span className="text-sm font-bold text-primary-orange">{Math.round(((heroCount + showcaseCount + variantCount) / 31) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-primary-orange h-3 rounded-full transition-all duration-500"
              style={{ width: `${((heroCount + showcaseCount + variantCount) / 31) * 100}%` }}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{heroCount}/7</div>
              <div className="text-xs text-gray-600">Hero</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{showcaseCount}/3</div>
              <div className="text-xs text-gray-600">Showcase</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{variantCount}/21</div>
              <div className="text-xs text-gray-600">Variants</div>
            </div>
          </div>
        </div>

        {/* Hero Images */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Hero Images</h2>
          <p className="text-sm text-gray-600 mb-4">For home page carousel (any color)</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {MODELS.map(model => {
              const img = images.find(i => i.model_slug === model.slug && i.image_type === 'hero')
              const key = `hero-${model.slug}-any`
              const isUploading = uploadingKey === key
              
              return (
                <UploadCard
                  key={key}
                  uploadKey={key}
                  title={model.name}
                  image={img}
                  isUploading={isUploading}
                  isDeleting={deletingId === img?.id}
                  onChange={(e) => handleUpload(e, 'hero', model.slug, 'any')}
                  onDelete={img ? () => handleDelete(img) : undefined}
                />
              )
            })}
          </div>
        </div>

        {/* Showcase Images */}
        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-1">Color Showcase</h2>
          <p className="text-sm text-gray-600 mb-4">For home page color section</p>
          <div className="grid grid-cols-3 gap-4">
            {COLORS.map(color => {
              const img = images.find(i => i.model_slug === 'showcase' && i.color === color)
              const key = `showcase-showcase-${color}`
              const isUploading = uploadingKey === key
              
              return (
                <UploadCard
                  key={key}
                  uploadKey={key}
                  title={color.charAt(0).toUpperCase() + color.slice(1)}
                  image={img}
                  isUploading={isUploading}
                  isDeleting={deletingId === img?.id}
                  onChange={(e) => handleUpload(e, 'showcase', 'showcase', color)}
                  onDelete={img ? () => handleDelete(img) : undefined}
                  colorDot={color}
                />
              )
            })}
          </div>
        </div>

        {/* Model Variants */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Model Variants</h2>
              <p className="text-sm text-gray-600">Red, White, Black for every scooter (21 total)</p>
            </div>
            <div className="text-xs font-semibold text-gray-500">{variantCount}/21 uploaded</div>
          </div>
          <div className="space-y-6">
          {MODELS.map(model => (
            <div key={model.slug} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{model.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                {COLORS.map(color => {
                  const img = images.find(i => 
                    i.model_slug === model.slug && 
                    i.color === color && 
                    i.image_type === 'variant'
                  )
                  const key = `variant-${model.slug}-${color}`
                  const isUploading = uploadingKey === key
                  
                  return (
                    <UploadCard
                      key={key}
                      uploadKey={key}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                      image={img}
                      isUploading={isUploading}
                      isDeleting={deletingId === img?.id}
                      onChange={(e) => handleUpload(e, 'variant', model.slug, color)}
                      onDelete={img ? () => handleDelete(img) : undefined}
                      colorDot={color}
                    />
                  )
                })}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Upload Card Component
function UploadCard({
  uploadKey,
  title,
  image,
  isUploading,
  isDeleting,
  onChange,
  onDelete,
  colorDot
}: {
  uploadKey: string
  title: string
  image?: UploadedImage
  isUploading: boolean
  isDeleting: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete?: () => void
  colorDot?: string
}) {
  return (
    <div className="relative group">
      <label 
        htmlFor={uploadKey}
        className="block cursor-pointer"
      >
        {image ? (
          <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-primary-orange transition-colors">
            <Image
              src={image.image_url}
              alt={title}
              fill
              className="object-contain p-2"
              sizes="200px"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center gap-3">
              <label htmlFor={uploadKey} className="cursor-pointer">
                <Upload className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </label>
              {onDelete && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    onDelete()
                  }}
                  className="p-2 bg-white/80 rounded-full hover:bg-white text-red-600"
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <span className="text-xs font-semibold">...</span>
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary-orange hover:from-orange-50 hover:to-orange-100 transition-all flex flex-col items-center justify-center">
            {isUploading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-orange"></div>
            ) : (
              <>
                <Upload className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Click to upload</span>
              </>
            )}
          </div>
        )}
        <input
          id={uploadKey}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onChange}
          disabled={isUploading}
        />
      </label>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-700">{title}</span>
        {colorDot && (
          <div 
            className={`w-3 h-3 rounded-full ${
              colorDot === 'red' ? 'bg-red-600' :
              colorDot === 'white' ? 'bg-white border border-gray-300' :
              'bg-black'
            }`}
          />
        )}
      </div>
    </div>
  )
}
