const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'production' ? false : console.log,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
const dbInstance = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log(`[ SUCCESS ] postgresql is connected 📙`);
  } catch (error) {
    console.error(`[ ERROR ] Failed to connect to Database ⚠️`, error);
  }

  return sequelize;
};
dbInstance();

module.exports = sequelize;
