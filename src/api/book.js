import axios from 'axios';
const baseURI = "http://localhost:5000"
import { dataLimitLength } from '../modules/books';

function searchBooksAPI(data, limit = dataLimitLength) {
    console.log('searchBooksAPI 의 data', data)
    return axios.get(`${baseURI}/post?search=${data.search}&offset=${data.offset}&limit=${limit}`)
}

function getCommendedAPI() {
    return axios.get(`${baseURI}/getCommendedBooks`);
}

export { searchBooksAPI, getCommendedAPI }