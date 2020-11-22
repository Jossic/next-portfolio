import auth0 from '../../../utils/auth0';
import axios from 'axios';
import ProjectApi from '../../../lib/api/projects';

export default createProject = async (req, res) => {
    try {
        const { accessToken } = await auth0.getSession(req)
        console.log(accessToken);
        console.log(process.env.PORTFOLIO_API_URI);
        await new ProjectApi().createProject(req.body)
        // await axios.post(process.env.PORTFOLIO_API_URI + '/projects', req.body)
        return res.json({ message: 'Projet ajouté' })
    } catch (e) {
        return res.status(e.status || 400)
            .end(e.message)
    }
}