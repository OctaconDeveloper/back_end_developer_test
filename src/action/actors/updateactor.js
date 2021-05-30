const responseBag = require("../../response");
const {
  _findOne: getActor,
  _update: update,
} = require("../../database/repsoitory/actorRepository");

const updateActor = async (req, res) => {
  try {
    const {
      body: { id, login, avatar_url },
    } = req;

    const actor_exists = await findActor(id);
    if (!actor_exists) {
      responseBag(res, false, 404, "No record found");
    } else {
      const update_actor = await update({ avatar_url }, { id });
      if (update_actor) {
        responseBag(res, true, 200, "Actor updated");
      } else {
        responseBag(res, false, 400, "Error upating actor");
      }
    }
  } catch (e) {
    responseBag(res, false, 500, JSON.stringify(e.message ? e.message : e));
  }
};

const findActor = async (actorID) => {
  return await getActor({ id: actorID });
};

module.exports = updateActor;
