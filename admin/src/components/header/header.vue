<template>
    <div class="header">
        <div class="logo" v-if="active">
            <img class="logo_IMG" src="@/assets/img/logo.png" alt="">
        </div>
        <div class="div sb al">
            <div class="search al sa" v-if="login">
                <div class="top cursor">All Doctors</div>
                <div class="top cursor">All Patients</div>
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
            <!-- <div class="input" >
                <el-input style="transform:scale(1);border:none;" prefix-icon="el-icon-search" size="small" placeholder="Search Doctors, Clinics, Hospitals etc."></el-input>
            </div> -->
            <div class="function al">
                <div class="al sb function_item" v-if="login" >
                    <div class="userName al sb">
                        
                        <div class="myMessage al">
                            <label for="ava" class="cursor label_img ju al">
                                <input id="ava" v-show="false" type="file" />   <!-- 头像路径-->
                                <div class="ju al headimg_wrap">
                                    <!-- <img style="height:100%;" v-if="userDetails.userImage" :src="userDetails.userImage" alt=""> -->
                                    <img src="@/assets/img/head.png" alt="">
                                    <!-- <i class="el-icon-picture-outline" style="font-size:30px;color:gray"></i> -->
                                </div>
                            </label>
                            <!-- <div class="name al">{{userDetails.userName}}</div> -->
                            <div class="name white al">666</div>
                        </div>

                        <div class="sa" style="padding-left:14px;">
                            <div class="informationImg cursor al" @click="notice">
                                <img src="@/assets/img/information.png" alt="">
                            </div>
                            <div class="homeImg al cursor" @click="home">
                                <img src="@/assets/img/home.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="logout cursor bold tc al ju" @click="logout">
                        <div >Logout</div>     
                    </div>
                </div>
                <div class="helpBtn cursor al ju" @click="support" v-if="login">
                    <div class="al">
                        <img src="@/assets/img/what.png" alt="">
                    </div>
                    <div class="suppot"> Help & Support </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: {
        active: {
            type: Boolean,
            default: true
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
        }
    },
    methods: {
        logout () {
            console.log('login')
        },
        support () {
            console.log('support')
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .header {
        @media screen and (max-width:564px) {
            height: 70px;
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

    .headimg_wrap {
        height:55px;
        overflow:hidden;
        margin-right: 10px;
        border-radius:50%;
    }


    .dropimg {
        padding-left: 5px;
    }
    .category {
        color: white;
        font-size: 12px;
    }

    .input {
        margin-left: 35px;
        background: white;
        border-radius: 30px;
        overflow: hidden;
        width: 270px;
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
</style>