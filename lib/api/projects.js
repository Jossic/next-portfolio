import axios from 'axios';

class ProjectApi {

    constructor() {
        this.apiUrl = process.env.PORTFOLIO_API_URI + '/projects'
    }

    getAll() {
        return axios.get(this.apiUrl)
    }

    getById(id) {
        return axios.get(`${this.apiUrl}/${id}`)
    }
}

export default ProjectApi;