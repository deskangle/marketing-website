import $api from "./api";
import { create } from "zustand";
import { IPricingType } from "../_types";

interface Store {
  isLocalCurrency: boolean;
  selectedPeriod: string;

  pricingList: IPricingType[];
  selectedPricing: IPricingType;

  getSelectedPricingPlan: () => any;
  updatePricingList: (payload: any) => any;
  updateSelectedPeriod: (payload: any) => any;
}

export const useAppStore = create<Store>((set, get) => ({
  isLocalCurrency: false,
  selectedPeriod: "monthly",
  selectedPricing: {
    type: "Starter",
    description:
      "Ideal for startups or small businesses looking for ongoing support to keep their digital assets in top shape. This plan ensures your product remains functional, secure, and up-to-date.",
    features: ["One request at a time"],
    isSelected: true,
    pricePeriod: {
      monthly: { amount: 1200, localAmount: 0 },
      quarterly: { amount: 3240, localAmount: 0 },
    },
  },
  pricingList: [
    {
      type: "Launchpad",
      description:
        "Ideal for small businesses to keep your product up-to-date.",
      features: [
        "Design: Up to 4 essential pages",
        "Branding: Basic logo (2 concepts) & Color palette",
        "Development: No-code build",
        "Content: Basic population, light revisions",
        // "Turnaround: 4-5 days/request, 2 days/revision",
        "Revisions: 2 rounds/output",
        "Support: Email/shared workspace (24hr)",
        // "Flexibility: Pause or cancel anytime",
      ],
      isSelected: false,
      pricePeriod: {
        monthly: { amount: 1200, localAmount: 0 },
        quarterly: { amount: 3240, localAmount: 0 },
      },
    },
    {
      type: "Growth Accelerator",
      description:
        "Perfect for scaling businesses and driving continuous growth.",
      features: [
        "Design: Up to 8 pages redesign/new, CMS setup",
        "Branding: Kit refinement, 2 branded assets",
        "Development: No-code OR Basic custom build",
        "Content: Copywriting (3 pages)",
        // "Turnaround: 2-3 days/request, 1 day/revision",
        "Revisions: 3 rounds/output",
        "Support: Slack channel & shared workspace (12hr)",
        // "Flexibility: Pause, cancel or upgrade anytime",
      ],
      isSelected: false,
      pricePeriod: {
        monthly: { amount: 2800, localAmount: 0 },
        quarterly: { amount: 7560, localAmount: 0 },
      },
    },
    {
      type: "Strategic Partner",
      description:
        "Designed for industry leaders, offering an end to end support.",
      features: [
        "Design: Full web/mobile design + CMS",
        "Branding: Complete visual identity",
        "Development: Custom web/app, API integrations",
        "Content: Full strategy, blog, email, social",
        // "Turnaround: 1 day/request, 12 hrs/revision",
        "Revisions: Unlimited",
        "Support: Slack channel & account manager (4hr)",
        // "Flexibility: Pause, cancel or downgrade anytime",
      ],
      isSelected: false,
      pricePeriod: {
        monthly: { amount: 5400, localAmount: 0 },
        quarterly: { amount: 14580, localAmount: 0 },
      },
    },
  ],

  getSelectedPricingPlan: () => {
    return get().selectedPricing;
  },

  updatePricingList: (payload) => {
    set({ pricingList: payload });

    const selectedPricing = get().pricingList.find(
      (pricing: IPricingType) => pricing.isSelected
    );

    set({ selectedPricing });
  },

  updateSelectedPeriod: (payload) => {
    set({ selectedPeriod: payload });
  },
}));
