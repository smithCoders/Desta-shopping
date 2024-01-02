const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotionSchema = Schema({
  code: {
    type: String,
    unique: true,
    required: [true, 'Please enter a promotion code.'],
  },
  description: {
    type: String,
  },
  discountType: {
    type: String,
    enum: ['percentage', 'fixed'],
    required: [true, 'Please enter a discount type.'],
  },
  discountAmount: {
    type: Number,
    required: [true, 'Please enter a discount amount.'],
  },
  validFrom: {
    type: Date,
    required: [true, 'Please enter the start date of the promotion.'],
  },
  validUntil: {
    type: Date,
    required: [true, 'Please enter the end date of the promotion.'],
    validate: {
      validator: function (value) {
        // Ensure validFrom is before validUntil
        return value > this.validFrom;
      },
      message: 'End date must be after the start date.',
    },
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});
// allow documents with null values to coexist without triggering a uniqueness constrain

promotionSchema.index({ validFrom: 1, validUntil: 1 }, { unique: true, sparse: true });

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
