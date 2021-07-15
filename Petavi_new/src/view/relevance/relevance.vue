<style lang="less" scoped>
@import "@/less/css.less";
    .login {
        height: 100%;
    }
    .FormL {
        width: 700px;
    }
    .title {
        padding: 80px 0;
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
</style>

<template>
    <div class="login" v-loading="loading">
        <div>
            <myHeaderL></myHeaderL>
        </div>
        <div class="CONTENT noBar">
            <div class="size21 tc title">
                <!-- Login to <span v-if=" clientType == 6" >Google</span>
                <span v-else-if=" clientType == 4" >Facebook</span> -->
                Link your petavi account
            </div>
            <div class="ju contentL">
                <div class="FormL tc">
                    <el-form ref="form" :rules="rules" :model="form">
                        <el-form-item prop="email">
                            <el-input class="input" placeholder="Your Email" v-model="form.email"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input class="input" placeholder="Password" show-password v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <div class="google cursor" @click="account">
                                <el-button class="faceBook width100" type="primary">
                                    <span class="span">Account</span>
                                </el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                    <!-- <div class="signUp tc size12 bold">Don't have an Account? <span class="cursor" style="color:#B3519F" @click="SignUp">Sign Up</span></div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { account } from "@/axios/request.js"
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
                platform: localStorage.getItem('platform'),
                email:'',
                password:''
            },
            rules: {
                email: [
                    { required:true, message:'Please enter your email', trigger:"blur" }
                ],
                password: [
                    { required: true, message:'Please enter your password', trigger:'blur' }
                ]
            },
            // clientType: localStorage.getItem('clientType')
            typeMsg: JSON.parse(localStorage.getItem('typeMsg'))
        }
    },
    created () {
        console.log(this.typeMsg)
    },
    mounted () {
       
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
        // SignUp () {
        //     this.$router.push({
        //         name: "signUp"
        //     })
        // },
        enter () {
            this.toLogin()
        },
        account () {
            this.loading = true
            let that = this
            this.$refs.form.validate(flag => {
                if (flag) {
                    var data = {
                        email: that.form.email,
                        thirdPartyemail: that.typeMsg.Email,
                        password: that.form.password,
                        name: that.typeMsg.FullName,
                        picture: that.typeMsg.ImageURL,
                        family_name: that.typeMsg.FamilyName,
                        given_name: that.typeMsg.GivenName,
                        thirdPartyId: that.typeMsg.ID,
                        clientType: localStorage.getItem('clientType'),
                        platform: localStorage.getItem('platform')
                    }
                    account(data).then(res => {
                        console.log(res)
                        if (res.data.rtnCode == 200) {
                            that.loading = false
                            that.$message({
                                type: 'success',
                                message: 'Associated with success'
                            })
                            if (localStorage.getItem('platform') == 1 ) {
                                that.$router.replace('/customerhomepage')
                            } else if (localStorage.getItem('platform') == 2 ) {
                                that.$router.replace('/vethomepage')
                            }
                        } else if (res.data.msg == "註冊失敗") {
                            that.loading = false
                            that.$message({
                                type: 'error',
                                message: "Registration failed, please enter the correct format of the email !"
                            })
                        } else if (res.data.rtnCode == 207) {
                            that.loading = false
                            that.$message({
                                type: 'success',
                                message: "Your email address has not been registered yet. Please activate your account at your email address and then login !"
                            })
                            if (localStorage.getItem('platform') == 1 ) {
                                that.$router.replace('/customerLogin')
                            } else if (localStorage.getItem('platform') == 2 ) {
                                that.$router.replace('/vetLogin')
                            }
                        } else if (res.data.msg == "邮箱已被关联") {
                            that.loading = false
                            that.$message({
                                type: 'info',
                                message: "The email has been associated !"
                            })
                        }
                    })
                    // that.loading = true
                    // login(that.form).then(res => {
                    //     if (res.data.rtnCode == 200) {
                    //         localStorage.setItem("Token",res.data.data.token)
                    //         localStorage.setItem("userId",res.data.data.userId)
                    //         localStorage.setItem("platform",res.data.data.platform)
                    //         localStorage.setItem("IM",that.form.password)
                    //         var par = {
                    //             userId: localStorage.getItem('userId'),
                    //             pageNum: 0,
                    //             pageSize: 100
                    //         }
                    //         this.$store.dispatch('getPetList',par)
                    //         this.$store.dispatch("getUser")
                    //         that.login = true
                    //     } else if (res.data.rtnCode == 202) {
                    //         this.$message({
                    //             type: 'warning',
                    //             message: 'Username or password wrong!'
                    //         });
                    //     }
                    // }).catch(e => {
                    //     console.log(e)
                    //     that.loading = false
                    //     this.$message({
                    //         type: 'warning',
                    //         message: 'Fail login!'
                    //     });
                    // })
                } else {

                }
            })
        }
    }
}
</script>