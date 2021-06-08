import { petList, getUserDetails, vetDetails, doctorList, login } from "@/axios/request.js"
import {conn, WebIM, rtcCall} from "@/assets/js/websdk.js"
import Vue from "vue"
export default {
    state: {
        IMuser: {},
        login: false,
        petList:[],
        // doctorList: [],
        callModal: false,
        callModal2: false,
        callTo: {},
        userDetail: {},
        mask: {},
        headImg: {},
        rotate: false,
        sureCall: true,
        showList: true,
        nameList: true,
        petType: []
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
                if (res.data.rtnCode == 200) {
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
                } else {
                    store.commit("setUser",{ key: "petList", value: [] }) 
                }
            }).catch(e => {
                console.log(e)
            })
        },
        // getUser (store,data) {
        //     var data = {
        //         userId: localStorage.getItem("userId")
        //     }
        //     getUserDetails(data).then(res => {
        //         if (res.data.rtnCode == 200) {
        //             console.log(res,"user详情")
        //            store.commit("setUser",{ key: "petList", value: res.data.data }) 
        //         } else {
        //             store.commit("setUser",{ key: "petList", value: {} }) 
        //         }
        //     })
        // },

        getUser (store,data) {
            if (localStorage.getItem("platform") == 1) {
                var data = {
                  userId: localStorage.getItem("userId")
                }
                getUserDetails(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        console.log(res,"user详情")
                        store.commit("setUser",{ key: "userDetail", value: res.data.data }) 
                        store.commit("setUser",{ key: "login", value: true }) 
                        store.dispatch("IMLogin")
                    } else {
                        store.commit("setUser",{ key: "userDetail", value: {} }) 
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "login", value: false }) 
                })
            } else if (localStorage.getItem("platform") == 2) {
                console.log('2医生')
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
                    } else {
                        store.commit("setUser",{ key: "userDetail", value: {} }) 
                    }
                }).catch(e => {
                    console.log(e)
                    store.commit("setUser",{ key: "login", value: false }) 
                })
            }
        },
        IMSignUp (store) {
            var options = { 
                username: localStorage.getItem("userId") + '_' + localStorage.getItem("platform"),  //430_2
                password: '123456',
                nickname: 'nickName',
                appKey: WebIM.config.appkey,
                success: function () { 
                    console.log("注册成功")
                    store.dispatch("IMLogin")
                },  
                error: function (err) {
                    let errorData = JSON.parse(err.data);
                    if (errorData.error === 'duplicate_unique_property_exists') {
                        console.log('用户已存在！');
                        store.dispatch("IMLogin")
                    } else if (errorData.error === 'illegal_argument') {
                        if (errorData.error_description === 'USERNAME_TOO_LONG') {
                            console.log('用户名超过64个字节！')
                        }else{
                            console.log('用户名不合法！')
                        }
                    } else if (errorData.error === 'unauthorized') {
                        console.log('注册失败，无权限！')
                    } else if (errorData.error === 'resource_limited') {
                        console.log('您的App用户注册数量已达上限,请升级至企业版！')
                    }
                }, 
            }; 
            // console.log(123,localStorage.getItem('IMtoken'))
            // if (localStorage.getItem('IMtoken')) {
            //     store.dispatch('IMLogin')
            // } else {
                conn.registerUser(options);
            // }
        },
        IMLogin (store) {
            var options = { 
                user: localStorage.getItem("userId") + '_' + localStorage.getItem("platform"),
                pwd: '123456',
                appKey: WebIM.config.appkey,
                success (res) {
                    console.log(res)
                    store.commit("setUser", { key: 'IMuser', value: res.user })
                    localStorage.setItem("IMtoken",res.access_token)
                    console.log(store.state.IMuser)
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
        // getDoctorList (store,data) {
        //     const doctor = {
        //         platform: localStorage.getItem("platform"),
        //         userId: localStorage.getItem("userId"),
        //         pageNum:1,
        //         pageSize: 10
        //     }
        //     doctorList(doctor).then(res => {
        //         if (res.data.rtnCode == 200) {
        //             console.log(res,"医生列表")
        //             // this.doctorList = res.data.data.pageT
        //             store.commit("setUser",{ key: "doctorList", value: res.data.data.pageT })
        //         } else {
        //             store.commit("setUser",{ key: "doctorList", value: [] })
        //             this.$message.error('Fail to load !');
        //         }
        //     }).catch(e => {
        //         console.log(e)
        //         store.commit("setUser",{ key: "doctorList", value: [] })
        //         this.$message.error('Fail to load !');
        //     })
        // }
    }
}