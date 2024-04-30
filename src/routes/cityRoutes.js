const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');

router.post('/', cityController.createCity);
router.get('/', cityController.listCities);
router.get('/:id', cityController.getCityById);

module.exports = router;
