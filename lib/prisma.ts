import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

// Ye function database ke saath ek naya Prisma Client instance banata hai
//aur use adapter ke zariye directly PostgreSQL se connect karta hai.
function createPrismaClient() {
    const dbUrl = process.env.DATABASE_URL!;
    const pool = new Pool({
        connectionString: dbUrl,
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 5000,
    });

    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });
    return prisma;
}

// ye code check karta hai ki kya global object me pehle se koi Prisma client hai ya nahi
// agar hai to use wahi rakhta hai, nhi to naya client create karta hai.
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db