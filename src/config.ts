export const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.NEXT_SECRET_STRIPE_PUBLISHABLE_KEY,
    webhookSecret: "",
    plans: {
      free: {
        priceId: "price_1PBKlKDBAv9rS9LHCkbJWeJT",
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: "price_1PBKleDBAv9rS9LHsQ3iqAdj",
        quota: {
          TASKS: 100,
        },
      },
    },
  },
};
