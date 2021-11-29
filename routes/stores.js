const express = require('express');
const router = express.Router();
const {getStore} = require('../controllers/stores');

router.route('/').get(getStore);

module.exports = router;