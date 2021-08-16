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
        .customerLogin {
            border-radius: 6px;
            margin-bottom: 20px;
        }
        .customerLogin {
            background: @ThemeColor;
            position: relative;
        }
        .bone {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translate(0,-40%);
        }
        .createAccount {
            color: @ThemeColor !important;
        }
    }
    
</style>

<template>
    <div class="login">
        <div class="header">
            <Header :active="active"></Header>
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
                    <div class="customerLogin cursor white">
                        <el-button class="width100" type="primary" @click="index">Admin Login</el-button>
                        <div class="bone">
                            <img src="@/assets/img/bone.png" alt="">
                        </div>
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
            active: true,
        }
    },
    created () {
       
    },
    watch: {
        login: {
            handler (val) {
                this.login = false
            },
            immediate: true
        }
    },
    computed: {
        login: {
            get () { return this.$store.state.user.login },
            set (val) {
                this.$store.commit("setUser", {
                    key: "login",
                    value: val
                })
            },
        }
    },
    methods: {
        index () {
            this.$router.push('/index')
        }
    }
}
</script>
