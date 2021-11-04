<template>
    <div class="home">
        <Header></Header>
        <div class="h_content">
            <router-view></router-view>
        </div>
        <div class="footer al">
            <img class="platformLogo" src="@/assets/img/guanggao.png" alt="">XXX{{plat}}v1.0
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            plat: localStorage.getItem('plat')
        }
    }
}
</script>

<style lang='less' scoped>
    .home {
        height: 100%;
    }
    .h_content {
        height: calc(100% - 119px);
    }
    .footer {
        padding: 10px 10px;
        width: 100%;
        // position: fixed;
        // bottom: 0;
        // background: white;
    }
    .platformLogo {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
</style>