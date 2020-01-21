import axios from 'axios';
const baseURI = "http://10.102.61.102:8080"
import { dataLimitLength } from '../modules/books';

function searchBooksAPI(data, limit = dataLimitLength) {
    console.log(data)
    return axios.get(`${baseURI}/books?query=${data.search}&page=${data.offset}&size=${limit}`)
}

function getCommendedAPI() {
    return axios.get(`${baseURI}/recommend`);
}

function getBookDetail(isbn) {
    return axios.get(`${baseURI}/books/${isbn}`)
}

function getBookKeyWord(search) {
    return axios.get(`${baseURI}/books/titles`);
}

export { searchBooksAPI, getCommendedAPI, getBookDetail, getBookKeyWord }
