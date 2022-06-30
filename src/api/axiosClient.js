import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "https://60f7847f9cdca00017454e8e.mockapi.io",
    headers: {
        "Content-Type": "application/json"
    }
})

export default axiosClient