const { Router } = require('express');
const { EventContoller } = require('../controller');
const { EventValidator } = require('../validator');
const router = Router();

router.post('/', EventValidator.addEventValidation, EventContoller.add) //Add Events
router.get('/', EventContoller.all) //get events
router.get('/actors/:actorID', EventContoller.single) //get events by actors

 

module.exports = router;  