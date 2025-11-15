import { supabase } from './supabase/client'

export interface ModelImage {
  id: string
  model_slug: string
  color: string
  image_type: 'hero' | 'variant' | 'showcase'
  image_url: string
  display_order: number
}

/**
 * Get hero image for a specific model (used in carousel)
 */
export async function getHeroImage(modelSlug: string): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('model_images')
      .select('image_url')
      .eq('model_slug', modelSlug)
      .eq('image_type', 'hero')
      .single()

    if (error) {
      console.error('Error fetching hero image:', error)
      return null
    }

    return data?.image_url || null
  } catch (err) {
    console.error('Error in getHeroImage:', err)
    return null
  }
}

/**
 * Get all hero images for carousel (all models)
 */
export async function getAllHeroImages(): Promise<ModelImage[]> {
  try {
    const { data, error } = await supabase
      .from('model_images')
      .select('*')
      .eq('image_type', 'hero')
      .order('display_order', { ascending: true })

    if (error) {
      console.error('Error fetching hero images:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Error in getAllHeroImages:', err)
    return []
  }
}

/**
 * Get variant images for a specific model (all colors)
 */
export async function getModelVariantImages(modelSlug: string): Promise<ModelImage[]> {
  try {
    const { data, error } = await supabase
      .from('model_images')
      .select('*')
      .eq('model_slug', modelSlug)
      .eq('image_type', 'variant')
      .order('color', { ascending: true })

    if (error) {
      console.error('Error fetching variant images:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Error in getModelVariantImages:', err)
    return []
  }
}

/**
 * Get specific variant image for a model and color
 */
export async function getVariantImage(modelSlug: string, color: string): Promise<string | null> {
  try {
    const { data, error } = await supabase
      .from('model_images')
      .select('image_url')
      .eq('model_slug', modelSlug)
      .eq('color', color.toLowerCase())
      .eq('image_type', 'variant')
      .single()

    if (error) {
      console.error('Error fetching variant image:', error)
      return null
    }

    return data?.image_url || null
  } catch (err) {
    console.error('Error in getVariantImage:', err)
    return null
  }
}

/**
 * Get showcase images (for color showcase section on home page)
 */
export async function getShowcaseImages(): Promise<ModelImage[]> {
  try {
    const { data, error } = await supabase
      .from('model_images')
      .select('*')
      .eq('image_type', 'showcase')
      .in('color', ['black', 'white', 'red'])
      .order('color', { ascending: false }) // Red, White, Black order

    if (error) {
      console.error('Error fetching showcase images:', error)
      return []
    }

    return data || []
  } catch (err) {
    console.error('Error in getShowcaseImages:', err)
    return []
  }
}

/**
 * Get all variant images for all models (used in models page)
 */
export async function getAllVariantImages(): Promise<Record<string, ModelImage[]>> {
  try {
    const { data, error } = await supabase
      .from('model_images')
      .select('*')
      .eq('image_type', 'variant')
      .order('model_slug', { ascending: true })
      .order('color', { ascending: true })

    if (error) {
      console.error('Error fetching all variant images:', error)
      return {}
    }

    // Group by model_slug
    const grouped: Record<string, ModelImage[]> = {}
    data?.forEach((img) => {
      if (!grouped[img.model_slug]) {
        grouped[img.model_slug] = []
      }
      grouped[img.model_slug].push(img)
    })

    return grouped
  } catch (err) {
    console.error('Error in getAllVariantImages:', err)
    return {}
  }
}

/**
 * Fallback emoji if image not found
 */
export const FALLBACK_EMOJI = '🛴'

/**
 * Get image URL or fallback emoji
 */
export function getImageOrFallback(imageUrl: string | null): { type: 'image' | 'emoji', value: string } {
  if (imageUrl && imageUrl.trim() !== '') {
    return { type: 'image', value: imageUrl }
  }
  return { type: 'emoji', value: FALLBACK_EMOJI }
}
