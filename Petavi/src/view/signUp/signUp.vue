<style lang="less" scoped>
@import "@/less/css.less";
    .vetSign {
        margin-top: 15px;
    }
    .vetSign div {
        margin-bottom: 10px;
    }
    .headPortrait {
        .headPortrait_form {
            width: 700px;
        }
    }
    .vet_text, .pet_text {
        color: #A1A1A1;
    }
    .vet_head, .pet_head {
        border-radius: 50%;
        border: #C6C6C6 solid 1px;
        margin: 10px 50px;
        padding: 5px;
    }
    .opacity {
        opacity: 0.8;
    }
    .opacity1 {
        opacity: 1 !important;
    }
    .vet_form {
        width: 700px;
        margin: 30px auto;
    }
    .vet_sign {
        border-radius: 8px;
        color: white;
        background: @hdColor;
    }
</style>

<template>
    <div class="vet" v-loading="Vloading">
        <div>
            <myHeaderL></myHeaderL>
        </div>
        <div class="vetSign tc">
            <div class="size21 vet_item">Sign Up</div>
            <div class="size7">Add your details to sign up</div>
        </div>
        <div class="vet_form tc">
            <el-form ref="form" :model="data" :rules="rules">
                <el-form-item prop="platform">
                    <el-radio label="2" v-model="data.platform">
                        <div class="vet">
                            <div class="vet_head">
                                <img @click="vetIdentity" :class="[ 'opacity', {'opacity1':data.platform == 2}]" src="@/assets/img/vet.png" alt="">
                            </div>
                            <div class="vet_text">Vet</div>
                        </div>
                    </el-radio>
                    <el-radio label="1" v-model="data.platform">
                        <div class="pet">
                            <div class="pet_head">
                                <img @click="petIdentity" :class="[ 'opacity', {'opacity1':data.platform == 1}]" src="@/assets/img/pet.png" alt="">
                            </div>
                            <div class="pet_text">Customer</div>
                        </div>
                    </el-radio>
                </el-form-item><br> <br>
                <el-form-item prop="name">
                    <el-input placeholder="Name" v-model="data.name"></el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input placeholder="Email" v-model="data.email"></el-input>
                </el-form-item>
                <el-form-item prop="mobile">
                    <el-input placeholder="Moible" v-model="data.phone"></el-input>
                </el-form-item>
                <el-form-item prop="address">
                    <el-input placeholder="Address" v-model="data.address"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="Password" show-password v-model="data.password"></el-input>
                </el-form-item>
                <el-form-item prop="confirm">
                    <el-input placeholder="Confirm Password" show-password v-model="surePwd"></el-input>
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
</template>

<script>
import { signUp } from "@/axios/request.js"
export default {
    data () {
        return {
            loading: false,
            Vloading:false,
            data: {
                // platform: null,
                // email: 'xhajsjxbdj@163.com',
                // password: "123456l",
                // address: "123",
                // phone: "12345678989",
                // name: "lwz"

                platform: null,
                email: '',
                password: "",
                address: "",
                phone: "",
                name: ""
            },
            // surePwd: '123456l',
            surePwd: '',
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
            }
        }
    },
    created () {
        
    },
    methods: {
        vetIdentity () {
            this.data.platform = 2
            localStorage.setItem("platform",2)
            console.log('vet')
        },
        petIdentity () {
            console.log(1)
            this.data.platform =1
            localStorage.setItem("platform",1)
            console.log('customerLogin')
        },
        toLoginPage () {
            if (this.data.platform == 1) {
                this.$router.push({
                    name: "customerLogin"
                })
            } else if (this.data.platform == 2) {
                this.$router.push({
                    name: "vetLogin"
                })
            }
        },
        finishSignUp () {
            if (this.surePwd === this.data.password) {
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
                this.surePwd = ""
                this.$message({
                    type: "error",
                    message: "Please make sure the passwords are the same!"
                })
            }
        }
    }
}
</script>

