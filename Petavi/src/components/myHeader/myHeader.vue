<template>
    <div class="header">
        <div class="helpBtn al ju">
            <div class="al">
                <img src="@/assets/img/what.png" alt="">
            </div>
            <div class="suppot size12"> Help & Suppot </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .header {
        @media screen and (max-width:564px) {
            height: 70px;
        }
        width: 100%;
        height: 100px;
        background: @hdColor;
        position: relative;
        .helpBtn {
            @media screen and (max-width:564px) {
                padding: 0 3px;
                height: 30px;
                bottom: 1px;
            }
            position: absolute;
            right: 9px;
            bottom: 12px;
            padding: 0 3px;
            width: 120px;
            height: 40px;
            border-radius: 30px;
            background: @helpBtn;
        }
    }
</style>