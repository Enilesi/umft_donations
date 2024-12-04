import React, { FormEvent, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import Button from "../assets/components/circleBtn"; // Ensure correct path

const stripePromise = loadStripe(
  "pk_test_51QRfWCG8ThibllyjL7ZnEhgs26fHbYjIRps6tZcqd5kbYQ8WbI3ACZKHBLP1MyBCo0OgVxrirWXmvQmK85rpcPXo00VpBZDhbZ"
);

const CheckoutForm: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setMessage("A apărut o eroare");
      return;
    }

    const { clientSecret, error: backendError } = await fetch(
        "https://umft-donations-backend.vercel.app/create-payment-intent",
      //"http://localhost:5000/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      }
    ).then((res) => res.json());

    if (backendError) {
      setMessage(backendError);
      return;
    }

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      setMessage(
        error.message || "A apărut o eroare, vă rugăm încercați din nou sau contactați-ne"
      );
    } else {
      setMessage("Donație efectuată cu succes.\nVă mulțumim pentru contribuția dumneavoastră!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-red-700">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Donează pentru o cauză bună
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Suma (RON)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Detalii card
            </label>
            <div className="p-3 border border-gray-300 rounded-lg">
              <CardElement
                options={{ hidePostalCode: true }}
                className="focus:outline-none"
              />
            </div>
          </div>
          {message && (
            <div className="text-center whitespace-pre text-yellow-500 font-medium">{message}</div>
          )}
          <div className="flex justify-center">
            <Button
              text="Donează Acum"
              onClick={handleSubmit}
            
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const DonationForm: React.FC = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default DonationForm;
