<template>
    <div class="changePwd">
        <div class="header"></div>
        <div class="content">
            <div class="img_wrap ju"><img src="@/assets/img/logo.png" alt=""></div>
            <div style="margin-top: 50px;" v-show="state">
                <h2 class="tc">Please enter your new password!</h2>
            </div>
            <div class="pwdInput" v-show="state">
                <el-form :model="data" :rules="rules" ref="form">
                    <el-form-item prop="password">
                        <div>
                            <el-input placeholder="Your new Password" v-model="data.password"></el-input>
                        </div>  
                    </el-form-item>
                    <el-form-item prop="confirmPwd">
                        <div>
                            <el-input placeholder="Confirm your Password" v-model="data.confirmPwd"></el-input>
                        </div>  
                    </el-form-item>
                    <el-form-item>
                        <div>
                            <el-button class="width100" type="primary" @click="submit">Submit</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="failToken" v-show="!state">
                <div style="margin-top: 50px;">
                    <h3 class="tc">The link is no longer valid, or the page has expired!</h3>
                </div>
                <div>
                    <a class="tc" href="https://petavi.top/forgetPwd">Request to reset password again</a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { URLToken } from '@/axios/request.js'
export default {
    data () {
        return {
            state: true,
            data: {
                platform: localStorage.getItem("platform"),
                password: "",
                confirmPwd: '',
            },
            rules: {
                password: [
                    { required: true, message: 'Please fill in the password', trigget: 'blur' }
                ],
                confirmPwd: [
                    { required: true, message: 'Please confirm your password', trigget: 'blur' }
                ]
            }
        }
    },
    created () {
        this.stateToken()
    },
    methods: {
        stateToken () {
            let token = window.location.href.split('token=')[1]
            let email = window.location.href.split('email=')[1].split('&token=')[0]
            console.log(token,email)
            let data = {
                email,
                token
            }
            URLToken(data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.state = true
                } else {
                    this.state = false
                }
            }).catch(e => {
                console.log(e)
                this.state = false
            })
        },
        submit () {
            this.$refs.form.validate(flag => {
                if (flag) {

                } else {

                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .header {
        @media screen and (max-width:564px) {
            height: 70px;
        }
        width: 100%;
        height: 109px;
        background: @hdColor;
    }
    .content {
        width: 40%;
        min-width: 470px;
        border-radius: 15px;
        margin: 100px auto;
    }
    .pwdInput {
        margin-top: 17px ;
    }
    a {
        display: block;
        padding: 15px 0;
        text-decoration: none;
        color: white;
        border-radius: 12px;
        background: #46D3FA;
    }
</style>