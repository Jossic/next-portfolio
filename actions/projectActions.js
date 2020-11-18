import axios from 'axios';

export const getProjects = () => {
    return axios.get(`/api/v1/projects`)
}