<template>
    <div class="header">
        <div class="header_item sb">
            <div class="al"><img class="LOGO" @click="home" src="@/assets/img/logo.png" alt=""></div>
            <div class="ju al">
                <!-- <div class="al"><img style="height: 20px;width: 17px;" src="@/assets/img/save.png" alt=""></div> -->
                <div class="headImg radius ju al">
                    <img style="height: 100%;" @click="kkk" src="@/assets/img/growing.jpg" alt="">
                </div>
                <!-- <div class="al cursor" style="height: 100%"><img style="height: 20px;width: 20px;margin-right: 40px;" src="@/assets/img/arrow-down_set.png" alt=""></div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        
    },
    methods: {
        home () {
            if (localStorage.getItem('platform') == 1) {
                this.$router.push('/Index')
            } else if (localStorage.getItem('platform') == 2) {
                this.$router.push('/platIndex')
            } else if (localStorage.getItem('platform') == 3) {
                this.$router.push('/AdminIndex')
            }
        },
        kkk () {
            this.$router.push('/kkk')
        }
    }
}
</script>

<style lang='less' scoped>
    .header {
        height: 50px;
    }
    .LOGO {
        height: 70px;
    }
    .header_item {
        padding: 5px 20px;
        height: 55px;
        background: white;
    }
    .headImg {
        width: 40px;
        height: 40px;
        margin-left: 7px;
        margin: 3px 5px;
    }
</style>