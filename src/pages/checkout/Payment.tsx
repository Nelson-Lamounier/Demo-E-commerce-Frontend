import { ChangeEvent, FC } from "react";
import InputField from "@components/access.components/input-fields";
import { StripeCardElement } from "@stripe/stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import { PaymentFields } from "@/types/checkout";

interface PaymentProps {
  paymentFormFields: PaymentFields;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Payment: FC<PaymentProps> = ({ paymentFormFields, onInputChange }) => {
  const { cardNumber, nameOnCard, expirationDate, cvv } = paymentFormFields;

  return (
    <div className="mt-10 border-t border-gray-200 pt-10">
      <h2 className="text-lg font-medium text-gray-900">Payment</h2>

      <fieldset className="mt-4">
        <legend className="sr-only">Payment type</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
            <div key={paymentMethod.id} className="flex items-center">
              <InputField
                defaultChecked={paymentMethodIdx === 0}
                id={paymentMethod.id}
                name="payment-type"
                type="radio"
                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
              />
              <label
                htmlFor={paymentMethod.id}
                className="ml-3 block text-sm/6 font-medium text-gray-700"
              >
                {paymentMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
        <div className="col-span-4">
          <label
            htmlFor="card-number"
            className="block text-sm/6 font-medium text-gray-700"
          >
            Card number
          </label>
          <div className="mt-2">
            <InputField
              id="card-number"
              name="card-number"
              type="text"
              autoComplete="cc-number"
              className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="col-span-4">
          <label
            htmlFor="name-on-card"
            className="block text-sm/6 font-medium text-gray-700"
          >
            Name on card
          </label>
          <div className="mt-2">
            <InputField
              id="name-on-card"
              name="name-on-card"
              type="text"
              autoComplete="cc-name"
              className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="col-span-3">
          <div className="mt-2">
            <InputField
              name="expiration-date"
              type="text"
              autoComplete="cc-exp"
              value={expirationDate}
              autoComplete="Expiration Date"
              placeholder="Expiration date (MM/YY)"
              label="Expiration date (MM/YY)"
              onChange={onInputChange}
             
            />
          </div>
        </div>

        <div>
          <div className="mt-2">
            <InputField
              name="cvc"
              type="text"
              value={cvv}
              autoComplete="cvc"
              placeholder="cvc"
              label="Full Name"
              onChange={onInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
