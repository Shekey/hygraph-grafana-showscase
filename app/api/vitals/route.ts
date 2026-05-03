import { NextRequest, NextResponse } from 'next/server';
import { recordWebVital } from '@/lib/web-vitals-metrics';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, value, rating, route } = body;

    if (!name || value === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: name, value' },
        { status: 400 }
      );
    }

    recordWebVital(
      name,
      typeof value === 'number' ? value : parseFloat(value),
      rating,
      route || 'unknown'
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[/api/vitals] Error processing Web Vitals:', error);
    return NextResponse.json(
      { error: 'Failed to process Web Vitals' },
      { status: 500 }
    );
  }
}
