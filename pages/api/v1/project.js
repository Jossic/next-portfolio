import axios from 'axios';
import ProjectApi from '../../../lib/api/projects';
// import ProjectApi from '../lib/api/projects';

export default createProject = async (req, res) => {
    try {
        const data = req.body
        // await new ProjectApi().createProject(data)
        await axios.post(process.env.PORTFOLIO_API_URI + '/projects', data)
        return res.json({ message: 'Projet ajouté' })
    } catch (e) {
        return res.status(e.status || 400)
            .end(e.message)
    }
}