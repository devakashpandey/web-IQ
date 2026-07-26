import { db } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ status: "No Clerk user logged in" });
    }

    const dbUser = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    return NextResponse.json({
      status: "Success",
      clerkUser: {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
      },
      dbUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "Error",
      message: error.message,
      stack: error.stack,
    });
  }
}
