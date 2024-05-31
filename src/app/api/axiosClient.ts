import axios from "axios";

const BASE_URL = "https://content-youtube.googleapis.com/youtube/v3/";
export const axiosClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});