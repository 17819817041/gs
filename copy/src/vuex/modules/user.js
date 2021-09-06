import { petList, getUserDetails, vetDetails, doctorList, bookingUserId, notice, onlineState, balance, addMetting, s_online, joinRoom, getOnlineDocListm, min } from "@/axios/request.js"
import router from "@/router/router/router.js"
import { Message } from 'element-ui';
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
        loading_doc: false,
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
        sureCall: true,
        nameList: true,
        petType: [],
        firstPet: 0,
        inp: '',
        getDoctorMedicalLimitList: [],
        userBooking: [],
        callLoading: false,    //等待接听
        callerIM: '',
        mettingId: 0,
        messageList: [],
        totalRecordsCount: 0,
        totalRecordsCount1: 0,
        noticeState: false,
        showback: false,
        mobile_b: false,
        noticeList: [],
        balance: {},
        default_img:'',
        setTime_S: false,
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
        newMsg_dot: JSON.parse(JSON.stringify(localStorage.getItem('new_msg'))),
        value: 0,
        timer: null
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
        medicalAdd (state,data) {
            state.getDoctorMedicalLimitList = state.getDoctorMedicalLimitList.concat(data)
        },
    },
    actions: {
        start(store){
			// this.timer = setInterval(this.valChange, 60000); // 注意: 第一个参数为方法名的时候不要加括号;
			store.state.timer = setInterval(() => store.dispatch('online'), 60000); // 注意: 第一个参数为方法名的时候不要加括号;
		},
        online(store) {
			store.state.value++;
			let data = {
				userId: localStorage.getItem('userId'),
				platform: localStorage.getItem('platform')
			}
			min(data).then(res => {
				// console.log(res,12321)
			})
		},
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
                codec: "vp8",
                vm:data.vm
            }
            // rtc.client = data.rtc.createClient({mode: option.mode, codec: option.codec})
            // store.commit('setUser', { key: 'rtc', value: rtc })
            rtc.client.init(option.appID, function () {
                rtc.client.join(option.token ? option.token : null, option.channel, option.uid ? +option.uid : null, function (uid) {
                //   console.log("join channel: " + option.channel + " success, uid: " + uid)
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

                    if (localStorage.getItem('platform') == 2) {                    //医生成功加入频道         !!!!!!!!!!!!
                        const caller = store.state.caller
                        let data0 = {
                            type: "confirmCall"
                        }
                        let id = conn.getUniqueId();                 // 生成本地消息id
                        let msg = new WebIM.message('txt', id);      // 创建文本消息
                        msg.set({
                            msg: JSON.stringify(data0),                  // 消息内容
                            to: JSON.stringify(caller.userId) + 'A1',     
                            chatType: 'singleChat',                  // 设置为单聊   
                        });
                        conn.send(msg.body);

                        let D = new Date
                        var date = D.toLocaleDateString()
                        let detail = {
                            petName: store.state.pet.petName,
                            petId: store.state.petId,                 
                            caller: store.state.caller,
                            callTo: store.state.userDetail,
                            createdTime: date,
                            roomNumber: 'petavi_' + localStorage.getItem('sroom'),
                            bookingDetail: localStorage.getItem('bookingDoc')? localStorage.getItem('bookingDoc') : 'Temporary call'
                        }
                        let metting = {
                            'jo': [{
                                userId: store.state.caller.userId + 'A1',
                                doctorId: store.state.userDetail.userId + 'A2',
                                password: JSON.stringify(detail),
                            }]
                        }
                        addMetting(metting).then(res => {
                            store.commit('setUser', { key: 'mettingId', value: res.data.data[0].id })
                            let data0 = {
                                type: "mettingId",
                                mettingId: res.data.data[0].id
                            }
                            let id = conn.getUniqueId();                 // 生成本地消息id
                            let msg = new WebIM.message('txt', id);      // 创建文本消息
                            msg.set({
                                msg: JSON.stringify(data0),                  // 消息内容
                                to: JSON.stringify(caller.userId) + 'A1',     
                                chatType: 'singleChat',                  // 设置为单聊   
                            });
                            conn.send(msg.body);
                        })
                    }

                    rtc.localStream.play("player_a2")
                    rtc.client.publish(rtc.localStream, function (err) {
                        
                    })
                    store.commit('setUser',{ key: 'setTime_S', value: true })
                  }, function (err)  {
                    if (localStorage.getItem('platform') == 2) {                       //医生加入频道失败并发送通知至拨号者
                        const caller = store.state.caller
                        let fail = {
                            type: "callToJoinFail"
                        }
                        let id = conn.getUniqueId();                 // 生成本地消息id
                        let msg = new WebIM.message('txt', id);      // 创建文本消息
                        msg.set({
                            msg: JSON.stringify(fail),                  // 消息内容
                            to: JSON.stringify(caller.userId) + 'A1',     
                            chatType: 'singleChat',                  // 设置为单聊   
                        });
                        conn.send(msg.body);
                        router.replace('/myCustomer')
                    } else {
                        router.replace('/myDoctor')
                    }
                    Message({
                        type: 'error',
                        message: 'The browser cannot get the camera or the device does not support!'
                    })
                  })
                }, function(err) {
                    if (localStorage.getItem('platform') == 2) {                       //医生加入频道失败并发送通知至拨号者
                        const caller = store.state.caller
                        let fail = {
                            type: "callToJoinFail"
                        }
                        let id = conn.getUniqueId();                 // 生成本地消息id
                        let msg = new WebIM.message('txt', id);      // 创建文本消息
                        msg.set({
                            msg: JSON.stringify(fail),                  // 消息内容
                            to: JSON.stringify(caller.userId) + 'A1',     
                            chatType: 'singleChat',                  // 设置为单聊   
                        });
                        conn.send(msg.body);
                        router.replace('/myCustomer')
                    } else {
                        router.replace('/myDoctor')
                    }
                    Message({
                        type: 'error',
                        message: 'The browser cannot get the camera or the device does not support!'
                    })
                })
            }, (err) => {
                data.vm.$message.error('Client join failed')
                router.back()
                console.error(err,'catchCamera')
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
                // console.log("client leaves channel success")
                rtc.client.unpublish(rtc.localStream)
                if (localStorage.getItem('platform') == 2) {
                    let data = {
                        userId: localStorage.getItem('userId'),
                        platform: localStorage.getItem('platform')
                    }
                    s_online(data).then(res => {
                        // console.log(res,'在线')
                    })
                } else if (localStorage.getItem('platform') == 1) {
                    let data = {
                        userId: store.state.callTo.doctorId,
                        platform: 2
                    }
                    s_online(data).then(res => {
                        // console.log(res,'在线')
                    })
                }
            }, function (err) {
                console.log("channel leave failed")
                console.error(err)
            })
            router.back()
        },
        muteAudio (store) {             //静音
            var rtc = store.state.rtc
            rtc.remoteStreams[0].setAudioVolume(0);
            // store.state.remoteStream_mute.setAudioVolume(0);
            // window.remoteStream.setAudioVolume(0)
        },
        unMuteAudio (store) {             //UN静音
            store.state.rtc.remoteStreams[0].setAudioVolume(100);
            // window.remoteStream.setAudioVolume(100)
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
                        store.dispatch("joinRoom")
                        store.commit("setUser",{ key: "login", value: true })
                    } else {
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
                        && vm.$route.name !== 'petmessage'
                        && vm.$route.name !== 'signUp') {
                            router.replace('/customerLogin')
                            // vm.$message.error('Login expired, please log in again !');
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
                    && vm.$route.name !== 'petmessage'
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
                        store.dispatch("joinRoom")
                        let page = {
                            pageNum: 1
                        }
                        store.dispatch('getNoticeList', page)
                        store.dispatch("start") 
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
                    // console.log(res,'IMLogin')
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
            }).catch (e => {
                console.log(e)
            })
        },
        getDoctorList (store,num) {
            const doctor = {
                platform: localStorage.getItem("platform"),
                userId: localStorage.getItem("userId"),
                pageNum: 1,
                pageSize:30000000
            }
            store.commit("setUser",{ key: "loading_doc", value: true })
            doctorList(doctor).then(res => {
                store.commit("setUser",{ key: "loading_doc", value: false })
                if (res.data.rtnCode == 200) {
                    store.commit("setUser",{ key: "totalRecordsCount", value: res.data.data.totalRecordsCount })
                    store.commit("pageAdd", res.data.data.pageT )
                    store.dispatch('getOnlineDocList')
                } else {
                    store.commit("setUser",{ key: "loading_doc", value: false })
                    store.commit("pageAdd", null )
                    num.vm.$message({
                        type: 'error',
                        message: 'Failed to load!'
                    })
                }
            }).catch(e => {
                console.log(e)
                num.vm.$message({
                    type: 'error',
                    message: 'Loading timed out, please check the network!'
                })
                store.commit("setUser",{ key: "loading6", value: false })
                store.commit("setUser",{ key: "doctorList", value: [] })
                
            })
        },
        getOnlineDocList (store) {
            getOnlineDocList().then(res => {
                // console.log(res,'online')
                if (res.data.rtnCode == 200) {
                    let arr =  store.state.doctorList
                    arr.forEach(item => {
                        res.data.data.forEach(msg => {
                            if (item.doctorId == msg.doctorId) {
                                item.doctorOnLineState = msg.doctorOnLineState
                            }
                        })
                    })
                    var b = []
                    var c = []
                    for (let i = 0;i < arr.length; i++) {{
                        if (arr[i].doctorOnLineState == 1) {
                            c.push(arr[i])
                        }
                    }}
                    b = arr.filter(item => item.doctorOnLineState != 1)
                    store.commit("setUser", { key: "doctorList", value: c.concat(b) })
                }
                store.commit("setUser", { key: 'vDetail', value: store.state.doctorList[0] } )
                store.commit("setUser", { key: 'rate', value: store.state.doctorList[0].baseScore } )
            })
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
                pageSize: 10
            }
            store.commit("setUser",{ key: "n_loading", value: true })
            if (store.state.noticeList) {
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
                            // store.commit("pageAdd_n", res.data.data.pageT )
                            store.commit("setUser",{ key: "noticeList", value: res.data.data.pageT })
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
                        store.commit("setUser",{ key: "noticeList", value: null })
                        store.commit("setUser",{ key: "n_loading", value: false })
                    })
                }
            }
        },
        joinRoom (store,data) {
            let data_j = {
                userId: localStorage.getItem('userId'),
                userType: localStorage.getItem('platform')
            }
            joinRoom(data_j).then(res => {
            })
        }
    }
}