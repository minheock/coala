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
        foreignKey: 'content_id',
        sourceKey: 'id',
      });
      this.belongsTo(models.users, {
        foreignKey: 'user_id',
        sourceKey: 'id',
      });
    }
  }
  like.init(
    {
      user_id: DataTypes.INTEGER,
      content_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'like',
    },
  );
  return like;
};
