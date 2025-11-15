import Link from 'next/link'
import { ImageIcon, ExternalLink, Home } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Admin Panel</h1>
          <p className="text-gray-400">Manage your M'LiteEv website</p>
        </div>

        {/* Main Action */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8 border-2 border-gray-700 hover:border-primary-orange transition-all">
          <Link href="/admin/images" className="block group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-primary-orange p-4 rounded-xl group-hover:scale-110 transition-transform">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Image Manager</h2>
                  <p className="text-gray-400">Upload and manage scooter images</p>
                </div>
              </div>
              <div className="text-4xl text-primary-orange group-hover:translate-x-2 transition-transform">→</div>
            </div>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <Link 
            href="/"
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all group flex items-center gap-3"
          >
            <Home className="w-5 h-5 text-gray-400 group-hover:text-white" />
            <span className="text-gray-300 group-hover:text-white font-medium">View Website</span>
          </Link>
          <a 
            href="https://supabase.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all group flex items-center gap-3"
          >
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white" />
            <span className="text-gray-300 group-hover:text-white font-medium">Open Supabase</span>
          </a>
        </div>
      </div>
    </div>
  )
}
