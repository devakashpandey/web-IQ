import { db } from "../lib/prisma";

async function test() {
  try {
    console.log("Database URL:", process.env.DATABASE_URL);
    const users = await db.user.findMany();
    console.log("Users in DB:", users);
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
}

test();
