<style lang="less" scoped>
@import "@/less/css.less";
    .FormL {
        width: 700px;
    }
    .title {
        padding: 60px 0;
        @media screen and (max-width:564px) {
            padding: 50px 0 40px 0;
        }
    }
    .contentL {
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
        margin-top: 65px;
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
</style>

<template>
    <div class="login">
        <div>
            <myHeaderL></myHeaderL>
        </div>
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
                        <el-input class="input" placeholder="Password" show-password v-model="form.password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <div class="google cursor" @click="toLogin">
                            <el-button class="faceBook width100" type="primary" :loading="loading">
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
                            <el-button class="facebookBtn width100" type="primary">Login with facebook</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <div class="google cursor" @click="toLogin">
                            <el-button class="googleBtn width100" type="primary">
                                <span class="span">Login with Google</span>
                                <div class="googleImg">
                                    <img src="@/assets/img/google.png" alt="">
                                </div>
                            </el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="signUp tc size12 bold">Don't have an Account? <span class="cursor" style="color:#B3519F" @click="SignUp">Sing Up</span></div>
    </div>
</template>

<script>
import { login } from "@/axios/request.js"
export default {
    data () {
        return {
            loading:false,
            form: {
                platform:1,
                email:'1257354834@qq.com',
                password:'123456'

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

