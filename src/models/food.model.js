'use strict';

const Food = (sequelize, DataTypes) =>
  sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Food;
