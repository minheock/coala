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
        foreignKey: 'userid',
        sourceKey: 'id',
      });
      this.hasMany(models.like, {
        foreignKey: 'content_id',
        sourceKey: 'id',
      });
    }
  }
  posts.init(
    {
      userid: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      category: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'posts',
    },
  );
  return posts;
};
