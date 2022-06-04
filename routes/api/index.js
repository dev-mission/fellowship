const express = require('express');

const router = express.Router();

router.use('/assets', require('./assets'));
router.use('/auth', require('./auth'));
router.use('/cohorts', require('./cohorts'));
router.use('/links', require('./links'));
router.use('/meetings', require('./meetings'));
router.use('/passwords', require('./passwords'));
router.use('/users', require('./users'));

module.exports = router;
