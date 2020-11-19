import Project from '../models/projectModel.js';


// @desc      Get All Projects
// @route     GET /api/v1/projects
// @access    Public
const getProjects = async (req, res) => {
    const projects = await Project.find({})
    return res.json(projects)
}

// @desc      Get project by Id
// @route     GET /api/v1/project/:id
// @access    Public
const getProjectById = async (req, res) => {
    const project = await Project.findById(req.params.id)

    if (project) {
        res.json(project)
    } else {
        res.status(404)
        throw new Error('Projet non trouvée')
    }
}



export { getProjects, getProjectById }