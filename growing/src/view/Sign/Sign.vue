<template>
    <div class="Sign flex" v-loading='loading'>
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
                        <div class="video_wrap_v">
                            <video id="myVideo" muted autoplay="autoplay" loop
                                :controls="Controls">
                                <source src="@/assets/img/compoundeyes.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div v-if="active1" class="overh al">
                        <div class="i_form">
                            <div class="Logo1 ju">
                                <img src="@/assets/img/logo.png" alt="">
                            </div>
                            <div class="login_text sb al">
                                <div class="">{{$t("lang.register")}}</div>
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
                            <div class="msg_input">
                                <div style="max-height: 145px;height: 145px;overflow: hidden;">
                                    <transition name="fade">
                                        <div v-show="step == 1 && stepActive == true" style="max-height: 145px;overflow: hidden;">
                                            <div class="input_form">
                                                <div class="user_title">{{$t("lang.userId")}}</div>
                                                <div class="user">
                                                    <el-select v-model="userType" class="width100" style="height: 30px" :placeholder="$t('lang.select')">
                                                        <el-option :label="$t('lang.store')" :value='2'></el-option>
                                                        <el-option :label="$t('lang.advertisers')" :value="1"></el-option>
                                                    </el-select>
                                                </div>
                                            </div>
                                            <div class="input_form pwd_inp">
                                                <div class="user_title">{{$t("lang.name")}}</div>
                                                <div class="user">
                                                    <input type="text" v-model="userName">
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                    <transition name="fade">
                                        <div v-show="step == 2 && stepActive == true" style="max-height: 129px;">
                                            <div class="input_form pwd_inp">
                                                <div class="user_title">{{$t("lang.phone")}}</div>
                                                <div class="user">
                                                    <input type="text" v-model="phone">
                                                </div>
                                            </div>
                                            <div class="input_form pwd_inp">
                                                <div class="user_title">{{$t("lang.email")}}</div>
                                                <div class="user">
                                                    <input type="text" v-model="email" oninput="value=value.replace(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$,'')">
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                    <transition name="fade">
                                        <div v-show="step == 3 && stepActive == true">
                                            <div class="input_form pwd_inp">
                                                <div class="user_title">{{$t("lang.company")}}</div>
                                                <div class="user">
                                                    <input type="text" v-model="companyName">
                                                </div>
                                            </div>
                                            <div class="input_form pwd_inp">
                                                <div class="user_title">{{$t("lang.pwd")}}</div>
                                                <div class="user">
                                                    <input type="password" v-model="pwd">
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                                <div class="sb" style="margin-top: 24px">
                                    <el-button class="width48" @click.native="last" size="small">上一步</el-button>
                                    <el-button class="width48" @click.native="next" v-if="signButon" size="small">下一步</el-button>
                                    <div class="sign_btns tc cursor" @click="sign" v-else>{{$t("lang.register")}}</div>
                                </div>
                                <div class="sign_btn1 tc cursor" @click="back">返回登錄</div>
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
                    <div class="login_text1 sb al">
                        <div class="mobile_login_text">{{$t("lang.register")}}</div>
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
                    <div style="max-height: 145px;height: 145px;overflow: hidden">
                        <transition name="fade">
                            <div v-show="step == 1 && stepActive == true" style="max-height: 145px;overflow: hidden">
                                <div class="input_form">
                                    <div class="user_title">{{$t("lang.userId")}}</div>
                                    <div class="user">
                                        <el-select v-model="userType" class="width100" style="height: 30px" :placeholder="$t('lang.select')">
                                            <el-option :label="$t('lang.store')" :value='2'></el-option>
                                            <el-option :label="$t('lang.advertisers')" :value="1"></el-option>
                                        </el-select>
                                    </div>
                                </div>
                                <div class="input_form pwd_inp">
                                    <div class="user_title">{{$t("lang.name")}}</div>
                                    <div class="user">
                                        <input type="text" v-model="userName">
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-show="step == 2 && stepActive == true" style="max-height: 129px;">
                                <div class="input_form pwd_inp">
                                    <div class="user_title">{{$t("lang.phone")}}</div>
                                    <div class="user">
                                        <input type="text" v-model="phone">
                                    </div>
                                </div>
                                <div class="input_form pwd_inp">
                                    <div class="user_title">{{$t("lang.email")}}</div>
                                    <div class="user">
                                        <input type="text" v-model="email" oninput="value=value.replace(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$,'')">
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade">
                            <div v-show="step == 3 && stepActive == true">
                                <div class="input_form pwd_inp">
                                    <div class="user_title">{{$t("lang.company")}}</div>
                                    <div class="user">
                                        <input type="text" v-model="companyName">
                                    </div>
                                </div>
                                <div class="input_form pwd_inp">
                                    <div class="user_title">{{$t("lang.pwd")}}</div>
                                    <div class="user">
                                        <input type="password" v-model="pwd">
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                    <div class="sb" style="margin-top: 24px">
                        <el-button class="width48" @click.native="last" size="small">上一步</el-button>
                        <el-button class="width48" @click.native="next" v-if="signButon" size="small">下一步</el-button>
                        <div class="sign_btns tc cursor" @click="sign" v-else>{{$t("lang.register")}}</div>
                    </div>
                    <div class="sign_btn1 tc cursor" @click="back">返回登錄</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { signUp } from '@/axios/request.js'
export default {
    data () {
        return {
            preload: 'auto',  //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            src:'',               //视频的路径
            type: '',                //视频的类型
            Controls: false,              //确定播放器是否具有用户可以与之交互的控件
            Autoplay: 'true',              //是否自动播放
            Poster: '', 
            signButon: true,
            stepActive: true,
            lists: [],
            active1: true,
            active: false,
            companyName: '',
            email: '',
            phone: '',
            userName: '',
            pwd: '',
            userType: null,
            loading: false,
            step: 1
        }
    },
    mounted () {
        
    },
    methods: {
        next () {
            // this.stepActive = false
            this.step += 1
            // this.stepActive = true
            if (this.step > 3) {
                this.step = 3
            }
            if (this.step == 3) {
                this.signButon = false
            }
        },
        last () {
            // this.stepActive = false
            this.signButon = true
            this.step -= 1
            // this.stepActive = true
            if (this.step < 1) {
                this.step = 1
            }
        },
        sign () {
            // this.active = false
            let that = this
            this.loading = true
            let data = {
                companyName: this.companyName,
                email: this.email,
                phone: this.phone,
                userName: this.userName,
                pwd: this.pwd,
                userType: this.userType
            }
            signUp(data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    // this.$router.push('/Sign1')
                    this.$message.success('註冊成功')
                    setTimeout(() => {
                        that.$router.back()
                    },0)
                } else {
                    this.$message({
                        type: 'error',
                        message: res.data.msg
                    })
                }
            }).catch(e => {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '註冊失敗'
                })
            })
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
        sure () {
            this.active = true
            this.$router.back()
        },
        back () {
            this.$router.back()
        }
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
    .mobile_login_text {
        font-size: 23px;
        color: rgb(0, 0, 0);
    }
    .login_text1 {
        margin: 15px auto;
        font-size: 25px;
        color: rgb(0, 0, 0);
    }



    .lang {
        width: 100px;
        height: 30px;
        background: white;
        font-size: 12px !important;
        border: solid 1px rgb(228, 226, 226);
        border-radius: 3px;
        color: gray;
        z-index: 191;
        position: relative;
        .lang_item {
            padding: 5px;
            white-space: nowrap;
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
    .width48 {
        width: 48% !important;
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
        border: solid 1px rgb(228, 226, 226);
        background: white;
        transition: 0.2s;
        max-height: 60px;
        div {
            padding: 5px;
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
    }
    .Sign {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #3773D5 !important;
        position: relative;
        .overh {
            overflow: hidden; 
            width: 29%;
            max-width: 460px;
            min-width: 295px;
            height: 100%; 
            // max-height: 550px;
            // background: white;
            @media screen and (max-height: 501px) {
                height: calc(90%);
            }
            @media screen and (max-height: 666px) {
                height: calc(120%);
                transform: scale(0.8) translate(0, -10%);
            }
            @media screen and (max-height: 557px) {
                height: calc(137%);
                transform: scale(0.7) translate(0, -19%);
            }
        }
        .form_item {
            position: absolute;
            left: 0;
            top: 50%;
            width: 90%;
            height: 65%;
            max-height: 800px;
            transform: translate(0%, -50%);
            color: white;
            z-index: 100;
            min-height: 295px;
            @media screen and (max-height: 600px) {
                top: 18%;
                transform: translate(0%, 0%);
            }
            @media screen and (max-height: 430px) {
                top: 12%;
                min-height: 316px;
            }
            @media screen and (max-width: 564px) {
                display: none;
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
    .VIDEO {
        width: 71%;
    }
    .i_form {
        width: 100%;
        background: white;
        max-width: 460px;
        min-width: 295px;
        max-height: 469px;
        border-radius: 0 30px 30px 0;
        .login_text {
            margin: auto;
            width: calc(80% + 32px);
            font-size: 25px;
            padding-bottom: 30px;
            color: rgb(0, 0, 0);
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
    .video_wrap_v {
        height: 90%;
        max-height: 469px;
        width: 95%;
        // margin-left: 30px;
        video {
            height: 100%;
            width: 100%;
        }
    }
    .user_title {
        color: #414B55;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 10px;
        @media screen and (max-height: 500px) {
            margin-bottom: 5px;
        }
    }
    .pwd_inp {
        margin-bottom: 25px;
    }
    .user {
        border-bottom: solid 1px gray;
        margin-bottom: 25px;
        input {
            border: none;
            outline: none;
            font-size: 18px;
            background: none;
            width: 100%;
            color: rgb(97, 97, 97);
            @media screen and (max-width: 800px) {
                font-size: 15px;
            }
            @media screen and (max-height: 500px) {
                font-size: 13px;
            }
        }
    }
    .welcome {
        width: 100%;
        position: absolute;
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
    .sign_btn {
        font-size: 20px;
        color: rgb(255, 255, 255);
        background: @themeColor;
        // border: solid 3px #8268D5;
        border: solid 3px @themeColor;
        padding: 3px 0;
        margin-top: 30px;
        @media screen and (max-width: 1477px) {
            margin-top: 20px;
            font-size: 20px;
            padding: 6px 0;
        }
        @media screen and (max-width: 1300px) {
            margin-top: 10px;
            padding: 5px 0;
        }
        @media screen and (max-width: 800px) {
            padding: 3px 0;
        }
    }
    .sign_btns {
        font-size: 20px;
        color: rgb(255, 255, 255);
        width: 48%;
        background: @themeColor;
        border: solid 3px @themeColor;
        padding: 0px 0;
        border-radius: 3px;
    }
    .sign_btn1 {
        font-size: 18px;
        color: #ffffff;
        background: @themeColor;
        border-radius: 3px;
        border: solid 3px @themeColor;
        padding: 3px 0;
        margin-top: 15px;
        @media screen and (max-width: 800px) {
            font-size: 15px;
            padding: 3px 0;
        }
    }
    .msg_input {
        width: calc(80% + 32px);
        margin: auto;
        padding-bottom: 15px;
    }
    .success {
        width: 100%;
        height: 500px;
        background: #5C48B7;
        @media screen and (max-width: 1300px) {
            height: 70%;
        }
    }
    .success_item {
        font-size: 40px;
        margin-bottom: 30px;
        // @media screen and (max-width: 1477px) {
        //     font-size: 30px;
        // }
        @media screen and (max-width: 1300px) {
            font-size: 30px;
        }
        @media screen and (max-width: 1000px) {
            font-size: 24px;
        }
        img {
            width: 55px;
            height: 55px;
            margin-right: 5px;
            @media screen and (max-width: 1300px) {
                width: 45px;
                height: 45px;
            }
            @media screen and (max-width: 1000px) {
                 width: 35px;
                height: 35px;
            }
        }
    }
    .notice {
        width: 80%;
        margin: auto;
        font-size: 20px;
        margin-bottom: 10px;
        @media screen and (max-width: 1477px) {
            font-size: 17px;
        }
        @media screen and (max-width: 1300px) {
            font-size: 10px;
        }
    }
    .sure_btn {
        width: 85%;
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
        @media screen and (max-width: 1300px) {
            font-size: 30px;
        }
        @media screen and (max-width: 800px) {
            font-size: 30px;
        }
    }
</style>