<template>
    <div class="changePwd" v-loading="loading">
        <div class="header">
            <div :class="['logo']">
                <div class="drawer_list_wrap">
                    <img class="logo_IMG" src="@/assets/img/logo.png" alt="">
                </div>
            </div>
            <div class="helpBtn al ju">
                <div class="al">
                    <img src="@/assets/img/what.png" alt="">
                </div>
                <div class="suppot size12"> Help & Suppot </div>
            </div>
        </div>
        <div class="content">
            <div class="img_wrap ju">
                <img src="@/assets/img/ic_success.svg" alt="" v-if="state">
                <img src="@/assets/img/error.svg" alt="" v-else>
            </div>
            <div style="margin-top: 50px;" v-show="state">
                <h3 class="tc">Please enter your new password!</h3>
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
                    <h3 class="tc">Registration timed out!</h3>
                    <h6 class="tc" style="color: gray">Please try again later</h6>
                </div>
                <div style="margin-top:90px;width:70%" class="mg">
                    <a class="tc" href="https://petavi.top/#/forgetPwd">OK,BACK TO PREVIOUS PAGE</a>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { URLToken, resetPasswordByForget } from '@/axios/request.js'
export default {
    data () {
        return {
            state: true,
            data: {
                platform: localStorage.getItem("platform"),
                password: "",
                confirmPwd: '',
            },
            loading: false,
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
            let email1 = email.split('%40')[0] + '@' + email.split('%40')[1]
            let data = {
                email: email1,
                token: token
            }
            URLToken(data).then(res => {
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
            let email = window.location.href.split('email=')[1].split('&token=')[0]
            let email1 = email.split('%40')[0] + '@' + email.split('%40')[1]
            let that = this
            this.loading = true
            this.$refs.form.validate(flag => {
                if (flag && this.password === this.confirmPwd) {
                    let data = {
                        email: email1,
                        // email: '1257354834@qq.com',
                        newPassword: that.data.password
                    }
                    that.loading = false
                    resetPasswordByForget(data).then(res => {
                        console.log(res)
                        if (res.data.rtnCode == 200) {
                            // this.$message({
                            //     type:'success',
                            //     message: 'Successfully modified!'
                            // })
                            // window.location.href = 'https://petavi.top/#/success'
                            this.$router.push('/success')
                        } else {
                            that.loading = false
                            this.$message({
                                type:'error',
                                message: 'Fail to edit!'
                            })
                        }
                    }).catch(e => {
                        console.log(e)
                        this.$message({
                            type:'error',
                            message: 'Fail to edit!'
                        })
                    })
                } else {
                    that.loading = false
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
        position: relative;
        .helpBtn {
            @media screen and (max-width:564px) {
                padding: 0 3px;
                height: 30px;
                bottom: 1px;
            }
            position: absolute;
            right: 9px;
            bottom: 12px;
            padding: 0 3px;
            width: 120px;
            height: 40px;
            border-radius: 30px;
            background: @helpBtn;
        }
    }
    .content {
        width: 30%;
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
    .logo {
            background: rgb(255, 255, 255);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 600;
            padding: 15px 30px 0 62px;
            transition: 0.2s;
            @media screen and (max-width:950px) {
                transform: translate(-180px,0);
            }
            @media screen and (max-width: 564px) {
                height: 70px;
                padding: 10px 10px 0 10px;
            }
        }
        .logo .logo_IMG {
            width: 110px;
            height: 123px;
            transition: 0.2s;
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