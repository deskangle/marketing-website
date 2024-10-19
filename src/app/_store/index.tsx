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
      monthly: { amount: 800, localAmount: 500 },
      quarterly: { amount: 2280, localAmount: 1425 },
    },
  },
  pricingList: [
    {
      type: "Starter",
      description:
        "Ideal for small businesses to keep your product up-to-date.",
      features: [
        "One request update per time",
        "Basic monthly maintenance",
        "Monthly SEO audit ",
        "Regular backups and recovery",
        "Support response within 24hrs",
      ],
      isSelected: true,
      pricePeriod: {
        monthly: { amount: 800, localAmount: 500 },
        quarterly: { amount: 2280, localAmount: 1425 },
      },
    },
    {
      type: "Growth",
      description:
        "Perfect for scaling businesses and driving continuous growth.",
      features: [
        "Everything in the Starter Plan",
        "Two request update per time",
        "SEO strategy optimization",
        "Quarterly UX/UI audits",
        "Analytics insight reports",
        "Support response within 12hrs",
      ],
      isSelected: false,
      pricePeriod: {
        monthly: { amount: 2400, localAmount: 1200 },
        quarterly: { amount: 6840, localAmount: 3420 },
      },
    },
    {
      type: "Business",
      description:
        "Designed for industry leaders, offering an end to end support.",
      features: [
        "Everything in the Growth Plan",
        "Ongoing custom features",
        "Continuous UX/UI enhancements",
        "Bi-weekly update reviews",
        "Full digital marketing integration",
        "Dedicated account manager",
        "Priority support within 4hrs",
      ],
      isSelected: false,
      pricePeriod: {
        monthly: { amount: 4400, localAmount: 2000 },
        quarterly: { amount: 12540, localAmount: 5700 },
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
