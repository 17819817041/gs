<template>
    <div class="forgetPwd">
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
                            <el-input placeholder="Email Address" v-model="data.email"></el-input>
                        </div>  
                    </el-form-item>
                    <el-form-item>
                        <div>
                            <el-button class="width100" type="primary" @click="send">Send</el-button>
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
            }
        }
    },
    methods: {
        send () {
            forget(this.data).then(res => {
                console.log(res)
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: 'Please log in to your mailbox to change your password!'
                    })
                }
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