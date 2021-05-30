const {
  _findAll: getAll,
} = require("../../database/repsoitory/eventRepository");
const responseBag = require("../../response");

const getEvents = async (req, res) => {
  try {
    const response = await getAll();
    responseBag(res, true, 200, response);
  } catch (e) {
    responseBag(res, false, 500, JSON.stringify(e.message ? e.message : e));
  }
};

module.exports = getEvents;
