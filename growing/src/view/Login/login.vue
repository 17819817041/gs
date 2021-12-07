<template>
    <div class="Login flex" v-loading="loading">
        <div class="growing"><img style="height: 148%" src="@/assets/img/growing.jpg" alt=""></div>
        <div class="form_item">
            <div class="Logo1 ju">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="width100 form_item_c_wrap">
                <div class="mobile_title">
                    <div class="Logo ju">
                        <img src="@/assets/img/logo.png" alt="">
                    </div>
                    <div class="guanggao tc">SMART WINDOW ADVERTISEMENT PLATFORM 智能櫥窗{{$t("lang.plat")}}</div>
                    <div class="welcome_text tc">Welcome</div>
                </div>
                <div class="i_form">
                    <div class="msg_input">
                        <div class="login_text sb al">
                            <div>{{$t("lang.login")}}</div>
                            <div class="lang bold al">
                                <div class="al cursor lang_item" @click="active = !active">
                                    <div class="al" v-if="$i18n.locale == 'zh-CN'">
                                        <img src="@/assets/img/hk.gif" alt=""><span style="margin: 0 29px 0 5px;">中文</span> 
                                        <img :class="['l_arrow', { 'rota': active } ]" src="@/assets/img/arrow_up.png" alt="">
                                    </div>
                                    <div class="al" v-else-if="$i18n.locale == 'en-US'">
                                        <img src="@/assets/img/us.gif" alt=""><span style="margin: 0 10px 0 5px;">English</span> 
                                        <img :class="['l_arrow', { 'rota': active } ]" src="@/assets/img/arrow_up.png" alt="">
                                    </div>
                                </div>
                                <div :class="['changeLang',{ 'height': !active }]">
                                    <div class="al cursor" @click="zh">
                                        <img src="@/assets/img/hk.gif" alt=""><span style="margin: 0 25px 0 5px;">中文</span>
                                    </div>
                                    <div class="al cursor" @click="en">
                                        <img src="@/assets/img/us.gif" alt=""><span style="margin: 0 18px 0 5px;">English</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="input_form">
                            <div class="user_title">{{$t("lang.user")}}</div>
                            <div class="user">
                                <input type="text" class="width100" v-model="userName">
                            </div>
                        </div>
                        <div class="input_form pwd_inp">
                            <div class="user_title">{{$t("lang.pwd")}}</div>
                            <div class="user">
                                <input type="password" class="width100" v-model="password">
                            </div>
                        </div>
                        <div class="login_btn tc cursor" @click="login">{{$t("lang.login")}}</div>
                        <div class="sign_btn tc cursor" @click="sign">{{$t("lang.register")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome al ju">
            <div style="margin-bottom: 70px;">
                <div class="guanggao tc">SMART WINDOW ADVERTISEMENT PLATFORM </div>
                <div class="guanggao tc">智能櫥窗{{$t("lang.plat")}}</div>
                <div class="welcome_text tc">Welcome</div>
            </div>
        </div>
        <div class="form">
            <img src="@/assets/img/growing.jpg" alt="">
            <div class="filter"></div>
        </div>
    </div>
</template>

<script>
import { Login } from "@/axios/request.js"
export default {
    data () {
        return {
            active: false,
            lists: [],
            userName: '雾里看花',
            password: '123',
            
            // userName: '666666',
            // password: '123',

            // userName: '123',
            // password: '123',

            // userName: '',
            // password: '',
            loading: false,
        }
    },
    mounted () {
        
    },
    methods: {
        login () {
            this.loading = true
            let data = {
                userName: this.userName,
                pwd: this.password
            }
            Login(data).then(res => {
                console.log(res)
                this.loading = false
                if (res.data.rtnCode == 200) {
                    localStorage.setItem('compoundeyesToken',res.data.data.token)
                    localStorage.setItem('compoundeyesUserId',res.data.data.userId)
                    if (res.data.data.mainUrl == '1') {
                        this.$router.push('/Index')
                        localStorage.setItem('plat','廣告商')
                        localStorage.setItem('platform',1)
                    } else if (res.data.data.mainUrl == '2') {
                        localStorage.setItem('plat','店鋪')
                        this.$router.push('/PlatIndex')
                        localStorage.setItem('platform',2)
                    } else if (res.data.data.mainUrl == '3') {
                        localStorage.setItem('plat','廣告後台')
                        this.$router.push('/AdminIndex')
                        localStorage.setItem('platform',3)
                    } else {
                        localStorage.setItem('plat','廣告商')
                        this.$router.push('/Index')
                        localStorage.setItem('platform',1)
                    }
                } else {
                    this.$message({
                        type: 'warning',
                        message: res.data.msg
                    })
                }
            }).catch(e => {
                this.$message({
                    type: 'error',
                    message: '登錄失敗!'
                })
                this.loading = false
            })
        },
        sign () {
            this.$router.push('/Sign')
        },
        zh () {
            localStorage.setItem('locale','zh-CN')
            this.$i18n.locale = 'zh-CN'
            this.active = false
        },
        en () {
            localStorage.setItem('locale','en-US')
            this.$i18n.locale = 'en-US'
            this.active = false
        },
        // login () {
        //     if (this.userName == 1) {
        //         this.$router.push('/Index')
        //         localStorage.setItem('plat','廣告商')
        //         localStorage.setItem('platform',1)
        //     } else if (this.userName == 2) {
        //         localStorage.setItem('plat','店鋪')
        //         this.$router.push('/PlatIndex')
        //         localStorage.setItem('platform',2)
        //     } else if (this.userName == 3) {
        //         localStorage.setItem('plat','廣告後台')
        //         this.$router.push('/AdminIndex')
        //         localStorage.setItem('platform',3)
        //     } else {
        //         localStorage.setItem('plat','廣告商')
        //         this.$router.push('/Index')
        //         localStorage.setItem('platform',1)
        //     }
        // }
    }
}
</script>

<style lang='less' scoped>
    .lang {
        width: 100px;
        height: 30px;
        background: white;
        font-size: 12px !important;
        // border: solid 1px rgb(231, 231, 231);
        color: gray;
        position: relative;
        .lang_item {
            padding: 5px;
        }
    }
    .changeLang {
        position: absolute;
        left: 0px;
        top: 30px;
        width: 100px;
        overflow: hidden;
        font-size: 12px !important;
        color: gray;
        // border-top: none;
        // border: solid 1px rgb(231, 231, 231);
        background: white;
        transition: 0.2s;
        max-height: 60px;
        div {
            padding: 5px;
        }
    }
    .rota {
        transform: rotateZ(0deg) !important;
    }
    .height {
        max-height: 0 !important;
        // border: solid 1px #ffffff;
    }
    .l_arrow {
        width: 16px;
        height: 16px;
        transition: 0.2s;
        transform: rotateZ(180deg);
    }
    .Login {
        width: 100%;
        height: 100%;
        // background: url('../../assets/img/growing.jpg');
        background-size: auto 100%;
        position: relative;
        .form_item {
            position: absolute;
            left: 55%;
            top: 50%;
            transform: translate(0, -50%);
            width: 35%;
            // height: 85%;
            color: white;
            z-index: 100;
            min-height: 295px;
            @media screen and (max-width: 564px) {
                left: 50%;
                top: 45%;
                transform: translate(-50%, -50%);
                width: 50%;
                min-width: 345px;
                min-height: 425px;
                height: 552px;
            }
        }
        .growing {
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            height: 100%;
            width: 100%;
            z-index: 0;
        }
    }
    .Logo {
        height: 40px;
        margin-bottom: 30px;
        img {
            height: 70px;
        }
    }
    .Logo1 {
        // margin-bottom: -20px;
        width: 100%;
        img {
            width: 60%;
        }
        @media screen and (max-width: 1100px) {
            margin-bottom: -30px;
        }
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .form_item_c_wrap {
        height: 100%;
    }
    .mobile_title {
        width: 100%;
        display: none;
        @media screen and (max-width: 564px) {
            display: block;
        }
    }
    .i_form {
        width: 100%;
        height: 80%;
        background: #5C48B7;
        // background: #0c46a3;
        padding: 35px 15px;
        margin-top: 20px;
        overflow: auto;
        box-shadow: rgb(0, 0, 0) 30px 30px 60px;
        @media screen and (max-width: 1050px) {
            padding: 40px;
        }
        @media screen and (max-width: 800px) {
            padding: 25px;
            height: 450px;
        }
        @media screen and (max-height: 500px) {
            height: 80%;
            padding: 10px 30px;
        }
        .login_text {
            font-size: 35px;
            padding-bottom: 45px;
            color: rgb(255, 255, 255);
            @media screen and (max-width: 1400px) {
                font-size: 35px;
                padding-bottom: 30px;
            }
            @media screen and (max-width: 1300px) {
                font-size: 30px;
                padding-bottom: 20px;
            }
            @media screen and (max-width: 800px) {
                font-size: 25px;
                padding: 3px 0;
            }
            @media screen and (max-height: 360px) {
                font-size: 20px;
            }
        }
    }
    .msg_input {
        width: calc(80% + 32px);
        margin: auto;
        padding-bottom: 15px;
    }
    .user_title, .pwd {
        color: #BA97EE;
        font-size: 20px;
        margin-bottom: 20px;
        @media screen and (max-width: 1680px) {
            font-size: 17px;
            margin-bottom: 15px;
        }
        @media screen and (max-width: 1400px) {
            font-size: 15px;
            margin-bottom: 10px;
        }
        @media screen and (max-width: 1200px) {
            font-size: 14px;
            margin-bottom: 7px;
        }
        @media screen and (max-height: 500px) {
            margin-bottom: 5px;
        }
    }
    .pwd_inp {
        margin-top: 70px;
        @media screen and (max-width: 1680px) {
            margin-top: 50px;
        }
        @media screen and (max-width: 1400px) {
            margin-top: 40px;
        }
        @media screen and (max-width: 1200px) {
            margin-top: 30px;
        }
    }
    .user {
        border-bottom: solid 1px;
        input {
            border: none;
            outline: none;
            font-size: 25px;
            background: none;
            color: white;
            @media screen and (max-width: 800px) {
                font-size: 15px;
            }
            @media screen and (max-height: 500px) {
                font-size: 13px;
            }
        }
    }
    .welcome {
        width: 55%;
        height: 100%;
        position: relative;
        z-index: 1;
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .form {
        width: 45%;
        height: 100%;
        transform: rotateY(180deg);
        overflow: hidden;
        position: relative;
        z-index: 10;
        @media screen and (max-width: 564px) {
            width: 100%;
        }
        img {
            filter:blur(12px); // 模糊度
            transform: rotateY(180deg);
        }
        .filter {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0.45;
            display: inline-block;
            background: #5C48B7 !important;
            z-index: 199;
        }
        
    }
    .login_btn, .sign_btn {
        font-size: 22px;
        color: #604EB9;
        background: white;
        // border: solid 3px #8268D5;
        border: solid 3px #ffffff;
        padding: 5px 0;
        @media screen and (max-width: 1400px) {
            font-size: 20px;
            padding: 6px 0;
        }
        @media screen and (max-width: 1200px) {
            padding: 5px 0;
        }
        @media screen and (max-width: 800px) {
            font-size: 15px;
            padding: 3px 0;
        }
        @media screen and (max-width: 564px) {
            font-size: 19px;
            padding: 8px 0;
        }
    }
    .login_btn {
        margin-top: 60px;
        margin-bottom: 30px;
        @media screen and (max-width: 1680px) {
            margin-top: 60px;
            margin-bottom: 20px;
        }
        @media screen and (max-width: 1400px) {
            margin-top: 50px;
            margin-bottom: 15px;
        }
        @media screen and (max-width: 1200px) {
            margin-top: 50px;
            margin-bottom: 15px;
        }
        @media screen and (max-width: 800px) {
            font-size: 15px;
            padding: 3px 0;
        }
        @media screen and (max-width: 564px) {
            font-size: 19px;
            padding: 8px 0;
        }
        @media screen and (max-height: 500px) {
            margin-top: 20px !important;
            margin-bottom: 10px;
        }
    }

    .guanggao {
        width: 80%;
        margin: auto;
        font-size: 36px;
        color: #D3ACFF;
        @media screen and (max-width: 1200px) {
            font-size: 30px;
        }
        @media screen and (max-width: 1200px) {
            font-size: 16px;
        }
        @media screen and (max-width: 564px) {
            font-size: 12px;
        }
        @media screen and (max-width: 1000px) and (max-height: 500px) {
            font-size: 12px;
        }
    }
    .welcome_text {
        font-size: 50px;
        font-weight: 100;
        color: white;
        @media screen and (max-width: 1200px) {
            font-size: 30px;
        }
        @media screen and (max-width: 800px) {
            font-size: 23px;
        }
    }
</style>