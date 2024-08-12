import { NextResponse } from 'next/server'

export async function GET() {
const apiKey = '4ce46aa4f79a4ea4a90ddd5a6c64463f'; // Replace with your actual API key
const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`

    const res = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await res.json()
    return NextResponse.json({ result })
  }