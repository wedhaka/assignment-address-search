import axios from "axios";

/*
 * Creating instance for Axios. 
 * Common settings define here
 * User access Token and User refresh Token defined
 */
const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;