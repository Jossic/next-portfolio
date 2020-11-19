import express from 'express'
const router = express.Router()
import { getProjectById, getProjects } from '../controllers/projectController.js'


// GET ENDPOINT /api/v1/projects -> [1,2,3]
router.get('', getProjects)
router.get('/:id', getProjectById)

export default router