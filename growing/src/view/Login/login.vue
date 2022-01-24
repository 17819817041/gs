<template>
    <div class="Login" v-loading="loading">
        <div class="form_item">
            <div class="Back1" v-show="active" @click="active = false"></div>
            <div class="backsh">
                <div class="form_item_c_wrap sb">
                    <div class="welcome sb">
                        <div>
                            <div class="guanggao tc">SMART WINDOW ADVERTISEMENT PLATFORM </div>
                            <div class="guanggao tc">智能櫥窗{{$t("lang.plat")}}</div>
                        </div>
                    </div>
                    <div class="VIDEO al ju">
                        <!-- webkit-playsinline="true" playsinline="true" 設置ios播放視頻禁止自動全屏 -->
                        <div class="video_wrap_v">
                            <video id="myVideo" muted autoplay="autoplay" loop
                                webkit-playsinline="true" playsinline="true"
                                :controls="Controls">
                                <source src="@/assets/img/compoundeyes.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="i_form al">
                        <div>
                            <div class="Logo1 ju">
                                <img src="@/assets/img/logo.png" alt="">
                            </div>
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
                                        <input type="password" class="width100" v-model="password" @keyup.enter="login">
                                    </div>
                                </div>
                                <div class="login_btn tc cursor" @click="login">{{$t("lang.login")}}</div>
                                <div class="sign_btn tc cursor" @click="sign">{{$t("lang.register")}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="jiao"></div>
                    <div class="yuan"></div>
                </div>
            </div>
        </div>
        
        <div class="mobile_back al">
            <div>
                <div class="mobile_logo mg"><img src="@/assets/img/logo.png" alt=""></div>
                <div class="mobile_login_page mg">
                    <div>
                        <div class="mobile_guanggao tc">SMART WINDOW ADVERTISEMENT PLATFORM </div>
                        <div class="mobile_guanggao tc">智能櫥窗{{$t("lang.plat")}}</div>
                    </div>

                    <div class="mobile_msg_input" style="margin-top: 15px;">
                        <div class="mobile_login_text sb al">
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
                        <div class="input_form mobile_pwd_inp">
                            <div class="user_title">{{$t("lang.pwd")}}</div>
                            <div class="user">
                                <input type="password" class="width100" v-model="password" @keyup.enter="login">
                            </div>
                        </div>
                        <div class="mobile_login_btn tc cursor" @click="login">{{$t("lang.login")}}</div>
                        <div class="sign_btn tc cursor" @click="sign">{{$t("lang.register")}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Login } from "@/axios/request.js"
export default {
    data () {
        return {
            preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: false,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: 'true',              //是否自动播放
            Poster: '',  
            active: false,
            lists: [],
            userName: '雾里看花',
            password: '123',
            
            // userName: 'Advertising',
            // password: '123',
            
            // userName: '666666',
            // password: '123',

            // userName: 'admin',
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
            if (this.userName == '' || this.password == '') {
                this.$message({
                    type: 'warning',
                    message: '用戶名或密碼不能為空'
                })
            } else {
                this.loading = true
                let data = {
                    userName: this.userName,
                    pwd: this.password
                }
                Login(data).then(res => {
                    console.log(res)
                    this.loading = false
                    if (res.data.rtnCode == 200) {
                        this.$store.dispatch('getTimeIntervaDetailslList',this)
                        this.$store.dispatch('getAddress',this) 
                        this.$store.dispatch('getTypeList',this)
                        this.$store.dispatch('incomePriceId',this)
                        localStorage.setItem('compoundeyesToken',res.data.data.token)
                        localStorage.setItem('compoundeyesUserId',res.data.data.userId)
                        if (res.data.data.mainUrl == '1') {
                            // this.$router.push('/Index')
                            this.$router.push('/AdIndex')
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
            }
            
        },
        sign () {
            this.$router.push('/Sign')
        },
        zh () {
            localStorage.setItem('locale','zh-CN')
            this.$i18n.locale = 'zh-CN'
            this.active = false
            this.$store.dispatch('setLang', 'zh-TW')
        },
        en () {
            localStorage.setItem('locale','en-US')
            this.$i18n.locale = 'en-US'
            this.active = false
            this.$store.dispatch('setLang', 'en-US')
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
    @import "@/less/style.less";
    .mobile_back {
        background: #3773D5;
        height: 100%;
        display: none;
        @media screen and (max-width: 564px) {
            display: flex;
        }
    }
    .mobile_logo {
        width: 90%;
        background: white;
        border-radius: 80px;
        border: solid @themeColor 15px;
        img {
            width: 100%;
        }
    }
    .mobile_login_page {
        margin-top: 20px;
        border: solid 15px @themeColor;
        border-radius: 50px;
        background: white;
        width: 95%;
        padding: 15px 20px;
    }
    .mobile_guanggao {
        font-size: 12px;
        color: #3773D5;
        font-weight: bold;
    }



    .lang {
        width: 100px;
        height: 30px;
        background: white;
        font-size: 12px !important;
        border: solid 1px rgb(228, 226, 226);
        border-radius: 3px;
        color: gray;
        position: relative;
        z-index: 191;
        .lang_item {
            padding: 5px;
            white-space: nowrap;
        }
    }
    .changeLang {
        position: absolute;
        left: -1px;
        top: 27px;
        width: 100px;
        overflow: hidden;
        font-size: 12px !important;
        color: gray;
        // border-top: none;
        // border: solid 1px rgb(231, 231, 231);
        border: solid 1px rgb(228, 226, 226);
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
        overflow: hidden;
        background: #3773D5 !important;
        position: relative;
        .form_item {
            position: absolute;
            left: 0;
            top: 50%;
            width: 90%;
            height: 65%;
            max-height: 800px;
            transform: translate(0%, -50%);
            color: white;
            z-index: 101;
            min-height: 295px;
            @media screen and (max-height: 600px) {
                top: 18%;
                transform: translate(0%, 0%);
            }
            @media screen and (max-width: 564px) {
                display: none;
            }
            @media screen and (max-height: 430px) {
                top: 12%;
                min-height: 316px;
            }
            .Back1 {
                position: absolute;
                width: 9999px;
                height: 9999px;
                top: -770px;
                left: 0;
                z-index: 101;
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
        margin-top: -10px;
        width: 100%;
        img {
            width: 96%;
        }
        // @media screen and (max-width: 1100px) {
        //     margin-bottom: -30px;
        // }
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .backsh {
        width: 100%;
        height: 100%;
        background: @themeColor;
        border-radius: 60px;
        @media screen and (max-height: 400px) {
            height: 89%;
        }
        @media screen and (max-height: 335px) {
            height: 81%;
        }
    }
    .form_item_c_wrap {
        padding: 0 20px;
        width: calc(100% - 20px);
        background: white;
        height: 100%;
        border-radius: 0 40px 40px 0;
        position: relative;
        .jiao {
            position: absolute;
            background: white;
            width: 100px;
            height: 100px;
            bottom: -99px;
            left: 0;
        }
        .yuan {
            position: absolute;
            background: #3773D5;
            width: 100px;
            border-radius: 50% 0 0 0;
            z-index: 1;
            height: 100px;
            bottom: -100px;
            left: 0;
        }
    }
    .i_form {
        width: 29%;
        background: white;
        max-width: 460px;
        min-width: 295px;
        border-radius: 0 30px 30px 0;
        // padding: 45px 12px;
        @media screen and (max-height: 666px) {
            height: calc(120%);
            transform: scale(0.8) translate(0, -10%);
        }
        @media screen and (max-height: 557px) {
            height: calc(130%);
            transform: scale(0.7) translate(0, -17%);
        }
        @media screen and (max-height: 335px) {
            height: calc(130%);
            transform: scale(0.65) translate(0, -18%);
        }
        @media screen and (max-width: 564px) {
            min-width: 295px;
        }
        .login_text {
            font-size: 25px;
            padding-bottom: 30px;
            color: rgb(0, 0, 0);
            @media screen and (max-height: 360px) {
                font-size: 20px;
            }
        }
    }
    .mobile_login_text {
        font-size: 23px;
        padding-bottom: 15px;
        color: rgb(0, 0, 0);
    }
    .VIDEO {
        width: 71%;
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .msg_input {
        width: calc(80% + 32px);
        margin: auto;
        padding-bottom: 15px;
    }
    .mobile_msg_input {
        width: calc(80% + 32px);
        margin: auto;
        padding-bottom: 10px;
    }
    .user_title, .pwd {
        color: #414B55;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 10px;
    }
    .pwd_inp {
        margin-top: 25px;
    }
    .mobile_pwd_inp {
        margin-top: 15px;
    }
    .user {
        border-bottom: solid 1px gray;
        input {
            border: none;
            outline: none;
            font-size: 18px;
            background: none;
            color: rgb(97, 97, 97);
            @media screen and (max-width: 800px) {
                font-size: 15px;
            }
            @media screen and (max-height: 500px) {
                font-size: 13px;
            }
        }
    }
    .video_wrap_v {
        height: 90%;
        width: 95%;
        max-height: 469px;
        // background: black;
        // margin-left: 30px;
        video {
            height: 100%;
            width: 100%;
        }
    }
    .welcome {
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0%;
        top: -100px;
        padding: 0 10%;
        @media screen and (max-width: 1250px) {
            top: -70px;
        }
        @media screen and (max-height: 600px) {
            top: -60px;
        }
        @media screen and (max-height: 430px) {
            top: -40px;
        }
    }
    .login_btn {
        font-size: 18px;
        color: rgb(255, 255, 255);
        background: @themeColor;
        // border: solid 3px #8268D5;
        border-radius: 3px;
        border: solid 3px @themeColor;
        padding: 3px 0;
        margin-top: 30px;
        margin-bottom: 15px;
        @media screen and (max-width: 800px) {
            font-size: 15px;
            padding: 3px 0;
        }
    }
    .sign_btn {
        font-size: 18px;
        color: rgb(255, 255, 255);
        background: @miniBlue;
        // border: solid 3px #8268D5;
        border-radius: 3px;
        border: solid 3px @miniBlue;
        padding: 3px 0;
        @media screen and (max-width: 800px) {
            font-size: 15px;
            padding: 3px 0;
        }
    }
    .mobile_login_btn {
        font-size: 15px;
        color: rgb(255, 255, 255);
        background: @themeColor;
        // border: solid 3px #8268D5;
        border-radius: 3px;
        border: solid 3px @themeColor;
        padding: 3px 0;
        margin-top: 20px;
        margin-bottom: 15px;
        @media screen and (max-width: 800px) {
            font-size: 15px;
            padding: 3px 0;
        }
    }
    .guanggao {
        width: 100%;
        margin: auto;
        font-size: 25px;
        color: #ffffff;
        @media screen and (max-width: 564px) {
            font-size: 15px;
        }
        @media screen and (max-height: 600px) and (max-width: 1900px) and (min-width: 564px) {
            font-size: 20px;
        }
        @media screen and (max-height: 430px) and (max-width: 1900px) and (min-width: 564px) {
            font-size: 15px;
        }
    }
    .welcome_text {
        font-size: 50px;
        font-weight: 100;
        color: white;
        @media screen and (max-width: 800px) {
            font-size: 23px;
        }
    }
</style>