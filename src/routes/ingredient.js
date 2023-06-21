"use strict";

const express = require("express");
const router = express.Router();
const { ingredientCollection } = require("../models");

router.get("/ingredient", getIngredient);
router.get("/ingredient/:id", getOneIngredient);
router.put("/ingredient/:id", updateIngredient);
router.delete("/ingredient/:id", deleteIngredient);
router.post("/ingredient", createIngredient);

async function getIngredient(req, res) {
  let ingredient = await ingredientCollection.read();
  res.status(200).json(ingredient);
}

async function getOneIngredient(req, res) {
  let id = req.params.id;
  let ingredient = await ingredientCollection.read(id);
  res.status(200).json(ingredient);
}

async function updateIngredient(req, res) {
  let id = req.params.id;
  let data = req.body;
  let ingredient = await ingredientCollection.update(id, data);
  res.status(200).json(ingredient);
}

async function deleteIngredient(req, res) {
  let id = req.params.id;
  let ingredient = await ingredientCollection.delete(id);
  res.status(200).json(ingredient);
}

async function createIngredient(req, res) {
  let data = req.body;
  let ingredient = await ingredientCollection.create(data);
  res.status(200).json(ingredient);
}

module.exports = router;
