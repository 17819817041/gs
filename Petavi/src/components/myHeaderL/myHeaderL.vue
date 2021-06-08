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
        @media screen and (max-width: 1300px) {
            height: 70px;
        }
        .logo {
            background: rgb(255, 255, 255);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 600;
            padding: 15px 30px 0 62px;
            @media screen and (max-width: 564px) {
                height: 70px;
                padding: 10px 10px 0 10px;
            }
        }
        .logo .logo_IMG {
            width: 110px;
            height: 123px;
            transition: 0.25s;
            z-index: 500;
            @media screen and (max-width: 1300px) {
                width: 75px;
                height: 85px;
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
    .homeImg {
        padding-left: 17px;
    }
    .myMessage {
        flex: 10;
    }
    .list_img {
        position: absolute;
        width: 25px;
        height: 25px;
        bottom: 40px;
        left: 180px;
        transition: 0.3s;
        opacity: 0;
        @media screen and (max-width: 1300px) {
            opacity: 1;
        }
        @media screen and (max-width: 664px) {
            opacity: 0;
        }
    }
    .input {
        background: white;
        border-radius: 30px;
        overflow: hidden;
        width: 270px;
    }
    .select {
        padding: 0 15px;
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
    // .name {
    //     transform: translate(-41%,15%);
    // }
    .top {
        margin-top: 10px;
        white-space: nowrap;
    }
    .informationImg {
        margin-top: 3px;
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
            width: 114%;
            bottom: 0px;
            right: -207px;
        }
        @media screen and (max-width: 1230px) {
            width: 106%;
            right: -150px;
        }
        @media screen and (max-width:564px) {
            height: 30px;
            bottom: 5px;
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
        font-size: 12;
    }
    .rotate {
        transform: rotateZ(90deg);
    }
</style>

<template>
    <div class="headerLogoPage">
        <div class="logo">
            <img class="logo_IMG" src="@/assets/img/logo.png" alt="" @click="test"> 

            <img :class="[ {rotate: rotate},'list_img' ]" src="@/assets/img/list.png" alt="" @click="showDetails">
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
                    <el-input style="transform:scale(1);border:none;" prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                </div>
            </div>
            <div v-else></div>
            <div class="function al">
                <div class="al sb function_item" v-if="login" >
                    <div class="userName al sb">
                        
                        <div class="myMessage al">
                            <label for="ava" class="cursor label_img ju al">
                                <input id="ava" v-show="false" type="file" @change="getImage" />   <!-- 头像路径-->
                                <!-- <el-image style="height:60px;" :src="userDetails.userImage" alt="" fit="cover">
                                    <div slot="error" class="image-slot al" style="height: 100%;width:100%">
                                        <i class="el-icon-picture-outline" style="font-size:30px;color:gray"></i>
                                    </div>
                                </el-image> -->
                                <div class="ju al" style="height:55px;overflow:hidden;border-radius:50%;transform:scale(1)">
                                    <img style="height:100%;" v-if="userDetails.userImage" :src="userDetails.userImage" alt="">
                                    <i class="el-icon-picture-outline" v-else style="font-size:30px;color:gray"></i>
                                </div>
                            </label>
                            <div class="name al">{{userDetails.userName}}</div>
                        </div>

                        <div class="sa" style="padding-left:20px;">
                            <div class="informationImg cursor top al" @click="notice">
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
    </div>
</template>

<script>
import { getUserDetails, updateUserDetails, file, vetDetails, updateVetDetails } from "@/axios/request.js"
export default {
    data () {
        return {
            customerId:'Amily Watson',
            identity: true,
            userDetails: {},
            rotate: false
        }
    },
    created () {
        this.getUser()
    },
    watch: {
        login: {
            handler (val) {
                if (val) {
                    this.getUser()
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
        // 
    },
    methods: {
        showDetails () {
            this.show = !this.show
            this.rotate = !this.rotate
            this.$store.commit("setUser", { key: "rotate", value: this.rotate } )
            this.$store.commit("setUser", { key: "showList", value: !this.rotate } )
        },
        getUser () {
            this.$store.dispatch("getUser")
        },
        getImage (e) {
            if (localStorage.getItem("platform") == 1) {
                var formData = new FormData();
                formData.append('file', e.target.files[0]);
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
            } else if (localStorage.getItem("platform") == 2) {
                var formData = new FormData();
                formData.append('file', e.target.files[0]);
                file(formData).then(res => {
                    if (res.data.rtnCode == 200) {
                        this.userDetails.doctorImage = res.data.data
                        this.userDetails.doctorName = "Beck"
                        updateVetDetails(this.userDetails).then(res => {
                            console.log(res,"更换医生头像",this.userDetails)
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
            }
        },
        test () {
            this.$router.push("/test")
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
            // localStorage.clear()
        },
        doctor () {
            if (localStorage.getItem("platform") == 2) {
                this.identity = false
                this.$router.push("/vetDoctor")
            }
        },
        patient () {
            if (localStorage.getItem("platform") == 2) {
                this.identity = true
                this.$router.push("/myCustomer")
            }
        }
    }
}
</script>

