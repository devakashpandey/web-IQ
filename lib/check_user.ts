

import { Plan } from "@/types/plans";
import { currentUser, clerkClient } from "@clerk/nextjs/server";
import { db } from "./prisma";
import { PLANS, PRICING_PLANS } from "./constants";

export const checkUser = async () => {
    const user = await currentUser();

    if (!user) return null;

    let currentPlan: Plan = "free";

    try {
        const client = await clerkClient();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const subscription = await (client as any).billing.getUserBillingSubscription(user.id);
        if (subscription && (subscription.status === "active" || subscription.status === "trialing") && subscription.subscriptionItems?.[0]) {
            const item = subscription.subscriptionItems[0];
            const planSlug = item.plan?.slug?.toLowerCase();
            const planName = item.plan?.name?.toLowerCase();
            const planId = item.planId || item.plan?.id;

            if (planSlug && planSlug in PLANS) {
                currentPlan = planSlug as Plan;
            } else if (planName && planName in PLANS) {
                currentPlan = planName as Plan;
            } else if (planId) {
                const foundPlan = PRICING_PLANS.find((p) => p.planId === planId);
                if (foundPlan && foundPlan.key in PLANS) {
                    currentPlan = foundPlan.key as Plan;
                }
            }
        }
    } catch (billingError) {
        console.error("Error fetching billing subscription from Clerk:", billingError);
    }

    try {
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
    } catch (dbError) {
        console.error("Error connecting to database in checkUser, using fallback user state:", dbError);
        return {
            id: user.id,
            clerkId: user.id,
            email: user.emailAddresses[0]?.emailAddress || "",
            name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || "User",
            imgUrl: user.imageUrl || "",
            plan: currentPlan,
            credits: PLANS[currentPlan].credits,
        };
    }
};


