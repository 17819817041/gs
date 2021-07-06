import { petList, getAdminDetails, vetDetails, doctorList, login, bookingUserId } from "@/axios/request.js"
import router from "@/router/router.js"
import {conn, WebIM, rtcCall} from "@/assets/js/websdk.js"
export default {
    state: {
        login: false,
        IMuser: {},
        userDetail: {},
        messageList: [],
        fromIM: '',
        agoraPet: {},
        message: {}
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
        },
        addFriend (state,data) {
            state[data.key].push(data.value)
        }
    },
    actions: {
        getUser (store,vm) {
            var data = {
                userId: localStorage.getItem("adminUserId")
            }
            getAdminDetails(data).then(res => {
                if (res.data.rtnCode == 200) {
                    console.log(res,"user详情")
                    store.commit("setUser",{ key: "userDetail", value: res.data.data }) 
                    store.dispatch("IMLogin")
                    store.commit("setUser",{ key: "login", value: true })
                } else if (res.data.rtnCode == 500) {
                    store.commit("setUser",{ key: "login", value: true })
                    localStorage.removeItem("adminToken")
                    localStorage.removeItem("adminUserId")
                    localStorage.removeItem("adminPaltform")
                    localStorage.removeItem("IMtoken")
                    localStorage.removeItem('IM')
                    if (vm.$route.name !== 'index') {
                        router.replace('/index')
                        vm.$message.error('Login expired, please log in again !');
                    }
                    store.commit("setUser",{ key: "login", value: false })
                    store.commit("setUser",{ key: "userDetail", value: {} }) 
                }
            }).catch(e => {
                console.log(e)
                // store.commit("setUser",{ key: "login", value: false }) 
            })
        },
        IMLogin (store) {
            // console.log('IM登录成功')
            var options = { 
                // user: localStorage.getItem("adminAserId") + 'A' + localStorage.getItem("adminPlatform"),
                user: 'admin',
                pwd: 123,
                appKey: WebIM.config.appkey,
                success (res) {
                    console.log(res,'IM登录成功')
                    store.commit("setUser", { key: 'IMuser', value: res.user })
                    localStorage.setItem("IMtoken",res.access_token)
                    var eMedia = require("@/assets/js/emedia.js").emedia
                    window.eMedia = eMedia
                },
                fail (e) {
                    console.log(e,'e')
                }
            };
            conn.open(options);
        },
        getDoctorList (store,vm) {
            const doctor = {
                platform: localStorage.getItem("adminPlatform"),
                userId: localStorage.getItem("adminUserId"),
                pageNum:1,
                pageSize: 30
            }
            doctorList(doctor).then(res => {
                if (res.data.rtnCode == 200) {
                    console.log(res,"医生列表")
                    store.commit("setUser",{ key: "doctorList", value: res.data.data.pageT })
                    store.commit("setUser",{ key: "searchList", value: store.state.doctorList })
                    store.commit("setUser",{ key: "loading", value: false })
                } else if (res.data.rtnCode == 500) {
                    // localStorage.removeItem("Token")
                    // localStorage.removeItem("userId")
                    // localStorage.removeItem("paltform")
                    // localStorage.removeItem("IMtoken")
                    // localStorage.removeItem('IM')
                }
            }).catch(e => {
                console.log(e)
                store.commit("setUser",{ key: "loading", value: false })
                store.commit("setUser",{ key: "doctorList", value: [] })
                vm.$message.error('Fail to load !');
            })
        },
    }
        
}