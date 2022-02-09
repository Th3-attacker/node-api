const express = require('express');
const router = express.Router();
const PharmaController = require('../Controllers/pharmaController');

router.get('/',PharmaController.getAllPharmas);
router.post('/',PharmaController.addPharma);

module.exports = router