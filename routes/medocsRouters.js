const express = require('express');
const router = express.Router();

const MedocsController= require('../Controllers/medocsController');

router.get('/',MedocsController.getAllMedocs)

module.exports = router