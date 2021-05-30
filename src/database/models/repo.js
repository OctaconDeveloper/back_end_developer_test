'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Repo.hasMany(models.Event, {
        foreignKey: 'repo_id',
        as: "repo"
      });
    }
  };
  Repo.init({
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Repo',
  });
  return Repo;
};