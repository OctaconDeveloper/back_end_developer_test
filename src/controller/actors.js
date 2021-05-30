const { ActorActions } = require("../action")

/**
 * get all actors
 * @param {*} req
 * @param {*} res
 */
const all = async (req, res) => {
    await ActorActions.getActors(req, res);
};

/**
 * update actor
 * @param {*} req
 * @param {*} res
 */
const update = async (req, res) => {
    await ActorActions.updateActor(req, res);
};


/**
 * get actors streak
 * @param {*} req
 * @param {*} res
 */
const streak = async (req, res) => {
    await ActorActions.getActorStreak(req, res);
};




  module.exports = {
    all,
    update,
    streak
  }