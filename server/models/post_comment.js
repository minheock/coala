'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_comment extends Model {
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
        as: 'comments',
      });
      this.belongsTo(models.users, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'userinfo',
      });
    }
  }
  post_comment.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'post_comment',
    },
  );
  return post_comment;
};

/**
 * @swagger
 *  components:
 *    schemas:
 *      Post_comment:
 *        type: object
 *        required:
 *          - userId
 *          - postId
 *          - comment
 *        properties:
 *          userId:
 *            type: integer
 *          postId:
 *            type: integer
 *          comment:
 *            type: string
 */
