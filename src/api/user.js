import axios from 'axios';
const baseURI = "http://10.102.61.102:8080"
function getMyBooksLookUpAPI() {
    const jwt = JSON.parse(localStorage.getItem("jwt")).token;
    return axios.get(`${baseURI}/members/rents`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

const returnBookAPI = (bookId) => {
    const jwt = JSON.parse(localStorage.getItem("jwt")).token;
    return axios.post(`${baseURI}/rents`, {
        returnBook: true,
        bookId
    }, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}


const rentBookAPI = () => {
    const jwt = JSON.parse(localStorage.getItem("jwt")).token;
    console.log(jwt);
    return axios.post(`${baseURI}/books/1186694009%209791186694008/rents`,
        { isbn: "1186694009 9791186694008" },
        {
            headers: {
                "X-AUTH-TOKEN": jwt
            }
        });
};

export { getMyBooksLookUpAPI, returnBookAPI, rentBookAPI }