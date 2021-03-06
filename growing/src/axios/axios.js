import axios from "axios"
// window.baseURL = '/api'
// window.baseURL = 'http://192.168.9.27:9017'
window.baseURL = 'https://compoundeyes.hk'  
// window.baseURL = 'http://47.115.1.125:9017'  
 
const service = axios.create({
    baseURL: window.baseURL
})
service.interceptors.request.use(config => {
    if (!config.url.includes('register') && !config.url.includes('/shop/add') && !config.url.includes('baidu') && !config.url.includes('restapi.amap')) { 
        config.headers.token = localStorage.getItem("compoundeyesToken")
        config.headers.userId = localStorage.getItem("compoundeyesUserId")
    }
    
    return config
})

export default service