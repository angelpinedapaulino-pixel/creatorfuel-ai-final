import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verify, JwtPayload } from "jsonwebtoken";
import { prisma } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET ?? "default_jwt_secret";
const COOKIE_NAME = "creatorfuel_session";

function parseToken(token: string) {
  try {
    return verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}

export async function getSessionUser() {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return null;

  const payload = parseToken(token);
  if (!payload || typeof payload.userId !== "string") return null;

  return prisma.user.findUnique({
    where: { id: payload.userId },
    include: {
      credits: true,
      subscription: true,
      settings: true,
      history: { orderBy: { createdAt: "desc" } },
    },
  });
}

export async function requireAuth() {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  return user as Awaited<ReturnType<typeof prisma.user.findUnique>>;
}

export async function requireUser() {
  return requireAuth();
}
