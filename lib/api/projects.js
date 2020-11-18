import axios from 'axios';

class ProjectApi {

    getAll() {
        return axios.get('http://localhost:3001/api/v1/projects')
    }
}

export default ProjectApi;