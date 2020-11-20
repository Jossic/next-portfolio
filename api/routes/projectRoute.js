import express from 'express'
const router = express.Router()
import { getProjectById, getProjects, createProject } from '../controllers/projectController.js'


// GET ENDPOINT /api/v1/projects -> [1,2,3]
router.get('', getProjects)
router.get('/:id', getProjectById)

router.post('', createProject)

export default router