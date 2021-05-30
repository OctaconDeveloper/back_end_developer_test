const { Router } = require('express');
const { EraseContoller } = require('../controller');
const router = Router();

router.delete('/',  EraseContoller.erase) //Erase events

module.exports = router;  