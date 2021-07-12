import { petList, getUserDetails, vetDetails, doctorList, login, bookingUserId, notice, onlineState, balance } from "@/axios/request.js"
import router from "@/router/router/router.js"
import {conn, WebIM, rtcCall} from "@/assets/js/websdk.js"
import Vue from "vue"
export default {
    state: {
        IMuser: {},
        login: false,
        petList:[],
        pet: {},
        petId: null,
        doctorList: [],
        searchList: [],
        loading: false,
        vloading: true,
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
        showList: true,
        nameList: true,
        petType: [],
        firstPet: 0,
        inp: '',
        scrollTop: false,
        userBooking: [],
        callLoading: false,    //等待接听
        joinParams: {},
        callerIM: '',
        mettingId: 0,
        messageList: [],
        totalRecordsCount: 0,
        noticeState: false,
        showback: false,
        noticeList: [],
        balance: {},
        n_loading: true,
        adminList: {
            'admin': {
                messageList: [
                    // { type: 1, value: "star",userId: '486' },
                    // { type: 2, value: "12123" },
                ]
            },
        },
        

        message: {},
        chatList: []
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
        },
        pageAdd (state,data) {
            state.doctorList = state.doctorList.concat(data)
        }
    },
    actions: {
        login () {
            console.log("login")
        },
        getPetList (store,data) {
            petList(data).then(res => {
                console.log(res,"宠物列表&类别")
                if (res.data.rtnCode == 201) {
                    if (localStorage.getItem('platform') == 1) {
                        router.push('/petmessage')
                    }
                    store.commit("setUser",{ key: "petList", value: [] })
                } else if (res.data.rtnCode == 200) {
                    store.commit("setUser",{ key: "pet", value: res.data.data.pageT[store.state.firstPet] })
                    store.commit("setUser",{ key: "petId", value: res.data.data.pageT[0].id })
                    store.commit("setUser",{ key: "loading", value: true })
                    store.commit("setUser",{ key: "vloading", value: false })
                    res.data.data.pageT.forEach(item => {
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
                        console.log(res,"user详情")
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
                        if (vm.$route.name !== 'customerLogin') {
                            router.replace('/customerLogin')
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
                    vm.$message.error('Login expired, please log in again !');
                    store.commit("setUser",{ key: "login", value: false }) 
                    router.replace('/login')
                })
            } else if (localStorage.getItem("platform") == 2) {
                var data = {
                    userId: localStorage.getItem("userId"),
                }
                vetDetails(data).then(res => {
                    console.log(res,"医生详情")
                    if (res.data.rtnCode == 200) {
                        res.data.data.userImage = res.data.data.headUr
                        res.data.data.userName = res.data.data.doctorName
                        store.commit("setUser",{ key: "userDetail", value: res.data.data }) 
                        store.commit("setUser",{ key: "login", value: true }) 
                        store.dispatch("IMLogin")
                    } else if (res.data.rtnCode == 500) {
                        store.commit("setUser",{ key: "login", value: true })
                        localStorage.removeItem("Token")
                        localStorage.removeItem("userId")
                        localStorage.removeItem("paltform")
                        localStorage.removeItem("IMtoken")
                        localStorage.removeItem('IM')
                        if (vm.$route.name !== 'vetLogin') {
                            router.replace('/vetLogin')
                            vm.$message.error('Login expired, please log in again !');
                        }
                        store.commit("setUser",{ key: "login", value: false })
                        store.commit("setUser",{ key: "userDetail", value: {} }) 
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "login", value: false }) 
                })
            }
        },
        IMLogin (store) {
            console.log('IM登录成功')
            var options = { 
                user: localStorage.getItem("userId") + 'A' + localStorage.getItem("platform"),
                pwd: localStorage.getItem('IM'),
                appKey: WebIM.config.appkey,
                success (res) {
                    console.log(res,'IM登录成功')
                    store.commit("setUser", { key: 'IMuser', value: res.user })
                    localStorage.setItem("IMtoken",res.access_token)
                    console.log(store.state.IMuser)
                    var eMedia = require("@/assets/js/emedia.js").emedia
                    window.eMedia = eMedia
                    console.log(eMedia,'emedia')
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
                    console.log(res,'离线')
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
                pageSize:30
            }
            store.commit("setUser",{ key: "loading", value: true })
            if ((store.state.totalRecordsCount == store.state.doctorList.length) &&store.state.totalRecordsCount !=0 ) {
                store.commit("setUser",{ key: "loading", value: false })
            } else {
                doctorList(doctor).then(res => {
                    if (res.data.rtnCode == 200) {
                        console.log(res,"医生列表")
                        store.commit("setUser",{ key: "totalRecordsCount", value: res.data.data.totalRecordsCount })
                        store.commit("pageAdd", res.data.data.pageT )
                        if (doctor.pageNum <= 1) {
                            store.commit("setUser", { key: 'vDetail', value: res.data.data.pageT[0] } )
                            store.commit("setUser", { key: 'rate', value: res.data.data.pageT[0].baseScore } )
                        }

                        store.commit("setUser",{ key: "searchList", value: store.state.doctorList })
                        store.commit("setUser",{ key: "loading", value: false })
                    } else if (res.data.rtnCode == 500) {
                        localStorage.removeItem("Token")
                        localStorage.removeItem("userId")
                        localStorage.removeItem("paltform")
                        localStorage.removeItem("IMtoken")
                        localStorage.removeItem('IM')
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "loading", value: false })
                    store.commit("setUser",{ key: "doctorList", value: [] })
                    
                })
            }
            
        },
        // search (store,data) {
        //     store.state.searchList = []
        //     store.state.doctorList.forEach(item => {
        //         if (item.doctorName.toUpperCase().includes(store.state.inp.toUpperCase())) {    //item.doctorName == data 
        //             store.state.searchList.push(item)
        //         } else if (data == '') {
        //             store.state.searchList = store.state.doctorList
        //         }
        //     })
        // },
        getBalance (store,data) {
            balance(data).then(res => {
                if (res.data.rtnCode == 200) {
                    store.state.balance = res.data.data
                }
                console.log(res)
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
                pageSize: page.pageSize
            }
            notice(data).then(res => {
                console.log(res,'notice')
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
                    if (localStorage.getItem('platform') == 2) {
                        store.commit('setUser',{
                            key: "noticeState",
                            value: res.data.data.pageT.find(item => item.noticeState==2)
                        })
                    } else if (localStorage.getItem('platform') == 1) {
                        store.commit('setUser',{
                            key: "noticeState",
                            value: res.data.data.pageT.find(item => item.noticeState==2)
                        })
                    }
                    store.state.noticeList = res.data.data.pageT
                    store.state.loading = false
                    store.commit("setUser",{ key: "n_loading", value: false })
                } else if (res.data.rtnCode == 201) {
                    store.state.noticeList = null
                    store.state.loading = false
                    store.commit("setUser",{ key: "n_loading", value: false })
                }
            }).catch(e => {
                console.log(e)
                store.state.loading = false
                store.commit("setUser",{ key: "n_loading", value: false })
            })
        },
    }
}