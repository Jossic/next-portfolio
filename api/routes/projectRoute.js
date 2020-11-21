import express from 'express'
const router = express.Router()
import { checkJwt } from '../controllers/auth.js'
import { getProjectById, getProjects, createProject } from '../controllers/projectController.js'


// GET ENDPOINT /api/v1/projects -> [1,2,3]
router.get('', (req, res, next) => {
    if (err) {
        res.status(422).send('Erreur')
    }
    next()
}, getProjects)
router.get('/:id', getProjectById)

router.post('', checkJwt, createProject)

export default router