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
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'userInfo',
      });
      this.hasMany(models.like, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
      this.hasMany(models.chattings, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
      this.hasMany(models.post_comment, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'userinfo',
      });
    }
  }
  users.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin: { type: DataTypes.BOOLEAN, defaultValue: 0 },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
 *          slat:
 *            type: string
 */
