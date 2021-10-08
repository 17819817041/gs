<template>
    <div class="vetReset">
        <div class="vetReset_content al">
            <div class="vetReset_form mg">
                <div class="vetResetText tc">Reset Password</div>
                <div class="tc padding1 size14a">Please enter your new password</div>
                <el-form>
                    <el-form-item>
                        <el-input placeholder="Current Password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="New Password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="Confirm Password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <button class="color-1 cursor width100" @click="submit">Submit</button>
                        <div class="forgetPass size12 tc color">
                            <span style="padding-right: 5px">Forgot your password?</span>
                            <span class="cursor" @click="forget">Chick here</span>
                            </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loading:false,
            
        }
    },
    methods: {
        submit () {
            this.loading = true
        },
        forget () {
            this.$router.push("/forgetPwd")
        }
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
.vetReset {
    flex: 10;
}
    .vetReset_content {
        width: 100%;
        height: 100%;
        margin-top: 60px;
        .vetReset_form {
            width: 700px;
            @media screen and (max-width: 800px) {
                width: 91%;
            }
        }
    }
    .vetResetText {
        font-size: 30px;
    }
    .size14a {
        font-size: 14px;
    }
    .forgetPass {
        transform: translate(0,-20%);
    }
    .color {
        color: rgb(7, 186, 218);
    }
    .padding1 {
        padding: 10px 0 35px 0;
    }
    button {
        padding: 13px;
        background: #FF0000;
        color: white;
        font-size: 14px;
        border: solid 1px #FF0000;
        border-radius: 4px;
        margin-bottom: 1px;
    }
</style>