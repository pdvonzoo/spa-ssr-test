import axios from 'axios';
import { jwt } from './utils';

const getMyBooksLookUpAPI = () => {
    return axios.get(`${process.env.SERVER_URL}/members/rents`, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

const returnBookAPI = (bookId) => {
    console.log("api", bookId);
    return axios.post(`${process.env.SERVER_URL}/rents/${bookId}`, {
        returnBook: true,
        bookId
    }, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    }).then(res => {
        return true;
    }).catch(err => {

    });
}

const rentBookAPI = (isbn) => {
    return axios.post(`${process.env.SERVER_URL}/books/${isbn}/rents`,
        { isbn },
        {
            headers: {
                "X-AUTH-TOKEN": jwt
            }
        });
};

export { getMyBooksLookUpAPI, returnBookAPI, rentBookAPI }