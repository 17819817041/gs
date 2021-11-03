<template>
    <div class="header">
        <div class="header_item sb">
            <div class="al"><img class="LOGO" src="@/assets/img/logo.png" alt=""></div>
            <div class="ju al">
                <!-- <div class="al"><img style="height: 20px;width: 17px;" src="@/assets/img/save.png" alt=""></div> -->
                <div class="headImg radius ju al">
                    <img style="height: 100%;" src="@/assets/img/growing.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .header {
        height: 50px;
        // margin-bottom: 20px;
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
        margin: 3px 15px;
    }
</style>