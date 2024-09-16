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
    features: ["One request at a time"],
    isSelected: true,
    pricePeriod: {
      monthly: { amount: 1200, localAmount: 300000 },
      quarterly: { amount: 3200, localAmount: 800000 },
    },
  },
  pricingList: [
    {
      type: "Starter",
      features: ["One request at a time"],
      isSelected: true,
      pricePeriod: {
        monthly: { amount: 1200, localAmount: 300000 },
        quarterly: { amount: 3200, localAmount: 800000 },
      },
    },
    {
      type: "Growth",
      features: ["Two request at a time"],
      isSelected: false,
      pricePeriod: {
        monthly: { amount: 2400, localAmount: 600000 },
        quarterly: { amount: 7000, localAmount: 1650000 },
      },
    },
    {
      type: "Business",
      features: ["Three request at a time"],
      isSelected: false,
      pricePeriod: {
        monthly: { amount: 4800, localAmount: 1200000 },
        quarterly: { amount: 14000, localAmount: 3400000 },
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
