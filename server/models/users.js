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
      this.hasMany(models.posts, {
        foreignKey: 'userid',
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
/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - username
 *          - profile
 *          - email
 *          - password
 *        properties:
 *          username:
 *            type: string
 *          profile:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 */
