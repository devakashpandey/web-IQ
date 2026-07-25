import { clerkClient } from "@clerk/nextjs/server";

async function testClerk() {
  try {
    const client = await clerkClient();
    const userId = "user_3GzphgcXYGR2Z7SqS216ivWoEMa";
    
    // 2. Fetch User Billing subscriptions
    console.log("Fetching Clerk User Billing Subscriptions...");
    const subscription = await (client as any).billing.getUserBillingSubscription(userId);
    if (subscription && subscription.subscriptionItems && subscription.subscriptionItems[0]) {
      const item = subscription.subscriptionItems[0];
      console.log("Plan details:", JSON.stringify(item.plan, null, 2));
      console.log("Plan ID:", item.planId);
    } else {
      console.log("No active subscription found.");
    }
  } catch (error: any) {
    console.error("General error in testClerk:", error);
  }
}

testClerk();
