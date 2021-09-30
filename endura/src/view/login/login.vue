<style lang="less" scoped>
@import "@/less/css.less";
    .Login_content {
        @media screen and (max-width: 800px) {
            width: 95%;
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
            height: 163px;
        }
    }
    .loginBtn {
        margin-top: 50px;
    }
    .toLogin {
        max-width: 700px;
        width: 100%;
        .customerLogin , .vetLogin, .createAccount {
            border-radius: 6px;
            margin-bottom: 20px;
        }
        .customerLogin {
            background: @hdColor;
            position: relative;
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
                <img src="@/assets/img/ENDURA.png" alt="">
            </div>
            <div class="loginBtn ju">
                <div class="toLogin tc">
                    <div class="customerLogin cursor white" @click="customerLogin">
                        <el-button class="width100" type="primary">Customer Login</el-button>
                    </div>
                    <div class="vetLogin cursor white" @click="vetLogin">
                        <el-button class="width100" type="warning" >Doctor Login</el-button>
                    </div>
                    <div class="createAccount cursor" @click="createAccount">
                        <el-button class="backWhite width100" type="primary" >Create Account</el-button>
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

        }
    },
    created () {
        
    },
    methods: {
        customerLogin () {
            localStorage.setItem("platform",1)
            this.$router.push("/customerLogin") 
        },
        vetLogin () {
            localStorage.setItem("platform",2)
            this.$router.push('/vetLogin')
        },
        createAccount () {
            this.$router.push({
                name:'signUp'
            })
        }
    }
}
</script>
