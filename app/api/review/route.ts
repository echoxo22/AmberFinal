import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: Request) {
    const data = await request.json();
    const { brand, variant, taste, smoothness, burn, aroma, smoke_body, packaging_design } = data;

    const scores = [taste, smoothness, burn, aroma, smoke_body, packaging_design];
    const isValid = scores.every(s => s >= 0 && s <= 5 && (s * 2) % 1 === 0);

    if (!isValid) return NextResponse.json({ error: "Invalid ratings" }, { status: 400 });

    const avg = scores.reduce((a, b) => a + b) / scores.length;

    // This saves it to your new Render database
    await query(
        'INSERT INTO reviews (brand, variant, taste, smoothness, burn, aroma, body, packaging, overall) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [brand, variant, taste, smoothness, burn, aroma, smoke_body, packaging_design, avg]
    );

    return NextResponse.json({ message: "Review Saved!", overall: avg.toFixed(2) });
}