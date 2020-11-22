import axios from 'axios';


export const createProject = (data) => {
    return axios.post(`${process.env.PORTFOLIO_API_URI}/projects`, data)
}