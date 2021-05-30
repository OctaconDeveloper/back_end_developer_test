const responseBag = require("../../response");
const {
  _findOne: findActor,
  _create: newActor,
} = require("../../database/repsoitory/actorRepository");
const {
  _findOne: findRepo,
  _create: newRepo,
} = require("../../database/repsoitory/repoRepository");
const {
  _findOne: findEvent,
  _create: NewEvent,
} = require("../../database/repsoitory/eventRepository");

const addEvent = async (req, res) => {
  try {
    const {
      body: { id, type, actor, repo },
    } = req;
    const actor_id = await createActor(actor);
    const repo_id = await createRepo(repo);
    const event_exists = await findEvent({ id: id });
    if (event_exists) {
      responseBag(res, false, 400, "Event already captured");
    } else {
      const event = await NewEvent({
        id: id,
        type: type,
        actor_id: actor_id,
        repo_id: repo_id,
      });
      const response = await findEvent({ id: event.id });
      responseBag(res, true, 201, response);
    }
  } catch (e) {
    responseBag(res, false, 500, JSON.stringify(e.message ? e.message : e));
  }
};

const createActor = async (actor) => {
  var actor_exists = await findActor({ id: actor.id, login: actor.login });
  if (actor_exists) {
    return actor.id;
  } else {
    var new_actor = await newActor(actor);
    return new_actor.id;
  }
};

const createRepo = async (repo) => {
  var repo_exists = await findRepo({ id: repo.id, name: repo.name });
  if (repo_exists) {
    return repo.id;
  } else {
    var new_repo = await newRepo(repo);
    return new_repo.id;
  }
};

module.exports = addEvent;
