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
        .logo {
            background: white;
            position: absolute;
            left: 0;
            top: 0;
            padding: 15px 30px 0 62px;
        }
        .logo img {
            width: 110px;
            height: 123px;
            transition: 0.25s;
            @media screen and (max-width: 1300px) {
                width: 75px;
                height: 85px;
            }
        }
        .helpBtn {
            padding: 0 3px;
            width: 120px;
            height: 40px;
            border-radius: 30px;
            background: @helpBtn;
            
        }
        .logout {
            width: 120px;
            height: 40px;
            border-radius: 30px;
            margin: 0 10px;
            background: @logout;
        }
        .userName {
            width: 250px;
            height: 40px;
            margin-right: 20px;
        }
    }
    .input {
        background: white;
        border-radius: 30px;
        overflow: hidden;
        width: 280px;
    }
    .select {
        padding: 0 15px;
    }
    .headImage {
        border: solid 1px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .name {
        transform: translate(-10%,15%);
    }
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
        right: 20px;
        bottom: 9px;
        transition: 0.25s;
        @media screen and (max-width: 1300px) {
            width: 80%;
            bottom: 0px;
        }
        @media screen and (max-width: 1200px) {
            right: 0;
        }
    }
    .div .search {
        @media screen and (max-width:1200px) {
            width: 40%;
        }
    }
    .div .function {
        @media screen and (max-width:1200px) {
            width: 60%;
        }
    }
    .div div {
        @media screen and (max-width: 1300px) {
            transition: 0.25s;
            transform: scale(0.9);
        }
    }
    .dropimg {
        padding-left: 5px;
    }
</style>

<template>
    <div class="headerLogoPage">
        <div class="logo">
            <img src="@/assets/img/logo.png" alt="" @click="test">
        </div>
        <div class="div sb al">
            <div class="search al sa" v-if="login">
                <div class="top" v-if="identity" @click="doctor">All Doctors</div>
                <div class="top" v-else @click="patient">All Patients</div>
                <div class="select top" style="font-size:7px" >
                    <div>
                        Category
                        <img class="dropimg" src="@/assets/img/drop.png" alt="">
                    </div>
                </div>
                <div class="input" >
                    <el-input prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                </div>
            </div>
            <div v-else></div>
            <div class="function sb al">
                <div class="sb al" v-if="login">
                    <div class="userName al sb">
                        
                        <label for="ava" class="cursor">
                            <input id="ava" v-show="false" type="file" @change="getImage" />   <!-- 头像路径-->
                            <img class="headImage cursor" :src="userDetails.userImage" alt="">
                        </label>
                        

                        <div class="name">{{userDetails.userName}}</div>
                        <div class="informationImg cursor top al" @click="notice">
                            <img src="@/assets/img/information.png" alt="">
                        </div>
                        <div class="homeImg al cursor" @click="home">
                            <img src="@/assets/img/home.png" alt="">
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
                    <div class="suppot size12"> Help & Suppot </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserDetails, updateUserDetails, file } from "@/axios/request.js"
export default {
    data () {
        return {
            customerId:'Amily Watson',
            identity: true,
            userDetails: {},
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
        }
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
        }
    },
    methods: {
        getUser () {
            const data = {
                userId: localStorage.getItem("userId"),
                // platform: localStorage.getItem("platform"),
                // token: localStorage.getItem("Token")
            }
            getUserDetails(data).then(res => {
                if (res.data.rtnCode == 200) {
                    this.userDetails = res.data.data
                    this.login = true
                    this.$store.dispatch("IMLogin")
                } else {
                    this.userDetails = {}
                    // this.login = false
                    this.login = true
                }
                
            }).catch(e => {
                console.log(e)
                // this.login = false
                this.login = true
            })
        },
        getImage (e) {
            var formData = new FormData();
            formData.append('file', e.target.files[0]);
            file(formData).then(res => {
                if (res.data.rtnCode == 200) {
                    this.userDetails.userImage = res.data.data
                    updateUserDetails(this.userDetails).then(res => {
                        if (res.data.rtnCode == 200) {
                            this.getUser()
                        }
                    })
                }
            })
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
            if (data.platform == 1) {
                this.$router.push("/notice")
            } else if (data.platform == 2) {
                this.$router.push("/vetNotice")
            }
        },
        home () {
            this.$router.push("/customerhomepage")
        },
        logout () {
            this.$store.dispatch("logout", this)
            // localStorage.clear()
            

        },
        doctor () {
            this.identity = false
            this.$router.push("/vetDoctor")
        },
        patient () {
            this.identity = true
            this.$router.push("/myCustomer")
        }
    }
}
</script>

