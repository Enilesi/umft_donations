
const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
require("dotenv").config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, 
      currency: "ron",
      automatic_payment_methods: { enabled: true },
      description:"Donatie caritabila catre UMFT"

    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.send({ error: error.message });
  }
});
app.get("/", (req, res) => res.send("Get test"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
