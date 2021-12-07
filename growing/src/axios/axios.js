import axios from "axios"
// window.baseURL = 'https://petavi.top/api'
// window.baseURL = '/api'
window.baseURL = 'http://192.168.9.27:9017'

const service = axios.create({
    baseURL: window.baseURL
})
service.interceptors.request.use(config => {
    if (!config.url.includes('register') && !config.url.includes('/shop/add')) { 
        config.headers.token = localStorage.getItem("compoundeyesToken")
        config.headers.userId = localStorage.getItem("compoundeyesUserId")
    }
    
    return config
})

export default service