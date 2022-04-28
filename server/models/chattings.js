'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chattings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
      this.belongsTo(models.chatrooms, {
        foreignKey: 'chatroomId',
        sourceKey: 'id',
      });
      this.belongsTo(models.posts, {
        foreignKey: 'chatroomId',
        sourceKey: 'id',
      });
    }
  }
  chattings.init(
    {
      userId: DataTypes.INTEGER,
      chatroomId: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'chattings',
    },
  );
  return chattings;
};

/**
 * @swagger
 *  components:
 *    schemas:
 *      chattings:
 *        type: object
 *        required:
 *          - userId
 *          - chatroomId
 *          - content
 *        properties:
 *          userId:
 *            type: integer
 *          chatroomId:
 *            type: integer
 *          content:
 *            type: string
 */
