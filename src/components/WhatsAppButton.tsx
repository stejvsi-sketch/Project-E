'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export function WhatsAppButton({ phoneNumber, message = 'Hi, I am interested in M\'LiteEv scooters!' }: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group touch-manipulation"
      aria-label="Contact us on WhatsApp"
      style={{ 
        willChange: 'transform',
        maxWidth: 'none',
        minWidth: 'auto'
      }}
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
    </button>
  )
}
