const {
    _deleteAll: eraseAll,
  } = require("../../database/repsoitory/eventRepository");
  const responseBag = require("../../response");
  
  const eraseEvents = async (req, res) => {
    try {
        await eraseAll();
      responseBag(res, true, 200, "Events erased");
    } catch (e) {
      responseBag(res, false, 500, JSON.stringify(e.message ? e.message : e));
    }
  };
  
  module.exports = eraseEvents;
  