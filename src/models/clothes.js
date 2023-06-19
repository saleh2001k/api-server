const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Clothes = sequelize.define('Clothes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Clothes;
};
