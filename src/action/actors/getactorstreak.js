const responseBag = require("../../response");
const {
    _findAllByStreak
} = require("../../database/repsoitory/eventRepository");

const getActorStreak = async (req, res) => {
  try {
        const response = await _findAllByStreak()
      responseBag(res, true, 200, dataTransformer(response));
      
  } catch (e) {
    responseBag(res, false, 500, JSON.stringify(e.message ? e.message : e));
  }
};

const dataTransformer = (data) => {
    var response = [];
    data.forEach(datum => {
        let dat = {
            id: datum.actor.id,
            login:datum.actor.login,
            avatar_url:datum.actor.avatar_url
        }
        response.push(dat)
    })
    return response
}

module.exports = getActorStreak;
