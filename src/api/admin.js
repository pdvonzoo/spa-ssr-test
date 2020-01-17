import axios from 'axios';
const baseURI = 'http://10.102.61.102:8080'

function searchBookAPI(email) {
    const jwt = JSON.parse(localStorage.getItem("jwt")).token;
    return axios.get(`${baseURI}/rents?email=${email}`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    })
}

function createBookAPI(naverBook) {
    const jwt = JSON.parse(localStorage.getItem("jwt")).token;
    return axios.post(`${baseURI}/books`, naverBook, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function searchNaverBooksAPI(search) {
    console.log(search);
    const jwt = JSON.parse(localStorage.getItem("jwt")).token;
    return axios.get(`${baseURI}/naverbooks?searchValue=${search}&page=1&size=10`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function searchHavingBooksAPI(search) {
    console.log(`searchHavingBooksAPI ${search}검색`)
    const jwt = JSON.parse(localStorage.getItem("jwt")).token;
    return axios.get(`${baseURI}/books/collections?query=${search}&size=${10}`, search, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

function deleteHavingBook(id) {
    const jwt = JSON.parse(localStorage.getItem("jwt")).token;
    return axios.delete(`${baseURI}/books/${id}?bookDeleted=true`, {}, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}
export { searchBookAPI, createBookAPI, searchNaverBooksAPI, searchHavingBooksAPI, deleteHavingBook }