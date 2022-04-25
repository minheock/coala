'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
      this.hasMany(models.like, {
        foreignKey: 'content_id',
        sourceKey: 'id',
      });
    }
  }
  contents.init(
    {
      user_id: DataTypes.INTEGER,
      content_name: DataTypes.STRING,
      content_body: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'contents',
    },
  );
  return contents;
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
