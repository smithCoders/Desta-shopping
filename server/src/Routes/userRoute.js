const express= require("express");
const router= express.Router();
const authController= require("../controllers/authController");
const userController=require("../controllers/userController");
const multer=require("../utils/multer")
const token=require("../utils/token")

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations related to users
 */


/**
 * @swagger
 * /api/v1/users/signup:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint to register a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSignup'
 *     responses:
 *       '200':
 *         description: User successfully registered.
 *         content:
 *           application/json:
 *             example:
 *               message: User registered successfully.
 */

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: User login
 *     description: Endpoint for user authentication.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       '200':
 *         description: User successfully logged in.
 *         content:
 *           application/json:
 *             example:
 *               message: User logged in successfully.
 */

/**
 * @swagger
 * /api/v1/users/:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               users:
 *                 - id: 1
 *                   name: John Doe
 *                 - id: 2
 *                   name: Jane Doe
 */


/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a user's details by their ID.
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
 *               name: John Doe
 */


/**
 * @swagger
 * /api/v1/users/logout:
 *   get:
 *     summary: User logout
 *     description: Endpoint to log out a user.
 *     responses:
 *       '200':
 *         description: User successfully logged out.
 *         content:
 *           application/json:
 *             example:
 *               message: User logged out successfully.
 */

/**
 * @swagger
 * /api/v1/users/acess-token:
 *   post:
 *     summary: Generate access token
 *     description: Endpoint to generate a new access token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TokenRequest'
 *     responses:
 *       '200':
 *         description: Access token generated successfully.
 *         content:
 *           application/json:
 *             example:
 *               accessToken: <generated_access_token>
 */

/**
 * @swagger
 * /api/v1/users/refrsh-token:
 *   post:
 *     summary: Get refresh token
 *     description: Endpoint to retrieve a new refresh token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RefreshTokenRequest'
 *     responses:
 *       '200':
 *         description: Refresh token retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               refreshToken: <refresh_token>
 */

/**
 * @swagger
 * /api/v1/users/my-profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve the profile of the currently authenticated user.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: John Doe
 *               email: john@example.com
 */

/**
 * @swagger
 * /api/v1/users/update-me:
 *   patch:
 *     summary: Update user profile
 *     description: Update the profile of the currently authenticated user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdate'
 *     responses:
 *       '200':
 *         description: User profile updated successfully.
 *         content:
 *           application/json:
 *             example:
 *               message: User profile updated successfully.
 */




router.route("/signup").post(userController.userSignup);
router.route("/login").post(userController.login);

router.use(userController.authorize)
router.route("/").get(userController.getAllUser)
router.route("/:id").get(userController.getUser)
// router.route("/:id").get(userController.getUser)
router.route("/logout").get(authController.logOut)
router.route("/acess-token").post(token.generateAccessToken)
router.route("/refrsh-token").post(authController.getRefreshToken)
router.route("/my-profile").get(userController.getProfile)
router.route("/update-me").patch( multer.uploadImg,multer.resizeUserPhoto,userController.updateProfile)
module.exports=router