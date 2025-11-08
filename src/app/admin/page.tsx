import Link from 'next/link'
import { Database, Users, Mail, Settings, BarChart, Package, Image as ImageIcon, FileText, TrendingUp } from 'lucide-react'

export default function AdminPage() {
  // TODO: Add authentication check
  // For now, this is a placeholder. Access via direct URL only.
  // Recommended: /admin with password protection

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-neutral-dark text-white shadow-lg">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">M'LiteEv Admin</h1>
              <p className="text-gray-300 text-sm">Dashboard & Content Management</p>
            </div>
            <Link href="/" className="px-6 py-3 bg-white text-neutral-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              ← View Website
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Total Leads</h3>
              <Mail className="w-8 h-8 text-primary-orange" />
            </div>
            <p className="text-4xl font-bold text-neutral-dark">24</p>
            <p className="text-sm text-green-600 mt-2">↑ 12% this week</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Models</h3>
              <Database className="w-8 h-8 text-primary-orange" />
            </div>
            <p className="text-4xl font-bold text-neutral-dark">7</p>
            <p className="text-sm text-gray-500 mt-2">Active scooters</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Variants</h3>
              <BarChart className="w-8 h-8 text-primary-orange" />
            </div>
            <p className="text-4xl font-bold text-neutral-dark">21</p>
            <p className="text-sm text-gray-500 mt-2">Color options</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-semibold">Admins</h3>
              <Users className="w-8 h-8 text-primary-orange" />
            </div>
            <p className="text-4xl font-bold text-neutral-dark">3</p>
            <p className="text-sm text-gray-500 mt-2">Team members</p>
          </div>
        </div>

        {/* Management Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-dark mb-6">Management Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Scooters */}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-orange group"
            >
              <Package className="w-12 h-12 text-primary-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Scooters</h3>
              <p className="text-gray-600 text-sm mb-4">Add, edit, and manage scooter models</p>
              <div className="text-primary-orange font-semibold text-sm">Manage → </div>
            </a>

            {/* Variants */}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-orange group"
            >
              <BarChart className="w-12 h-12 text-primary-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Variants</h3>
              <p className="text-gray-600 text-sm mb-4">Manage colors and specifications</p>
              <div className="text-primary-orange font-semibold text-sm">Manage →</div>
            </a>

            {/* Leads */}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-orange group"
            >
              <Mail className="w-12 h-12 text-primary-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Leads</h3>
              <p className="text-gray-600 text-sm mb-4">View and manage customer inquiries</p>
              <div className="text-primary-orange font-semibold text-sm">View →</div>
            </a>

            {/* Images */}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-orange group"
            >
              <ImageIcon className="w-12 h-12 text-primary-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Images</h3>
              <p className="text-gray-600 text-sm mb-4">Upload and organize product photos</p>
              <div className="text-primary-orange font-semibold text-sm">Upload →</div>
            </a>

            {/* Settings */}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-orange group"
            >
              <Settings className="w-12 h-12 text-primary-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Site Settings</h3>
              <p className="text-gray-600 text-sm mb-4">Configure contact info and preferences</p>
              <div className="text-primary-orange font-semibold text-sm">Configure →</div>
            </a>

            {/* Content */}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-orange group"
            >
              <FileText className="w-12 h-12 text-primary-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Content</h3>
              <p className="text-gray-600 text-sm mb-4">Edit page content and descriptions</p>
              <div className="text-primary-orange font-semibold text-sm">Edit →</div>
            </a>

            {/* Analytics */}
            <a
              href="https://vercel.com/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-orange group"
            >
              <TrendingUp className="w-12 h-12 text-primary-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Analytics</h3>
              <p className="text-gray-600 text-sm mb-4">View website traffic and metrics</p>
              <div className="text-primary-orange font-semibold text-sm">View →</div>
            </a>

            {/* Users */}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-orange group"
            >
              <Users className="w-12 h-12 text-primary-orange mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">Admin Users</h3>
              <p className="text-gray-600 text-sm mb-4">Manage team member access</p>
              <div className="text-primary-orange font-semibold text-sm">Manage →</div>
            </a>
          </div>
        </div>

        {/* Quick Guide */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-dark mb-6">📖 Quick Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-neutral-dark mb-3">Getting Started</h3>
              <ol className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="font-bold text-primary-orange mr-2">1.</span>
                  <span>Click any category above to open Supabase Dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary-orange mr-2">2.</span>
                  <span>Navigate to Table Editor in the left sidebar</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary-orange mr-2">3.</span>
                  <span>Select the table you want to edit (scooters, variants, leads)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-primary-orange mr-2">4.</span>
                  <span>Click "Insert row" or edit existing entries</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold text-lg text-neutral-dark mb-3">Common Tasks</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">→</span>
                  <span><strong>Add Scooter:</strong> Scooters table → Insert row</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">→</span>
                  <span><strong>Add Color:</strong> Variants table → Insert row</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">→</span>
                  <span><strong>View Leads:</strong> Leads table → View all entries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-orange mr-2">→</span>
                  <span><strong>Update Contact:</strong> Site Settings table → Edit values</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="font-bold text-neutral-dark mb-2">🔒 Security Note</h3>
          <p className="text-gray-700 text-sm">
            This admin panel is not linked from the main website. Only access it via direct URL: <code className="bg-white px-2 py-1 rounded">/admin</code>
          </p>
          <p className="text-gray-700 text-sm mt-2">
            <strong>Recommended:</strong> Add password protection using Vercel's password protection feature or implement Supabase authentication.
          </p>
        </div>
      </div>
    </div>
  )
}
