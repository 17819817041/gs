<style lang="less" scoped>
    @import "@/less/css.less";
    .support {
        flex: 10;
        height: 100%;
    }
    .support_content {
        width: 100%;
        height: 100%;
        overflow: auto;
        background: @content;
    }
    .showMessage {
        width: 100%;
        height: 100%;
        .support_type, .support_title {
            margin: 10px 0;
            padding-left: 20px;
        }
    }
    .support_type {
        width: 100%;
        overflow: auto;
        height: 80%;
    }
    .support_item {
        background: white;
        overflow: auto;
    }
    .support_item div {
        padding: 17px 25px;
        border-radius: 12px;
        margin: 15px 15px;
    }
    .center {
        background: @support;
    }
    .second, .last {
        background: @helpBtn;
        color: #686760;
    }
    .support_introduce {
        width: calc(100% - 320px);
        background:rgb(255, 255, 255);
        margin-left: 10px;
        color: @support;
    }
</style>

<template>
    <div class="support">
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
                <div class="support_type noBar flex">
                    <div class="support_item noBar tc">
                        <div class="cursor bold second">
                            <router-link to="" style="color:#686760;text-decoration: none">Top Questions</router-link>
                        </div>
                        <div class="cursor bold white center">
                            <router-link to="/RegistrationAndLogin" style="color: white;width: 100%;text-decoration: none">Registration and Login</router-link>
                        </div>
                        <div class="cursor bold white center"> 
                            <router-link to="" style="color: white;width: 100%;text-decoration: none">Petavi First Aid</router-link>
                        </div>
                        <div class="cursor bold white center">
                            <router-link to="" style="color: white;width: 100%;text-decoration: none">Setting</router-link>
                        </div>
                        <div class="cursor bold white center">
                            <router-link to="" style="color: white;width: 100%;text-decoration: none">Payment</router-link>
                        </div>
                        <div class="cursor bold white center">
                            <router-link to="" style="color: white;width: 100%;text-decoration: none">Terms & Conditions</router-link>
                        </div>
                        <div class="cursor bold white center">
                            <router-link to="" style="color: white;width: 100%;text-decoration: none">Other</router-link>
                        </div>
                        <div class="cursor bold last">
                            <router-link to="/chat" style="color:#686760;text-decoration: none">Chat with Admin</router-link>
                        </div>
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
            
        }
    },
    methods: {
        
    }
}
</script>

