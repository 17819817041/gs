<style lang="less" scoped>
    @import "@/less/css.less"; 
    .person {
        width: 100%;
    }
    .pet_list {
        flex: 10;
    }
</style>

<template>
    <div class="vetHome">
        <div>
            <myHeaderL></myHeaderL>
        </div>
        <div class="person flex">
            <div><vetMessage></vetMessage></div>
            <div class="pet_list flex">
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
    methods: {
        
    }
}
</script>

