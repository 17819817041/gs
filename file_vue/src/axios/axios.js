import axios from "axios"
// window.baseURL = 'https://petavi.top/api'
window.baseURL = '/api'
// window.baseURL = 'http://192.168.9.27:9011/api'

const service = axios.create({
    baseURL: window.baseURL
})
service.interceptors.request.use(config => {
    if (!config.url.includes('register')) { 
        // config.headers.token = localStorage.getItem("Token")
        // config.headers.userId = localStorage.getItem("userId")
    }
    
    return config
})

export default service