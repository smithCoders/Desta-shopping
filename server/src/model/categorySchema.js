const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categorySchema = Schema({
    name: {
        type: String,
        required: [true, 'Please enter the category name.'],
    },
    description: String,
});

const Category = model('Category', categorySchema);

module.exports = Category;
