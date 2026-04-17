import { NextResponse } from "next/server";
import postgres from "postgres";
import bcrypt from "bcryptjs";

const sql = postgres(
  process.env.DATABASE_URL || "postgres://admin:H5taeYPOZflt4BgoOrGf7UkDznE6HbyL@dpg-d7frcpreo5us73f4jm8g-a.singapore-postgres.render.com/amber_bnb1?sslmode=require"
);

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const existing = await sql`SELECT id FROM users WHERE email = ${email}`;
    if (existing.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await sql`
      INSERT INTO users (email, password, name)
      VALUES (${email}, ${hashedPassword}, ${name || null})
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}