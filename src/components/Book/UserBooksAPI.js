import axios from "axios";

export const getUserHistoryBooks = async () => {
  return axios.get("http://localhost:3000");
};
