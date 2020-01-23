import axios from 'axios';
import { dataLimitLength } from '../modules/books';

function searchBooksAPI(data, limit = dataLimitLength) {
    return axios.get(`${process.env.SERVER_URL}/books?query=${data.search}&page=${data.offset}&size=${limit}`)
}

function getCommendedAPI() {
    console.log(process.env)
    return axios.get(`${process.env.SERVER_URL}/recommend`);
}

function getBookDetail(isbn) {
    return axios.get(`${process.env.SERVER_URL}/books/${isbn}`)
}

function getBookKeyWord(search) {
    return axios.get(`${process.env.SERVER_URL}/books/titles`);
}

export { searchBooksAPI, getCommendedAPI, getBookDetail, getBookKeyWord }
