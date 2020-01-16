import axios from "axios";

export const rentOneBook = () => {
  const jwt = JSON.parse(localStorage.getItem("jwt")).token;
  console.log(jwt);
  return axios.post("http://10.102.61.102:8080/books/1186694009%209791186694008/rents",
    { isbn: "1186694009 9791186694008" },
    {
      headers: {
        "X-AUTH-TOKEN": jwt
      }
    });
};
