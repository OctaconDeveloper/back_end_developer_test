
const responseBag = require("../response");
const validator = require("./validator");

const updateActorValidation = (req, res, next) => {
    const validationRule = {
        id: "required|numeric",
        login: "required|string",
        avatar_url: "required|string",
    }; 
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            responseBag(res, false, 422, err)
        } else {
            next();
        }
    }); 
};

module.exports = {
    updateActorValidation
}