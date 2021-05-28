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
                        <el-button class="color-1 cursor width100" type="primary" :loading="loading" @click="submit">Submit</el-button>
                        <div class="forgetPass size12 tc color cursor">Forgot your password? Chick here </div>
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
        .vetReset_form {
            width: 700px;
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
        color: @hdColor;
    }
    .padding1 {
        padding: 10px 0 35px 0;
    }
</style>