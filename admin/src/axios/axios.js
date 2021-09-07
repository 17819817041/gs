import axios from "axios"

const service = axios.create({
    // baseURL: "https://petavi.top/api"
    // baseURL: "/api"
    baseURL: 'http://192.168.9.27:9011/api'      // 内网             
})
service.interceptors.request.use(config => {
    if (!config.url.includes('/user/register')) {
        config.headers.token = localStorage.getItem("adminToken")
        config.headers.userId = localStorage.getItem("adminUserId")
    }
    config.headers.platform = localStorage.getItem("adminPlatform")
    return config
})

export default service