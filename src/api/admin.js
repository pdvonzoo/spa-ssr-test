import axios from 'axios';
import { jwt } from './utils';

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

function searchExternalBooksAPI(search) {
    console.log(search);
    return axios.get(`${process.env.SERVER_URL}/naverbooks?searchValue=${search}&page=1&size=10`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function searchInHouseBooksAPI(search) {
    console.log(`searchHavingBooksAPI ${search}검색`)
    return axios.get(`${process.env.SERVER_URL}/books/collections?query=${search}&size=10`, search, {
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