import { petList, getUserDetails, vetDetails, doctorList, bookingUserId, notice, onlineState, balance } from "@/axios/request.js"
import router from "@/router/router/router.js"
import {conn, WebIM, rtcCall} from "@/assets/js/websdk.js"
import Vue from "vue"
export default {
    state: {
        rtc: {
            client: null,
            joined: false,
            published: false,
            localStream: null,
            remoteStreams: [],
            params: {}
        },
        IMuser: {},
        login: false,
        petList:[],
        pet: {},
        petId: null,
        doctorList: [],
        loading: false,
        loading6: false,
        vloading: true,
        n_loading: false,
        callModal: false,
        callModal2: false,
        callTo: {},
        caller: {},
        userDetail: {},
        mask: {},
        headImg: {},
        rotate: false,
        vDetail: {},
        rate: 0,
        dom: '',
        sureCall: true,
        nameList: true,
        petType: [],
        firstPet: 0,
        inp: '',
        getDoctorMedicalLimitList: [],
        scrollTop: false,
        userBooking: [],
        callLoading: false,    //等待接听
        // joinParams: {},
        callerIM: '',
        mettingId: 0,
        messageList: [],
        totalRecordsCount: 0,
        totalRecordsCount1: 0,
        noticeState: false,
        showback: false,
        noticeList: [],
        balance: {},
        default_img:'',
        adminList: {
            'admin': {
                messageList: [
                    // { type: 1, value: "star",userId: '486' },
                    // { type: 2, value: "12123" },
                ]
            },
        },
        message: {},
        chatList: [],
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
        },
        pageAdd (state,data) {
            state.doctorList = state.doctorList.concat(data)
        },
        pageAdd_n (state,data) {
            state.noticeList = state.noticeList.concat(data)
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
            // rtc.client = data.rtc.createClient({mode: option.mode, codec: option.codec})
            // store.commit('setUser', { key: 'rtc', value: rtc })
            rtc.client.init(option.appID, function () {
                console.log("init success",option)
                
                // data.rtc.getDevices(function (items) {
                //     var devCount = items.length
                //     var id = items[0].deviceId
                //     console.log(items,devCount,id,666666666)
                // },function (err) {
                //     console.log(err,'err')
                // })

                rtc.client.join(option.token ? option.token : null, option.channel, option.uid ? +option.uid : null, function (uid) {
                  console.log("join channel: " + option.channel + " success, uid: " + uid)
                  rtc.joined = true
                  rtc.params.uid = uid
                  rtc.localStream = data.rtc.createStream({
                    streamID: rtc.params.uid,
                    audio: true,
                    video: true,
                    screen: false,
                    microphoneId: 'default',
                    // cameraId: option.cameraId
                  })
                  rtc.localStream.init(function () {
                    console.log("init local stream success")
                    // play stream with html element id "local_stream"
                    rtc.localStream.play("player_a2")
                    rtc.client.publish(rtc.localStream, function (err) {
                        console.log('publish success')
                    })
                  }, function (err)  {
                    console.error("init local stream failed ", err)
                  })
                }, function(err) {
                  console.error("client join failed", err)
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
                // rtc.localStream = null
                // rtc.remoteStreams = []
                console.log("client leaves channel success")
                rtc.client.unpublish(rtc.localStream)
            }, function (err) {
                console.log("channel leave failed")
                console.error(err)
            })
            router.back()
        },
        getPetList (store,data) {
            petList(data).then(res => {
                if (res.data.rtnCode == 200) {
                    store.commit("setUser",{ key: "pet", value: res.data.data.pageT[store.state.firstPet] })
                    store.commit("setUser",{ key: "petId", value: res.data.data.pageT[0].id })
                    store.commit("setUser",{ key: "loading", value: true })
                    res.data.data.pageT.forEach(item => {
                            if (item.petMedicalRecordDtos) {
                                item.petMedicalRecordDtos.forEach(child => {
                                    child.createdAt = child.createdAt.split(' ')[0]
                                })
                            }
                        item.change = true
                        if (item.age) {
                            let date = item.age.split('yrs')
                            item.yrs = date.join(',').split('mo').join('').split(',')[0]
                            item.mo = date.join(',').split('mo').join('').split(',')[1]
                        } else {

                        }
                        if (item.petTypeList) {
                            store.commit("setUser",{ key: "petType", value: res.data.data.pageT.splice(-1,1)[0].petTypeList })
                        }
                    })
                    store.commit("setUser",{ key: "petList", value: res.data.data.pageT })
                } else if (res.data.rtnCode == 201) {
                    if (localStorage.getItem('platform') == 1) {
                        router.push('/petmessage')
                    }
                    store.commit("setUser",{ key: "petList", value: [] })
                } 
            }).catch(e => {
                store.commit("setUser",{ key: "vloading", value: false })
                console.log(e)
            })
        },
        getUser (store,vm) {
            if (localStorage.getItem("platform") == 1) {
                var data = {
                    userId: localStorage.getItem("userId")
                }
                getUserDetails(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        res.data.data.headUr = res.data.data.userImage
                        var ban = {
                            userId: localStorage.getItem('userId')
                        }
                        store.dispatch('getBalance', ban)
                        let page = {
                            pageNum: 1
                        }
                        store.dispatch('getNoticeList', page)
                        store.commit("setUser",{ key: "userDetail", value: res.data.data }) 
                        store.dispatch("IMLogin")
                        store.commit("setUser",{ key: "login", value: true })
                    } else if (res.data.rtnCode == 500) {
                        store.commit("setUser",{ key: "login", value: false })
                        localStorage.removeItem("Token")
                        localStorage.removeItem("userId")
                        localStorage.removeItem("paltform")
                        localStorage.removeItem("IMtoken")
                        localStorage.removeItem('IM')

                        if (vm.$route.name !== 'customerLogin' 
                        && vm.$route.name !== 'relevance' 
                        && vm.$route.name !== 'forgetPwd' 
                        && vm.$route.name !== 'changePwd'
                        && vm.$route.name !== 'signUp') {
                            router.replace('/customerLogin')
                            vm.$message.error('Login expired, please log in again !');
                        }

                        store.commit("setUser",{ key: "login", value: false })
                        store.commit("setUser",{ key: "userDetail", value: {} }) 
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "login", value: false })
                    localStorage.removeItem("Token")
                    localStorage.removeItem("userId")
                    localStorage.removeItem("paltform")
                    localStorage.removeItem("IMtoken")
                    localStorage.removeItem('IM')

                    if (vm.$route.name !== 'customerLogin' 
                    && vm.$route.name !== 'relevance' 
                    && vm.$route.name !== 'forgetPwd' 
                    && vm.$route.name !== 'changePwd'
                    && vm.$route.name !== 'signUp') {
                        router.replace('/customerLogin')
                        vm.$message.error('Login expired, please log in again !');
                    }

                    store.commit("setUser",{ key: "login", value: false })
                    store.commit("setUser",{ key: "userDetail", value: {} }) 
                })
            } else if (localStorage.getItem("platform") == 2) {
                var data = {
                    userId: localStorage.getItem("userId"),
                }
                vetDetails(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        res.data.data.userImage = res.data.data.headUr
                        res.data.data.userName = res.data.data.doctorName
                        if (res.data.data.remake) {
                            res.data.data.starWeek = res.data.data.remake.split('-')[0]
                            res.data.data.endWeek = res.data.data.remake.split('-')[1]
                        }
                        store.commit("setUser",{ key: "userDetail", value: res.data.data }) 
                        store.commit("setUser",{ key: "login", value: true }) 
                        store.dispatch("IMLogin")
                    } else if (res.data.rtnCode == 500) {
                        localStorage.removeItem("Token")
                        localStorage.removeItem("userId")
                        localStorage.removeItem("paltform")
                        localStorage.removeItem("IMtoken")
                        localStorage.removeItem('IM')

                        if (vm.$route.name !== 'vetLogin' 
                        && vm.$route.name !== 'relevance' 
                        && vm.$route.name !== 'forgetPwd' 
                        && vm.$route.name !== 'changePwd'
                        && vm.$route.name !== 'signUp') {
                            router.replace('/vetLogin')
                            vm.$message.error('Login expired, please log in again !');
                        }

                        store.commit("setUser",{ key: "login", value: false })
                        store.commit("setUser",{ key: "userDetail", value: {} }) 
                    }
                }).catch(e => {
                    console.log(e)
                    localStorage.removeItem("Token")
                    localStorage.removeItem("userId")
                    localStorage.removeItem("paltform")
                    localStorage.removeItem("IMtoken")
                    localStorage.removeItem('IM')

                    if (vm.$route.name !== 'vetLogin' 
                    && vm.$route.name !== 'relevance' 
                    && vm.$route.name !== 'forgetPwd' 
                    && vm.$route.name !== 'changePwd'
                    && vm.$route.name !== 'signUp') {
                        router.replace('/vetLogin')
                        vm.$message.error('Login expired, please log in again !');
                    }

                    store.commit("setUser",{ key: "login", value: false })
                    store.commit("setUser",{ key: "userDetail", value: {} }) 
                })
            }
        },
        IMLogin (store) {
            var options = { 
                user: localStorage.getItem("userId") + 'A' + localStorage.getItem("platform"),
                pwd: 123,
                appKey: WebIM.config.appkey,
                success (res) {
                    console.log(res,'IMLogin')
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
        logout (store,vm) {
            vm.$confirm('Are you sure to log out?', 'Attention', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                var data = {
                    userId: localStorage.getItem('userId'),
                    type:localStorage.getItem('platform')
                }
                localStorage.removeItem("Token")
                localStorage.removeItem("userId")
                localStorage.removeItem("paltform")
                localStorage.removeItem("IMtoken")
                localStorage.removeItem('IM')
                vm.$router.replace("/login")
                store.commit("setUser", {
                    key: "login",
                    value: false
                })
                store.commit("setUser", {
                    key: "IMuser",
                    value: {}
                })
                conn.close()
                vm.$message({
                    type: 'info',
                    message: 'Account has been signed out!'
                })
                onlineState(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        
                    }
                }).catch(e => {
                    console.log(e)
                    vm.$message({
                        type: 'error',
                        message: 'Exit failed!'
                    })
                })
                
            }).catch (e => {
                console.log(e)
            })
        },
        getDoctorList (store,num) {
            const doctor = {
                platform: localStorage.getItem("platform"),
                userId: localStorage.getItem("userId"),
                pageNum: num,
                pageSize:20
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
        getBalance (store,data) {
            balance(data).then(res => {
                if (res.data.rtnCode == 200) {
                    store.commit("setUser",{ key: "balance", value: res.data.data })
                }
            })
        },
        Booking (store,vm) {
            var data = {
                userId: localStorage.getItem('userId'),
                userType: localStorage.getItem('platform')
            }
            bookingUserId(data).then(res => {
                console.log(res,'booking')
                if (res.data.rtnCode == 200) {
                    store.commit("setUser",{ key: "userBooking", value: res.data.data })
                }
            })
        },
        getNoticeList (store,page) {
            let data = {
                userId: localStorage.getItem('userId'),
                pageNum: page.pageNum,
                pageSize: 15
            }
            store.commit("setUser",{ key: "n_loading", value: true })
            if ((store.state.totalRecordsCount1 == store.state.noticeList.length) &&store.state.totalRecordsCount1 !=0 ) {
                store.commit("setUser",{ key: "n_loading", value: false })
            } else {
                notice(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        res.data.data.pageT.forEach(item => {
                            var time = item.createdAt
                            let a = time.split(' ')[0]
                            let b = time.split(' ')[1]
                            // let En = new Date(a).toDateString()
                            // let arr = En.split(' ')
                            // let bb = b.split(':')
                            // item.createdAt = arr[2] + ' ' + arr[1] + ','+ arr[3] + ' ' + bb[0] + ':' + bb[1]
                            let arr = a.split('-').join('/')
                            let bb = b.split(':')
                            item.createdAt = arr + ' ' + bb[0] + ':' + bb[1]
                        })
                        store.commit("pageAdd_n", res.data.data.pageT )
                        if (localStorage.getItem('platform') == 2) {
                            store.commit('setUser',{
                                key: "noticeState",
                                value: store.state.noticeList.find(item => item.noticeState==2)
                            })
                        } else if (localStorage.getItem('platform') == 1) {
                            store.commit('setUser',{
                                key: "noticeState",
                                value: store.state.noticeList.find(item => item.noticeState==2)
                            })
                        }
                        store.commit("setUser",{ key: "totalRecordsCount1", value: res.data.data.totalRecordsCount })
                        store.commit("setUser",{ key: "n_loading", value: false })
                    } else if (res.data.rtnCode == 201) {
                        store.commit("setUser",{ key: "noticeList", value: null })
                        store.commit("setUser",{ key: "n_loading", value: false })
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "n_loading", value: false })
                })
            }
        },
    }
}