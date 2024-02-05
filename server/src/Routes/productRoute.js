const authController = require('../controllers/authController');
const productController = require('../controllers/productController');

const express = require('express');
const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API operations related to products
 */

/**
 * @swagger
 * /api/v1/products/:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all products.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               products:
 *                 - id: 1
 *                   name: Product A
 *                 - id: 2
 *                   name: Product B
 */

/**
 * @swagger
 * /api/v1/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     description: Retrieve a product's details by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: Product A
 */

/**
 * @swagger
 * /api/v1/products/create:
 *   post:
 *     summary: Create a new product
 *     description: Endpoint to add a new product.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '200':
 *         description: Product added successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: Product added successfully.
 */

/**
 * @swagger
 * /api/v1/products/{id}:
 *   patch:
 *     summary: Update a product by ID
 *     description: Update a product's details by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '200':
 *         description: Product updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: Product updated successfully.
 */

/**
 * @swagger
 * /api/v1/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     description: Delete a product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Product deleted successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: Product deleted successfully.
 */






// Public route to get all products
router.route('/').get(productController.getAllProducts);
router.route('/:id').get(productController.getOneProduct);
router.route("/full-text-search/:query").get(productController.fullTextSearch)
// router.use(sellerController.authorize)
router.route('/create').post(productController.AddProduct); 
router.route('/:id')
.patch(productController.updateProduct)
.delete(productController.deleteProduct);

module.exports = router;
