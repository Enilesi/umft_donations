
import React, { FormEvent, FormEventHandler, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QR0cJIsnAXuizmKfJa0OPXrNbRZ8HOnmx4CTjUu0f88v49JzMS1wTU87k8IzkEDxmkeVLTaZ7yjM0AhrPbecVg2006xMN4S1e"
);

const CheckoutForm = () => {
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
      setMessage('Card element not found');
      return;
    }
  
    const { clientSecret, error: backendError } = await fetch(
      '/api/create-payment-intent',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      setMessage(error.message || 'An error occurred');
    } else {
      setMessage('Donation successful! Thank you for your support.');
    }
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl mb-4 text-center text-gold-500">Donate Now</h2>
      <div className="mb-4">
        <label className="block mb-2">Amount (USD)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Card Details</label>
        <CardElement className="p-2 border border-gray-300 rounded-md" />
      </div>
      {message && (
        <div className="mb-4 text-center text-red-500">{message}</div>
      )}
      <button
        type="submit"
        disabled={!stripe}
        className="w-full py-2 px-4 bg-gold-500 text-white rounded-md hover:bg-gold-600"
      >
        Donate
      </button>
    </form>
  );
};

const DonationForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default DonationForm;
