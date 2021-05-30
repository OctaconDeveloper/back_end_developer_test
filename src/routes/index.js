const { Router } = require('express');
const router = Router();


const events = require('./events');
const actors = require('./actors');
const erase = require('./erase');

router.use('/events', events)
router.use('/actors', actors)
router.use('/erase', erase)

router.get('/me', (req, res) => {
    res.json({"hello":world})
})



module.exports = router;  

