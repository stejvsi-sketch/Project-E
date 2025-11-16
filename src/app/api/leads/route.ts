import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerClient } from '@/lib/supabase/server'
import { sendEmail, generateLeadEmail, generateConfirmationEmail } from '@/lib/email'
import { ALL_MODELS } from '@/data/models'

const leadSchema = z.object({
  email: z.string().email(),
  scooterId: z.string(),
  variantId: z.string(),
  pageUrl: z.string().url(),
  userAgent: z.string().optional(),
})

function getModelAndColorFromIds(scooterId: string, variantId: string) {
  // scooterId is a simple index string: "1", "2", ..., matching ALL_MODELS order
  const modelIndex = Number.parseInt(scooterId, 10) - 1
  const model = ALL_MODELS[Number.isNaN(modelIndex) ? -1 : modelIndex]

  let colorName: string | undefined
  if (model && variantId.length >= 2) {
    // variantId format: "1a", "1b", ... -> second char is color index letter
    const colorLetter = variantId.slice(1, 2)
    const colorIndex = colorLetter.toLowerCase().charCodeAt(0) - 97 // 'a' => 0
    if (colorIndex >= 0 && colorIndex < model.colors.length) {
      colorName = model.colors[colorIndex]
    }
  }

  return {
    modelName: model?.name,
    colorName,
  }
}

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

    const { modelName, colorName } = getModelAndColorFromIds(scooterId, variantId)

    // Get IP address
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Get UTM parameters from URL
    const url = new URL(pageUrl)
    const utm_source = url.searchParams.get('utm_source')
    const utm_medium = url.searchParams.get('utm_medium')
    const utm_campaign = url.searchParams.get('utm_campaign')

    // Save to Supabase
    const supabase = await createServerClient()

    // Insert lead - store model/color information in notes instead of relying on UUID
    const { error: insertError } = await supabase.from('leads').insert({
      email,
      page_url: pageUrl,
      utm_source,
      utm_medium,
      utm_campaign,
      ip,
      user_agent: userAgent,
      status: 'new',
      notes: `Model: ${modelName || 'Unknown'} (form id: ${scooterId}), Color: ${colorName || 'Unknown'} (form id: ${variantId})`,
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

    const ownerEmail = settings?.value || process.env.OWNER_EMAIL || 'stejasvi817@gmail.com'

    // Send email to owner
    const timestamp = new Date().toLocaleString()
    const modelLabel = modelName || 'Unknown Model'
    const colorLabel = colorName || 'Unknown Color'

    await sendEmail({
      to: ownerEmail,
      subject: `New Lead - ${modelLabel} (${colorLabel})`,
      html: generateLeadEmail({
        email,
        model: modelLabel,
        color: colorLabel,
        pageUrl,
        timestamp,
      }),
    })

    // Send confirmation email to customer
    await sendEmail({
      to: email,
      subject: "Thank you for your interest in M'LiteEv",
      html: generateConfirmationEmail('Customer', modelName || 'our scooters'),
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
