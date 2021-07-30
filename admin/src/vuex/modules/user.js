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
        doctorList: [],
        loading: false,
        loading6: false,
        vDetail: {},
        rate: 0,
        inp: '',
        totalRecordsCount: 0,
        default_img:''
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
        },
        pageAdd (state,data) {
            state.doctorList = state.doctorList.concat(data)
        },
        addFriend (state,data) {
            state[data.key].push(data.value)
        },
        addMsg (state,data) {
            state[data.key] = data.value.content
            state[data.key][data.value.user].msg++
        },
        deMsg (state,data) {
            state[data.key][data.value].msg = 0
        },
    },
    actions: {
        default (store,data) {
            store.commit("setUser",{ key: "default_img", value: data}) 
        },
        initRtc (store,data) {
            var rtc = (store.state.rtc)
            var option = {
                appID: data.appId,
                channel: data.channel,
                uid: data.uid,
                token: data.token,
                mode: "live",
                codec: "h264"
            }
            rtc.client.init(option.appID, function () {
                console.log("init success",option)
                    rtc.client.join(option.token ? option.token : null, option.channel, option.uid ? +option.uid : null, function (uid) {
                })
            }, (err) => {
                console.error(err)
            })
        },
        removeStream (store,data) {   //退出agora
            var rtc = store.state.rtc
            rtc.client.leave(function () {
                if(rtc.localStream.isPlaying()) {
                    rtc.localStream.stop()
                }
                rtc.localStream.close()
                rtc.localStream = null
                rtc.remoteStreams = []
            }, function (err) {
                console.log("channel leave failed")
                console.error(err)
            })
            // router.back()
        },
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
        getDoctorList (store,num) {
            const doctor = {
                platform: localStorage.getItem("adminPlatform"),
                userId: localStorage.getItem("adminUserId"),
                pageNum: num,
                pageSize:18
            }
            store.commit("setUser",{ key: "loading6", value: true })
            if ((store.state.totalRecordsCount == store.state.doctorList.length) &&store.state.totalRecordsCount !=0 ) {
                store.commit("setUser",{ key: "loading6", value: false })
            } else {
                doctorList(doctor).then(res => {
                    store.commit("setUser",{ key: "loading6", value: false })
                    if (res.data.rtnCode == 200) {
                        store.commit("setUser",{ key: "totalRecordsCount", value: res.data.data.totalRecordsCount })
                        store.commit("pageAdd", res.data.data.pageT )
                        if (doctor.pageNum <= 1) {
                            store.commit("setUser",{
                                key: "mask",
                                value: res.data.data.pageT[0]
                            })
                            store.commit("setUser", { key: 'vDetail', value: res.data.data.pageT[0] } )
                            store.commit("setUser", { key: 'rate', value: res.data.data.pageT[0].baseScore } )
                        }
                        // if ((store.state.totalRecordsCount == store.state.doctorList.length) &&store.state.totalRecordsCount !=0 ) {
                        //     store.commit("setUser",{ key: "loading6", value: false })
                        // }
                    } else {
                        store.commit("setUser",{ key: "loading6", value: false })
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "loading6", value: false })
                    store.commit("setUser",{ key: "doctorList", value: [] })
                    
                })
            }
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