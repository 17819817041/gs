import { allPet, getAdminDetails, vetDetails, doctorList, login, bookingUserId } from "@/axios/request.js"
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
        message: {},
        petList: [],
        loading: true
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
        getPetList (store,data) {
            var data1 = {
                userId: data.userId,
                pageNum: data.pageNum,
                pageSize: data.pageSize
            }
            allPet(data1).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    store.state.petList = res.data.data.pageT
                    store.state.loading = false
                }
            }).catch(e => {
                store.state.loading = false
                data.vm.$message({
                    type: "error",
                    message: "Fail load!"
                })
            })
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
        logout (store,vm) {
            vm.$confirm('Are you sure to log out?', 'Attention', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                localStorage.removeItem("IMtoken")
                localStorage.removeItem("adminUserId")
                localStorage.removeItem("adminPaltform")
                localStorage.removeItem("adminToken")
                vm.$router.replace("/index")
                store.commit("setUser", {
                    key: "login",
                    value: false
                })
                store.commit("setUser", {
                    key: "IMuser",
                    value: {}
                })
                conn.close()
            }).catch (e => {
                console.log(e)
            })
        },
    }
        
}