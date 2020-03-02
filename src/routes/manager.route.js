const express = require('express');
const router = express.Router();
const manager = require('../controllers/manager.controller');
const verifyToken = require('../helpers/verifyToken');
//create  a new manager
router.post('/managers', manager.create);
router.get('/managers', manager.findAll);
router.get('/managers/:id', manager.findOne);
router.post('/managers/:id', manager.updateOne);
// router.put('/managers/:id', manager.updateOne);
router.delete('/managers/:id', manager.deleteOne);

module.exports = router;