"use strict";

const express = require("express");
const { Food, ingredientCollection } = require("../models/index");

const router = express.Router();
const {foodCollection} = require("../models/index");

router.get("/food", getFood);
router.get("/food/:id", getOneFood);
router.post("/food", createFood);
router.put("/food/:id", updateFood); 
router.delete("/food/:id", deleteFood);
router.get("/foodIngredient/:id", getFoodIngredient);


async function getFood(req, res) {
  let allFood = await foodCollection.read();
  res.status(200).json(allFood);
}

 async function getOneFood(req, res) {
  let id = parseInt(req.params.id);
  let oneFood = await foodCollection.read(id);
  res.status(200).json(oneFood);
}

 async function createFood(req, res) {
  let obj = req.body;
  let newFood = await foodCollection.create(obj);
  res.status(201).json(newFood);
}

 async function updateFood(req, res) {
  let id = parseInt(req.params.id);
  let obj = req.body;
  let updatedFood = await foodCollection.update(id, obj);
  res.status(200).json(updatedFood);
}

 async function deleteFood(req, res) {
  let id = parseInt(req.params.id);
  let deletedFood = await foodCollection.delete(id);
  res.status(204).json(deletedFood);
}

 async function getFoodIngredient(req, res) {
  let id = parseInt(req.params.id);
  let foodIngredient = await foodCollection.readFoodIng(id, ingredientCollection.model);
  res.status(200).json(foodIngredient);
}

module.exports = router;
