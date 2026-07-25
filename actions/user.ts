"use server";

import { checkUser } from "@/lib/check_user";

export async function getOrCreateUserAction() {
  try {
    const user = await checkUser();
    return user;
  } catch (error) {
    console.error("Error in getOrCreateUserAction:", error);
    return null;
  }
}
