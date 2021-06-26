<template>
    <div class="reset">
        <div class="reset_content al">
            <div class="reset_form mg">
                <div class="resetText tc">Reset Password</div>
                <div class="tc padding1 size14a">Please enter your new password</div>
                <el-form>
                    <el-form-item>
                        <el-input placeholder="Current Password" v-model="currentPwd"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="New Password" v-model="newPwd" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="Confirm Password" v-model="confirmPwd" show-password>></el-input>
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
            currentPwd: "",
            newPwd: "",
            confirmPwd: ""
        }
    },
    methods: {
        submit () {
            this.loading = true
            var data = {
                userId: localStorage.getItem("userId"),
                oldPassword: this.currentPwd,
                newPassword: this.newPwd,
                platform: localStorage.getItem('platform')
            }
            reset(data).then(res => {
                if (res.data.rtnCode == 200) {
                    this.$message({
                        type: 'success',
                        message: "Password changed successfully!"
                    })
                    // this.$router.replace('/customerhomepage')
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