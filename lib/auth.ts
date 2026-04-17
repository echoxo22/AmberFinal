import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import postgres from "postgres";
import bcrypt from "bcryptjs";

const sql = postgres(
  process.env.DATABASE_URL || "postgres://admin:H5taeYPOZflt4BgoOrGf7UkDznE6HbyL@dpg-d7frcpreo5us73f4jm8g-a.singapore-postgres.render.com/amber_bnb1?sslmode=require"
);

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "amber_default_secret_key_secure_2024",
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const users = await sql`SELECT * FROM users WHERE email = ${credentials.email}`;
        const user = users[0];

        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
};