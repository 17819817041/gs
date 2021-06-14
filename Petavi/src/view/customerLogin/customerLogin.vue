<style lang="less" scoped>
@import "@/less/css.less";
    .login {
        height: 100%;
    }
    .FormL {
        width: 700px;
    }
    .title {
        padding: 40px 0;
        @media screen and (max-width:564px) {
            padding: 30px 0 30px 0;
        }
    }
    .contentL {
        overflow: auto;
        @media screen and (max-width:564px) {
            width: @phoneMedia;
            margin: auto;
        }
    }
    .input {
        ::-webkit-input-placeholder{text-align: center;}
    }
    // .input::-webkit-input-placeholder{text-align: center;}

    .googleBtn span {
        position: relative;
    }
    .googleImg {
        position: absolute;
        left: 35.5%;
        top: 20%;
    }
    .googelImg img {
        width: 30px;
    }
    .signUp {
        margin-top: 35px;
        @media screen and (max-width:564px) {
            margin-top: 25px;
        }
    }
    .googleBtn .span {
        position: relative;
    }
    .googleImg {
        position: absolute;
        left: 34%;
        top: 20%;
        @media screen and (max-width:564px) {
            left: 24.5%;
        }
    }
    .googelImg img {
        width: 30px;
    }
    .CONTENT {
        height: calc(100% - 119px);
        overflow: auto;
    }
    .fb-signin-button {
        /* This is where you control how the button looks. Be creative! */
        display: inline-block;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #4267b2;
        color: #fff;
    }
</style>

<template>
    <div class="login" v-loading="loading">
        <div>
            <myHeaderL></myHeaderL>
        </div>
        <div class="CONTENT noBar">
            <div class="size21 tc title">
            Customer Login
            </div>
            <div class="ju contentL">
                <div class="FormL tc">
                    <el-form ref="form" :rules="rules" :model="form">
                        <el-form-item>
                            <div class="size12">Add your details to login</div>
                        </el-form-item>
                        <el-form-item prop="email">
                            <el-input class="input" placeholder="Your Email" v-model="form.email"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input class="input" placeholder=" Password" show-password v-model="form.password"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <div class="google cursor" @click="toLogin">
                                <el-button class="faceBook width100" type="primary">
                                    <span class="span">Login</span>
                                </el-button>
                            </div>
                        </el-form-item>

                        <el-form-item>
                            <div class=" size12 cursor" @click="forget">Forgot your password?</div>
                        </el-form-item>
                        <el-form-item>
                            <div class="size12">or Login With</div>
                        </el-form-item>
                        <el-form-item>
                            <div class="fackbook cursor white">
                                <!-- <el-button class="facebookBtn width100" type="primary">Login with facebook</el-button> -->
                                <fb-signin-button
                                    style="width: 100%"
                                    :params="fbSignInParams"
                                    @success="onSignInSuccess"
                                    @error="onSignInError">
                                    Sign in with Facebook
                                </fb-signin-button>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <div class="google cursor" ref="google">
                                <el-button class="googleBtn width100" type="primary">
                                    <span class="span">Login with Google</span>
                                    <div class="googleImg">
                                        <img src="@/assets/img/google.png" alt="">
                                    </div>
                                </el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                    <div class="signUp tc size12 bold">Don't have an Account? <span class="cursor" style="color:#B3519F" @click="SignUp">Sing Up</span></div>
                </div>
            </div>
        </div>
        <!-- <iframe src="https://www.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=1&amp;hl=en&amp;bgcolor=%23FFFFFF&amp;
        src=liangrenwei%40gmail.com&amp;color=%23BE6D00&amp;src=p%23weather%40group.v.calendar.google.com&amp;color=%23A32929&amp;ctz=America%2FToronto" 
        style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe> -->

    </div>
</template>

<script>
import { login } from "@/axios/request.js"
export default {
    data () {
        return {
            loading:false,
            goo: '',
            fbSignInParams: {
                scope: 'email,user_likes',
                return_scopes: true
            },
            form: {
                platform:1,
                email:'1257354834@qq.com',
                password:'123456789'

                // platform: 1,
                // email:'',
                // password:''
            },
            rules: {
                email: [
                    { required:true, message:'Please enter your email', trigger:"blur" }
                ],
                password: [
                    { required: true, message:'Please enter your password', trigger:'blur' }
                ]
            },
        }
    },
    created () {
        this.judge_login()
    },
    mounted () {
        let that = this
        gapi.load('auth2', function(){
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            var auth2 = gapi.auth2.init({
                client_id: '628942639023-6eghdtqbgk8vvdj20tuc7l2708mshmd8.apps.googleusercontent.com', //客户端ID
                cookiepolicy: 'single_host_origin',
                scope: 'profile' //可以请求除了默认的'profile' and 'email'之外的数据
            });
            that.attachSignin(that.$refs.google,auth2);
		});
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
        onSignInSuccess (response) {         //Facebook登录
            FB.api('/me', dude => {
              console.log(`Good to see you, ${dude.name}.`)
            })
            console.log(response) //返回第三方的登录信息 tolen等
        },
        onSignInError (error) {
            console.log(error)
        },
        attachSignin(element,auth2) {        //谷歌登录
            let that = this
            var googleUser = {}
            auth2.attachClickHandler(element, {},
            function(googleUser) {
                // document.getElementById('name').innerText = "Signed in: " + googleUser.getBasicProfile().getName();
                that.goo = "Signed in: " + googleUser.getBasicProfile().getName();
                var profile = auth2.currentUser.get().getBasicProfile();
                console.log('ID: ' + profile.getId());
                console.log('Full Name: ' + profile.getName());
                console.log('Given Name: ' + profile.getGivenName());
                console.log('Family Name: ' + profile.getFamilyName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
            }, function(error) {
                console.log(JSON.stringify(error, undefined, 2));
            });
        },

        judge_login () {
            if (localStorage.getItem("platform") == 1 && localStorage.getItem("Token") ) {
                this.$router.replace("/customerhomepage")
            }
        },
        SignUp () {
            this.$router.push({
                name: "signUp",
                // query:{
                //     user: 2
                // }
            })
        },
        toLogin () {
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    that.loading = true
                    login(that.form).then(res => {
                        console.log(res)
                        that.loading = false
                        if (res.data.rtnCode == 200) {
                            that.login = true
                            localStorage.setItem("Token",res.data.data.token)
                            localStorage.setItem("userId",res.data.data.userId)
                            localStorage.setItem("platform",res.data.data.platform)
                            this.$store.dispatch("IMSignUp")
                            this.$store.dispatch("getUser")
                            that.$router.replace({
                                name:'customerhomepage',
                                query: {
                                    userId:res.data.data.userId,
                                    platform: 1
                                }
                            })
                            
                        } else if (res.data.rtnCode == 202) {
                            this.$message({
                                type: 'warning',
                                message: 'Username or password wrong!'
                            });
                        }
                    }).catch(e => {
                        console.log(e)
                        that.loading = false
                        this.$message({
                            type: 'warning',
                            message: 'Fail login!'
                        });
                    })
                } else {

                }
            })
            
        },
        forget () {
            this.$router.push("/forgetPwd")
        }
    }
}
</script>