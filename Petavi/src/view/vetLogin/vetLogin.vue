<style lang="less" scoped>
@import "@/less/css.less";
    .FormL {
        width: 700px;
    }
    .title {
        padding: 100px 0;
    }
    .contentL {
        @media screen and (max-width:564px) {
            width: 95%;
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
                        <div class=" size12">Add your details to login</div>
                    </el-form-item>
                    <el-form-item prop="email">
                        <el-input v-model="form.Email" placeholder="Your Email"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="form.Password" placeholder="Password"></el-input>
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
                        <div class="google tc cursor" @click="vethomepage">
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
export default {
    data () {
        return {
            loading:false,
            form: {
                Email:'',
                Password:''
            },
            rules: {
                Email: [
                    { required:true, message:'请输入邮箱', triggle:"blur" }
                ],
                Password: [
                    { required: true, message:'请输入密码', triggle:'blur' }
                ]
            }
        }
    },
    methods: {
        SignUp () {
            this.$router.push({
                name: "signUp",
                query:{
                    user:'vetLogin'
                }
            })
        },
        vethomepage () {
            this.loading = true
            setTimeout(() => {
                // this.$router.push("/petDetails")
                this.$router.push({
                    name: "vethomepage",
                    query: {
                        userId: null,
                        platform:2
                    }
                })
            },1000)
        },
        forget () {
            this.$router.push("/forgetPwd")
        }
    }
}
</script>

