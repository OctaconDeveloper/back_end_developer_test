const { EraseActions } = require("../action")

/**
 * get all actors
 * @param {*} req
 * @param {*} res
 */
const erase = async (req, res) => {
    await EraseActions.eraseEvents(req, res);
};

module.exports = {
    erase
}