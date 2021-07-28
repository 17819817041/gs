<style lang="less" scoped>
@import "@/less/css.less";
    .headerLogoPage {
        width: 100%;
        height: 109px;
        background: @hdColor;
        position: relative;
        margin-bottom: 10px;
        transition: 0.25s;
        @media screen and (max-width: 1300px) {
            height: 80px;
        }
        // @media screen and (max-width: 564px) {
        //     height: 75px;
        // }
        .logo {
            background: rgb(255, 255, 255);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 600;
            padding: 15px 30px 0 62px;
            transition: 0.2s;
            @media screen and (max-width:950px) {
                transform: translate(-180px,0);
            }
            @media screen and (max-width: 564px) {
                height: 70px;
                padding: 10px 10px 0 10px;
            }
        }
        .logo .logo_IMG {
            width: 110px;
            height: 123px;
            transition: 0.2s;
            z-index: 500;
            @media screen and (max-width: 1300px) {
                width: 88px;
                height: 98px;
            }
            @media screen and (max-width: 564px) {
                width: 50px;
                height: 60px;
            }
        }
        .helpBtn {
            padding: 0 3px;
            width: 120px;
            height: 40px;
            border-radius: 30px;
            background: @helpBtn;
            @media screen and (max-width: 564px) {
                transform: scale(0.8);
            }
            
        }
        .logout {
            width: 120px;
            height: 40px;
            border-radius: 30px;
            margin: 0 10px;
            background: @logout;
        }
        .userName {
            // width: 250px;
            height: 40px;
        }
    }
    .logo_width {
        transform: translate(0px,0) !important;
    }
    .homeImg {
        padding-left: 17px;
    }
    .myMessage {
        flex: 10;
    }
    .input {
        border: solid 1px white;
        background: white;
        border-radius: 30px;
        overflow: hidden;
        width: 307px;
        position: relative;
        .search_btn {
            position: absolute;
            right: 0px;
            top: 0;
            height: 100%;
            color: white;
            font-size: 13px;
            padding: 0 5px;
            border-radius: 0 30px 30px 0;
            background: @hdColor;
            z-index: 400;
        }
    }
    .oicq_inp {
        border: solid 1px white;
        background: white;
        border-radius: 30px;
        overflow: hidden;
        width: 100%;
        position: relative;
        .search_btn {
            position: absolute;
            right: 0px;
            top: 0;
            height: 100%;
            color: white;
            font-size: 13px;
            padding: 0 5px;
            border-radius: 0 30px 30px 0;
            background: @hdColor;
            z-index: 400;
        }
    }
    .select {
        padding: 0 15px;
    }
    .oicq_select {
        padding: 0 5px;
    }
    .label_img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: solid gray 1px;
        margin-right:5px;
        overflow: hidden;
        transition: 0.2s;
        @media screen and (max-width: 1220px) {
            width: 50px;
            height: 50px;
        }
    }
    .top {
        margin-top: 10px;
        white-space: nowrap;
    }
    .informationImg {
        margin-top: 3px;
        position: relative;
        .noticeDot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            top: 0;
            right: -2px;
        }
    }
    .mobile_s {
        position: absolute;
        width: 100%;
        height: 77px;
        bottom: 3px;
        left: 0;
        padding: 0 15px;
        display: none;
        @media screen and (max-width: 564px) {
            display: block;
        }
    }
    .div {
        position: absolute;
        width: calc(100% - 240px);
        height: 55px;
        right: 25px;
        bottom: 9px;
        transition: 0.25s;
        @media screen and (max-width: 1300px) {
            position: absolute;
            transform: scale(0.7);
            width: 118%;
            bottom: 0px;
            right: -207px;
        }
        @media screen and (max-width: 1200px) {
            width: 106%;
            right: -150px;
        }
        @media screen and (max-width: 960px) {
            width: 106%;
            right: -125px;
        }
        @media screen and (max-width:564px) {
            display: none;
        }
    }
    .div .search {
        @media screen and (max-width:1200px) {
            width: 40%;
        }
    }
    .div .function {
        @media screen and (max-width:564px) {
            width: 37%;
        }
    }
    .div div {
        @media screen and (max-width: 1300px) {
            transition: 0.25s;
            // transform: scale(0.9);
        }
    }
    .dropimg {
        padding-left: 5px;
    }
    .category {
        font-size: 12px;
    }
    .rotate {
        transform: rotateZ(90deg);
    }
    .drawer_list_wrap {
        position: relative;
        .drawer_list {
            position: absolute;
            width: 22.5px;
            height: 22.5px;
            top: 30px;
            left: 125px;
            visibility: hidden;
            transition: 0.2s;
            @media screen and (max-width:950px) {
                visibility: initial !important;
            }
        }
    }
    .oicq {
        padding: 5px 0;
    }
    .oicq_img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
    }
    .oicq_name {
        font-size: 14px;
        padding: 0 5px;
    }
    .more_fun {
        width: 30px;
        height: 30px;
        position: relative;
        z-index: 1000;
        img {
            transition: 0.2s;
            height: 100%;
        }
        .mobile_expand {
            position: absolute;
            left: -85px;
            top: 30px;
            width: 135px;
            transition: 0.2s;
            opacity: 0;
            // border: solid 1px;
        }
    }
    .mobile_opacity{
        opacity: 1 !important;
    }
    .m_arrow {
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: transparent transparent rgb(255, 255, 255) transparent;
        margin: 0 25px;
    }
    .expand_content{
        width: 100%;
        height: 100%;
        padding: 15px 5px;
        background: rgb(255, 255, 255);
        border-radius: 10px;
        .expand_content_item {
            padding: 4px;
            font-size: 13px;
            border-bottom: solid gray 1px;
        }
    }
    .more_fun_rotate {
        transform: rotateZ(90deg);
    }
</style>

<template>
    <div>
        <div class="headerLogoPage">
            <div :class="['logo',{ logo_width: rotate }]">
                <div class="drawer_list_wrap">
                    <img class="logo_IMG" @click="home" src="@/assets/img/logo.png" alt="">
                    <div :class="['drawer_list',{rotate: rotate}]">
                        <img style="height:100%;transition:0.2s." src="@/assets/img/list.png" alt="" @click="showDetails">
                    </div>  <!-- //抽屉 -->
                </div>
            </div>
            <div class="div sb al">
                <div class="search al sa" v-if="login">
                    <div class="top cursor" v-if="identity" @click="doctor">All Doctors</div>
                    <div class="top cursor" v-else @click="patient">All Patients</div>
                    <div class="select top" >
                        <div class="category">
                            Category
                            <img class="dropimg" src="@/assets/img/drop.png" alt="">
                        </div>
                    </div>
                    <div class="input" >
                        <div class="search_btn al ju cursor" @click="search">
                            Search
                        </div>
                        <el-input style="transform:scale(1);border:none;" v-model="inp" @keyup.enter.native="search"
                        prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                    </div>
                </div>
                <div v-else></div>
                <div class="function al">
                    <div class="al sb function_item" v-if="login" >
                        <div class="userName al sb">
                            <div class="myMessage al">
                                <label for="ava" class="cursor label_img ju al">
                                    <input id="ava" v-show="false" type="file" @change="getImage" />   <!-- 头像路径-->
                                    <div class="ju al" style="height:55px;overflow:hidden;border-radius:50%;transform:scale(1)">
                                        <img style="height:100%;" v-if="userDetails.userImage" :src="userDetails.userImage" alt="">
                                        <img style="height:100%;" v-else :src="default_img" alt="">
                                        <!-- <i class="el-icon-picture-outline" v-else style="font-size:30px;color:gray"></i> -->
                                    </div>
                                </label>
                                <div class="name al">{{userDetails.userName}}</div>
                            </div>
                            <div class="sa" style="padding-left:20px;">
                                <div class="informationImg cursor top al" @click="notice">
                                    <img class="noticeDot" v-show="noticeState" src="@/assets/img/dot.png" alt="">
                                    <img src="@/assets/img/information.png" alt="">
                                </div>
                                <div class="homeImg al cursor" @click="home">
                                    <img src="@/assets/img/home.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="logout cursor bold tc white al ju" @click="logout">
                            <div >Logout</div>     
                        </div>
                    </div>
                    <div class="helpBtn cursor al ju" @click="support">
                        <div class="al">
                            <img src="@/assets/img/what.png" alt="">
                        </div>
                        <div class="suppot size12"> Help & Support </div>
                    </div>
                </div>
            </div>
            <div class="mobile_s">
                <div class="sb al">
                    <div class="oicq flex">
                        <div class="oicq_img">
                            <img style="height:100%;" v-if="userDetails.userImage" :src="userDetails.userImage" alt="">
                            <img style="height:100%;" v-else :src="default_img" alt="">
                        </div>
                        <div>
                            <div class="oicq_name" >{{userDetails.userName}}</div>
                            <div class="oicq_select" >
                                <div class="category">
                                    Category
                                    <img class="dropimg" src="@/assets/img/drop.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="more_fun">
                            <img :class="[{ 'more_fun_rotate': top_up_mask }]" @click="top_up" src="@/assets/img/more_fun.png" alt="">
                            <div :class="['mobile_expand',{ 'mobile_opacity': top_up_mask }]">
                                <div class="flexEnd"><div class="m_arrow"></div></div>
                                <div class="expand_content">
                                    <div class="expand_content_item">Appointments</div>
                                    <div class="expand_content_item">Medical Record</div>
                                    <div class="expand_content_item">Payments History</div>
                                    <div class="expand_content_item">Setting</div>
                                    <div  class="expand_content_item">Logout</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="informationImg cursor top al" @click="notice">
                                <img class="noticeDot" v-show="noticeState" src="@/assets/img/dot.png" alt="">
                                <img style="width: 22px;height:22px" src="@/assets/img/notice.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="oicq_inp mg" style="height: 25px;">
                    <div class="search_btn al ju cursor" @click="search">
                        Search
                    </div>
                    <el-input style="transform:scale(1);border:none;" v-model="inp" @keyup.enter.native="search"
                    prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { searchDoc, updateUserDetails, file, vetDetails, updateVetDetails } from "@/axios/request.js"
export default {
    data () {
        return {
            identity: true,
            userDetails: {},
            rotate: false,
            doctorID: -1,
            petOrDoc: 2,
        }
    },
    created () {
        this.getUser()
        if (localStorage.getItem('platform') == 2) {
            if (this.$route.name == 'vetDoctor') {
                this.identity = false
                this.petOrDoc = 1
            }
        }
    },
    mounted () {
        gapi.load('auth2', function(){
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            var auth2 = gapi.auth2.init({
                client_id: '628942639023-6eghdtqbgk8vvdj20tuc7l2708mshmd8.apps.googleusercontent.com', //客户端ID
                cookiepolicy: 'single_host_origin',
                scope: 'profile' //可以请求除了默认的'profile' and 'email'之外的数据
            });
		});
    },
    watch: {
        login: {
            handler (val) {
                if (val) {
                    this.login = val
                }
            },
        },
        AllDetail: {
            handler (val) {
                this.userDetails = JSON.parse(JSON.stringify(this.AllDetail))
            },
            immediate: true
        },
    },
    computed: {
        noticeState: {
            get () { return this.$store.state.user.noticeState },
            set (val) {
                this.$store.commit("setUser", {
                    key: "noticeState",
                    value: val
                })
            },
        },
        login: {
            get () { return this.$store.state.user.login },
            set (val) {
                this.$store.commit("setUser", {
                    key: "login",
                    value: val
                })
            },
        },
        AllDetail: {
            get () { return this.$store.state.user.userDetail },
            set (val) {
                this.$store.commit("setUser", {
                    key: "userDetail",
                    value: val
                })
            },
        },
        inp: {
            get () {return this.$store.state.user.inp},
            set (val) {
                this.$store.commit("setUser", {
                    key: "inp",
                    value: val
                })
            },
        },
        default_img () { return this.$store.state.user.default_img },
        top_up_mask: {
            get () { return this.$store.state.user.mobile_b },
            set (val) {
                this.$store.commit('setUser', { key: 'mobile_b', value: val })
            }
        },
    },
    methods: {
        top_up () {
            this.$store.commit('setUser', { key: 'mobile_b', value: !this.top_up_mask })
        },
        search () {
            if (!this.inp) {
                return false
            }
            if (localStorage.getItem('platform') == 1) {
                let data = {
                    name: this.inp,
                    searchType: 1,
                    doctorId: this.doctorID
                }
                searchDoc(data).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.$store.commit("setUser", {
                            key: "doctorList",
                            value: res.data.data
                        })
                    } else {
                        this.$store.commit("setUser", {
                            key: "doctorList",
                            value: []
                        })
                        this.$store.commit("setUser", {
                            key: "loading6",
                            value: false
                        })
                    }
                })
            } else if (localStorage.getItem('platform') == 2) {
                let data = {
                    name: this.inp,
                    searchType: this.petOrDoc,
                    doctorId: localStorage.getItem('userId')
                }
                searchDoc(data).then(res => {
                    if (this.petOrDoc == 1) {
                        if (res.data.rtnCode == 200) {
                            this.$store.commit("setUser", {
                                key: "doctorList",
                                value: res.data.data
                            })
                        } else {
                            this.$store.commit("setUser", {
                                key: "doctorList",
                                value: []
                            })
                            this.$store.commit("setUser", {
                                key: "loading6",
                                value: false
                            })
                        }
                    } else if (this.petOrDoc == 2) {
                        if (res.data.rtnCode == 200) {
                            this.$store.commit("setUser", {
                                key: "getDoctorMedicalLimitList",
                                value: res.data.data
                            })
                        }
                    }
                })
            }
        },
        showDetails () {
            this.show = !this.show
            this.rotate = !this.rotate
            this.$store.commit("setUser", { key: "rotate", value: this.rotate } )
            // this.$store.commit("setUser", { key: "showList", value: !this.rotate } )
        },
        getUser () {
            this.$store.dispatch("getUser",this)
        },
        getImage (e) {
            if (localStorage.getItem("platform") == 1) {
                this.dealImg(e.target.files[0],(img) => {
                    var formData = new FormData();
                    formData.append('file', img);
                    file(formData).then(res => {
                        if (res.data.rtnCode == 200) {
                            this.userDetails.userImage = res.data.data
                            
                            updateUserDetails(this.userDetails).then(res => {
                                if (res.data.rtnCode == 200) {
                                    this.getUser()
                                } else {
                                    
                                }
                            }).catch(e => {
                                console.log(e)
                            })
                        } else {
                            this.userDetails = {}
                        }
                    })
                })
                
            } else if (localStorage.getItem("platform") == 2) {
                this.dealImg(e.target.files[0],(img) => {
                    var formData = new FormData();
                    formData.append('file', img);
                    file(formData).then(res => {
                        if (res.data.rtnCode == 200) {
                            this.userDetails.headUr = res.data.data
                            this.userDetails.doctorName = "Beck"
                            updateVetDetails(this.userDetails).then(res => {
                                if (res.data.rtnCode == 200) {
                                    this.getUser()
                                }
                            }).catch(e => {
                                console.log(e)
                            })
                        } else {
                            this.userDetails = {}
                        }
                    })
                })
                
            }
        },
        support () {
            this.$router.push({
                name:'support'
            })
        },
        notice () {
            if (localStorage.getItem("platform") == 1) {
                this.$router.push("/notice")
            } else if (localStorage.getItem("platform") == 2) {
                this.$router.push("/vetNotice")
            }
        },
        home () {
            if (localStorage.getItem("platform") == 1) {
                this.$router.push("/customerhomepage")
            } else if (localStorage.getItem("platform") == 2) {
                this.$router.push("/myCustomer")
            }
        },
        logout () {
            this.$store.dispatch("logout", this)
            // var auth2 = gapi.auth2.getAuthInstance();
            // auth2.signOut().then(function(res) {
            //     console.log(res)
            // });
        },
        doctor () {
            if (localStorage.getItem("platform") == 2) {
                this.petOrDoc = 1
                this.identity = false
                this.$router.push("/vetDoctor")
            } else {
                this.$router.push("/myDoctor")
            }
        },
        patient () {
            if (localStorage.getItem("platform") == 2) {
                this.doctorID = localStorage.getItem('userId')
                this.petOrDoc = 2
                this.identity = true
                this.$router.push("/myCustomer")
            }
        }
    }
}
</script>

