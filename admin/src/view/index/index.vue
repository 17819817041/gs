<style lang="less" scoped>
@import "@/less/css.less";
.login {
    height: 100%;
    overflow: auto;
}
    .FormL {
        width: 700px;
    }
    .title {
        padding: 60px 0;
        @media screen and (max-width:564px) {
            padding: 30px 0 30px 0;
        }
    }
    .contentL {
        height: 100%;
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
        height: calc(100% - 109px);
        overflow: auto;
    }
    .chick {
        // text-decoration: underline;
        padding-left: 5px;
        color: rgb(58, 58, 219);
        font-size: 14px;
    }
</style>

<template>
    <div class="login" v-loading="loading">
        <div>
            <Header :active="active"></Header>
        </div>
        <div class="CONTENT noBar">
            <div class="size21 tc title">
            Admin Login
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
                            <div>
                                <span class="size12">Forgot your password?</span>
                                <span class="chick cursor" @click="forget">Chick here</span>
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from "@/axios/request.js"
export default {
    data () {
        return {
            active: true,
            loading:false,
            form: {
                // platform:1,
                // email:'1257354834@qq.com',
                // password:'123456'

                // platform: 1,
                // email:'',
                // password:''

                platform: 3,
                email:'100@qq.com',
                password:'123'
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
        judge_login () {
            if (localStorage.getItem("Token") ) {
                if (this.$route.name == 'index') {
                    this.$router.replace("/home")
                }
            }
        },
        toLogin () {
            this.loading = true
            login(this.form).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    localStorage.setItem('adminPlatform',res.data.data.platform)
                    localStorage.setItem('adminUserId',res.data.data.userId)
                    localStorage.setItem('adminToken',res.data.data.token)
                    this.$router.push('/home')
                    this.login = true
                    this.loading = false
                }
            })
            
            // let that = this
            // this.$refs.form.validate(flag => {
            //     if (flag) {
            //         that.loading = true
            //         login(that.form).then(res => {
            //             console.log(res)
            //             that.loading = false
            //             if (res.data.rtnCode == 200) {
            //                 that.login = true
            //                 localStorage.setItem("Token",res.data.data.token)
            //                 localStorage.setItem("userId",res.data.data.userId)
            //                 localStorage.setItem("platform",res.data.data.platform)
            //                 // this.$store.dispatch("IMSignUp")
            //                 // this.$store.dispatch("getUser")
            //                 that.$router.replace({
            //                     name:'',
            //                     query: {
            //                         userId:res.data.data.userId,
            //                         platform: 1
            //                     }
            //                 })
                            
            //             } else if (res.data.rtnCode == 202) {
            //                 this.$message({
            //                     type: 'warning',
            //                     message: 'Username or password wrong!'
            //                 });
            //             }
            //         }).catch(e => {
            //             console.log(e)
            //             that.loading = false
            //             this.$message({
            //                 type: 'warning',
            //                 message: 'Fail login!'
            //             });
            //         })
            //     } else {

            //     }
            // })
            
        },
        forget () {
            this.$router.push("/forget")
        }
    }
}
</script>

