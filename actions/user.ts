"use server";

import { checkUser } from "@/lib/check_user";

export async function getOrCreateUserAction() {
  try {
    const user = await checkUser();
    return user || { credits: 10, plan: "free" };
  } catch (error) {
    console.error("Error in getOrCreateUserAction:", error);
    return { credits: 10, plan: "free" };
  }
}

