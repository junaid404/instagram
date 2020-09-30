const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../utils/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  profile_image: { type: DataTypes.STRING },
  website: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, allowNull: false },
  bio: { type: DataTypes.STRING, allowNull: true },
  password: { type: DataTypes.STRING, allowNull: false },
  salt: { type: DataTypes.STRING, allowNull: false },
  phone_number: { type: DataTypes.STRING },
  last_checked: { type: DataTypes.STRING },
});

module.exports.DBUser = User;
