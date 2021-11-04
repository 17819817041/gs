<template>
    <div class="Sign flex">
        <div class="Logo ju">
            <img src="@/assets/img/logo.png" alt="">
        </div>
        <div class="form_item ju noBar">
            <div class="i_form" v-if="active">
                <div class="login_text">註冊</div>
                <div class="msg_input">
                    <div class="input_form">
                        <div class="user_title">用戶身份</div>
                        <div class="user">
                            <el-select v-model="value" class="width100">
                                <el-option label="店鋪" value="1"></el-option>
                                <el-option label="廣告商" value="2"></el-option>
                                <el-option label="廣告後台" value="3"></el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="input_form pwd_inp">
                        <div class="user_title">姓名</div>
                        <div class="user">
                            <input type="text">
                        </div>
                    </div>
                    <div class="input_form pwd_inp">
                        <div class="user_title">聯繫電話</div>
                        <div class="user">
                            <input type="text">
                        </div>
                    </div>
                    <div class="input_form pwd_inp">
                        <div class="user_title">郵箱地址</div>
                        <div class="user">
                            <input type="text">
                        </div>
                    </div>
                    <div class="input_form pwd_inp">
                        <div class="user_title">公司名稱</div>
                        <div class="user">
                            <input type="text">
                        </div>
                    </div>
                    <div class="input_form pwd_inp">
                        <div class="user_title">密碼</div>
                        <div class="user">
                            <input type="password">
                        </div>
                    </div>
                    <div class="sign_btn tc cursor" @click="sign">註冊</div>
                </div>
            </div>
            <div class="success al" v-else>
                <div>
                    <div class="al success_item">
                        <img src="@/assets/img/success_sign.png" alt="">您已提交註冊申請
                    </div>
                    <div class="notice">工作人員將會盡快核實通過您的申請</div>
                    <div class="notice">感謝您的支持與理解！</div>
                    <div class="sign_btn mg sure_btn tc cursor" @click="sure">確定</div>
                </div>
            </div>
        </div>
        <div class="welcome ju al">
            <div style="margin-bottom: 70px;">
                <div class="Logo1 ju">
                    <img src="@/assets/img/logo.png" alt="">
                </div>
                <div class="guanggao tc">XXX廣告平台</div>
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
            this.active = true
            this.$router.back()
        }
    }
}
</script>

<style lang='less' scoped>
@import "@/less/el.less";
    .Sign {
        width: 100%;
        height: 100%;
        background: url('../../assets/img/growing.jpg');
        background-size: auto 100%;
        position: relative;
        .form_item {
            position: absolute;
            padding: 15px 0;
            left: 55%;
            top: 53%;
            // min-height: 520px;
            transform: translate(0, -50%);
            width: 35%;
            // height: 85%;
            overflow: auto;
            background: #5C48B7;
            color: white;
            box-shadow: rgb(0, 0, 0) 30px 30px 60px;
            z-index: 100; 
            @media screen and (max-width: 1000px) {
                max-height: 600px;
            }
            @media screen and (max-width: 564px) and (max-height: 1190px) {
                max-height: 500px;
            }
            @media screen and (max-height: 360px) {
                height: 90%;
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
        top: 10px;
        left: 50%;
        z-index: 100;
        transform: translate(-50%,0);
        margin-bottom: 20px;
        display: none;
        img {
            height: 90px;
        }
        @media screen and (max-width: 564px) {
            display: block;
        }
    }
    .Logo1 {
        height: 80px;
        margin-bottom: 40px;
        img {
            height: 130px;
        }
    }
    .i_form {
        width: 90%;
        // height: 95%;
        margin-bottom: 15px;
        .login_text {
            font-size: 60px;
            padding-bottom: 65px;
            color: rgb(255, 255, 255);
            @media screen and (max-width: 1680px) {
                font-size: 50px;
                padding-bottom: 35px;
            }
            @media screen and (max-width: 1400px) {
                font-size: 35px;
                padding-bottom: 30px;
            }
            @media screen and (max-width: 1200px) {
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
        font-size: 20px;
        margin-bottom: 5px;
        @media screen and (max-width: 1680px) {
            font-size: 17px;
        }
        @media screen and (max-width: 1477px) {
            font-size: 15px;
        }
        @media screen and (max-width: 1200px) {
            font-size: 14px;
        }
    }
    .pwd_inp {
        margin-top: 20px;
        @media screen and (max-width: 1680px) {
            margin-top: 17px;
        }
        @media screen and (max-width: 1477px) {
            margin-top: 14px;
        }
        @media screen and (max-width: 1200px) {
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
            @media screen and (max-width: 1200px) {
                font-size: 18px;
            }
            @media screen and (max-width: 800px) {
                font-size: 15px;
            }
        }
    }
    .welcome {
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
        font-size: 25px;
        color: #604EB9;
        background: white;
        border: solid 3px #8268D5;
        padding: 10px 0;
        @media screen and (max-width: 1477px) {
            font-size: 20px;
            padding: 6px 0;
        }
        @media screen and (max-width: 1200px) {
            padding: 5px 0;
        }
        @media screen and (max-width: 800px) {
            padding: 3px 0;
        }
    }
    .sign_btn {
        margin-top: 60px;
        @media screen and (max-width: 1680px) {
            margin-top: 40px;
        }
        @media screen and (max-width: 1477px) {
            margin-top: 20px;
        }
        @media screen and (max-width: 1200px) {
            margin-top: 10px;
        }
    }
    .msg_input {
        width: 80%;
        margin: auto;
        padding-bottom: 15px;
    }
    .success {
        width: 80%;
    }
    .success_item {
        font-size: 50px;
        margin-bottom: 30px;
        @media screen and (max-width: 1477px) {
            font-size: 40px;
        }
        @media screen and (max-width: 1200px) {
            font-size: 30px;
        }
        img {
            width: 55px;
            height: 55px;
            margin-right: 5px;
        }
    }
    .notice {
        width: 80%;
        margin: auto;
        font-size: 25px;
        margin-bottom: 10px;
        @media screen and (max-width: 1477px) {
            font-size: 20px;
        }
        @media screen and (max-width: 1200px) {
            font-size: 10px;
        }
    }
    .sure_btn {
        width: 85%;
    }
    .guanggao {
        font-size: 70px;
        color: #D3ACFF;
        @media screen and (max-width: 1200px) {
            font-size: 50px;
        }
        @media screen and (max-width: 800px) {
            font-size: 40px;
        }
    }
    .welcome_text {
        font-size: 55px;
        font-weight: 100;
        color: white;
        @media screen and (max-width: 1200px) {
            font-size: 40px;
        }
        @media screen and (max-width: 800px) {
            font-size: 30px;
        }
    }
</style>