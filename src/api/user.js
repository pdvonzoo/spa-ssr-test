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
    return axios.post(`${process.env.SERVER_URL}/rents`, {
        returnBook: true,
        bookId
    }, {
        headers: {
            "X-AUTH-TOKEN": jwt
        }
    });
}

const rentBookAPI = () => {
    return axios.post(`${process.env.SERVER_URL}/books/1186694009%209791186694008/rents`,
        { isbn: "1186694009 9791186694008" },
        {
            headers: {
                "X-AUTH-TOKEN": jwt
            }
        });
};

export { getMyBooksLookUpAPI, returnBookAPI, rentBookAPI }