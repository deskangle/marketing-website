import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const ServiceCardItemRow = ({ item }: { item: string }) => {
  return (
    <div className="flex justify-start items-center gap-x-3">
      <div className="w-[26px] h-[26px] rounded-full bg-primary-green/55 flex justify-center items-center">
        <CheckIcon className="w-[18px] h-[18px] text-white" />
      </div>
      <div className="text-[15px] text-white/60">{item}</div>
    </div>
  );
};

export default ServiceCardItemRow;
