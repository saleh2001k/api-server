require('dotenv').config();
const app = require('./src/server');
const { sequelize } = require('./src/models');

const port = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
