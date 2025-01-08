import { useState, ChangeEvent, FormEvent, Fragment } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { usePaymentHandler } from "@hooks/usePaymentHandler";

import { FormFields } from "@/types/checkout";

import { selectCartTotal } from "@/store/cart/cart.selector";

import ShippingInfo from "./ShippingInfo";
import ContactInformation from "./ContactInformation";
import DeliveryMethod from "./DeliveryMethod";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";

import { deliveryMethods } from "@/types/checkout";

const Checkout = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    FullName: "",
    Line1: "",
    Line2: "",
    city: "",
    county: "",
    postalCode: "",
    phone: "",
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState("");
  const [deliveryFee, setDeliveryFee] = useState(0);

  const [paymentDetails, setPaymentDetails] = useState({
    cardComplete: false,
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      alert("Stripe is not loaded yet.");
      return;
    }

    const cardElement = elements.getElement("card");
    if (!cardElement) {
      alert("Card details not entered.");
      return;
    }

    // Perform the payment logic
    console.log("Card details are valid:", cardElement);
  };

//   const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
//     DeliveryMethod[0]
//   );

const handleDeliveryMethodChange = (value: string) => {
    setSelectedDeliveryMethod(value);
  };

  const handleFeeChange = (fee: number) => {
    setDeliveryFee(fee);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h1 className="sr-only">Checkout</h1>

        <form
          onSubmit={handleSubmit}
          className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
        >
          <div>
            <ContactInformation
              email={formFields.email}
              onInputChange={handleInputChange}
            />
            <ShippingInfo
              formFields={formFields}
              selectedCountry={selectedCountry}
              onInputChange={handleInputChange}
              onCountryChange={handleCountryChange}
            />
            <DeliveryMethod
              selectedDeliveryMethod={selectedDeliveryMethod}
              onInputChange={handleDeliveryMethodChange}
              onFeeChange={handleFeeChange}
            />
            {/* Payment */}
            <Payment />
          </div>
          {/* Order summary */}
          <OrderSummary  deliveryFee={deliveryFee}/>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
