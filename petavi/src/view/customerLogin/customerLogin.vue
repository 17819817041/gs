<style lang="less" scoped>
@import "@/less/css.less";
    .login {
        height: 100%;
    }
    .FormL {
        width: 100%;
        max-width: 700px;
        padding: 0 25px;
        @media screen and (max-width: 800px) {
            width: 95%;
            padding: 0;
        }
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
    .facebookLogo, .googleLogo {
        width: 50px;
        height: 50px;
    }
    .label {
        margin-left: 10px;
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
    }
    label {
        height: 50px;
    }
    #facebook {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        transform: translate(0,-130%);
    }
    .headimg_wrap {
        position: relative;
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
    }
    .logo .logo_IMG {
        width: 110px;
        height: 123px;
        transition: 0.25s;
        z-index: 500;
        @media screen and (max-width: 1300px) {
            width: 88px;
            height: 98px;
        }
        @media screen and (max-width: 564px) {
            width: 50px;
            height: 60px;
        }
    }
    .three_log {
        @media screen and (max-width: 377px) {
            flex-direction: column;
        }
    }
</style>

<template>
    <div class="login" v-loading="loading">
        <div class="headimg_wrap">
            <div class="logo">
                <img class="logo_IMG" src="@/assets/img/logo.png" alt="">
            </div>
            <!-- <myHeaderL></myHeaderL> -->
            <myHeader></myHeader>
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
                            <el-input class="input" placeholder="Password" show-password @keyup.enter.native="toLogin" v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="google cursor" @click="toLogin" @keydown.enter="enter">
                                <el-button class="faceBook width100" type="primary">
                                    <span class="span">Login</span>
                                </el-button>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <div class="size12 al ju three_log">
                                <span style="white-space:nowrap"><span class="cursor" @click="forget">Forgot your password?</span> <span class="cursor">or Login With</span></span>
                                <div class="al">
                                    <div class="al label cursor">
                                        <label for="facebook al">
                                            <img class="cursor facebookLogo" src="@/assets/img/facebook.png" alt="">
                                            <div id="facebook" class="al cursor" style="opacity:0;border:solid 1px">
                                                <fb-signin-button
                                                    :params="fbSignInParams"
                                                    @success="onSignInSuccess"
                                                    @error="onSignInError">
                                                    facebook
                                                </fb-signin-button>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="al label"><img class="cursor googleLogo" ref="google" src="@/assets/img/GoogleImg.png" alt=""></div>
                                </div>
                            </div>
                        </el-form-item>
                    </el-form>
                    <div class="signUp tc size12 bold">Don't have an Account? <span class="cursor" style="color:#B3519F" @click="SignUp">Sign Up</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login, token } from "@/axios/request.js"
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
                password:'123'

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
            }
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
        onSignInSuccess (response) {       //Facebook登录
            let that = this
            FB.api('/me', dude => {
                console.log(`Good to see you, ${dude.name}.`)
            })
            // console.log(response) //返回第三方的登录信息 token等
            var tokenData = {
                // accessToken: localStorage.getItem('G_token'),
                accessToken: response.authResponse.accessToken,
                platform: that.form.platform,
                clientType: 4
            }
            token(tokenData).then(res => {
                that.loading = false
                if (res.data.rtnCode == 200 ) {
                    localStorage.setItem('Token',res.data.data.token)
                    localStorage.setItem('userId',res.data.data.userId)
                    that.$router.replace("/customerhomepage")
                } else if (res.data.rtnCode == 205) {
                    that.$router.replace({
                        name: "relevance"
                    })
                } else {
                    that.loading = false
                    that.$message({
                        type: 'error',
                        message: 'Fail'
                    })
                    that.$router.replace({
                        name: "login"
                    })
                }
            }).catch(e => {
                console.log(e)
                that.loading = false
                that.$message({
                    type: 'error',
                    message: 'Fail'
                })
            })
        },
        onSignInError (error) {
            console.log(error)
        },
        attachSignin(element,auth2) {        //谷歌登录
            let that = this
            var googleUser = {}
            auth2.attachClickHandler(element, {},
            function(googleUser) {
                that.loading = true
                localStorage.setItem('clientType',6)
                that.goo = "Signed in: " + googleUser.getBasicProfile().getName();
                var profile = auth2.currentUser.get().getBasicProfile();
                // localStorage.setItem("G_token", googleUser.getAuthResponse().id_token )
                // localStorage.setItem('G_ID', profile.getId() )
               
                var tokenData = {
                    // accessToken: localStorage.getItem('G_token'),
                    accessToken: googleUser.getAuthResponse().id_token,
                    // platform: localStorage.getItem('platform'),
                    platform: that.form.platform,
                    clientType: 6
                }
                token(tokenData).then(res => {
                    that.loading = false
                    if (res.data.rtnCode == 200 ) {
                        localStorage.setItem('Token',res.data.data.token)
                        localStorage.setItem('userId',res.data.data.userId)
                        that.$router.replace("/customerhomepage")
                    } else if (res.data.rtnCode == 205) {
                        that.$router.replace({
                            name: "relevance"
                        })
                    } else {
                        that.loading = false
                        that.$message({
                            type: 'error',
                            message: 'Fail'
                        })
                        that.$router.replace({
                            name: "login"
                        })
                    }
                }).catch(e => {
                    console.log(e)
                    that.$message({
                        type: 'error',
                        message: 'Fail'
                    })
                })
                localStorage.setItem('typeMsg', JSON.stringify({
                    ID: profile.getId(),
                    FullName: profile.getName(),
                    GivenName: profile.getGivenName(),
                    FamilyName: profile.getFamilyName(),
                    ImageURL: profile.getImageUrl(),
                    Email: profile.getEmail()
                }))
            }, function(error) {
                that.loading = false
                console.log(JSON.stringify(error, undefined, 2));
            });
        },
        judge_login () {
            if (localStorage.getItem("platform") == 1 && localStorage.getItem("Token") ) {
                if (this.$route.name == 'customerLogin') {
                    this.$router.replace("/customerhomepage")
                }
            }
        },
        SignUp () {
            this.$router.push({
                name: "signUp"
            })
        },
        enter () {
            this.toLogin()
        },
        toLogin () {
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    that.loading = true
                    login(that.form).then(res => {
                        // console.log(res,666)
                        that.loading = false
                        if (res.data.rtnCode == 200) {
                            localStorage.setItem("Token",res.data.data.token)
                            localStorage.setItem("userId",res.data.data.userId)
                            localStorage.setItem("platform",res.data.data.platform)
                            localStorage.setItem("IM",that.form.password)
                            // this.$store.dispatch("IMSignUp")
                            var par = {
                                userId: localStorage.getItem('userId'),
                                pageNum: 0,
                                pageSize: 100
                            }
                            this.$store.dispatch('getPetList',par)
                            this.$store.dispatch("getUser")
                            that.login = true
                            that.$router.replace('/customerhomepage')
                        } else if (res.data.rtnCode == 202) {
                            this.$message({
                                type: 'warning',
                                message: 'Username or password wrong!'
                            });
                            
                        }
                        else {
                            this.$message({
                                type: 'error',
                                message: res.data.msg
                            })
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