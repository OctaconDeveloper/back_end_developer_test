var Model = require("../models");
const { Op, Sequelize } = require("sequelize");

const _create = (values) => {
  return Model.Event.create({ ...values }).then((data) => {
    return data;
  });
};

const _findOne = (values) => {
  return Model.Event.findOne({
    where: { ...values },
    attributes: {
      exclude: ["actor_id", "repo_id", "updatedAt"],
    },
    include: [
      {
        association: "actor",
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      },
      {
        association: "repo",
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      },
    ],
  }).then((data) => {
    return data;
  });
};

const _findAll = (values) => {
  return Model.Event.findAll({
    where: { ...values },
    attributes: {
      exclude: ["actor_id", "repo_id", "updatedAt"],
    },
    order: [["id", "ASC"]],
    include: [
      {
        association: "actor",
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      },
      {
        association: "repo",
        attributes: {
          exclude: ["updatedAt", "createdAt"],
        },
      },
    ],
  }).then((data) => {
    return data;
  });
};

const _update = (values, condition) => {
  return Model.Event.update({ ...values }, { where: { ...condition } }).then(
    (data) => {
      return data;
    }
  );
};

const _findAllByStreak = () => {
    return Model.Event.findAll({
        attributes: [
            [Sequelize.fn('count', Sequelize.col('actor_id')), 'count']
        ],
        order: Sequelize.literal('count DESC'),
        include: [
            {
              association: "actor",
              as: "actor",
              attributes: {
                exclude: ["updatedAt", "createdAt",],
              },
            },
        ],
        group : ['actor.id'],
    }).then((data) => {
      return data;
    });
  };

const _deleteAll = () => {
    return Model.Event.destroy({
      where: {},
      truncate: true
    }).then((data) => {
      return data;
    });
  }

  const _bulkcreate = (value) => {
    return Model.Event.bulkCreate(value,{
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
  _findAllByStreak,
  _deleteAll,
  _bulkcreate
};
