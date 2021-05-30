const {
    _findAll: getAll,
  } = require("../../database/repsoitory/actorRepository");
  const responseBag = require("../../response");
  
  const getActors = async (req, res) => {
    try {
      const response = await getAll();
      responseBag(res, true, 200, response);
    } catch (e) {
      responseBag(res, false, 500, JSON.stringify(e.message ? e.message : e));
    }
  };
  
  module.exports = getActors;
  