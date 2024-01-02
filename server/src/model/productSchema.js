const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please enter the product name.'],
        maxlength: [100, 'Product name must be at most 5 characters.'],
    },
    description: {
        type: String,
        required: [true, 'Please enter product description.'],
        maxlength: [500, 'Product description must be at most 500 characters.'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price.'],
        validate: {
            validator: function (value) {
                // Enforce minimum and maximum price limits
                return value >= 0 && value <= 1000000;
            },
            message: 'Price must be between 0 and 1000000.',
        },
    },
    stockQuantity: {
        type: Number,
        required: [true, 'Please provide the quantity of the product available in stock.'],
        validate: {
            validator: function (value) {
                // Ensure stockQuantity is non-negative
                return value >= 0;
            },
            message: 'Stock quantity must be non-negative.',
        },
    },
    category: {
        type: [String],
        validate: {
            validator: function (value) {
                // Ensure each category is valid .
                return Array.isArray(value) && value.every(category => typeof category === 'string');
            },
            message: 'Invalid category format.',
        },
    },
    images: {
        type: [String],
        validate: {
            validator: function (value) {
                // Ensure a maximum number of allowed images
                return value.length <= 5;
            },
            message: 'Up to 5 images are allowed.',
        },
    },
    // seller: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Seller',
    //     required: [true, 'Please provide the seller of the product.'],
    // },


});
// create text index on name and descirption.
productSchema.index({name:"text", description:"text"})


const Product = model('Product', productSchema);

module.exports = Product;
