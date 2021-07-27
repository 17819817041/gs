<style lang="less" scoped>
@import "@/less/css.less";
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
        @media screen and (max-width:564px) {
            width: @phoneMedia;
            margin: auto;
        }
    }
    .facebook {
        background: #367FC0;
    }
    .googleBtn .span {
        position: relative;
    }
    .googleImg {
        position: absolute;
        left: 34%;
        top: 20%;
        @media screen and (max-width:564px) {
            left: 26.3%;
            top: 20%;
        }
    }
    .facebookLogo, .googleLogo {
        width: 50px;
        height: 50px;
    }
    label {
        height: 50px;
    }
    #vetFacebook {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        transform: translate(0,-130%);
    }
    .googelImg img {
        width: 30px;
    }
    .signUp {
        margin-top: 65px;
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
</style>

<template>
    <div class="login" v-loading='loading'>
        <!-- <div>
            <myHeaderL></myHeaderL>
        </div> -->
        <div class="headimg_wrap">
            <div class="logo">
                <img class="logo_IMG" src="@/assets/img/logo.png" alt=""> <!--  @click="test" -->
            </div>
            <!-- <myHeaderL></myHeaderL> -->
            <myHeader></myHeader>
        </div>
        <div class="size21 tc title">
            Vet Login
        </div>
        <div class="ju contentL">
            <div class="FormL tc">
                <el-form ref="form" :rules="rules" :model="form">
                    <el-form-item>
                        <div class="size12">Add your details to login</div>
                    </el-form-item>
                    <el-form-item prop="email">
                        <el-input v-model="form.email" placeholder="Your Email"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="form.password" show-password @keyup.enter.native="vetLogin" placeholder="Password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <div class="google tc cursor" @click="vetLogin" @keydown.enter="Login">
                            <el-button class="googleBtn width100" type="primary" :loading="loading">
                                <span class="span">Login</span>
                            </el-button>
                        </div>
                    </el-form-item>

                    <el-form-item>
                        <div class="size12 ju al">
                            <span class=" size12 cursor" @click="forget">Forgot your password?</span>
                            <span class="size12">or Login With</span>
                            <div class="al label cursor">
                                <label for="vetFacebook al_v">
                                    <img class="cursor facebookLogo" src="@/assets/img/facebook.png" alt="">
                                    <div id="vetFacebook" class="al_v cursor" style="opacity:0;border:solid 1px">
                                        <fb-signin-button
                                            :params="fbSignInParams"
                                            @success="onSignInSuccess"
                                            @error="onSignInError">
                                            facebook
                                        </fb-signin-button>
                                    </div>
                                </label>
                            </div>
                            <div class="al label"><img class="cursor googleLogo" ref="vetGoogle" src="@/assets/img/GoogleImg.png" alt=""></div>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="signUp tc size12 bold">Don't have an Account? <span class="cursor" style="color:#B3519F" @click="SignUp">Sing Up</span></div>
    </div>
</template>

<script>
import { login, token } from "@/axios/request.js"
export default {
    data () {
        return {
            loading:false,
            fbSignInParams: {
                scope: 'email,user_likes',
                return_scopes: true
            },
            rules: {
                email: [
                    { required:true, message:'请输入邮箱', trigger:"blur" }
                ],
                password: [
                    { required: true, message:'请输入密码', trigger:'blur' }
                ]
            },
            form: {
                platform:2,
                email:'972307875@qq.com',
                password:'123'

                 
                // platform:2,
                // email:'',
                // password:''

            }
        }
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
    mounted () {
        let that = this
        gapi.load('auth2', function(){
            // Retrieve the singleton for the GoogleAuth library and set up the client.
            var auth2 = gapi.auth2.init({
                client_id: '628942639023-6eghdtqbgk8vvdj20tuc7l2708mshmd8.apps.googleusercontent.com', //客户端ID
                cookiepolicy: 'single_host_origin',
                scope: 'profile' //可以请求除了默认的'profile' and 'email'之外的数据
            });
            that.attachSignin(that.$refs.vetGoogle,auth2);
		});
    },
    created () {
        this.judge_login()
    },  
    methods: {
        judge_login () {
            if (localStorage.getItem("platform") == 2 && localStorage.getItem("Token") ) {
                if (this.$route.name == 'vetLogin') {
                    this.$router.replace("/vethomepage")
                }
            }
        },
        Login () {
            this.vetLogin()
        },
        vetLogin () {
            this.loading = true
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    login(that.form).then(res => {
                        console.log(res, "兽医登陆")
                        this.loading = false
                        if (res.data.rtnCode == 200) {
                            localStorage.setItem("userId", res.data.data.userId)
                            localStorage.setItem("platform", res.data.data.platform)
                            localStorage.setItem("Token",res.data.data.token)
                            localStorage.setItem("IM",that.form.password)
                            // this.$store.dispatch("IMSignUp")
                            this.$store.dispatch("getUser")
                            this.$router.push({
                                name: "vethomepage",
                            })
                            that.login = true
                        } else if (res.data.rtnCode == 202) {
                            this.$message({
                                type: 'error',
                                message: 'Incorrect username or password!'
                            })
                        } else {
                            this.$message({
                                type: 'error',
                                message: res.data.msg
                            })
                        }
                    }).catch(e => {
                        console.log(e)
                        this.loading = false
                        this.$message({
                            type: 'error',
                            message: 'Failed to login!'
                        })
                    })
                }
            })
        },
        onSignInSuccess (response) {       //Facebook登录
            alert(6666)
            FB.api('/me', dude => {
                localStorage.setItem('clientType',4)
                console.log(`Good to see you, ${dude.name}.`)
            })
            console.log(response) //返回第三方的登录信息 tolen等
        },
        onSignInError (error) {
            console.log(error)
        },
        attachSignin(element,auth2) {        //谷歌登录
            console.log('google')
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
                    accessToken: googleUser.getAuthResponse().id_token,
                    platform: that.form.platform,
                    clientType: 6
                }
                token(tokenData).then(res => {
                    that.loading = false
                    if (res.data.rtnCode == 200 ) {
                        localStorage.setItem('Token',res.data.data.token)
                        localStorage.setItem('userId',res.data.data.userId)
                        that.$router.replace("/vethomepage")
                    } else if (res.data.rtnCode == 205) {
                        that.$router.replace({
                            name: "relevance"
                        })
                    } else {
                        that.loading = false
                        that.$message({
                            type: 'error',
                            message: res.data.msg
                        })
                        that.$router.replace({
                            name: "login"
                        })
                    }
                }).catch(e => {
                    that.loading = false
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
                console.log(JSON.stringify(error, undefined, 2));
            });
        },
        forget () {
            this.$router.push("/forgetPwd")
        },
        SignUp () {
            this.$router.push({
                name: "signUp",
                query:{
                    user:'vetLogin'
                }
            })
        },
    }
}
</script>

