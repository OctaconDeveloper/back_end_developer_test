const validator = require("./validator");
const responseBag = require("../response");

const addEventValidation = (req, res, next) => {
    const validationRule = {
        id: "required|numeric",
        type: "required|string",
        actor: {
            id: "required|numeric",
            login: "required|string",
            avatar_url: "required|string",
        },
        repo: {
            id: "required|numeric",
            name: "required|string",
            url: "required|string",
        }
    }; 
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            responseBag(res, false, 422, err);
        } else {
            next();
        }
    }); 
};
 
// {
//     "id":4055191679,
//     "type":"PushEvent",
//     "actor":{
//       "id":2790311,
//       "login":"daniel33",
//       "avatar_url":"https://avatars.com/2790311"
//     },
//     "repo":{
//       "id":352806,
//       "name":"johnbolton/exercitationem",
//       "url":"https://github.com/johnbolton/exercitationem"
//     },
//     "created_at":"2015-10-03 06:13:31"
//   }

module.exports = {
    addEventValidation
}