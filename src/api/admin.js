import axios from 'axios';
const baseURI = 'http://localhost:5000'

function searchBookAPI() {
    return axios.get(`${baseURI}/admin/search`)
}

function updateBookAPI(actionData) {
    console.log(actionData)
    return axios.post(`${baseURI}/admin/update`, { actionData })
}

function createBookAPI(actionData) {
    return axios.post(`${baseURI}/admin/create`, { actionData });
}

function deleteBookAPI() {
    return axios.delete(`${baseURI}/admin/delete`);
}
export { searchBookAPI, updateBookAPI, createBookAPI, deleteBookAPI }