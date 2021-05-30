const responseBag = require("../../response");
const {
  _findOne: getActor,
} = require("../../database/repsoitory/actorRepository");
const {
  _findAll: getAll,
} = require("../../database/repsoitory/eventRepository");

const getEventsByActor = async (req, res) => {
  try {
    const {
      params: { actorID },
    } = req;

    const query = { actor_id: actorID };
    const actor_exists = await findActor(actorID);
    if (!actor_exists) {
      responseBag(res, false, 404, "No record found");
    } else {
      const response = await getAll(query);
      responseBag(res, true, 200, response);
    }
  } catch (e) {
    responseBag(res, false, 500, JSON.stringify(e.message ? e.message : e));
  }
};
const findActor = async (actorID) => {
  return await getActor({ id: actorID });
};

module.exports = getEventsByActor;
