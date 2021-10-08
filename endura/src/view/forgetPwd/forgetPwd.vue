<template>
    <div class="forgetPwd" v-loading="loading">
        <div><myHeaderL></myHeaderL></div>
        <div class="pwdContent mg">
            <div class="size21 tc pwdTitle" @click="asd">Forget Password</div>
            <div class="size12 tc pwdText">Please enter the email address associated</div>
            <div class="size12 tc pwdText">with your email. We will email you a </div>
            <div class="size12 tc pwdText">link to reset your password.</div>

            <div class="pwdInput">
                <el-form :model="data">
                    <el-form-item>
                        <div>
                            <el-input placeholder="Email Address" @keyup.enter.native="send" v-model="data.email"></el-input>
                        </div>  
                    </el-form-item>
                    <el-form-item>
                        <div>
                            <el-button class="width100 cursor" type="primary" @click="send">Send</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { forget } from "@/axios/request.js"
export default {
    data () {
        return {
            data: {
                platform: localStorage.getItem("platform"),
                email: ""
            },
            loading: false
        }
    },
    methods: {
        send () {
            this.loading = true
            forget(this.data).then(res => {
                this.loading = false
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: 'Please log in to your mailbox to change your password!'
                    })
                } else {    
                    this.$message({
                        type: 'error',
                        message: 'Send faild!'
                    })
                }
            }).catch(e => {
                console.log(e)
                this.loading = false
                this.$message({
                    type: 'error',
                    message: 'Send faild!'
                })
            })
        },
        asd () {
            this.$router.push('/changePwd')
        }
    }
}
</script>

<style lang="less" scoped>
    @import "@/less/css.less";
    .pwdContent {
        width: 700px;
        margin-top: 150px;
        .pwdTitle {
            padding: 10px !important;
        }
        .pwdText {
            padding: 2px 0;
        }
        .pwdInput {
            margin-top: 17px ;
        }
    }
</style>