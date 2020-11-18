import Project from '../models/projectModel.js';


// @desc      Get All Projects
// @route     GET /api/v1/projects
// @access    Public
const getProjects = async (req, res) => {
    const projects = await Project.find({})
    return res.json(projects)
}



export { getProjects }