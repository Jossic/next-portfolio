import express from 'express'
const router = express.Router()
import { getPortfolio } from '../controllers/portfolio.js'


// GET ENDPOINT /api/v1/portfolio -> [1,2,3]
router.get('', getPortfolio)

export default router