import { IPricingType } from "@/app/_types";

export const getSelectedPlanAmount = (
  pricing: IPricingType,
  selectedPeriod: string,
  isLocalCurrency: boolean
) => {
  const { monthly, quarterly } = pricing.pricePeriod;
  const { amount, localAmount } =
    selectedPeriod == "monthly" ? monthly : quarterly;

  const planAmount = (isLocalCurrency ? localAmount : amount).toLocaleString();

  const currency = isLocalCurrency ? "₦" : "$";

  return `${currency}${planAmount}`;
};
