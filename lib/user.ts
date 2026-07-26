import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

export async function ensurePrismaUser(email: string, name: string) {
  const existing = await prisma.user.findUnique({
    where: { email },
    include: { credits: true, subscription: true, settings: true },
  });

  if (existing) {
    if (!existing.credits) {
      await prisma.credits.create({
        data: { userId: existing.id, total: 100, remaining: 100, used: 0 },
      });
    }
    if (!existing.subscription) {
      await prisma.subscription.create({
        data: { userId: existing.id, plan: "FREE" },
      });
    }
    if (!existing.settings) {
      await prisma.settings.create({
        data: { userId: existing.id },
      });
    }

    return existing;
  }

  const passwordHash = bcrypt.hashSync(Math.random().toString(36), 10);

  return prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      settings: { create: {} },
      credits: { create: { total: 100, used: 0, remaining: 100 } },
      subscription: { create: {} },
    },
    include: { credits: true, subscription: true, settings: true },
  });
}

export async function getPrismaUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
    include: { credits: true, subscription: true, settings: true, history: { orderBy: { createdAt: "desc" } } },
  });
}

export async function updatePrismaUserProfile(
  email: string,
  updates: { name?: string; newEmail?: string; theme?: string; notifications?: boolean }
) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;

  return prisma.user.update({
    where: { email },
    data: {
      email: updates.newEmail ?? email,
      name: updates.name ?? user.name,
      settings: updates.theme || updates.notifications !== undefined ? {
        upsert: {
          create: {
            theme: updates.theme ?? "dark",
            notifications: updates.notifications ?? true,
          },
          update: {
            theme: updates.theme ?? undefined,
            notifications: updates.notifications ?? undefined,
          },
        },
      } : undefined,
    },
  });
}
