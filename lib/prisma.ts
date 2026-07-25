// Ye file PostgreSQL ke liye Prisma Client banati hai, development me usse global object me cache karti hai
// taaki Hot Reload ke time baar - baar naye database connections na banen,
//  aur poori application ko ek reusable db instance provide karti hai.


import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

// Ye function database ke saath ek naya Prisma Client instance banata hai
//aur use adapter ke zariye directly PostgreSQL se connect karta hai.
function createPrismaClient() {
    const adapter = new PrismaPg({
        connectionString: process.env.DATABASE_URL!
    })

    const prisma = new PrismaClient({ adapter })
    return prisma
}

// ye code check karta hai ki kya global object me pehle se koi Prisma client hai ya nahi
// agar hai to use wahi rakhta hai, nhi to naya client create karta hai.
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined }

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db