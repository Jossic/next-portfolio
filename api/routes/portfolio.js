const express = require('express');
const { getPortfolio } = require('../controllers/portfolio');
const router = express.Router()


// GET ENDPOINT /api/v1/portfolio -> [1,2,3]
router.get('', getPortfolio)

module.exports = router