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
 *      Content:
 *        type: object
 *        required:
 *          - user_id
 *          - content_name
 *          - content_body
 *          - category
 *        properties:
 *          user_id:
 *            type: string
 *          content_name:
 *            type: string
 *          content_body:
 *            type: string
 *          category:
 *            type: string
 */
