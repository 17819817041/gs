<style lang="less" scoped>
    @import "@/less/css.less";
    .support {
        flex: 10;
    }
    .support_content {
        width: 100%;
        margin-top: 15px;
    }
    .showMessage {
        width: 100%;
        background: @content;
        .support_type, .support_title {
            margin: 10px 0;
            padding-left: 20px;
        }
    }
    .support_type {
        width: 100%;
    }
    .support_item {
        background: white;
    }
    .support_item div {
        width: 200px;
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
        height: 100%;
        width: calc(100% - 320px);
        background:rgb(255, 255, 255);
        height: 505px;
        margin-left: 10px;
        color: @support;
    }
</style>

<template>
    <div class="support">
        <div class="support_content flex">
            <div class="showMessage">
                <div class="support_title">
                    <div class="al">
                        <div class="al">
                            <img src="@/assets/img/what.png" alt="">
                        </div>
                        <div class="explan bold"> Help & Suppot </div>
                    </div>
                </div>
                <div class="support_type flex">
                    <div class="support_item tc">
                        <div class="cursor bold second">Top Questions</div>
                        <div class="cursor bold white center">Registration and Login</div>
                        <div class="cursor bold white center">Petavi First Aid </div>
                        <div class="cursor bold white center">Setting</div>
                        <div class="cursor bold white center">Payment</div>
                        <div class="cursor bold white center">Terms & Conditions</div>
                        <div class="cursor bold white center">Other</div>
                        <div class="cursor bold last" @click="change">Chat with Admin</div>
                    </div>
                    <div class="support_introduce">
                        <div v-if="message">
                            <h1 style="padding-left:40px">Registration and Login Petavi Account</h1>
                            <h2 style="padding-left:70px">How to registration Petavi Account?</h2>
                            <div style="padding-left:70px">
                                You can XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
                                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
                                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                            </div>
                        </div>
                        <div v-else>
                            <router-view></router-view>
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
            message:true
        }
    },
    methods: {
        change () {
            this.message = !this.message
        }
    }
}
</script>

