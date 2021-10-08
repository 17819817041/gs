<template>
    <div class="changePwd">
        <div class="header">
            <div :class="['logo']">
                <div class="drawer_list_wrap">
                    <img class="logo_IMG" src="@/assets/img/logo.png" alt="">
                </div>
            </div>
            <div class="helpBtn al ju">
                <div class="al">
                    <img src="@/assets/img/what.png" alt="">
                </div>
                <div class="suppot size12"> Help & Suppot </div>
            </div>
        </div>
        <div class="content">
            <div class="img_wrap ju">
                <img src="@/assets/img/ic_success.svg" alt="">
            </div>
            <div class="failToken">
                <div style="margin-top: 50px;">
                    <h3 class="tc">Successfully modified!</h3>
                    <h6 class="tc" style="color: gray">Please try again later</h6>
                </div>
                <div style="margin-top:90px;width:70%" class="mg">
                    <a class="tc" href="https://petavi.top">OK,THANKS!</a>
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
        
    }
}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .header {
        @media screen and (max-width:564px) {
            height: 70px;
        }
        width: 100%;
        height: 109px;
        background: @hdColor;
        position: relative;
        .helpBtn {
            @media screen and (max-width:564px) {
                padding: 0 3px;
                height: 30px;
                bottom: 1px;
            }
            position: absolute;
            right: 9px;
            bottom: 12px;
            padding: 0 3px;
            width: 120px;
            height: 40px;
            border-radius: 30px;
            background: @helpBtn;
        }
    }
    .content {
        width: 30%;
        min-width: 470px;
        border-radius: 15px;
        margin: 100px auto;
    }
    .pwdInput {
        margin-top: 17px ;
    }
    a {
        display: block;
        padding: 15px 0;
        text-decoration: none;
        color: white;
        border-radius: 12px;
        background: #FF0000;
    }
    .logo {
            background: rgb(255, 255, 255);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 600;
            padding: 15px 30px 0 62px;
            transition: 0.2s;
            @media screen and (max-width:950px) {
                transform: translate(-180px,0);
            }
            @media screen and (max-width: 564px) {
                height: 70px;
                padding: 10px 10px 0 10px;
            }
        }
        .logo .logo_IMG {
            width: 110px;
            height: 123px;
            transition: 0.2s;
            z-index: 500;
            @media screen and (max-width: 1300px) {
                width: 88px;
                height: 98px;
            }
            @media screen and (max-width: 564px) {
                width: 50px;
                height: 60px;
            }
        }
</style>