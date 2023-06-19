const request = require('supertest');
const app = require('../src/server');
const sequelize = require('../src/config/database');
const { Food } = require('../src/models');

describe('Food API', () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  beforeEach(async () => {
    await Food.destroy({ truncate: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('should create a new food record', async () => {
    const response = await request(app)
      .post('/food')
      .send({
        name: 'Pizza',
        description: 'Delicious pizza',
        price: 9.99,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Pizza');
    expect(response.body.description).toBe('Delicious pizza');
    expect(response.body.price).toBe(9.99);
  });

  test('should get all food records', async () => {
    await Food.bulkCreate([
      { name: 'Pizza', description: 'Delicious pizza', price: 9.99 },
      { name: 'Burger', description: 'Tasty burger', price: 7.99 },
    ]);

    const response = await request(app).get('/food');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });

  test('should get a single food record', async () => {
    const food = await Food.create({
      name: 'Pizza',
      description: 'Delicious pizza',
      price: 9.99,
    });

    const response = await request(app).get(`/food/${food.id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Pizza');
    expect(response.body.description).toBe('Delicious pizza');
    expect(response.body.price).toBe(9.99);
  });

  test('should update a food record', async () => {
    const food = await Food.create({
      name: 'Pizza',
      description: 'Delicious pizza',
      price: 9.99,
    });

    const response = await request(app)
      .put(`/food/${food.id}`)
      .send({
        name: 'Pepperoni Pizza',
        description: 'Delicious pepperoni pizza',
        price: 10.99,
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Pepperoni Pizza');
    expect(response.body.description).toBe('Delicious pepperoni pizza');
    expect(response.body.price).toBe(10.99);
  });

  test('should delete a food record', async () => {
    const food = await Food.create({
      name: 'Pizza',
      description: 'Delicious pizza',
      price: 9.99,
    });

    const response = await request(app).delete(`/food/${food.id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Pizza');
    expect(response.body.description).toBe('Delicious pizza');
    expect(response.body.price).toBe(9.99);
  });

  test('should return 404 for non-existing route', async () => {
    const response = await request(app).get('/non-existing-route');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message', 'Route not found');
  });

  test('should return 404 for non-existing food record', async () => {
    const response = await request(app).get('/food/999');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message', 'Food not found');
  });

  test('should handle server errors', async () => {
    jest.spyOn(Food, 'findAll').mockRejectedValueOnce(new Error('Database error'));

    const response = await request(app).get('/food');

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message', 'Internal server error');
  });
});
