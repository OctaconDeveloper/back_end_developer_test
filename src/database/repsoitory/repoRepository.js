var Model = require("../models");
const { Op, Sequelize } = require("sequelize");

const _create = (values) => {
  return Model.Repo.create({ ...values }).then((data) => {
    return data;
  });
};

const _findOne = (values) => {
  return Model.Repo.findOne({
    where: { ...values },
    attributes: {
      exclude: ["updatedAt"],
    },
  }).then((data) => {
    return data;
  });
};

const _findAll = (values) => {
  return Model.Repo.findAll({
    where: { ...values },
    attributes: {
      exclude: ["updatedAt"],
    },
  }).then((data) => {
    return data;
  });
};

  const _update = (values, condition) => {
    return Model.Repo.update({ ...values }, { where: { ...condition } }).then(
      (data) => {
        return data;
      }
    );
  };


  const _deleteAll = () => {
    return Model.Repo.destroy({
      where: {},
      truncate: true
    }).then((data) => {
      return data;
    });
  }

  const _bulkcreate = (value) => {
    return Model.Repo.bulkCreate(value,{
     returning :true
    }).then((data) => {
      return data;
    });
  }

module.exports = {
  _create,
  _findOne,
  _findAll,
  _update,
  _deleteAll,
  _bulkcreate
};
 