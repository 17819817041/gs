<template>
    <div class="Login">
        <Header></Header>
        <div class="Login_or_resign flex">
            <div class="width30 formWrap" v-show="active">
                <div class="startText"><img src="@/assets/img/text.png" alt=""></div>
                <div class="login_content">
                    <div class="flex">
                        <div class="loginPage cursor">Login</div>
                        <div class="signPage cursor" @click="active = false">Sign up</div>
                    </div>
                    <div class="input_wrap loginPage1">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
                            <el-form-item prop="user">
								<el-input
                                    placeholder="Email Address"
                                    v-model="ruleForm.user">
                                </el-input>
							</el-form-item>
							<el-form-item prop="pwd">
								<el-input
                                    placeholder="Password"
                                    show-password
                                    v-model="ruleForm.pwd">
                                </el-input>
							</el-form-item>
						</el-form>
                    </div>
                    <div class="LoginBtn cursor">Login</div>
                    <div>
                        <span class="forgot">Forgot Your Password ? </span><span class="Reset cursor bold">Reset</span>
                    </div>
                    <div class="sb google_or_facebook">
                        <div>Or login with</div>
                        <div class="cursor">Google</div>
                        <div class="cursor">Facebook</div>
                        <div class="cursor">Twitter</div>
                    </div>
                </div>
            </div>
            <div class="width30 formWrap flex" v-show="!active">
                <div class="al signBack cursor" @click="active = true"><img src="@/assets/img/signBack.png" alt=""></div>
                <div class="identity_wrap">
                    <div class="identity">
                        <div class="text">Signup</div>
                        <div class="ju tc">
                            <div :class="['id_user', { choose: identity == 'User' }]"
                            @click="identity = 'User'">User</div>
                            <div :class="['id_company', { choose: identity == 'Company' }]"
                            @click="identity = 'Company'">Company</div>
                        </div>
                    </div>
                    <div class="input_wrap signPage1">
                        <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-position="top">
                            <el-form-item label="Name" prop="name">
								<el-input
                                    placeholder="Name"
                                    show-password
                                    v-model="ruleForm1.name">
                                </el-input>
							</el-form-item>
							<el-form-item prop="email"
                            :label="identity == 'User'? 'Email/ Phone Number': 'Email'">
								<el-input
                                    show-password
                                    v-model="ruleForm1.email">
                                </el-input>
							</el-form-item>
                            <el-form-item label="Password" prop="pwd">
								<el-input
                                    show-password
                                    v-model="ruleForm1.pwd">
                                </el-input>
							</el-form-item>
                            <el-form-item label="Verification Code" prop="ver" style="position: relative;">
                                <div class="getVer al cursor">Send Verification Code</div>
								<el-input
                                    v-model="ruleForm1.ver">
                                </el-input>
							</el-form-item>
                            <el-form-item>
								<div class="al line_height">
                                    <div><input class="checkbox" type="checkbox"></div>
                                    <div class="text1">By creating an account, you agreed our</div>
                                </div>
                                <div class="text2">　　 Terms & Conditions</div>
							</el-form-item>
						</el-form>
                        <div class="signBtnWrap">
                            <div class="signButton tc mg">
                                Signup
                            </div>
                            <div class="shadow">0</div>
                        </div>
                        <div class="width85 mg">
                            <span class="forgot">Already have an account ? </span>
                            <span class="Reset cursor bold">Sign in</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loginBackWrap width70">
                <img src="@/assets/img/loginBack.png" alt="">
            </div>
        </div>
        <Floor></Floor>
    </div>
</template>

<script>
export default {
    data () {
        return {
            identity: 'User',
            active: true,
            ruleForm: {
                user: '',
                pwd: '',
            },
            rules: {
                user: [
                    { required: true, message: '請輸入廣告名稱', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: 'Please enter password', trigger: 'blur' }
                ],
            },
            ruleForm1: {
                name: '',
                email: '',
                pwd: '',
                ver: ''
            },
            rules1: {
                name: [
                    { required: true, message: 'Please enter a name', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'please input your email', trigger: 'blur' }
                ],
                pwd: [
                    { required: true, message: 'Please enter password', trigger: 'blur' }
                ],
                ver: [
                    { required: true, message: 'Please enter Verification', trigger: 'blur' }
                ],
            },
        }
    },
    mounted () {
        
    },
    methods: {
        
    }
}
</script>

<style lang='less' scoped>
    @import "@/less/style.less";
    @import "./css.less";
</style>