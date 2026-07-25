import { PLANS } from "@/lib/constants";

export type Plan = keyof typeof PLANS // - for keys
// export type Plan = typeof PLANS[keyof typeof PLANS] - for values
