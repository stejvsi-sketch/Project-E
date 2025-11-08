import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerClient } from '@/lib/supabase/server'
import { sendEmail, generateLeadEmail, generateConfirmationEmail } from '@/lib/email'

const leadSchema = z.object({
  email: z.string().email(),
  scooterId: z.string(),
  variantId: z.string(),
  pageUrl: z.string().url(),
  userAgent: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validation = leadSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid request data', details: validation.error },
        { status: 400 }
      )
    }

    const { email, scooterId, variantId, pageUrl, userAgent } = validation.data

    // Get IP address
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Get UTM parameters from URL
    const url = new URL(pageUrl)
    const utm_source = url.searchParams.get('utm_source')
    const utm_medium = url.searchParams.get('utm_medium')
    const utm_campaign = url.searchParams.get('utm_campaign')

    // Save to Supabase
    const supabase = await createServerClient()
    
    // Get scooter and variant details
    const { data: scooter } = await supabase
      .from('scooters')
      .select('name')
      .eq('id', scooterId)
      .single()

    const { data: variant } = await supabase
      .from('variants')
      .select('color_name')
      .eq('id', variantId)
      .single()

    // Insert lead
    const { error: insertError } = await supabase.from('leads').insert({
      email,
      scooter_id: scooterId,
      variant_id: variantId,
      page_url: pageUrl,
      utm_source,
      utm_medium,
      utm_campaign,
      ip,
      user_agent: userAgent,
      status: 'new',
    })

    if (insertError) {
      console.error('Supabase error:', insertError)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    // Get owner email from settings
    const { data: settings } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'owner_email')
      .single()

    const ownerEmail = settings?.value || process.env.OWNER_EMAIL || 'info@mliteev.com'

    // Send email to owner
    const timestamp = new Date().toLocaleString()
    await sendEmail({
      to: ownerEmail,
      subject: `New Lead - ${scooter?.name || 'Unknown Model'} (${variant?.color_name || 'Unknown Color'})`,
      html: generateLeadEmail({
        email,
        model: scooter?.name || 'Unknown Model',
        color: variant?.color_name || 'Unknown Color',
        pageUrl,
        timestamp,
      }),
    })

    // Send confirmation email to customer
    await sendEmail({
      to: email,
      subject: "Thank you for your interest in M'LiteEv",
      html: generateConfirmationEmail('Customer', scooter?.name || 'our scooters'),
    })

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
    })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
