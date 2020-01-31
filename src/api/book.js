import axios from 'axios';
import { dataLimitLength } from '../modules/books';

function searchBooksAPI(data, limit = dataLimitLength) {
    return axios.get(`${process.env.SERVER_URL}/books?query=${data.search}&page=${data.offset}&size=${limit}`)
}

function getCommendedAPI() {
    return axios.get(`${process.env.SERVER_URL}/recommend`);
}

function getBookDetail(isbn) {
    return axios.get(`${process.env.SERVER_URL}/bookDetails/${isbn}`)
}

function getBookKeyWord(search) {
    return axios.get(`${process.env.SERVER_URL}/books/titles`);
}

function getAutoComplete(search) {
    return axios.get(`${process.env.SERVER_URL}/books/titles?query=${search}`).then(res => res).catch(e => e);
}

export { searchBooksAPI, getCommendedAPI, getBookDetail, getBookKeyWord, getAutoComplete }
