import Experience from '../models/experienceModel.js';

// @desc      Get All Experiences
// @route     GET /api/v1/experiences
// @access    Public
const getExperiences = async (req, res) => {
    const experiences = await Experience.find({})
    return res.json(experiences)
}

// @desc      Get an Experience by Id
// @route     GET /api/v1/experiences/:id
// @access    Public
const getExperienceById = async (req, res) => {
    const experience = await Experience.findById(req.params.id)

    if (experience) {
        res.json(experience)
    } else {
        res.status(404)
        throw new Error('Experience non trouvée')
    }
}


export { getExperiences, getExperienceById }