import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { sign } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "default_jwt_secret";
const COOKIE_NAME = "creatorfuel_session";

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json({ error: "Name, email and password are required." }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "This email is already registered." }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      subscription: { create: {} },
      credits: { create: {} },
      settings: { create: {} },
    },
    include: {
      subscription: true,
      credits: true,
      settings: true,
    },
  });

  const token = sign({ userId: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  });

  const res = NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name } });
  res.cookies.set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
