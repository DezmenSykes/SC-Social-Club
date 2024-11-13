import { PrismaClient } from "@prisma/client";

const globalforPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalforPrisma.prisma || new PrismaClient();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
