<style lang="less" scoped>
@import "@/less/css.less";
    .Login_content {
        @media screen and (max-width:564px) {
            width: 90%;
            margin: auto;
        }
    }
    .white {
        color: white;
    }
    .Logo {
        width: 100%;
        margin-top: 150px;
        img {
            width: 135px;
            height: 163px;
        }
    }
    .appIntroduce {
        color: #7C7D7E;
        margin-top: 40px;
        div {
            padding: 1px 0;
        }
    }
    .loginBtn {
        margin-top: 30px;
    }
    .toLogin {
        width: 700px;
        .customerLogin , .vetLogin, .createAccount {
            border-radius: 6px;
            margin-bottom: 20px;
        }
        .customerLogin {
            background: @hdColor;
            position: relative;
        }
        .bone {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translate(0,-40%);
        }
        .createAccount {
            color: @hdColor !important;
        }
    }
</style>

<template>
    <div class="login">
        <div class="header">
            <myHeader></myHeader>
        </div>
        <div class="Login_content">
            <div class="Logo ju">
                <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="appIntroduce tc size12">
                <div>The World'1st Integrated telepresence</div>
                <div>PET AVATAR LIFESTYLE PLATFORM</div>
            </div>
            <div class="loginBtn ju">
                <div class="toLogin tc">
                    <div class="customerLogin cursor white" @click="customerLogin">
                        <el-button class="width100" type="primary" :loading="customerloading">Customer Login</el-button>
                        <div class="bone" @click="customerLogin">
                            <img src="@/assets/img/bone.png" alt="">
                        </div>
                    </div>
                    <div class="vetLogin cursor white" @click="vetLogin">
                        <el-button class="width100" type="warning" :loading="vetloading">Vet Login</el-button>
                    </div>
                    <div class="createAccount cursor" @click="createAccount">
                        <el-button class="backWhite width100" type="primary" :loading="createloading">Create Account</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            customerloading: false,
            vetloading: false,
            createloading: false,
            
        }
    },
    created () {
        
    },
    methods: {
        customerLogin () {
            this.customerloading = true
            setTimeout(() => {
                this.$router.push("/customerLogin")
            },500)
            
        },
        vetLogin () {
            this.vetloading = true
            setTimeout(() => {
                this.$router.push('/vetLogin')
            },500)
            
        },
        createAccount () {
            this.createloading = true
            setTimeout(() => {
                this.$router.push({
                    name:'signUp'
                })
            },500)
        }
    }
}
</script>
