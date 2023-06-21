"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const Collection = require("./lib/collection");

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
const ingredient = require("./ingredient.model");

const foodModel = food(sequelize, DataTypes);
const ingredientModel = ingredient(sequelize, DataTypes);

foodModel.hasMany(ingredientModel, { foreignKey: "foodId", sourceKey: "id" });
ingredientModel.belongsTo(foodModel, { foreignKey: "foodId", targetKey: "id" });

const foodCollection = new Collection(foodModel);
const ingredientCollection = new Collection(ingredientModel);

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes),
  Clothes: clothes(sequelize, DataTypes),
  Ingredient: ingredient(sequelize, DataTypes),
  foodCollection,
  ingredientCollection,
};
