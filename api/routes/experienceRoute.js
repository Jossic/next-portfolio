import express from 'express'
const router = express.Router()
import { getExperiences, getExperienceById } from '../controllers/experienceController.js'



router.get('', getExperiences)
router.get('/:id', getExperienceById)

export default router