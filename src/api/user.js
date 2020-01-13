import axios from 'axios';


const baseURI = "http://localhost:5000"
export const readAll = () => {
    return axios.get(`${baseURI}`, { data });
}

export const read = () => {
    return axios.get(`${baseURI}`, { data });
}

export const create = () => {
    return axios.post(`${baseURI}`, { data });
}

export const destroy = () => {
    return axios.delete(`${baseURI}`, { data });
}

export const update = () => {
    return axios.put(`${baseURI}`, { data });
}
