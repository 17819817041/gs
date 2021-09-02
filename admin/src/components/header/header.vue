<template>
    <div class="header">
        <div class="logo" v-if="login">
            <img class="logo_IMG" @click="backhome" src="@/assets/img/logo.png" alt="">
        </div>
        <div class="div sb al">
            <div class="search al sa" v-if="login">
                <div class="top cursor" @click="doctor">All Doctors</div>
                <div class="top cursor" @click="patient">All Pets</div>
                <div class="select top" >
                    <div class="category al">
                        Category
                        <img class="dropimg" src="@/assets/img/arrow.png" alt="">
                    </div>
                </div>
                <div class="input" >
                    <div class="search_btn al ju cursor" @click="search">
                        Search
                    </div>
                    <el-input style="transform:scale(1);border:none;" v-model="inp" prefix-icon="el-icon-search" size="small" 
                    @keyup.enter.native="search" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
                </div>
            </div>
            <div v-else></div>
            <div class="function al">
                <div class="al sb function_item" v-if="login" >
                    <div class="userName al sb">
                        
                        <div class="myMessage al">
                            <label for="ava" class="cursor label_img ju al">
                                <!-- <input id="ava" v-show="false" type="file" @change="getImage"/>  -->
                                <div class="ju al headimg_wrap"  @click="getImage">
                                    <img style="height:100%;" v-if="userDetail.image" :src="userDetail.image" alt="">
                                    <img style="height:100%;" v-else :src="default_img" alt="">
                                </div>
                            </label>
                            <div class="name white al">{{userDetail.name}}</div>
                            <div class="al">
                                <img class="online_img cursor"  @click="Conference" src="@/assets/img/online.png" alt="">
                            </div>
                        </div>

                        <div class="sa">
                            <div class="informationImg cursor al">
                                <img src="@/assets/img/information1.png" alt="">
                            </div>
                            <div class="homeImg al cursor">
                                <img src="@/assets/img/home.png"  @click="backhome" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="logout cursor bold tc al ju" @click="logout">
                        <div >Logout</div>     
                    </div>
                </div>
                <!-- <div class="helpBtn cursor al ju" @click="support" v-if="login">
                    <div class="al">
                        <img src="@/assets/img/what.png" alt="">
                    </div>
                    <div class="suppot"> Help & Support </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { searchDoc, file, updateAdmin } from "@/axios/request.js"
export default {
    data () {
        return {
            petOrDoc: 1,
        }
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
        },
        userDetail: {
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
    },
    created () {
        this.getUser()
        if (this.$route.name == 'petPage') {
            this.identity = false
            this.petOrDoc = 2
        }
    },
    methods: {
        Conference () {
            this.$router.push("/conference")
        },
        getUser () {
            this.$store.dispatch('getUser',this)
        },
        logout () {
            this.$store.dispatch("logout", this)
            // var auth2 = gapi.auth2.getAuthInstance();
            // auth2.signOut().then(function(res) {
            //     console.log(res)
            // });
        },
        backhome () {
            this.$router.push('/home')
        },
        doctor () {
            this.petOrDoc = 1
            this.$router.push("/doctor")
        },
        patient () {
            this.petOrDoc = 2
            this.$router.push("/petPage")
        },
        getImage (e) {
            this.$router.push('/setting')
            // this.dealImg(e.target.files[0],(img) => {
            //     var formData = new FormData();
            //     formData.append('file', img);
            //     file(formData).then(res => {
            //         console.log(res)
            //         if (res.data.rtnCode == 200) {
            //             this.userDetail.image = res.data.data
            //             let data = {
            //                 userId: localStorage.getItem('adminUserId'),
            //                 image: this.userDetail.image
            //             }
            //             updateAdmin(data).then(res => {
            //                 if (res.data.rtnCode == 200) {
            //                     this.$store.dispatch('getUser',this)
            //                     this.$message({
            //                         type: 'success',
            //                         message: 'Successfully modified!'
            //                     })
            //                     this.edit = 1
            //                 } else {
            //                     this.$message({
            //                         type: 'error',
            //                         message: 'Fail to edit!'
            //                     })
            //                 }
            //             }).catch(e => {
            //                 this.$message({
            //                     type: 'error',
            //                     message: 'Fail to edi!'
            //                 })
            //             })
            //         } else {
            //             this.userDetail.image = ''
            //         }
            //     })
            // })
        },
        search () {
            if (!this.inp) {
                return false
            }
            
            let data = {
                name: this.inp,
                searchType: this.petOrDoc,
                doctorId: -1
            }
            if (this.petOrDoc == 1) {
                this.$store.commit("setUser", {
                    key: "doctorList",
                    value: []
                })
            } else if (this.petOrDoc == 2) {
                this.$store.commit("setUser", {
                    key: "getDoctorMedicalLimitList",
                    value: []
                })
            }
            this.$store.commit("setUser", {
                key: "loading6",
                value: true
            })
            searchDoc(data).then(res => {
                this.$store.commit("setUser", {
                    key: "loading6",
                    value: false
                })
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
                    } else {
                        this.$store.commit("setUser", {
                            key: "getDoctorMedicalLimitList",
                            value: []
                        })
                        this.$store.commit("setUser", {
                            key: "loading6",
                            value: false
                        })
                    }
                }
            })
        },
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .header {
        @media screen and (max-width: 1300px) {
            height: 80px;
        }
        width: 100%;
        height: 109px;
        background: @ThemeColor;
        position: relative;
    }
    .logo {
        background: rgb(255, 255, 255);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 600;
        padding: 15px 30px 0 62px;
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
    }

    .div {     //状态信息显示
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
            width: 109%;
            right: -157px;
        }
    }
    .div .search {
        @media screen and (max-width:1200px) {
            width: 45%;
        }
    }
    .div div {
        @media screen and (max-width: 1300px) {
            transition: 0.25s;
            // transform: scale(0.9);
        }
    }

    .headimg_wrap {
        width: 55px;
        height:55px;
        overflow:hidden;
        margin-right: 10px;
        border-radius:50%;
        img {
            height: 100%;
        }
    }


    .dropimg {
        width: 20px;
        padding-left: 5px;
        margin-top: 5px;
    }
    .category {
        color: white;
        font-size: 12px;
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
            background: @ThemeColor;
            z-index: 400;
        }
    }
    .top {
        color: white;
        margin-top: 10px;
        margin-left: 20px;
        white-space: nowrap;
    }
    .informationImg {
        margin-top: 3px;
        img {
            width: 35px;
            height: 32px;
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
        background: @logoutBtn;
        // color: white;
    }
    .suppot {
        font-size: 12px;
    }
    .userName {
        // width: 250px;
        height: 40px;
    }
    .homeImg {
        padding-left: 6px;
        padding-right: 10px;
        img {
            width: 25px;
            height: 25px;
        }
    }
    .myMessage {
        flex: 10;
    }
    .online_img {
        height: 25px;
        margin: 0 5px 0 10px;
    }
</style>