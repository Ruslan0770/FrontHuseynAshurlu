
const express = require('express');
const router =express.Router();
const Watch = require('../model/Watch')
const watchsController= require('../controllers/watchs.controller')

router.get('/', watchsController.getAllWatchs);
router.post('/', watchsController.addWatchs);
router.get('/:id', watchsController.getAllwatchsbyId);
router.put('/:id',watchsController.getUpdate);
router.delete('/:id',watchsController.DeleteWatchs);



module.exports = router