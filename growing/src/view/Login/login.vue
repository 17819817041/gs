<template>
    <div class="Login flex">
        <div class="form_item ju al">
            <div class="width100 form_item_c_wrap">
                <div class="mobile_title">
                    <div class="guanggao tc">XXX廣告平台</div>
                    <div class="welcome_text tc">Welcome</div>
                </div>
                <div class="i_form">
                    <div class="login_text">登入</div>
                    <div class="input_form">
                        <div class="user_title">用戶名</div>
                        <div class="user">
                            <input type="text" class="width100" v-model="userName">
                        </div>
                    </div>
                    <div class="input_form pwd_inp">
                        <div class="user_title">密碼</div>
                        <div class="user">
                            <input type="password" class="width100" v-model="password">
                        </div>
                    </div>
                    <div class="login_btn tc cursor" @click="login">登入</div>
                    <div class="sign_btn tc cursor" @click="sign">註冊</div>
                </div>
            </div>
        </div>
        <div class="welcome al ju">
            <div style="margin-bottom: 130px;">
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
            userName: '',
            password: ''
        }
    },
    mounted () {
        
    },
    methods: {
        sign () {
            this.$router.push('/Sign')
        },
        login () {
            if (this.userName == 1) {
                this.$router.push('/Index')
                localStorage.setItem('plat','廣告商')
            } else if (this.userName == 2) {
                localStorage.setItem('plat','店鋪')
                this.$router.push('/PlatIndex')
            } else if (this.userName == 3) {
                localStorage.setItem('plat','廣告後台')
                this.$router.push('/AdminIndex')
            } else {
                localStorage.setItem('plat','廣告商')
                this.$router.push('/Index')
            }
        }
    }
}
</script>

<style lang='less' scoped>
    .Login {
        width: 100%;
        height: 100%;
        background: url('../../assets/img/growing.jpg');
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
            // overflow: auto;
            @media screen and (max-width: 800px) {
                height: 100%;
            }
            @media screen and (max-width: 564px) {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 50%;
                min-width: 290px;
                height: 400px;
            }
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
        padding: 60px;
        margin-top: 20px;
        // margin: 25px;
        overflow: auto;
        box-shadow: rgb(0, 0, 0) 30px 30px 60px;
        @media screen and (max-width: 1050px) {
            padding: 40px;
        }
        @media screen and (max-width: 800px) {
            padding: 30px;
            height: 90%;
        }
        .login_text {
            font-size: 60px;
            padding-bottom: 65px;
            color: rgb(255, 255, 255);
            @media screen and (max-width: 1680px) {
                font-size: 50px;
                padding-bottom: 35px;
            }
            @media screen and (max-width: 1400px) {
                font-size: 45px;
                padding-bottom: 30px;
            }
            @media screen and (max-width: 1200px) {
                font-size: 36px;
                padding-bottom: 20px;
            }
            @media screen and (max-width: 800px) {
                font-size: 25px;
                padding: 3px 0;
            }
        }
    }
    .user_title, .pwd {
        color: #BA97EE;
        font-size: 20px;
        margin-bottom: 30px;
        @media screen and (max-width: 1680px) {
            font-size: 17px;
            margin-bottom: 20px;
        }
        @media screen and (max-width: 1400px) {
            font-size: 15px;
            margin-bottom: 15px;
        }
        @media screen and (max-width: 1200px) {
            font-size: 14px;
            margin-bottom: 10px;
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
            background: #5C48B7;
            z-index: 99;
        }
        
    }
    .login_btn, .sign_btn {
        font-size: 25px;
        color: #604EB9;
        background: white;
        border: solid 3px #8268D5;
        padding: 10px 0;
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
            padding: 5px 0;
        }
    }
    .login_btn {
        margin-top: 80px;
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
            margin-top: 30px;
            margin-bottom: 15px;
        }
        @media screen and (max-width: 800px) {
            font-size: 15px;
            padding: 3px 0;
        }
        @media screen and (max-width: 564px) {
            font-size: 19px;
            padding: 5px 0;
        }
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