require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const subscriptionMap = new Map([
    [1, { priceInCent: 0, name: 'Free Trial Package', interval: 'month' }],
    [2, { priceInCent: 1900, name: 'Premium Package', interval: 'month' }],
    [3, { priceInCent: 10000, name: 'Corporate Package', interval: 'year' }]
]);

let userCurrentPlan;

const subscribeToAPlan = async (req, res, next) => {
    try {
        const subscriptionDetails = req.body;
        let { plan } = subscriptionDetails;
        console.log('Received subscription details:', subscriptionDetails);

        const planId = parseInt(plan.id, 10);
        const subscriptionPlan = subscriptionMap.get(planId);

        userCurrentPlan = subscriptionPlan.name

        if (!subscriptionPlan) {
            throw new Error(`No subscription plan found for id: ${plan.id}`);
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: subscriptionPlan.name,
                    },
                    unit_amount: subscriptionPlan.priceInCent,
                    recurring: {
                        interval: subscriptionPlan.interval,
                    }
                },
                quantity: plan.quantity
            }],
            success_url: process.env.SUCCESS_URL,
            cancel_url: process.env.CANCEL_URL
        });

        res.json({ url: session.url,
            currentPlan: userCurrentPlan
         });
    } catch (error) {
        console.error('Error during subscription process:', error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { subscribeToAPlan};