<style lang="less" scoped>
@import "@/less/css.less";
    .vet {
        height: 100%;
    }
    .CONTENT_S {
        height: calc(100% - 119px);
        overflow-x: auto;
    }
    .vetSign {
        margin-top: 15px;
    }
    .vetSign div {
        margin-bottom: 10px;
    }
    .headPortrait {
        border: solid 1px;
    }
    .vet_text, .pet_text {
        color: #A1A1A1;
    }
    .vet_head, .pet_head {
        width: 122px;
        height: 122px;
        border-radius: 50%;
        border: #C6C6C6 solid 1px;
        margin: 10px 50px;
        padding: 5px;
        overflow: hidden;
        transition: 0.2s;
        img {
            width: 100%;
            height: 100%;
        }
        @media screen and (max-width: 850px) {
            width: 105px;
            height: 105px;
        }
        @media screen and (max-width: 564px) {
            width: 85px;
            height: 85px;
        }
        @media screen and (max-width: 520px) {
            width: 75px;
            height: 75px;
            margin: 10px auto;
        }
    }
    .vet_child, .pet_child {
        @media screen and (max-width:564px) {
            margin: 0 25px;
        }
    }
    .opacity {
        opacity: 0.8;
    }
    .opacity1 {
        opacity: 1 !important;
    }
    .vet_form {
        width: 100%;
        max-width: 700px;
        margin: 30px auto;
        padding: 0 25px;
        @media screen and (max-width:564px) {
            // width: @phoneMedia;
            margin: auto;
        }
        transition: 0.2s;
    }
    .headimg_wrap {
        position: relative;
        .logo {
            background: rgb(255, 255, 255);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 600;
            padding: 15px 10px 15px 10px;
            @media screen and (max-width: 564px) {
                height: 70px;
                padding: 10px 10px 0 10px;
            }
        }
    }
    .logo .logo_IMG {
        height: 80px;
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
    .vet_sign {
        background: @hdColor;
    }
</style>

<template>
    <div class="vet" v-loading="Vloading">
        <div class="headimg_wrap">
            <!-- <myHeaderL></myHeaderL> -->
            <div class="logo">
                <img class="logo_IMG" src="@/assets/img/ENDURA.png" alt="">
            </div>
            <myHeader></myHeader>
        </div>
        <div class="CONTENT_S noBar">
            <div class="vetSign tc">
                <div class="size21 vet_item">Sign Up</div>
                <div class="size7">Add your details to sign up</div>
            </div>
            <div class="vet_form tc">
                <el-form ref="form" :model="data" :rules="rules">
                    <el-form-item prop="platform">
                        <el-radio label="2" v-model="data.platform">
                            <div class="vet_child" style="transition:0.2s">
                                <div class="vet_head">
                                    <img @click="vetIdentity" :class="[ 'opacity', {'opacity1':data.platform == 2}]" src="@/assets/img/vet.png" alt="">
                                </div>
                                <div class="vet_text">Doctor</div>
                            </div>
                        </el-radio>
                        <el-radio label="1" v-model="data.platform">
                            <div class="pet_child">
                                <div class="pet_head">
                                    <img @click="petIdentity" :class="[ 'opacity', {'opacity1':data.platform == 1}]" src="@/assets/img/defaultimg.jpg" alt="">
                                </div>
                                <div class="pet_text">Customer</div>
                            </div>
                        </el-radio>
                    </el-form-item><br>
                    <el-form-item prop="name">
                        <el-input placeholder="Name" v-model="data.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="email">
                        <el-input placeholder="Email" v-model="data.email"></el-input>
                    </el-form-item>
                    <el-form-item prop="phone">
                        <el-input placeholder="Moible" v-model="data.phone"></el-input>
                    </el-form-item>
                    <el-form-item prop="address">
                        <el-input placeholder="Address" v-model="data.address"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input placeholder="Password" show-password v-model="data.password"></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPwd">
                        <el-input placeholder="Confirm Password" show-password v-model="data.confirmPwd"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <div class="vet_sign cursor">
                            <el-button class="width100"  type="primary" @click="finishSignUp">Sign Up</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="aleadyToLogin tc size7">
                Already have an Account? <span class="bold cursor" style="color:#B3519F" @click="toLoginPage">Login</span>
            </div>
        </div>
    </div>
</template>

<script>
import { signUp } from "@/axios/request.js"
export default {
    data () {
        return {
            loading: false,
            Vloading:false,
            data: {
                platform: null,
                email: '',
                password: "",
                address: "",
                phone: "",
                confirmPwd: '',
                name: ""
            },
            rules: {
                platform: [
                    { required: true, message: "Please select your identity", trigger: 'blur' }
                ],
                email: [
                    { required:true, message:'Please enter your email', trigger:"blur" }
                ],
                password: [
                    { required: true, message:'Please enter your password', trigger:'blur' }
                ],
                address: [
                    { required: true, message:'Please enter your address', trigger:'blur' }
                ],
                phone: [
                    { required: true, message:'Please enter your phone', trigger:'blur' }
                ],
                name: [
                    { required: true, message:'Please enter your name', trigger:'blur' }
                ],
                confirmPwd: [
                    { required: true, message:'Please confirm your password', trigger:'blur' }
                ],
            }
        }
    },
    created () {
        
    },
    methods: {
        vetIdentity () {
            this.data.platform = 2
            localStorage.setItem("platform",2)
        },
        petIdentity () {
            this.data.platform =1
            localStorage.setItem("platform",1)
        },
        toLoginPage () {
            // this.$router.push('/login')
            if (this.data.platform == 1) {
                this.$router.push({
                    name: "customerLogin"
                })
            } else if (this.data.platform == 2) {
                this.$router.push({
                    name: "vetLogin"
                })
            } else {
                this.$router.push('/login')
            }
        },
        finishSignUp () {
            var reg = /^[\d\D]{1,20}$/
            if (reg.test(this.data.name)) {

            } else {
                this.$message({
                    type: 'error',
                    message: 'The name cannot be less than one or greater than twenty digits!'
                })
                return false
            }
            var e_reg = /^[\w-]+@([\w-]+\.)+(com|org|cc|cn|net)$/i;
            if (e_reg.test(this.data.email)) {

            } else {
                this.$message({
                    type: 'error',
                    message: 'Incorrect email address format!'
                })
                return false
            }
            // var p_reg = /^1[0-9]{10}$/;
            // if (p_reg.test(this.data.phone)) {
                
            // } else {
            //     this.$message({
            //         type: 'error',
            //         message: 'Phone number format is incorrect!'
            //     })
            //     return false
            // }

            if (this.data.confirmPwd === this.data.password) {
                this.Vloading = true
                let that = this
                this.$refs.form.validate(flag => {
                    if (flag) {
                        signUp(that.data).then(res => {
                            console.log(res)
                            if (res.data.rtnCode == 200) {
                                that.Vloading = false
                                this.$message({
                                    type: "success",
                                    message: "Register successfully,Please go to email to activate your account!"
                                })
                                setTimeout(() => {
                                    that.toLoginPage()
                                },1000)
                            } else {
                                that.Vloading = false
                                this.$message({
                                    type: "warning",
                                    message: res.data.msg
                                })
                            }
                        }).catch(e => {
                            console.log(e)
                            that.Vloading = false
                        })
                    } else {
                        this.Vloading = false
                        this.$message({
                            type: "error",
                            message: "Incomplete data!"
                        })
                    }
                })
            } else {
                this.confirmPwd = ""
                this.$message({
                    type: "error",
                    message: "Please make sure the passwords are the same!"
                })
            }
        }
    }
}
</script>

