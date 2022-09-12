
const express = require('express');
const router =express.Router();
const Watch = require('../model/Watch')
const test = require('../controllers/Test')

router.get('/', test.getAllWatchs);
router.post('/', test.addWatchs);
router.get('/:id', test.getAllwatchsbyId)



module.exports = router