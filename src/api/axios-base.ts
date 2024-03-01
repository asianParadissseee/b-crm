import axios from "axios";

export const $api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        authorization: localStorage.getItem("")
    }
})

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem("") || '';
    }
    return config;
})