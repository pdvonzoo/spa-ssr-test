import axios from 'axios';
const baseURI = "http://localhost:5000"
function getMyBooksLookUpAPI() {
    return axios.get(`${baseURI}/historylookup`);
}
export { getMyBooksLookUpAPI }