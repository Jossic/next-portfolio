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

// @desc      Create Project
// @route     POST /api/v1/projects
// @access    Private
const createProject = async (req, res) => {
    const { projectData } = req.body
    const userId = 'google-oauth2|103515021470057858971'
    const project = new Project(projectData)
    project.userId = userId



    try {
        const newProject = await project.save()
        return res.json(newProject)
    } catch (e) {
        return res.status(422).send(e.message)
    }
}



export { getProjects, getProjectById, createProject }