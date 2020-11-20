import axios from 'axios';

export default createProject = async (req, res) => {
    try {
        const data = req.body
        await axios.post(process.env.PORTFOLIO_API_URI + '/projects', data)
        return res.json({ message: 'Projet ajouté' })
    } catch (e) {
        return res.status(e.status || 400)
            .end(e.message)
    }
}