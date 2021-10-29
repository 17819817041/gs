<template>
    <div class="Index flex">
        <div :class="['menu']">
            <Menu ref="menu"></Menu>
        </div>
        <div class="content noBar">
            <div class="header">
                <div class="list"><img class="cursor" src="@/assets/img/listview.png" @click="showMenu" alt=""></div>
                <Header @getback='fn'></Header>
            </div>
            <div class="router_view">
                <router-view></router-view>
            </div>
        </div>

        <el-drawer
            :visible.sync="drawer"
            :direction="direction"
            size='290px'>
            <Menu></Menu>
        </el-drawer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            drawer: false,
            direction: 'ltr',
        }
    },
    // beforeMount() {
    //     window.addEventListener('resize', (e) => {
    //         if (e.target.innerWidth <= 1150) {
    //             this.active = true
    //         } else {
    //             this.active = false
    //         }
    //     })
    // },
    methods: {
        showMenu () {
            this.drawer = !this.drawer
        },
        fn () {
            this.$refs.menu.menuName()
        }
    }
}
</script>

<style lang="less" scoped>
    .Index {
        height: 100%;
    }
    .menu {
        height: 100%;
        max-width: 290px;
        min-width: 290px;
        transition: 0.2s;
        overflow: hidden;
        @media screen and (max-width: 1150px) {
            width: 0 !important;
            min-width: 0 !important;
            max-width: 0 !important;
        }
    }
    .menu_drawer2 {
        position: fixed;
        left: 0;
        top: 0;
        max-width: 0px !important;
        min-width: 0px !important;
        width: 0px !important;
    }
    .header {
        position: relative;
        .list {
            position: absolute;
            z-index: 10;
            top: 30px;
            left: 15px;
            display: none;
            @media screen and (max-width: 1150px) {
                display: block;
            }
        }
        .list img {
            width: 30px;
        }
    }
    .content {
        padding: 0 20px;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>