export interface Scooter {
  id: string
  name: string
  slug: string
  category: string
  short_description: string
  features: Feature[]
  specs: Specs
  seo_title: string
  seo_description: string
  created_at: string
  updated_at: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Specs {
  range: string
  motor: string
  top_speed: string
  battery: string
  weight: string
  warranty: string
  charging_time?: string
  brakes?: string
  dimensions?: string
}

export interface Variant {
  id: string
  scooter_id: string
  color_name: string
  color_hex: string
  slug: string
  hero_image_url: string
  gallery_images: string[]
  created_at: string
}

export interface Lead {
  id: string
  email: string
  scooter_id: string
  variant_id: string
  page_url: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  ip?: string
  user_agent?: string
  created_at: string
  status: 'new' | 'contacted' | 'test_ride_scheduled' | 'converted' | 'closed'
  notes?: string
}

export interface SiteSettings {
  key: string
  value: string
}

export interface Admin {
  id: string
  name: string
  email: string
  role: 'admin' | 'editor'
  last_login?: string
}
