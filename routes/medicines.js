const express = require('express');
const router = express.Router();
const {getMedicines, addMedicine} = require('../controllers/medicines');

router.route('/').get(getMedicines).post(addMedicine);



module.exports = router;