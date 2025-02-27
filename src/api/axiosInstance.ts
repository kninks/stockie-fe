import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5173/api/",
    timeout: 10000, // Timeout after 10s
    headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default api;