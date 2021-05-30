const { Router } = require('express');
const { ActorContoller } = require('../controller');
const { ActorValidator } = require('../validator');
const router = Router();

router.get('/', ActorContoller.all) //get all actors
router.put('/', ActorValidator.updateActorValidation, ActorContoller.update) //Update actors
router.get('/streak', ActorContoller.streak) //get actors by streak

 

module.exports = router;  