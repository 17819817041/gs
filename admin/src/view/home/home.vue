<style lang="less" scoped>
@import "@/less/css.less";
    .customerhomepage {
        height: 100%;
        .list_wrap {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 600;
        }
    }
    .pet_message {
        flex: 10;
        padding-top: 10px;
        // border: solid red 1px;
        height: 100%;
        overflow: auto;
    }
    .present_message {
        height: 100%;
        overflow: auto;
        background: white;
        z-index: 500;
    }
    .customer_content {
        width: 100%;
        box-sizing: border-box;
        height: calc(100% - 119px);
        position: relative;
        overflow: auto;
    }
</style>

<template>
    <div class="customerhomepage">
        <div><Header></Header></div>
        <div class="customer_content noBar flex">
            <div class="present_message noBar">
                <Message></Message>
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
    watch: {
       
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>

