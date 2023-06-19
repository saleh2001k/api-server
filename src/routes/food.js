const express = require("express");
const { Food } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { name, description, price } = req.body;
    const food = await Food.create({ name, description, price });
    res.status(201).json(food);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const foods = await Food.findAll();
    res.json(foods);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await Food.findByPk(id);
    if (!food) {
      res.status(404).json({ message: "Food not found" });
    } else {
      res.json(food);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const food = await Food.findByPk(id);
    if (!food) {
      res.status(404).json({ message: "Food not found" });
    } else {
      food.name = name;
      food.description = description;
      food.price = price;
      await food.save();
      res.json(food);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await Food.findByPk(id);
    if (!food) {
      res.status(404).json({ message: "Food not found" });
    } else {
      await food.destroy();
      res.json(food);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
