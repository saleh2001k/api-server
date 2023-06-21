"use strict";

const express = require("express");
const { Clothes } = require("../models/index");

const router = express.Router();

router.get("/Clothes", getClothes);
router.get("/Clothes/:id", getOneClothes);
router.post("/Clothes", createClothes);
router.put("/Clothes/:id", updateClothes);
router.delete("/Clothes/:id", deleteClothes);

async function getClothes(req, res) {
  const allClothes = await Clothes.findAll();
  res.status(200).json(allClothes);
}

async function getOneClothes(req, res) {
  const id = req.params.id;
  const clothesItem = await Clothes.findOne({ where: { id: id } });
  res.status(200).json(clothesItem);
}

async function createClothes(req, res) {
  const obj = req.body;
  const newClothes = await Clothes.create(obj);
  res.status(201).json(newClothes);
}

async function updateClothes(req, res) {
  const id = req.params.id;
  const obj = req.body;
  await Clothes.update(obj, { where: { id } });
  const updatedClothes = await Clothes.findOne(obj, { where: { id } });
  res.status(202).json(updatedClothes);
}
async function deleteClothes(req, res) {
  const id = req.params.id;
  const deleteTheClothes = await Clothes.destroy({ where: { id } });
  res.status(204).json(deleteTheClothes);
}

module.exports = router;
