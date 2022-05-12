'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_notification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_notification.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      postUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      readAt: { type: DataTypes.BOOLEAN, defaultValue: false },
      check: { type: DataTypes.DATE, defaultValue: null },
    },
    {
      sequelize,
      modelName: 'user_notification',
    },
  );
  return user_notification;
};
