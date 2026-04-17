import { NextResponse } from "next/server";
import postgres from "postgres";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const sql = postgres(
  process.env.DATABASE_URL || "postgres://admin:H5taeYPOZflt4BgoOrGf7UkDznE6HbyL@dpg-d7frcpreo5us73f4jm8g-a.singapore-postgres.render.com/amber_bnb1?sslmode=require"
);

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    
    // Strict check to ensure they are logged in AND an admin
    if (!session || !(session.user as any).isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await sql`DELETE FROM cigarettes WHERE id = ${params.id}`;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}