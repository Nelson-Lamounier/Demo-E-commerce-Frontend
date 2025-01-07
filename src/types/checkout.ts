export interface FormFields {
  email: string;
  FullName: string;
  password: string;
  Line1: string;
  Line2: string;
  city: string;
  county: string;
  postalCode: string;
  phone: string;
}

export interface PaymentFields {
  cardNumber: number;
  nameOnCard: string;
  expirationDate: string;
  cvv: string;
}

export type DeliveryMethod = {
  id: number;
  title: string;
  turnaround: string;
  price: number;
};

export type PaymentMethod = {
  id: string;
  title: string;
};

export const deliveryMethods: DeliveryMethod[] = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4–10 business days",
    price: 5.0,
  },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: 16.0 },
];

export const paymentMethods: PaymentMethod[] = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];
