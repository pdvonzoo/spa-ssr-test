import axios from 'axios';
import { jwt } from './utils';
const baseURI = 'http://10.102.61.102:8080';

function searchUserInfoAPI(email) {
    return axios.get(`${baseURI}/rents?email=${email}`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    })
}

function createBookAPI(bookName) {
    return axios.post(`${baseURI}/books`, bookName, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function searchExternalBooksAPI(search) {
    console.log(search);
    return axios.get(`${baseURI}/naverbooks?searchValue=${search}&page=1&size=10`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function searchInHouseBooksAPI(search) {
    console.log(`searchHavingBooksAPI ${search}검색`)
    return axios.get(`${baseURI}/books/collections?query=${search}&size=${10}`, search, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function deleteHavingBook(id) {
    return axios.delete(`${baseURI}/books/${id}?bookDeleted=true`, {}, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function testAPI(actionData) {
    return axios.get('http://localhost:5000/movie')
}


export { searchUserInfoAPI, searchExternalBooksAPI, searchInHouseBooksAPI, createBookAPI, deleteHavingBook, testAPI }