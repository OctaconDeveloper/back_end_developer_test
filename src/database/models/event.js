'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.Actor, {
        foreignKey: 'actor_id',
        as: "actor"
      });
      Event.belongsTo(models.Repo, {
        foreignKey: 'repo_id',
        as: "repo"
      });
    }
  };
  Event.init({
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    type: DataTypes.STRING,
    actor_id: DataTypes.INTEGER,
    repo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};