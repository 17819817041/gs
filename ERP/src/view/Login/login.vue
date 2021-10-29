<template>
    <div class="Login flex">
        <div class="form noBar">
            <div class="form_item mg">
                <div><img class="img_login" src="@/assets/img/sake_logo.png" alt=""></div>
                <div class="login_title">
                    <div class="l_title bold">Log in</div>
                    <div class="l_text">Log in with the data provided by the Company</div>

                    <div :class="['U al', { 'input': shadow }]">
                        <img src="@/assets/img/user.png" alt="">
                        <input type="text" placeholder="Username" @blur="shadow = false" @focus="shadow = true">
                    </div>
                    <div :class="['P al', { 'input': shadow1 }]">
                        <img src="@/assets/img/pwd.png" alt="">
                        <input type="text" placeholder="Password" @blur="shadow1 = false" @focus="shadow1 = true">
                    </div>
                    <div class="forget cursor">Forgot password?</div>
                    <div class="login_button tc cursor">Log in</div>
                </div>
            </div>
        </div>
        <div class="r_color"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            shadow: false,
            shadow1: false,
        }
    },
    methods: {
       
    }
}
</script>

<style lang='less' scoped>
    .Login {
        height: 100%;
    }
    .form {
        width: 40%;
        height: 100%;
        overflow: auto;
        background: white;
        .form_item {
            width: 70%;
            height: 100%;
            min-height: 835px;
            @media screen and (max-width: 1700px) {
                min-height: 700px;
            }
            @media screen and (max-width: 1500px) {
                min-height: 600px;
            }
            @media screen and (max-width: 564px) {
                min-height: 0;
            }
        }
        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }
    .r_color {
        width: 60%;
        height: 100%;
        background: #425AA1;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    .img_login {
        width: 125px;
        margin-top: 50px;
        @media screen and (max-width: 1700px) {
            width: 105px;
            margin-top: 40px;
        }
        @media screen and (max-width: 1500px) {
            width: 85px;
            margin-top: 30px;
        }
        @media screen and (max-width: 564px) {
            width: 65px;
            margin-top: 20px;
        }
    }
    .l_title {
        font-size: 60px;
        color: #25396F;
        padding: 20px 0;
        @media screen and (max-width: 1700px) {
            font-size: 50px;
        }
        @media screen and (max-width: 1500px) {
            font-size: 42px;
        }
        @media screen and (max-width: 564px) {
            font-size: 40px;
        }
    }
    .l_text {
        color: #A8AEBB;
        font-size: 25px;
        margin-bottom: 50px;
        @media screen and (max-width: 1700px) {
            font-size: 20px;
        }
        @media screen and (max-width: 1500px) {
            font-size: 18px;
            margin-bottom: 35px;
        }
        @media screen and (max-width: 564px) {
            font-size: 15px;
        }
    }
    input {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        font-size: 20px;
        @media screen and (max-width: 1500px) {
            font-size: 18px;
        }
        color: rgb(151, 151, 151);
    }
    .U, .P {
        width: 100%;
        height: 60px;
        border: solid 1px #DCE7F1;
        border-radius: 5px;
        overflow: hidden;
        margin-top: 30px;
        transition: 0.2s;
        @media screen and (max-width: 1700px) {
            height: 50px;
        }
        @media screen and (max-width: 1500px) {
            height: 40px;
        }
        img {
            width: 35px;
            height: 35px;
            margin: 0 5px;
        }
    }
    .input {
        box-shadow: 0px 0.1px 0px 3px #D0D7EF;
        border: solid #7292f0 1px;
    }
    .forget {
        color: #435EBE;
        font-weight: 600;
        margin: 20px 0;
    }
    .login_button {
        color: white;
        font-size: 20px;
        background: #435EBE;
        padding: 10px 0;
        border-radius: 6px;
        margin: 40px 0;
    }
</style>