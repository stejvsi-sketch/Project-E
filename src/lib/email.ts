import nodemailer from 'nodemailer'

interface EmailParams {
  to: string
  subject: string
  html: string
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendEmail({ to, subject, html }: EmailParams) {
  try {
    const info = await transporter.sendMail({
      from: `"M'LiteEv" <${process.env.SMTP_FROM}>`,
      to,
      subject,
      html,
    })
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}

export function generateLeadEmail(data: {
  email: string
  model: string
  color: string
  pageUrl: string
  timestamp: string
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #222; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #FF6A00; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
          .field { margin: 15px 0; }
          .label { font-weight: bold; color: #FF6A00; }
          .value { color: #222; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Lead from M'LiteEv Website</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Customer Email:</span>
              <span class="value">${data.email}</span>
            </div>
            <div class="field">
              <span class="label">Model:</span>
              <span class="value">${data.model}</span>
            </div>
            <div class="field">
              <span class="label">Color:</span>
              <span class="value">${data.color}</span>
            </div>
            <div class="field">
              <span class="label">Page URL:</span>
              <span class="value">${data.pageUrl}</span>
            </div>
            <div class="field">
              <span class="label">Timestamp:</span>
              <span class="value">${data.timestamp}</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

export function generateConfirmationEmail(customerName: string, model: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #222; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #FF6A00; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Your Interest!</h2>
          </div>
          <div class="content">
            <p>Dear Customer,</p>
            <p>Thank you for your interest in the <strong>${model}</strong>.</p>
            <p>Our team will respond to your enquiry within 24 hours.</p>
            <p>In the meantime, feel free to explore more models on our website.</p>
            <p><strong>Energise Your Ride!</strong></p>
            <p>Best regards,<br/>The M'LiteEv Team</p>
          </div>
        </div>
      </body>
    </html>
  `
}
