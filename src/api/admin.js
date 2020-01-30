import axios from 'axios';
import { jwt } from './utils';
import { dataLimitLength } from '../modules/books';
function searchUserInfoAPI(email) {
    return axios.get(`${process.env.SERVER_URL}/rents?email=${email}`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    })
}

function createBookAPI(bookName) {
    return axios.post(`${process.env.SERVER_URL}/books`, bookName, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function searchExternalBooksAPI(data, limit = dataLimitLength) {
    console.log('data 는 ', data)
    return axios.get(`${process.env.SERVER_URL}/naverbooks?searchValue=${data.search}&page=${data.offset}&size=${limit}`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}


function searchInHouseBooksAPI(data, limit = dataLimitLength) {
    console.log(data)
    return axios.get(`${process.env.SERVER_URL}/books/collections?query=${data.search}&page=${data.offset}&size=${limit}`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function deleteHavingBook(id) {
    return axios.delete(`${process.env.SERVER_URL}/books/${id}?bookDeleted=true`, {}, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function testAPI(actionData) {
    return axios.get('http://localhost:5000/movie')
}


export { searchUserInfoAPI, searchExternalBooksAPI, searchInHouseBooksAPI, createBookAPI, deleteHavingBook, testAPI }