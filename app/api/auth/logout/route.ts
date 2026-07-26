import { NextResponse } from "next/server";

const COOKIE_NAME = "creatorfuel_session";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    maxAge: 0,
  });
  return res;
}
