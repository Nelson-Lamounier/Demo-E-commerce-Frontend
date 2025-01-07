import { ChangeEvent, FC } from "react";
import { Radio, RadioGroup } from "@headlessui/react";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

import deliveryMethods from "@/types/checkout";

interface DeliveryMethodProp {
    selectedDeliveryMethod: string;
    onInputChange: (value: string) => void;

}

const DeliveryMethod: FC<DeliveryMethodProp> = ({selectedDeliveryMethod, onInputChange}) => {
  return (
    <div className="mt-10 border-t border-gray-200 pt-10">
    <h2 className="text-lg font-medium text-gray-900">
      Delivery method
    </h2>
    <fieldset aria-label="Delivery method" className="mt-4">
      <RadioGroup
        value={selectedDeliveryMethod}
        onChange={onInputChange}
        className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
      >
        {deliveryMethods.map((deliveryMethod) => (
          <Radio
            key={deliveryMethod.id}
            value={deliveryMethod}
            aria-label={deliveryMethod.title}
            aria-description={`${deliveryMethod.turnaround} for ${deliveryMethod.price}`}
            className="group relative flex cursor-pointer rounded-lg border border-gray-300 bg-white p-4 shadow-xs focus:outline-hidden data-checked:border-transparent data-focus:ring-2 data-focus:ring-indigo-500"
          >
            <span className="flex flex-1">
              <span className="flex flex-col">
                <span className="block text-sm font-medium text-gray-900">
                  {deliveryMethod.title}
                </span>
                <span className="mt-1 flex items-center text-sm text-gray-500">
                  {deliveryMethod.turnaround}
                </span>
                <span className="mt-6 text-sm font-medium text-gray-900">
                  {deliveryMethod.price}
                </span>
              </span>
            </span>
            <CheckCircleIcon
              aria-hidden="true"
              className="size-5 text-indigo-600 group-not-data-checked:hidden"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
            />
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
    </div>
  );
};

export default DeliveryMethod;
