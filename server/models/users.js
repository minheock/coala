'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.contents, {
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
      this.hasMany(models.like, {
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
    }
  }
  users.init(
    {
      username: DataTypes.STRING,
      profile: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'users',
    },
  );
  return users;
};
