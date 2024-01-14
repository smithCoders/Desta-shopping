const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'An order without a user is not allowed.'],
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Please enter the product you want to order.'],
    },
    orderDate: {
        type: Date,
        default: Date.now(),
    },
    quantity: {
        type: Number,
        required: [true, 'Please enter the quantity of the product.'],
        validate: {
            validator: Number.isInteger,
            message: 'Quantity must be a positive integer.',
        },
        min: [1, 'Quantity must be at least 1.'],
    },
    shippingAddress: String,
    shippingBill: String,
    totalPrice: {
        type: String,
        required: [true, 'Please enter the total price.'],
        validate: {
            validator: function (value) {
                // Calculate the expected total price based on product prices and quantity.
                const expectedTotalPrice = this.quantity * this.product.price;
                // Convert expectedTotalPrice to string for comparison
                const expectedTotalPriceString = expectedTotalPrice.toFixed(2);

                // Check if the provided total price matches the calculated total price
                return value === expectedTotalPriceString;
            },
            message: 'Total price does not match the calculated price based on product prices and quantity.',
        },
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered',"processing"],
        default: 'pending',
    },
});

const Order = model('Order', orderSchema);

module.exports = Order;
