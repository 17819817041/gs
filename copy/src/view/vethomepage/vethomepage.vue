<style lang="less" scoped>
    @import "@/less/css.less"; 
    .vetHome {
        height: 100%;
        position: relative;
    }
    .background {
            position: absolute;
            left: 0;
            width: calc(100%);
            height: calc(100%);
            z-index: 900;
            background: gray;
            opacity: 0.5;
        }
    .person {
        width: 100%;
        height: calc(100% - 119px);
        overflow: auto;
    }
    .pet_list {
        height: 100%;
        flex: 10;
        overflow: auto;
    }
    .VetMessage {
        height: 100%;
        overflow: auto;
    }
</style>

<template>
    <div class="vetHome">
        <div v-show="showback" class="background" @click="closeback"></div>
        <div>
            <myHeaderL></myHeaderL>
        </div>
        <div class="person flex">
            <div class="VetMessage noBar"><vetMessage></vetMessage></div>
            <div class="pet_list flex noBar">
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
    computed: {
        showback () { return this.$store.state.user.showback },
    },
    methods: {
        closeback () {
            this.$store.commit("setUser", {
                key: "showback",
                value: false
            })
        },
    }
}
</script>

