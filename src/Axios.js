import axios from "axios";

let SERVER_URL = "http://localhost:3001/";
const authaxis = axios.create({
    baseURL: SERVER_URL,
})

export default authaxis;