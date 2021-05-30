const { EventActions } = require("../action")

/**
 * create new events
 * @param {*} req
 * @param {*} res
 */
const add = async (req, res) => {
    await EventActions.addEvent(req, res);
};

/**
 * get events
 * @param {*} req
 * @param {*} res
 */
const all = async (req, res) => {
    await EventActions.getEvents(req, res);
};


/**
 * get evets by actor's Id
 * @param {*} req
 * @param {*} res
 */
const single = async (req, res) => {
    await EventActions.getEventsByActor(req, res);
};




  module.exports = {
      add,
      all,
      single
  }