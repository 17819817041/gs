<template>
    <div class="Sign flex">
        <div class="Logo ju">
            <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="growing"><img style="height: 148%" src="@/assets/img/growing.jpg" alt=""></div>
        <div class="form_item noBar">
            
            <div class="success al ju">
                <div class="mg">
                    <div class="Logo1 ju">
                        <img src="@/assets/img/logo.png" alt="">
                    </div>
                    <div class="success_item_wrap mg">
                        <div class="al ju success_item">
                            <img src="@/assets/img/success_sign.png" alt="">{{$t("lang.success")}}
                        </div>
                        <div class="notice tc">{{$t("lang.staff")}}</div>
                        <div class="notice tc">{{$t("lang.thank")}}</div>
                        <div class="sign_btn mg sure_btn tc cursor" @click="sure">{{$t("lang.sure")}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="welcome ju">
           <div style="margin-top: 70px;">
                <!-- <div class="Logo1 ju">
                    <img src="@/assets/img/logo.png" alt="">
                </div> -->
                <div class="guanggao tc">SMART WINDOW ADVERTISEMENT PLATFORM </div>
                <div class="guanggao tc">智能櫥窗{{$t("lang.plat")}}</div>
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
            active: true
        }
    },
    mounted () {
        
    },
    methods: {
        sign () {
            this.active = false
        },
        sure () {
            this.$router.push('/Login')
        },
        back () {
            this.$router.back()
        }
    }
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
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
            top: 60%;
            // min-height: 520px;
            transform: translate(0, -50%);
            width: 35%;
            // height: 85%;
            // background: #5C48B7;
            color: rgb(0, 0, 0);
            z-index: 100;
            height: calc(100% - 195px);
            @media screen and (max-height: 875px) {
                // top: 41%;
            }
            @media screen and (max-width: 1000px) {
                max-height: 600px;
            }
            @media screen and (max-width: 564px) and (max-height: 1190px) {
                max-height: 500px;
                min-height: 500px;
            }
            @media screen and (max-height: 501px) {
                height: calc(100% - 80px);
                max-height: 500px;
                max-height: 500px;
            }
            @media screen and (max-width: 564px) {
                left: 50%;
                top: 60%;
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
            top: calc(50% - 255px);
        }
        @media screen and (max-width: 564px) {
            display: block;
        }
    }
    .Logo1 {
        margin-bottom: 10px;
        width: 100%;
        img {
            width: 83%;
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
            font-size:35px;
            padding-bottom: 35px;
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
            color: rgb(97, 97, 97);
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
            background: @miniBlue ;
            z-index: 99;
        }
        
    }
    .sign_btn {
        font-size: 20px;
        color: #ffffff;
        background: @themeColor;
        // border: solid 3px #8268D5;
        padding: 8px 0;
        margin-top: 50px;
        @media screen and (max-width: 1300px) {
            margin-top: 10px;
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
        padding: 15px;
        box-shadow: rgb(0, 0, 0) 30px 30px 60px;
        background: white;
        @media screen and (max-width: 1300px) {
            height: 65%;
        }
    }
    .success_item_wrap {
        width: calc(80% + 32px);
    }
    .success_item {
        font-size: 40px;
        margin-bottom: 20px;
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
            font-size: 12px;
        }
    }
    .sure_btn {
        width: 100%;
    }
    .guanggao {
        width: 100%;
        margin: auto;
        font-size: 25px;
        color: #D3ACFF;
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
        font-size: 55px;
        font-weight: 100;
        color: white;
        @media screen and (max-width: 1300px) {
            font-size: 40px;
        }
        @media screen and (max-width: 800px) {
            font-size: 30px;
        }
    }
</style>