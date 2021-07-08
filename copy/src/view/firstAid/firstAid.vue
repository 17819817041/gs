<template>
    <div class="firstAid al ju">
        <div class=" first_item">
            <div class="firstAid_title tc">EMERGENCY FIRST AID CALL</div>
            <div class="choose tc">Choose the Pet</div>
            <div class="sb first_pet">
                <div><img class="cursor" src="@/assets/img/petImage.png" alt=""></div>
                <div><img class="cursor" src="@/assets/img/petImage1.png" alt=""></div>
                <div><img class="cursor" src="@/assets/img/other.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "@/less/css.less";
    .firstAid {
        flex: 10;
        height: 100%;
        .firstAid_title {
            font-size: 45px;
            font-weight:bold;
            color: #707070;
        }
        .choose {
            font-size: 25px;
            color: #4A4B4D;
            padding: 50px 0;
        }
    }
    .first_item {
        width: 1300px;
    }
    .first_pet {
        div {
            border-radius: 50%;
            overflow: hidden;
        }
    }
</style>