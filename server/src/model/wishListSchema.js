const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const wishlistSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please enter user information.'],
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Please enter product information.'],
    },
});

const Wishlist = model('Wishlist', wishlistSchema);

module.exports = Wishlist;
