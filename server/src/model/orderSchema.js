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
    type: Number,
    required: [true, 'Please enter the total price.'],
    },

    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered',"processing"],
        default: 'pending',
    },
});

const Order = model('Order', orderSchema);

module.exports = Order;
