<template>
    <div class="Sign flex">
        <div class="Logo ju">
            <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="growing"><img style="height: 148%" src="@/assets/img/growing.jpg" alt=""></div>
        <div class="form_item noBar">
            <div class="Logo1 ju">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <div v-if="active1" class="noBar overh" style="overflow: auto; height: 100%; max-height: 700px;
                box-shadow: rgb(0, 0, 0) 30px 30px 60px;background: #5C48B7;">
                <div class="i_form">
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
                        <div class="input_form">
                            <div class="user_title">{{$t("lang.userId")}}</div>
                            <div class="user">
                                <el-select v-model="value" class="width100" :placeholder="$t('lang.select')">
                                    <el-option :label="$t('lang.store')" value="1"></el-option>
                                    <el-option :label="$t('lang.advertisers')" value="2"></el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class="input_form pwd_inp">
                            <div class="user_title">{{$t("lang.name")}}</div>
                            <div class="user">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input_form pwd_inp">
                            <div class="user_title">{{$t("lang.phone")}}</div>
                            <div class="user">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input_form pwd_inp">
                            <div class="user_title">{{$t("lang.email")}}</div>
                            <div class="user">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input_form pwd_inp">
                            <div class="user_title">{{$t("lang.company")}}</div>
                            <div class="user">
                                <input type="text">
                            </div>
                        </div>
                        <div class="input_form pwd_inp">
                            <div class="user_title">{{$t("lang.pwd")}}</div>
                            <div class="user">
                                <input type="password">
                            </div>
                        </div>
                        <div class="sign_btn tc cursor" @click="sign">{{$t("lang.register")}}</div>
                        <div class="sign_btn1 tc cursor" @click="back">登錄</div>
                    </div>
                </div>
            </div>
            <div class="success al ju" v-else>
                <div >
                    <div class="al success_item">
                        <img src="@/assets/img/success_sign.png" alt="">{{$t("lang.success")}}
                    </div>
                    <div class="notice">{{$t("lang.staff")}}</div>
                    <div class="notice">{{$t("lang.thank")}}</div>
                    <div class="sign_btn mg sure_btn tc cursor" @click="sure">{{$t("lang.sure")}}</div>
                </div>
            </div>
        </div>
        <div class="welcome ju al">
            <div style="margin-bottom: 70px;">
                <!-- <div class="Logo1 ju">
                    <img src="@/assets/img/logo.png" alt="">
                </div> -->
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
export default {
    data () {
        return {
            lists: [],
            value: '',
            active1: true,
            active: false,
        }
    },
    mounted () {
        
    },
    methods: {
        sign () {
            // this.active = false
            this.$router.push('/Sign1')
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
@import "@/less/el.less";
    .lang {
        width: 100px;
        height: 30px;
        background: white;
        font-size: 12px !important;
        color: gray;
        position: relative;
        .lang_item {
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
    .Sign {
        width: 100%;
        height: 100%;
        background: url('../../assets/img/growing.jpg');
        background-size: auto 100%;
        position: relative;
        .growing {
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            height: 100%;
            width: 100%;
            z-index: 0;
        }
        .overh {
            @media screen and (max-height: 501px) {
                height: calc(90%);
            }
        }
        .form_item {
            position: absolute;
            padding: 15px 0;
            left: 55%;
            top: 45%;
            // min-height: 520px;
            transform: translate(0, -50%);
            width: 35%;
            // height: 85%;
            // background: #5C48B7;
            color: white;
            z-index: 100; 
            height: calc(100% - 175px);
            @media screen and (max-height: 875px) {
                // top: 41%;
            }
            @media screen and (max-width: 1000px) {
                max-height: 600px;
            }
            @media screen and (max-width: 564px) and (max-height: 1190px) {
                max-height: 570px;
                min-height: 570px;
            }
            @media screen and (max-height: 501px) {
                height: calc(100% - 80px);
                max-height: 500px;
                max-height: 500px;
            }
            @media screen and (max-width: 564px) {
                left: 50%;
                top: 54%;
                transform: translate(-50%, -50%);
                width: 50%;
                min-width: 345px;
                // min-height: 525px;
                // max-height: 525px;
                // height: 460px;
            }
        }
    }
    .Logo {
        height: 40px;
        position: fixed;
        top: calc(50% - 305px);
        left: 50%;
        z-index: 100;
        transform: translate(-50%,0);
        margin-bottom: 20px;
        display: none;
        img {
            height: 90px;
        }
        @media screen and (max-width: 564px) and (max-height: 1190px) {
            top: calc(50% - 335px);
        }
        @media screen and (max-width: 564px) {
            display: block;
        }
    }
    .Logo1 {
        // margin-bottom: -10px;
        width: 100%;
        img {
            width: 60%;
        }
        @media screen and (max-width: 1100px) {
            margin-bottom: 0px;
        }
        @media screen and (max-width: 564px) {
            display: none;
        }
    }
    .i_form {
        width: 100%;
        // height: 100%;
        padding: 15px;
        margin-bottom: 15px;
        .login_text {
            margin: auto;
            width: calc(80% + 35px);
            font-size:35px;
            padding-bottom: 25px;
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
                padding: 3px 0 3px 13px;
            }
            @media screen and (max-height: 360px) {
                font-size: 20px;
            }
        }
    }
    .user_title {
        color: #BA97EE;
        font-size: 15px;
        margin-bottom: 2px;
        @media screen and (max-width: 1477px) {
            font-size: 15px;
        }
        @media screen and (max-width: 1300px) {
            font-size: 14px;
        }
    }
    .pwd_inp {
        margin-top: 17px;
        @media screen and (max-width: 1680px) {
            margin-top: 17px;
        }
        @media screen and (max-width: 1477px) {
            margin-top: 14px;
        }
        @media screen and (max-width: 1300px) {
            margin-top: 10px;
        }
        @media screen and (max-width: 564px) {
            margin-top: 6px;
        }
    }
    .user {
        border-bottom: solid 1px;
        input {
            border: none;
            outline: none;
            font-size: 25px;
            background: none;
            width: 100%;
            color: white;
            @media screen and (max-width: 1500px) {
                font-size: 23px;
            }
            @media screen and (max-width: 1300px) {
                font-size: 18px;
            }
            @media screen and (max-width: 800px) {
                font-size: 15px;
            }
        }
    }
    .welcome {
        position: relative;
        z-index: 11;
        width: 55%;
        height: 100%;
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
        @media screen and (max-width: 564px) {
            width: 100%;
        }
        img {
            filter:blur(15px); // 模糊度
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
            background: #5C48B7;
            z-index: 99;
        }
        
    }
    .sign_btn {
        font-size: 20px;
        color: #604EB9;
        background: white;
        // border: solid 3px #8268D5;
        border: solid 3px #ffffff;
        padding: 8px 0;
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
    .sign_btn1 {
        font-size: 20px;
        color: #604EB9;
        background: white;
        // border: solid 3px #8268D5;
        border: solid 3px #ffffff;
        padding: 8px 0;
        margin-top: 15px;
        @media screen and (max-width: 1477px) {
            font-size: 20px;
            padding: 6px 0;
        }
        @media screen and (max-width: 1300px) {
            padding: 5px 0;
        }
        @media screen and (max-width: 800px) {
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
        box-shadow: rgb(0, 0, 0) 30px 30px 60px;
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
        width: 80%;
        margin: auto;
        font-size: 36px;
        color: #D3ACFF;
        @media screen and (max-width: 1300px) {
            font-size: 30px;
        }
        @media screen and (max-width: 1300px) {
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
        @media screen and (max-width: 1300px) {
            font-size: 30px;
        }
        @media screen and (max-width: 800px) {
            font-size: 30px;
        }
    }
</style>