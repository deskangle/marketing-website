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

  // return `${currency}${planAmount}.00`;
  return `${currency}${planAmount}`;
};

export const getPlanBookingLink = (
  pricing: IPricingType,
  selectedPeriod: string,
  isLocalCurrency: boolean
) => {
  const { slug } = pricing;
  const { monthly, quarterly } = pricing.pricePeriod;

  const { amount, localAmount } =
    selectedPeriod == "monthly" ? monthly : quarterly;

  const planAmount = isLocalCurrency ? localAmount : amount;

  // return `${currency}${planAmount}.00`;
  return `https://cal.com/deskangle-studios/${slug}-${selectedPeriod}-${planAmount}`;
};
