

import { Plan } from "@/types/plans";
import { currentUser, clerkClient } from "@clerk/nextjs/server";
import { db } from "./prisma";
import { PLANS } from "./constants";

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) return null;

    try {
        let currentPlan: Plan = "free";

        try {
            const client = await clerkClient();
            const subscription = await client.billing.getUserBillingSubscription(user.id);
            if (subscription && subscription.status === "active" && subscription.subscriptionItems?.[0]) {
                const slug = subscription.subscriptionItems[0].plan?.slug;
                if (slug && slug in PLANS) {
                    currentPlan = slug as Plan;
                }
            }
        } catch (billingError) {
            console.error("Error fetching billing subscription from Clerk:", billingError);
        }

        const existUser = await db.user.findUnique({
            where: {
                clerkId: user.id
            }
        });

        if (existUser) {
            // check plan is changed or not
            if (existUser.plan !== currentPlan) {
                const updatedUser = await db.user.update({
                    where: {
                        clerkId: user.id
                    },
                    data: {
                        plan: currentPlan,
                        credits: PLANS[currentPlan].credits,
                    }
                });
                return updatedUser;
            }
            return existUser;
        }

        // create new user
        return await db.user.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0]?.emailAddress || "",
                name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "User",
                imgUrl: user.imageUrl || "",
                plan: currentPlan,
                credits: PLANS[currentPlan].credits,
            }
        });
    } catch (error) {
        console.error("Error in checkUser:", error);
        return null;
    }
};


