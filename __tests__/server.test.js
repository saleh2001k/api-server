'use strict';

require('dotenv').config();

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

const mockServer = supertest(app);
const { db } = require('../src/models/index');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Server test', () => {
  it('should return 404 for an unknown route (GET /new)', async () => {
    const res = await request.get('/hihihi');
    expect(res.status).toEqual(404);
  });

  it('should return 404 for an unknown route (PUT /new)', async () => {
    const res = await request.put('/9999');
    expect(res.status).toEqual(404);
  });

  //------------ Food ----------------//

  it('should add a new food item and update it (POST /food, PUT /food/:id)', async () => {
    // Create a new food item
    const createRes = await mockServer.post('/food').send({
      name: 'Pizza',
      description: 'Delicious and cheesy',
      price: '9.99',
    });
    expect(createRes.status).toBe(201);
    const createdFood = createRes.body;
    expect(createdFood.name).toEqual('Pizza');

    const updateRes = await mockServer.put(`/food/${createdFood.id}`).send({
      name: 'Burger',
      description: 'Juicy and flavorful',
      price: '8.99',
    });
    expect(updateRes.status).toBe(200);
    expect(updateRes.body.name).toEqual('Burger');

    const fetchRes = await mockServer.get(`/food/${createdFood.id}`);
    expect(fetchRes.status).toBe(200);
    const updatedFood = fetchRes.body;
    expect(updatedFood.name).toEqual('Burger');
    expect(updatedFood.description).toEqual('Juicy and flavorful');
    expect(updatedFood.price).toEqual('8.99');
  });

  it('should retrieve all food items (GET /food)', async () => {
    const res = await mockServer.get('/food');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should delete a food item by id (DELETE /food/:id)', async () => {
    const res = await mockServer.delete('/food/10');
    expect(res.status).toBe(204);
  });


  //------------- Ingredients -------------//

  it('should add a new ingredient and update it (POST /ingredient, PUT /ingredient/:id)', async () => {
    // Create a new ingredient
    const createRes = await mockServer.post('/ingredient').send({
      name: 'Cheese',
      quantity: 5,
      foodId: 1,
    });
    expect(createRes.status).toBe(200);
    const createdIngredient = createRes.body;
    expect(createdIngredient.name).toEqual('Cheese');

    const updateRes = await mockServer.put(`/ingredient/${createdIngredient.id}`).send({
      name: 'Tomato',
      quantity: 3,
      foodId: 1,
    });
    expect(updateRes.status).toBe(200);
    expect(updateRes.body.name).toEqual('Tomato');

    const fetchRes = await mockServer.get(`/ingredient/${createdIngredient.id}`);
    expect(fetchRes.status).toBe(200);
    const updatedIngredient = fetchRes.body;
    expect(updatedIngredient.name).toEqual('Tomato');
    expect(updatedIngredient.quantity).toEqual(3);
  });

  it('should retrieve all ingredients (GET /ingredient)', async () => {
    const res = await mockServer.get('/ingredient');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should delete an ingredient by id (DELETE /ingredient/:id)', async () => {
    const res = await mockServer.delete('/ingredient/10');
    expect(res.status).toBe(200);
  });



  //------------- Clothes -------------//

  it('should add a new clothes item and update it (POST /clothes, PUT /clothes/:id)', async () => {
    // Create a new clothes item
    const createRes = await mockServer.post('/clothes').send({
      name: 'T-Shirt',
      color: 'Blue',
      size: 'L',
    });
    expect(createRes.status).toBe(201);
    const createdClothes = createRes.body;
    expect(createdClothes.name).toEqual('T-Shirt');

    const updateRes = await mockServer.put(`/clothes/${createdClothes.id}`).send({
      name: 'Jacket',
      color: 'Black',
      size: 'M',
    });
    expect(updateRes.status).toBe(202);
    expect(updateRes.body.name).toEqual('Jacket');

    const fetchRes = await mockServer.get(`/clothes/${createdClothes.id}`);
    expect(fetchRes.status).toBe(200);
    const updatedClothes = fetchRes.body;
    expect(updatedClothes.name).toEqual('Jacket');
    expect(updatedClothes.color).toEqual('Black');
    expect(updatedClothes.size).toEqual('M');
  });

  it('should retrieve all clothes items (GET /clothes)', async () => {
    const res = await mockServer.get('/clothes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should delete a clothes item by id (DELETE /clothes/:id)', async () => {
    const res = await mockServer.delete('/clothes/2');
    expect(res.status).toBe(204);
  });
});
