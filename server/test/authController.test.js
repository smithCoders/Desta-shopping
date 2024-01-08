const request = require('supertest');
const app = require('../app');
const User = require('../src/model/userModel');

describe('Authentication', () => {
  let user;

  beforeAll(async () => {
    // Create a test user
    user = await User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      password: 'password123',
      passwordConfirm: 'password123',
      role: 'user',
    });
  },50000);

  afterAll(async () => {
    // Delete the test user
    await User.deleteMany();
  });

  describe('POST /signup', () => {
    test('should create a new user', async () => {
      const response = await request(app)
        .post('/signup')
        .send({
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
          phoneNumber: '9876543210',
          password: 'password123',
          passwordConfirm: 'password123',
          role: 'user',
        });

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

    test('should return an error if user already exists', async () => {
      const response = await request(app)
        .post('/signup')
        .send({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phoneNumber: '1234567890',
          password: 'password123',
          passwordConfirm: 'password123',
          role: 'user',
        });

      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('message', 'User already exists');
    });
  });

  describe('POST /login', () => {
    test('should log in a user with valid credentials', async () => {
      const response = await request(app)
        .post('/login')
        .send({
          emailorPhone: 'john.doe@example.com',
          password: 'password123',
        });

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('token');
    });

    test('should return an error with invalid credentials', async () => {
      const response = await request(app)
        .post('/login')
        .send({
          emailorPhone: 'john.doe@example.com',
          password: 'wrongpassword',
        });

      expect(response.statusCode).toBe(401);
      expect(response.body).toHaveProperty('message', 'Invalid credentials. Please check your email, phone number, or password.');
    });
  });

  describe('GET /protected', () => {
    test('should return 401 if user is not logged in', async () => {
      const response = await request(app).get('/protected');

      expect(response.statusCode).toBe(401);
      expect(response.body).toHaveProperty('message', 'You are not logged in. Please login to get access');
    });

    test('should return 200 if user is logged in', async () => {
      const loginResponse = await request(app)
        .post('/login')
        .send({
          emailorPhone: 'john.doe@example.com',
          password: 'password123',
        });

      const response = await request(app)
        .get('/protected')
        .set('Authorization', `Bearer ${loginResponse.body.token}`);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Access granted');
    });
  });

  describe('GET /admin', () => {
    test('should return 403 if user is not an admin', async () => {
      const loginResponse = await request(app)
        .post('/login')
        .send({
          emailorPhone: 'john.doe@example.com',
          password: 'password123',
        });

      const response = await request(app)
        .get('/admin')
        .set('Authorization', `Bearer ${loginResponse.body.token}`);

      expect(response.statusCode).toBe(403);
      expect(response.body).toHaveProperty('message', 'You do not have permission to perform this action');
    });

    test('should return 200 if user is an admin', async () => {
      const adminUser = await User.create({
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
        phoneNumber: '1234567890',
        password: 'password123',
        passwordConfirm: 'password123',
        role: 'admin',
      });

      const loginResponse = await request(app)
        .post('/login')
        .send({
          emailorPhone: 'admin@example.com',
          password: 'password123',
        });

      const response = await request(app)
        .get('/admin')
        .set('Authorization', `Bearer ${loginResponse.body.token}`);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'Access granted');
    });
  });
});