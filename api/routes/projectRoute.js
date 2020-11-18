import express from 'express'
const router = express.Router()
import { getProjects } from '../controllers/project.js'


// GET ENDPOINT /api/v1/projects -> [1,2,3]
router.get('', getProjects)

export default router