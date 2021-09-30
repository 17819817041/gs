<template>
    <div class="reset">
        <div class="reset_content al">
            <div class="reset_form mg">
                <div class="resetText tc">Reset Password</div>
                <div class="tc padding1 size14a">Please enter your new password</div>
                <el-form :rules="rules" :model="form">
                    <el-form-item prop="currentPwd">
                        <el-input placeholder="Current Password" v-model="form.currentPwd"></el-input>
                    </el-form-item>
                    <el-form-item prop="newPwd">
                        <el-input placeholder="New Password" v-model="form.newPwd" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPwd">
                        <el-input placeholder="Confirm Password" v-model="form.confirmPwd" show-password>></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="color-1 cursor width100" type="primary" :loading="loading" @click="submit">Submit</el-button>
                        <div class="forgetPass size12 tc color cursor" @click="forgetPwd">Forgot your password? Chick here </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import { reset } from "@/axios/request.js";
export default {
    data () {
        return {
            loading:false,
            form: {
                newPwd:'',
                currentPwd:'',
                confirmPwd: "",
            },
            rules: {
                newPwd: [
                    { required:true, message:'Please enter your new password', trigger:"blur" }
                ],
                currentPwd: [
                    { required: true, message:'Please enter your current password', trigger:'blur' }
                ],
                confirmPwd: [
                    { required: true, message:'Please confirm your new password', trigger:'blur' }
                ]
            }
        }
    },
    methods: {
        submit () {
            if (this.form.newPwd !== this.form.confirmPwd) {
                this.$message({
                    type: 'error',
                    message: 'Please keep the new password consistent with the confirmed password!'
                })
                return false
            }
            this.loading = true
            var data = {
                userId: localStorage.getItem("userId"),
                oldPassword: this.form.currentPwd,
                newPassword: this.form.newPwd,
                platform: localStorage.getItem('platform')
            }
            reset(data).then(res => {
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: "Password changed successfully!"
                    })
                    this.$router.back()
                } else {
                    this.$message({
                        type: "erroe",
                        message: "Error in original password!"
                    })
                    this.loading = false
                }
                this.loading = false
            }).catch(e => {
                console.log(e)
                this.$message({
                    type: "erroe",
                    message: "Error in original password!"
                })
                this.loading = false
            })
        },
        forgetPwd () {
            this.$router.push("/forgetPwd")
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .reset {
        flex: 10;
        height: 100%;
    }
    .reset_content {
        width: 100%;
        height: 100%;
        .reset_form {
            width: 700px;
        }
    }
    .resetText {
        font-size: 30px;
    }
    .size14a {
        font-size: 14px;
    }
    .forgetPass {
        transform: translate(0,-20%);
    }
    .color {
        color: @hdColor;
    }
    .padding1 {
        padding: 10px 0 35px 0;
    }
</style>