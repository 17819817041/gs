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
    .googelImg img {
        width: 30px;
    }
    .signUp {
        margin-top: 65px;
    }
</style>

<template>
    <div class="login">
        <div>
            <myHeaderL></myHeaderL>
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
                        <el-input v-model="form.password" show-password placeholder="Password"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <div class="google tc cursor" @click="vethomepage">
                            <el-button class="googleBtn width100" type="primary" :loading="loading">
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
                            <el-button class="facebookBtn width100" type="primary" @click="faceBook">Login with facebook</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <div class="google tc cursor" >
                            <el-button class="googleBtn width100" type="primary" :loading="loading">
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
            rules: {
                email: [
                    { required:true, message:'请输入邮箱', trigger:"blur" }
                ],
                password: [
                    { required: true, message:'请输入密码', trigger:'blur' }
                ]
            },
            form: {
                // platform:2,
                // email:'9@qq.com',
                // password:'123'

                 
                platform:2,
                email:'',
                password:''

                // platform: 2,
                // email:'youxiangceshi6@163.com',
                // password:'youxiangceshi7'
            } 
            // 173156297@qq.com
            // form: {
            //     platform:localStorage.getItem("platform"),
            //     email:'',
            //     password:''
            // }
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
    created () {
        this.judge_login()
    },  
    methods: {
        judge_login () {
            if (localStorage.getItem("platform") == 2 && localStorage.getItem("Token") ) {
                this.$router.replace("/customerhomepage")
            }
        },
        faceBook () {
            this.$store.dispatch("login", {'vm': this} )
        },
        vethomepage () {
            this.loading = true
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    login(that.form).then(res => {
                        console.log(res, "兽医登陆")
                        if (res.data.rtnCode == 200) {
                            localStorage.setItem("userId", res.data.data.userId)
                            localStorage.setItem("platform", res.data.data.platform)
                            localStorage.setItem("Token",res.data.data.token)
                            this.$store.dispatch("IMSignUp")
                            this.$router.push({
                                name: "vethomepage",
                            })
                            that.login = true
                            that.loading = false
                        } else {
                            this.loading = false
                        }
                    }).catch(e => {
                        console.log(e)
                        this.loading = false
                    })
                }
            })
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

