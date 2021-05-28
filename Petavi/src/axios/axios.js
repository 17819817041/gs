import axios from "axios"

const service = axios.create({
    baseURL: "https://petavi.top/api"
    // baseURL: "http://192.168.10.10:9011/api"      // 内网
    // baseURL: "http://47.52.255.24:9011/api"    
})
service.interceptors.request.use(config => {
    // if (config.url.includes('/user/forgetPassword')) {
    config.headers.token = localStorage.getItem("Token")
    config.headers.userId = localStorage.getItem("userId"),
    config.headers.platform = localStorage.getItem("platform")
    // }
    return config
})

export default service