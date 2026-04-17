import { NextResponse } from "next/server";
import postgres from "postgres";

// Use the connection string from your psql terminal earlier
const sql = postgres(
  "postgres://admin:H5taeYPOZflt4BgoOrGf7UkDznE6HbyL@dpg-d7frcpreo5us73f4jm8g-a.singapore-postgres.render.com/amber_bnb1?sslmode=require",
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Handle creating a new catalog entry (cigarette)
    if (body.brand) {
      const newCigarette = await sql`
        INSERT INTO cigarettes (brand_name, variant, blend_type, origin)
        VALUES (${body.brand}, ${body.variant}, ${body.blend}, ${body.origin})
        RETURNING *
      `;
      
      return NextResponse.json(newCigarette[0]);
    }

    // Handle adding a review for an existing cigarette
    if (body.cigarette_id !== undefined && body.overall !== undefined) {
      const result = await sql`
        INSERT INTO reviews (
          cigarette_id, taste, smoothness, burn_quality, aroma, smoke_body, packaging, overall
        ) VALUES (
          ${body.cigarette_id}, ${body.taste}, ${body.smoothness}, ${body.burn_quality},
          ${body.aroma}, ${body.smoke_body}, ${body.packaging}, ${body.overall}
        )
        RETURNING *
      `;
      return NextResponse.json(result[0]);
    }

    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  } catch (error: any) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
