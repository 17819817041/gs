<style lang="less" scoped>
    @import "@/less/css.less";
    .support {
        flex: 10;
        height: 100%;
    }
    .support_content {
        width: 100%;
        height: calc(100% - 109px);
        overflow: auto;
        background: @content;
        @media screen and (max-width: 564px) {
            height: calc(100% - 70px);
        }
    }
    .showMessage {
        width: 100%;
        height: 100%;
        .support_type, .support_title {
            margin: 10px 0;
            padding: 0 20px;
        }
    }
    .support_type {
        width: 100%;
        overflow: auto;
        height: 80%;
    }
    .support_item {
        width: 277px;
        background: white;
        overflow: auto;
        padding: 0 15px;
        @media screen and (max-width: 800px) {
            display: none;
        }
    }
    .center {
        background: @support;
    }
    .second, .last {
        background: @helpBtn;
        display: block;
        padding: 17px 0px;
        border-radius: 15px;
        overflow: hidden;
        margin: 15px 0;
    }
    .support_introduce {
        width: calc(100% - 320px);
        background:rgb(255, 255, 255);
        margin-left: 10px;
        color: @support;
        @media screen and (max-width: 800px) {
            margin-left: 0px;
            width: 100%;
        }
    }
    .link {
        display: block;
        padding: 17px 0px;
        border-radius: 15px;
        overflow: hidden;
        margin: 15px 0;
    }
    .dot {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        overflow: hidden;
    }
    .navMenu {
        display: none;
        @media screen and (max-width: 800px) {
            display: block;
        }
    }
    .dot_h {
        width: 16px;
        height: 16px;
    }
</style>

<template>
    <div class="support">
        <div class="header">
            <myHeader></myHeader>
        </div>
        <div class="support_content flex noBar">
            <div class="showMessage">
                <div class="support_title">
                    <div class="al">
                        <div class="al">
                            <img src="@/assets/img/what.png" alt="">
                        </div>
                        <div class="explan bold"> Help & Suppot </div>
                    </div>
                </div>
                <div class="mg navMenu" style="padding: 0 20px">
                    <myNav :list="nav" :active="0" :num="6"> </myNav>
                </div>
                <div class="support_type noBar flex">
                    <div class="support_item noBar tc">
                        <router-link class="cursor bold second" to="" style="color:#686760;text-decoration: none">Top Questions</router-link>

                        <router-link class="cursor bold link white center" to="/RegistrationAndLogin_outline" style="color: white;width: 100%;text-decoration: none">Registration and Login</router-link>
                    
                        <router-link class="cursor bold link white center" to="" style="color: white;width: 100%;text-decoration: none">Petavi First Aid</router-link>
                    
                        <router-link class="cursor bold link white center" to="" style="color: white;width: 100%;text-decoration: none">Setting</router-link>
                    
                        <router-link class="cursor bold link white center" to="" style="color: white;width: 100%;text-decoration: none">Payment</router-link>
                    
                        <router-link class="cursor bold link white center" to="" style="color: white;width: 100%;text-decoration: none">Terms & Conditions</router-link>
                    
                        <router-link class="cursor bold link white center" to="" style="color: white;width: 100%;text-decoration: none">Other</router-link>
                    </div>
                    <div class="support_introduce">
                        <router-view></router-view>
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
            nav: [ {name:'Top Questions'}, {name:'Registration and Login', path: '/RegistrationAndLogin'}, {name:'Petavi First Aid'}, {name:'Setting'}, {name:'Payment'}, 
            {name:'Terms & Conditions'}, {name:'Other'}, {name:'Chat with Admin'} ]
        }
    },
    created () {
        
    },
    watch: {
      
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>

