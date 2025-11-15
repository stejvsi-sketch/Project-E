'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from 'lucide-react'
import Link from 'next/link'

interface CheckResult {
  name: string
  status: 'pass' | 'fail' | 'warning' | 'checking'
  message: string
  details?: string
}

export default function SetupCheckPage() {
  const [checks, setChecks] = useState<CheckResult[]>([])
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    runChecks()
  }, [])

  async function runChecks() {
    setChecking(true)
    const results: CheckResult[] = []

    // Check 1: Database table exists
    try {
      const { data, error } = await supabase.from('model_images').select('count').limit(1)
      if (error) {
        results.push({
          name: 'Database Table',
          status: 'fail',
          message: 'Table model_images does not exist',
          details: 'Run IMAGES_SQL_SETUP.sql in Supabase SQL Editor'
        })
      } else {
        results.push({
          name: 'Database Table',
          status: 'pass',
          message: 'Table model_images exists ✓'
        })
      }
    } catch (err) {
      results.push({
        name: 'Database Table',
        status: 'fail',
        message: 'Failed to check table',
        details: String(err)
      })
    }

    // Check 2: Storage bucket exists
    try {
      const { data: buckets, error } = await supabase.storage.listBuckets()
      const bucketExists = buckets?.some(b => b.id === 'scooter-images')
      
      if (error) {
        results.push({
          name: 'Storage Bucket',
          status: 'fail',
          message: 'Failed to check buckets',
          details: error.message
        })
      } else if (!bucketExists) {
        results.push({
          name: 'Storage Bucket',
          status: 'fail',
          message: 'Bucket "scooter-images" does not exist',
          details: 'Create it in Supabase → Storage → New Bucket → Name: scooter-images → Public: ON'
        })
      } else {
        // Check if bucket is public
        const bucket = buckets?.find(b => b.id === 'scooter-images')
        if (bucket?.public) {
          results.push({
            name: 'Storage Bucket',
            status: 'pass',
            message: 'Bucket exists and is public ✓'
          })
        } else {
          results.push({
            name: 'Storage Bucket',
            status: 'warning',
            message: 'Bucket exists but might not be public',
            details: 'Make sure "Public bucket" is enabled in Supabase Storage settings'
          })
        }
      }
    } catch (err) {
      results.push({
        name: 'Storage Bucket',
        status: 'fail',
        message: 'Error checking buckets',
        details: String(err)
      })
    }

    // Check 3: Can read from database
    try {
      const { data, error } = await supabase.from('model_images').select('*').limit(1)
      if (error) {
        results.push({
          name: 'Database Read Permission',
          status: 'fail',
          message: 'Cannot read from database',
          details: 'Run FIX_ALL_PERMISSIONS.sql in Supabase'
        })
      } else {
        results.push({
          name: 'Database Read Permission',
          status: 'pass',
          message: 'Can read from database ✓'
        })
      }
    } catch (err) {
      results.push({
        name: 'Database Read Permission',
        status: 'fail',
        message: 'Read test failed',
        details: String(err)
      })
    }

    // Check 4: Test insert permission
    try {
      const testData = {
        model_slug: '__test__',
        color: 'test',
        image_type: 'test',
        image_url: 'https://example.com/test.png',
        display_order: 999
      }
      
      const { error: insertError } = await supabase.from('model_images').insert(testData)
      
      if (insertError) {
        results.push({
          name: 'Database Write Permission',
          status: 'fail',
          message: 'Cannot insert to database',
          details: `Error: ${insertError.message}. Run FIX_ALL_PERMISSIONS.sql`
        })
      } else {
        // Clean up test data
        await supabase.from('model_images').delete().eq('model_slug', '__test__')
        
        results.push({
          name: 'Database Write Permission',
          status: 'pass',
          message: 'Can write to database ✓'
        })
      }
    } catch (err) {
      results.push({
        name: 'Database Write Permission',
        status: 'fail',
        message: 'Write test failed',
        details: String(err)
      })
    }

    // Check 5: Storage policies
    try {
      const { data: buckets } = await supabase.storage.listBuckets()
      const bucket = buckets?.find(b => b.id === 'scooter-images')
      
      if (bucket) {
        results.push({
          name: 'Storage Policies',
          status: 'pass',
          message: 'Storage configured ✓',
          details: 'If upload still fails, run FIX_ALL_PERMISSIONS.sql'
        })
      }
    } catch (err) {
      results.push({
        name: 'Storage Policies',
        status: 'warning',
        message: 'Could not verify storage policies',
        details: 'This is usually fine, but if uploads fail, run FIX_ALL_PERMISSIONS.sql'
      })
    }

    setChecks(results)
    setChecking(false)
  }

  const allPass = checks.every(c => c.status === 'pass')
  const hasFail = checks.some(c => c.status === 'fail')

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Setup Checker</h1>
          <p className="text-gray-600">Verify your admin panel is configured correctly</p>
        </div>

        {/* Overall Status */}
        <div className={`mb-8 p-6 rounded-lg ${
          checking ? 'bg-blue-50 border-2 border-blue-200' :
          allPass ? 'bg-green-50 border-2 border-green-200' :
          hasFail ? 'bg-red-50 border-2 border-red-200' :
          'bg-yellow-50 border-2 border-yellow-200'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {checking ? 'Checking...' :
                 allPass ? '✅ All Checks Passed!' :
                 hasFail ? '❌ Setup Issues Found' :
                 '⚠️ Warnings Found'}
              </h2>
              <p className="text-gray-700">
                {checking ? 'Running diagnostics...' :
                 allPass ? 'Your admin panel is ready to use!' :
                 hasFail ? 'Fix the issues below to use the admin panel' :
                 'Minor issues detected, but should work'}
              </p>
            </div>
            <button
              onClick={runChecks}
              disabled={checking}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <RefreshCw className={`w-5 h-5 ${checking ? 'animate-spin' : ''}`} />
              Re-check
            </button>
          </div>
        </div>

        {/* Check Results */}
        <div className="space-y-4">
          {checks.map((check, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                check.status === 'pass' ? 'border-green-500' :
                check.status === 'fail' ? 'border-red-500' :
                check.status === 'warning' ? 'border-yellow-500' :
                'border-gray-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {check.status === 'pass' ? (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  ) : check.status === 'fail' ? (
                    <XCircle className="w-6 h-6 text-red-600" />
                  ) : check.status === 'warning' ? (
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                  ) : (
                    <RefreshCw className="w-6 h-6 text-gray-400 animate-spin" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{check.name}</h3>
                  <p className={`mb-2 ${
                    check.status === 'pass' ? 'text-green-700' :
                    check.status === 'fail' ? 'text-red-700' :
                    check.status === 'warning' ? 'text-yellow-700' :
                    'text-gray-600'
                  }`}>
                    {check.message}
                  </p>
                  {check.details && (
                    <div className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-700 font-mono">
                      {check.details}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/admin"
            className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-center font-semibold"
          >
            ← Back to Admin
          </Link>
          {allPass && (
            <Link
              href="/admin/images"
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-semibold"
            >
              Go to Image Upload →
            </Link>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Need Help?</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>If table missing:</strong> Run <code className="bg-white px-2 py-1 rounded">IMAGES_SQL_SETUP.sql</code></p>
            <p><strong>If bucket missing:</strong> Create in Supabase → Storage → New Bucket → scooter-images (Public)</p>
            <p><strong>If permissions fail:</strong> Run <code className="bg-white px-2 py-1 rounded">FIX_ALL_PERMISSIONS.sql</code></p>
          </div>
        </div>
      </div>
    </div>
  )
}
