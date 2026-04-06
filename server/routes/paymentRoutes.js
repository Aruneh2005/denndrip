const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { protect } = require('../middleware/authMiddleware');

router.post('/create-checkout-session', protect, async (req, res) => {
    const { cartItems } = req.body;

    try {
        const line_items = cartItems.map((item) => {
            return {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.name,
                        images: [item.image],
                        metadata: {
                            id: item.id,
                            size: item.size,
                        },
                    },
                    unit_amount: item.price * 100, // Stripe expects amount in cents/paisa
                },
                quantity: item.quantity,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL || 'http://localhost:3000'}/cart`,
            customer_email: req.user.email,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Stripe session creation failed' });
    }
});

module.exports = router;
