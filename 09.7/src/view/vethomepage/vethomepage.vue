<style lang="less" scoped>
@import "@/less/css.less";
    .customerhomepage {
        height: 100%;
        .list_wrap {
            position: absolute;
            opacity: 0.5;
            left: 0;
            top: 0;
            width: 100%;
            height: calc(100% + 119px);
            z-index: 600;
            transform: translate(0,-119px);
        }
        .background {
            position: absolute;
            top: -119px;
            left: 0;
            width: calc(100%);
            height: calc(100% + 119px);
            z-index: 900;
            background: gray;
            opacity: 0.5;
        }
        .background_mobile {
            position: absolute;
            top: -119px;
            left: 0;
            width: calc(100%);
            height: calc(100% + 119px);
            z-index: 900;
            background: rgb(0, 0, 0);
            opacity: 0.3;
            display: none;
            @media screen and (max-width:800px) {
                display: block;
            }
        }
    }
    .present_message {
        background: white;
        z-index: 500;
        height: 100%;
        overflow: auto;
        transition: 0.2s;
        @media screen and (max-width:950px) {
            background: white;
            position: fixed;
            top: 90px;
            left: 0;
            border-right: rgb(236, 236, 236) solid 1px;
            width: 180px;
            transform: translate(-180px,0);
            height: 100%;
            // opacity: 0;
        }
    }
    .customer_content {
        width: 100%;
        box-sizing: border-box;
        height: calc(100% - 119px);
        // border:  solid green;
        position: relative;
        @media screen and (max-width:1300px) {
            height: calc(100% - 90px);
        }
    }
    .pet_message {
        flex: 10;
        // padding-top: 10px;
        // border: solid red 1px;
        height: 100%;
        overflow: auto;
    }
    .drawer_width {
        transform: translate(0px,0) !important;
    }
    .height {
        max-height: 200px !important;
        border: solid 1px #C9C9C9;
        overflow: auto;
    }
    .list_item {
        display: block;
        width: 96%;
        padding: 2px;
        margin: 10px auto;
        color: #C9C9C9;
        padding-bottom: 5px;
        border-bottom: solid 1px #C9C9C9;
    }
    .list_item:hover {
        background: #f5f4f4;
    }
    .rotate {
        transform: rotateZ(-180deg);
    }
    // .rotate1 {
    //     transform: rotateZ(-180deg);
    // }
    .fade-enter-active, .fade-leave-active {
		transition: opacity 0.1s;
	}
	.fade-enter, .leave-active {
		opacity: 0;
	}
</style>

<template>
    <div class="customerhomepage">
        <div><myHeaderL></myHeaderL></div>
        <div class="customer_content flex">
            <div v-show="showback" class="background" @click="closeback"></div>
            <transition name="fade"><div v-show="mobile_b" class="background_mobile" @click="mobile_background"></div></transition>
            <div  :class="['present_message noBar',{ drawer_width: drawer }]">
                <vetMessage></vetMessage>
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
            Hide: true,
            pageNum: 0,
            pageSize: 100,
            pet: {}
        }
    },
    created () {
        
    },
    watch: {
        
    },
    computed: {
        drawer () { return this.$store.state.user.rotate },
        showback () { return this.$store.state.user.showback },
        mobile_b: {
            get () { return this.$store.state.user.mobile_b },
            set (val) {
                this.$store.commit("setUser", {
                    key: "mobile_b",
                    value: val
                })
            }
        },
    },
    methods: {
        closeback () {
            this.$store.commit("setUser", {
                key: "showback",
                value: false
            })
        },
        mobile_background () {
            this.$store.commit('setUser', { key: 'mobile_b', value: !this.mobile_b })
        },
    }
}
</script>

