"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actor.hasMany(models.Event, {
        foreignKey: 'actor_id',
        as: "event"
      });
    }
  }
  Actor.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      login: DataTypes.STRING,
      avatar_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Actor",
    }
  );
  return Actor;
};
