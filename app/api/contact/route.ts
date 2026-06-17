import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (body.honeypot) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 })
    }
    
    console.log('Contact form submission:', {
      formType: body.formType,
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone,
      fleetSize: body.fleetSize,
      vehicleType: body.vehicleType,
      vehicleCount: body.vehicleCount,
      authorityStatus: body.authorityStatus,
      message: body.message,
      timestamp: new Date().toISOString()
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your inquiry. We will be in touch soon.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
