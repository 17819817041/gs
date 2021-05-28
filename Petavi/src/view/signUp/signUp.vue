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
        margin: 50px auto;
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
        <div class="headPortrait ju tc">
            <div class="headPortrait_form">
                <div class="ju">
                    <div class="vet">
                        <div class="vet_head" @click="vetIdentity">
                            <img :class="[ 'opacity', {'opacity1':data.platform == 2}]" src="@/assets/img/vet.png" alt="">
                        </div>
                        <div class="vet_text">Vet</div>
                    </div>
                    <div class="pet">
                        <div class="pet_head" @click="petIdentity">
                            <img :class="[ 'opacity', {'opacity1':data.platform == 1}]" src="@/assets/img/pet.png" alt="">
                        </div>
                        <div class="pet_text">Customer</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vet_form tc">
            <el-form :model="data">
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
                    <el-input placeholder="Password" v-model="data.password"></el-input>
                </el-form-item>
                <el-form-item prop="confirm">
                    <el-input placeholder="Confirm Password" v-model="data.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="vet_sign cursor">
                        <el-button class="width100" type="primary" @click="finishSignUp" :loading="loading">Sign Up</el-button>
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
                platform:1,
                email: '1257354834@qq.com',
                password: "123456",
                address: "123",
                phone: "12345678989",
                name: "lwz"
            }
        }
    },
    created () {
        console.log(this.$route.query.user)
    },
    methods: {
        vetIdentity () {
            this.data.platform = 2
            console.log('vet')
        },
        petIdentity () {
            this.data.platform =1
            console.log('customerLogin')
        },
        toLoginPage () {
            if (this.data.platform == 1) {
                setTimeout(() => {
                    this.$router.push({
                        name: "customerLogin"
                    })
                },1000)
            } else if (this.data.platform == 2) {
                setTimeout(() => {
                    this.$router.push({
                        name: "vetLogin"
                    })
                },1000)
            }
        },
        finishSignUp () {
            this.loading = true
            this.Vloading = true
            setTimeout(() => {
                this.Vloading = false
                this.loading = false
                signUp(this.data).then(res => {
                    console.log(res)
                    if (res.data.rtnCode == 200) {
                        this.$message({
                        type:'success',
                            message:'注册成功'
                        })
                        this.toLoginPage()
                    }
                })
            },1000)
        }
    }
}
</script>

