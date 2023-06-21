"use strict";

const Ingredient = (sequelize, DataTypes) =>
  sequelize.define("Ingredient", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    foodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  });

module.exports = Ingredient;

