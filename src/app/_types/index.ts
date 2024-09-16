import { StaticImageData } from "next/image";

export interface IServiceType {
  icon: string;
  title: string;
  description: string;
  listTitle: string;
  serviceList: string[];
  style?: string;
}

export interface IToolsType {
  title: string;
  icon: string | StaticImageData;
}

export interface ITechToolsType {
  title: string;
  isActive: boolean;
  toolList: IToolsType[];
}

export interface IProcessType {
  icon: string | StaticImageData;
  title: string;
  description: string;
  highlights: string[];
}

export interface IWorkType {
  image: StaticImageData;
  brand: string;
  description: string;
  link?: string;
}

export interface IAmountType {
  amount: number;
  localAmount: number;
  discountedAmount?: number;
  localDiscountedAmount?: number;
}

export interface IPricingType {
  type: string;
  features: string[];
  isSelected: boolean;
  pricePeriod: {
    monthly: IAmountType;
    quarterly: IAmountType;
  };
}

export interface IClientType {
  clientName: string;
  clientImage: StaticImageData | string;
  clientMessage: string;
  clientRole: string;
  clientCompany: string;
  clientIsActive: boolean;
}
