const authController = require('../controllers/authController');
const productController = require('../controllers/productController');
const express = require('express');
const router = express.Router();

// Public route to get all products
router.route('/').get(productController.getAllProducts);
router.route('/:id').get(productController.getOneProduct)
router.route("/full-text-search/:query").get(productController.fullTextSearch)
// Protected routes for sellers
router.use(authController.protect);

// Seller-specific routes
router.route('/create').post(productController.AddProduct); 
router.route('/:id')
.patch(productController.updateProduct)
.delete(productController.deleteProduct);

module.exports = router;
