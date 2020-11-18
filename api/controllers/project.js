import Project from '../models/projectModel.js';

const getProjects = async (req, res) => {
    const projects = await Project.find({})
    return res.json(projects)
}

export { getProjects }