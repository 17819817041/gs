<style lang="less" scoped>
@import "@/less/css.less";
    .customer_content {
        width: 100%;
        box-sizing: border-box;
    }
    .pet_message {
        flex: 10;
        margin-top: 10px;
    }
</style>

<template>
    <div class="customerhomepage">
        <div><myHeaderL :active="active"></myHeaderL></div>
        <div class="customer_content flex">
            <div class="present_message">
                
                <message></message>

            </div>
            <div class="pet_message flex">
                <router-view></router-view>
            </div>
            
        </div>
    </div>
</template>

<script>
import { getUserDetails } from "@/axios/request.js"
export default {
    data () {
        return {
            active:true,
            data: {
                userId: "430",
                platform: 1,
                token: localStorage.getItem("Token")
            }
        }
    },
    created () {
        // this.data.userId = String(this.$route.query.userId)
        console.log(this.$route.query.userId)
        this.getUserDetails()
    },
    methods: {
        getUserDetails () {
            getUserDetails(this.data).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

