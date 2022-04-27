'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.posts, {
        foreignKey: 'postId',
        sourceKey: 'id',
        as: 'likers',
      });
      this.belongsTo(models.users, {
        foreignKey: 'userId',
        sourceKey: 'id',
      });
    }
  }
  like.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'like',
    },
  );
  return like;
};
/**
 * @swagger
 *  components:
 *    schemas:
 *      Like:
 *        type: object
 *        required:
 *          - userId
 *          - postId
 *        properties:
 *          userId:
 *            type: integer
 *          postId:
 *            type: integer
 */
