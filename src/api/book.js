import axios from 'axios';
// const baseURI = "http://10.102.61.102:8080"
const baseURI = 'http://localhost:5000'
import { dataLimitLength } from '../modules/books';

function searchBooksAPI(data, limit = dataLimitLength) {
    // console.log('searchBooksAPI 의 data', data, data.offset / limit)
    return axios.get(`${baseURI}/books?query=${data.search}&page=${data.offset / limit}&size=${limit}`)
}

function getCommendedAPI() {
    return axios.get(`${baseURI}/books/recommend`);
}


function getBookDetail(isbn) { //책 상세 페이지 요청
    return axios.get(`${baseURI}/getBookDetail/${isbn}`)
}
export { searchBooksAPI, getCommendedAPI, getBookDetail }