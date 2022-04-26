'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
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
      this.hasMany(models.like, {
        foreignKey: 'postId',
        sourceKey: 'id',
      });
      this.hasMany(models.post_comment, {
        foreignKey: 'postId',
        sourceKey: 'id',
      });
    }
  }
  posts.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      stack: DataTypes.STRING,
      chatroomId: DataTypes.INTEGER,
      done: { type: DataTypes.BOOLEAN, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: 'posts',
    },
  );
  return posts;
};

/**
 * @swagger
 *  components:
 *    schemas:
 *      Post:
 *        type: object
 *        required:
 *          - user_id
 *          - title
 *          - content
 *          - stack
 *          - chatroomId
 *          - done
 *        properties:
 *          user_id:
 *            type: integer
 *          title:
 *            type: string
 *          content:
 *            type: string
 *          stack:
 *            type: string
 *          chatroomId:
 *            type: integer
 *          done:
 *            type: boolean
 */
