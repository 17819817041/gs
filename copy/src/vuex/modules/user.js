import { petList, getUserDetails, vetDetails, doctorList, login, bookingUserId } from "@/axios/request.js"
import router from "@/router/router/router.js"
import {conn, WebIM, rtcCall} from "@/assets/js/websdk.js"
import Vue from "vue"
export default {
    state: {
        IMuser: {},
        login: false,
        petList:[],
        pet: {},
        doctorList: [],
        searchList: [],
        loading: true,
        callModal: false,
        callModal2: false,
        callTo: {},
        caller: {},
        userDetail: {},
        mask: {},
        headImg: {},
        rotate: false,
        sureCall: true,
        showList: true,
        nameList: true,
        petType: [],
        firstPet: 0,
        inp: '',
        userBooking: [],
        callLoading: false,    //等待接听
        joinParams: {},
    },
    mutations: {
        setUser (state,data) {
            state[data.key] = data.value
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
                    // if (localStorage.getItem('platform') == 1) {
                    //     router.push('/customerhomepage')
                    // }
                    store.commit("setUser",{ key: "pet", value: res.data.data.pageT[store.state.firstPet] })
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
                        store.commit("setUser",{ key: "login", value: true })
                        localStorage.removeItem("Token")
                        localStorage.removeItem("userId")
                        localStorage.removeItem("paltform")
                        localStorage.removeItem("IMtoken")
                        localStorage.removeItem('IM')
                        // if (vm.$route.name !== 'customerLogin') {
                        //     router.replace('/customerLogin')
                        //     vm.$message.error('Login expired, please log in again !');
                        // }
                        store.commit("setUser",{ key: "login", value: false })
                        store.commit("setUser",{ key: "userDetail", value: {} }) 
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "login", value: false }) 
                })
            } else if (localStorage.getItem("platform") == 2) {
                var data = {
                    userId: localStorage.getItem("userId"),
                }
                vetDetails(data).then(res => {
                    // console.log(res,"医生详情")
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
                        // if (vm.$route.name !== 'customerLogin') {
                        //     router.replace('/vetLogin')
                        //     vm.$message.error('Login expired, please log in again !');
                        // }
                        store.commit("setUser",{ key: "login", value: false })
                        store.commit("setUser",{ key: "userDetail", value: {} }) 
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "login", value: false }) 
                })
            }
        },
        // IMSignUp (store) {
        //     var options = { 
        //         username: localStorage.getItem("userId") + '_' + localStorage.getItem("platform"),  //430_2
        //         password: '123456',
        //         nickname: 'nickName',
        //         appKey: WebIM.config.appkey,
        //         success: function () { 
        //             console.log("注册成功")
        //             store.dispatch("IMLogin")
        //         },  
        //         error: function (err) {
        //             let errorData = JSON.parse(err.data);
        //             if (errorData.error === 'duplicate_unique_property_exists') {
        //                 console.log('用户已存在！');
        //                 store.dispatch("IMLogin")
        //             } else if (errorData.error === 'illegal_argument') {
        //                 if (errorData.error_description === 'USERNAME_TOO_LONG') {
        //                     console.log('用户名超过64个字节！')
        //                 }else{
        //                     console.log('用户名不合法！')
        //                 }
        //             } else if (errorData.error === 'unauthorized') {
        //                 console.log('注册失败，无权限！')
        //             } else if (errorData.error === 'resource_limited') {
        //                 console.log('您的App用户注册数量已达上限,请升级至企业版！')
        //             }
        //         }, 
        //     }; 
        //     // console.log(123,localStorage.getItem('IMtoken'))
        //     // if (localStorage.getItem('IMtoken')) {
        //     //     store.dispatch('IMLogin')
        //     // } else {
        //         conn.registerUser(options);
        //     // }
        // },
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
            }).catch (e => {
                console.log(e)
            })
        },
        getDoctorList (store,vm) {
            const doctor = {
                platform: localStorage.getItem("platform"),
                userId: localStorage.getItem("userId"),
                pageNum:1,
                pageSize: 10
            }
            doctorList(doctor).then(res => {
                if (res.data.rtnCode == 200) {
                    console.log(res,"医生列表")
                    store.commit("setUser",{ key: "doctorList", value: res.data.data.pageT })
                    store.commit("setUser",{ key: "searchList", value: store.state.doctorList })
                    store.commit("setUser",{ key: "loading", value: false })
                } else if (res.data.rtnCode == 500) {
                    localStorage.removeItem("Token")
                    localStorage.removeItem("userId")
                    localStorage.removeItem("paltform")
                    localStorage.removeItem("IMtoken")
                    localStorage.removeItem('IM')
                    if (vm.$route.name !== 'customerLogin') {
                        // router.replace('/customerLogin')
                    }
                    // vm.$message.error('Login expired, please log in again !');
                }
            }).catch(e => {
                console.log(e)
                store.commit("setUser",{ key: "loading", value: false })
                store.commit("setUser",{ key: "doctorList", value: [] })
                vm.$message.error('Fail to load !');
            })
        },
        search (store,data) {
            store.state.searchList = []
            store.state.doctorList.forEach(item => {
                if (item.doctorName.toUpperCase().includes(store.state.inp.toUpperCase())) {    //item.doctorName == data 
                    store.state.searchList.push(item)
                } else if (data == '') {
                    store.state.searchList = store.state.doctorList
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
        }
    }
}