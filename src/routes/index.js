const express = require('express');
const router = express.Router();
const managerRouter = require('./manager.route');
const authRouter = require('./auth.route');

router.use(managerRouter);
router.use(authRouter);

module.exports = router;