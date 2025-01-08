import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { StripeCardElement } from "@stripe/stripe-js";

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

export const usePaymentHandler = (amount: number, currentUser: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (shippingDetails: any) => {
    if (!stripe || !elements) {
      throw new Error("Stripe has not loaded correctly.");
    }

    setIsProcessingPayment(true);

    try {
      const amountInCents = parseInt((amount * 100).toFixed(0), 10);
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/create-payment-intent`,
        {
          amount: amountInCents,
          currency: "eur",
          shipping: shippingDetails,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      const clientSecret = data.paymentIntent.client_secret;
      const cardDetails = elements.getElement(CardElement);

      if (!ifValidCardElement(cardDetails)) {
        throw new Error("Invalid card element.");
      }

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardDetails,
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });

      if (paymentResult.error) {
        throw new Error(paymentResult.error.message);
      }

      if (
        paymentResult.paymentIntent &&
        paymentResult.paymentIntent.status === "succeeded"
      ) {
        alert("Payment Successful!");
      }
    } catch (error: any) {
      console.error("Payment Error:", error);
      alert(error.message || "There was an error processing your payment.");
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return { handlePayment, isProcessingPayment };
};