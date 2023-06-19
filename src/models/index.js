const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: false,
    },
  });
const initFoodModel = require("./food");
const initClothesModel = require("./clothes");

const Food = initFoodModel(sequelize);
const Clothes = initClothesModel(sequelize);

Food.belongsTo(Clothes);
Clothes.hasMany(Food);

module.exports = {
  Food,
  Clothes,
  sequelize,
};
