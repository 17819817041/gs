<template>
    <div class="header">
        <div class="Back" v-show="visible" @click="visible = false"></div>
        <div class="header_item sb">
            <div class="al"><img class="LOGO" @click="home" src="@/assets/img/logo.png" alt=""></div>
            <div class="ju al">
                <!-- <div class="al"><img style="height: 20px;width: 17px;" src="@/assets/img/save.png" alt=""></div> -->
                <div class="headImg radius ju al">
                    <img style="height: 100%;" src="@/assets/img/growing.jpg" alt="">
                </div>
                <div class="al my_wrap" slot="reference" @click="visible = !visible" style="height: 100%">
                    <img class="my cursor" src="@/assets/img/arrow-down_set.png" alt="">
                    <div class="userMsg tc" v-show="visible">
                        <div class="cursor" @click.stop="UserMessage">個人中心</div>
                        <div class="cursor" @click.stop="outLogin">登出</div>
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
            visible: false,
        }
    },
    mounted () {
        document.getElementsByClassName('Back')[0].style.width = window.innerWidth + 'px'
        document.getElementsByClassName('Back')[0].style.height = window.innerHeight + 'px'
    },
    methods: {
        home () {
            if (localStorage.getItem('platform') == 1) {
                this.$router.push('/Index')
            } else if (localStorage.getItem('platform') == 2) {
                this.$router.push('/platIndex')
            } else if (localStorage.getItem('platform') == 3) {
                this.$router.push('/AdminIndex')
            }
        },
        UserMessage () {
            this.$router.push('/UserMessage')
        },
        outLogin () {
            this.$router.push('/Login')
        }
    }
}
</script>

<style lang='less' scoped>
    .header {
        position: relative;
        height: 50px;
        .Back {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 9;
        }
    }
    .LOGO {
        height: 70px;
    }
    .header_item {
        padding: 5px 20px;
        height: 55px;
        background: white;
    }
    .headImg {
        width: 40px;
        height: 40px;
        margin-left: 7px;
        margin: 3px 5px;
    }
    .my {
        height: 20px;
        width: 20px;
        margin-right: 40px;
        @media screen and (max-width: 564px) {
            margin-right: 10px;
        }
    }
    .my_wrap {
        position: relative;
        .userMsg {
            position: absolute;
            padding: 5px;
            top: 50px;
            right: 0;
            background: white;
            z-index: 10;
            width: 109px;
            border-radius: 3px;
            border: solid 1px rgb(185, 185, 185);
            box-shadow: 0 3px 15px rgb(182, 182, 182);
        }
        .userMsg>div {
            padding: 7px 0;
            color: gray;
            font-size: 13px;
        }
        .userMsg>div:hover {
            background: #F5F5F5;
        }
    }
</style>