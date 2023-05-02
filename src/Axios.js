import axios from "axios";

let SERVER_URL = "https://mythu-diet-app.onrender.com";
const authaxis = axios.create({
    baseURL: SERVER_URL,
})

export default authaxis;