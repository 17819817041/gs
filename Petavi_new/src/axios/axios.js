import axios from "axios"
// window.baseURL = 'https://petavi.top/api'
window.baseURL = '/api'
// window.baseURL = 'http://192.168.10.10:9011/api'
// window.baseURL = 'http://47.52.255.24:9011/api'

const service = axios.create({
    baseURL: window.baseURL
})
service.interceptors.request.use(config => {
    if (!config.url.includes('register') && !config.url.includes('googleLogin') && !config.url.includes('fetch_rtc_token')) { 
        config.headers.token = localStorage.getItem("Token")
        config.headers.userId = localStorage.getItem("userId")
    }
    if (!config.url.includes('fetch_rtc_token')) {
        config.headers.platform = localStorage.getItem("platform")
    }
    
    return config
})

export default service