import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const ServiceCardItemRow = ({ item }: { item: string }) => {
  return (
    <div className="flex justify-start items-center gap-x-3">
      <div className="w-[26px] h-[26px] rounded-full bg-primary-green/55 flex justify-center items-center">
        <CheckIcon className="w-[18px] lg:w-4 h-[18px] lg:h-4 text-white" />
      </div>
      <div className="text-[15px] lg:text-[14.5px] sm:text-[15px] xs:text-[13.75px] text-white/60">
        {item}
      </div>
    </div>
  );
};

export default ServiceCardItemRow;
