'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chatrooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.chattings, {
        foreignKey: 'chatroomId',
        sourceKey: 'id',
      });
      this.hasMany(models.user_chatrooms, {
        foreignKey: 'chatroomId',
        sourceKey: 'id',
      });
    }
  }
  chatrooms.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'chatrooms',
    },
  );
  return chatrooms;
};
/**
 * @swagger
 *  components:
 *    schemas:
 *      chatrooms:
 *        type: object
 *        required:
 *          - id
 *          - userId
 *        properties:
 *          id:
 *            type: integer
 *          userId:
 *            type: integer

 */
