"use strict";
const { Sequelize, DataTypes } = require("sequelize");

const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;
let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const food = require("./food.model");
const clothes = require("./clothes.model");

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes),
  Clothes: clothes(sequelize, DataTypes),
};
