import axios from 'axios';

export const getProjects = () => {
    return axios.get(`http://localhost:3001/api/v1/projects`)
}