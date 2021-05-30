<style lang="less" scoped>
@import "@/less/css.less";
    .customerhomepage {
        height: 100%;
    }
    .customer_content {
        width: 100%;
        box-sizing: border-box;
        height: calc(100% - 119px);
        // border:  solid green;
        
    }
    .pet_message {
        flex: 10;
        padding-top: 10px;
        // border: solid red 1px;
        height: 100%;
        overflow: auto;
    }
    .present_message {
        // border: solid red 1px;
        height: 100%;
        overflow: auto;
    }
</style>

<template>
    <div class="customerhomepage">
        <div><myHeaderL></myHeaderL></div>
        <div class="customer_content flex">
            <div class="present_message noBar">
                
                <message></message>

            </div>
            <div class="pet_message noBar">
                <router-view></router-view>
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

