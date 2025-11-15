'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Select } from './ui/Select'
import { CheckCircle } from 'lucide-react'

interface LeadFormProps {
  scooters: { id: string; name: string; variants: { id: string; color_name: string }[] }[]
}

export function LeadForm({ scooters }: LeadFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    scooterId: '',
    variantId: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const selectedScooter = scooters.find((s) => s.id === formData.scooterId)
  const variants = selectedScooter?.variants || []

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.scooterId) {
      newErrors.scooterId = 'Please select a model'
    }
    
    if (!formData.variantId) {
      newErrors.variantId = 'Please select a color'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
        }),
      })
      
      if (response.ok) {
        setIsSuccess(true)
        setFormData({ email: '', scooterId: '', variantId: '' })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      setErrors({ submit: 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-accent-gold/5 border border-accent-gold/20 rounded-2xl p-8 text-center">
        <CheckCircle className="w-14 h-14 text-accent-gold mx-auto mb-4" />
        <h3 className="text-xl font-bold text-text-heading mb-2">Thank You!</h3>
        <p className="text-text-body text-sm">
          We&rsquo;ve received your enquiry. Our team will respond within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Your Email"
        type="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
      />

      <Select
        label="Select Model"
        value={formData.scooterId}
        onChange={(e) => {
          setFormData({ ...formData, scooterId: e.target.value, variantId: '' })
          setErrors({ ...errors, scooterId: '' })
        }}
        options={[
          { value: '', label: 'Choose a model...' },
          ...scooters.map((s) => ({ value: s.id, label: s.name })),
        ]}
        error={errors.scooterId}
      />

      {formData.scooterId && (
        <Select
          label="Select Color"
          value={formData.variantId}
          onChange={(e) => {
            setFormData({ ...formData, variantId: e.target.value })
            setErrors({ ...errors, variantId: '' })
          }}
          options={[
            { value: '', label: 'Choose a color...' },
            ...variants.map((v) => ({ value: v.id, label: v.color_name })),
          ]}
          error={errors.variantId}
        />
      )}

      {errors.submit && (
        <p className="text-red-600 text-sm">{errors.submit}</p>
      )}

      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Send Enquiry
      </Button>
    </form>
  )
}
