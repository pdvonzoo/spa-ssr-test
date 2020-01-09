import axios from "axios";
const baseURI = "http://localhost:3000";
export const searchEngine = async data => {
  return await axios.post(`${baseURI}/search`, { data });
};
