const express = require("express");
const { Clothes } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { name, color, size } = req.body;
    const clothes = await Clothes.create({ name, color, size });
    res.status(201).json(clothes);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const clothes = await Clothes.findAll();
    res.json(clothes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const clothes = await Clothes.findByPk(id);
    if (!clothes) {
      res.status(404).json({ message: "Clothes not found" });
    } else {
      res.json(clothes);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, color, size } = req.body;
    const clothes = await Clothes.findByPk(id);
    if (!clothes) {
      res.status(404).json({ message: "Clothes not found" });
    } else {
      clothes.name = name;
      clothes.color = color;
      clothes.size = size;
      await clothes.save();
      res.json(clothes);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const clothes = await Clothes.findByPk(id);
    if (!clothes) {
      res.status(404).json({ message: "Clothes not found" });
    } else {
      await clothes.destroy();
      res.json(clothes);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
